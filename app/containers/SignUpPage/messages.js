/*
 * SignUpPage Messages
 *
 * This contains all the text for the SignUpPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.containers.SignUpPage.title',
    defaultMessage: 'Sign Up',
  },
  subtitle: {
    id: 'app.containers.SignUpPage.subtitle',
    defaultMessage: 'Create a new account',
  },
  email: {
    id: 'app.containers.SignUpPage.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.containers.SignUpPage.password',
    defaultMessage: 'Password',
  },
  displayName: {
    id: 'app.containers.SignUpPage.displayName',
    defaultMessage: 'Name',
  },
  alreadySignedUp: {
    id: 'app.containers.SignUpPage.alreadySignedUp',
    defaultMessage: 'Already signed up?',
  },
  login: {
    id: 'app.components.SignUpPage.login',
    defaultMessage: 'Log In',
  },
  legal: {
    id: 'app.components.SignUpPage.legal',
    defaultMessage: 'By signing up, you agree to our terms of use and privacy policy.',
  },
});
