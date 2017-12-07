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
  leaderTitle: {
    id: 'app.containers.SignUpPage.leaderTitle',
    defaultMessage: 'Sign up as an estate manager',
  },
  leaderSubtitle: {
    id: 'app.containers.SignUpPage.leaderSubtitle',
    defaultMessage: 'Create an account as manager of an apartment complex',
  },
  memberTitle: {
    id: 'app.containers.SignUpPage.memberTitle',
    defaultMessage: 'Join your apartment community',
  },
  memberSubtitle: {
    id: 'app.containers.SignUpPage.memberSubtitle',
    defaultMessage: 'Create an account as a resident',
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
  success: {
    id: 'app.components.SignUpPage.success',
    defaultMessage: 'Thank you for signing up',
  },
  confirm: {
    id: 'app.components.SignUpPage.confirm',
    defaultMessage: 'Please confirm your email address',
  },
  confirmed: {
    id: 'app.components.SignUpPage.confirmed',
    defaultMessage: 'Are you ready?',
  },
  goToEmail: {
    id: 'app.components.SignUpPage.goToEmail',
    defaultMessage: 'Go to {email}',
  },
});
