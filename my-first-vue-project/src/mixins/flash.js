// Mixins is like php traits
// whatever is created here will be mixed in with whatever calls it on its own page
import swal from 'sweetalert';
export default {
  methods: {
    flash(message) {
      return swal('Success!', message, 'success');
    }
  }

};