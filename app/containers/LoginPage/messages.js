/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.LoginPage.title',
    defaultMessage: 'Log In',
  },
  email: {
    id: 'app.containers.LoginPage.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.containers.LoginPage.password',
    defaultMessage: 'Password',
  },
  error: {
    id: 'app.containers.LoginPage.error',
    defaultMessage: 'Invalid email address or password',
  },
});
