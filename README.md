# Calculatron 2019 :

## Description

This is a "single register" calculator.  There are two values... the one that is shown to the user on the screen and one additional one that is stored in a register.  The general flow is as follows:

-- user enters a number by pressing successive digits

-- that number is accumulated in "value" and shown on the page

-- user can do some special functions to alter the number (% and -/+)

-- user presses a "function"... the value is copied into the register

-- note: the function is remembered as "operator" for below

-- note: the value remains (as other calculators seem to work)

-- note: the function keys are disable to stop double function press

-- user can use the existing number in value... or enter a new number

-- user presses "equal".  register and value are processed using operator

-- the result is shown in value and register is cleared

-- the state returns to "number entered state"


## Dependendcies

-- out of the box ember generated app

-- with the addition of bootstrap for formatting

-- there is only one component : calculator

-- all the serious code is in the calculator component

-- no controllers, helpers, etc.

-- no backend services... all the caculation are in the js

-- there is also a higher level template also called calculator

-- application >> calculator (template) >> calculator (component)

-- one route. so access is at http://localhost:4200/calculator

-- very little extra css was added. and is at /style/app/css

[I assume that you are better than I am at running an ember app, but the instructions below worked for me.]

## Appication Variable

This app uses 3 types of variables to store information (aka state) durring operations.  This is a little confusing and should be cleaned up as a better understanding of ember is aquired.  But...

-- in the model : is only used to transmit a couple of values though to the view

-- in the component : there are a few variables that are stored in the actual calculator component.  These too are available to the view.  When these are used by the view (it seems) that you MUST use set to change the value.  Makes sense so the view knows about the change.

-- in the javascript : there are some globals that are in the body of the calculator javascript (for no good reason).

## Application State

The MAIN state of the app is in the contents of "value", "register" and "operator".  Other various variables are used to control 1.) the state of the buttons, 2.) if we are entering decimal value and 3.) if the next entry should clear the input

## Below Here is the out-of-the box Ember generated read me.

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd example1`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
