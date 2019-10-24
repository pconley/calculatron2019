import Component from '@ember/component';

var value = 0;
var operation;
var register = null;
var places = 0;

export default Component.extend({
  decimalDisabled: false,
  functionsDisabled: false,
  clearOnNextDigit: false,
  actions: {
    clickOperation(oper) {
        console.log("oper", oper, register, value)
        operation = oper;
        places = 0;
        this.set("decimalDisabled",false);
        this.clearOnNextDigit = true;
        this.set("functionsDisabled",true);
        register = value;
        this.set('register', register); // debug
        // display value (the model) remain on page
    },
    clickDigit(digit) {
      console.log("digit: ",value, digit);
      if( this.clearOnNextDigit ){
          value = 0;
          this.clearOnNextDigit = false
      }
      if( this.decimalDisabled ){
          // we are entering after the decimal poont
          places++;
          var fraction = digit * (10 ** -places);
          value += fraction;
          // js floating point sucks
          var text = value.toFixed(places);
          this.set('value', text);

      } else {
        value = 10*value + digit;
        this.set('value', value);
      }
    },
    clickClear(){
        value = 0;
        places = 0;
        this.set('value', 0);
        this.set("functionsDisabled",false);
        this.set("decimalDisabled",false);
    },
    clickNegate(){
        value *= -1;
        this.set('value', value);
    },
    clickPercent(){
        value *= 0.01;
        this.set('value', value);
    },
    clickDecimal(){
        this.set('value', value+".");
        this.set("decimalDisabled",true);
    },
    clickEquals(){
        console.log(value, operation, register)
        switch(operation) {
            case '+' : 
                value = register + value;
                break;
            case '-' : 
                value = register - value;
                break;
            case '*' : 
                value = register * value;
                break;
            case '/' : 
                value = register / value;
                break;
        }
        console.log(value)
        this.set('value', value);
        this.set('register', 0);
        this.clearOnNextDigit = true;
        this.set("functionsDisabled",false);
    }
  }
});
