/*
 * DeleteUserDialog Messages
 *
 * This contains all the text for the DeleteUserDialog component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.DeleteUserDialog.title',
    defaultMessage: 'Delete user',
  },
  question: {
    id: 'app.components.DeleteUserDialog.question',
    defaultMessage: 'Are you sure you want to delete "{user}"?',
  },
  submit: {
    id: 'app.components.DeleteUserDialog.submit',
    defaultMessage: 'Delete',
  },
  cancel: {
    id: 'app.components.DeleteUserDialog.cancel',
    defaultMessage: 'Cancel',
  },
});
