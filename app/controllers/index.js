import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  isDisabled: true,
  emailAddress: '',

  isDisabled: computed('emailAddress', function() {
    return this.get('emailAddress') === '';
  })
});
