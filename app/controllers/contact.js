import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend({
  emailAddress: '',
  responseMessage: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  emailAndLengthValid: and('isValid', 'isLongEnough'),
  isDisabled: not('emailAndLengthValid'),

  actions: {
    sendMessage(){
      alert(`Message recieved from ${this.get('emailAddress')}`);
      this.set('responseMessage', `Message recieved we'll contact you shortly.`);
      this.set('emailAddress', '');
      this.set('message', '');
    },
    removeAlert(){
      this.set('responseMessage', '');
    }
  }
});
