import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
        value: 0,
        register: null,
        // names: ['Marie Curie', 'Mae Jemison', 'Albert Hofmann']
    };
  }
});
