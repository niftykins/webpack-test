// Polyfill ES6 for older browsers
import 'babel/polyfill';

// Methods for optimistic updates
import 'controllers/todo-methods';

import './routes';

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});
