import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  isDisabled: computed.empty('emailAddress')
});
