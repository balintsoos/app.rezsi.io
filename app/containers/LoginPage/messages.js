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
  subtitle: {
    id: 'app.containers.LoginPage.subtitle',
    defaultMessage: 'Sign in to your existing account',
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
    defaultMessage: 'Incorrect email address or password',
  },
});
