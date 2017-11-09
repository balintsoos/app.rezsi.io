/*
 * DeleteGroupDialog Messages
 *
 * This contains all the text for the DeleteGroupDialog component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.DeleteGroupDialog.title',
    defaultMessage: 'Delete group',
  },
  question: {
    id: 'app.components.DeleteGroupDialog.question',
    defaultMessage: 'Are you sure you want to delete "{group}"?',
  },
  submit: {
    id: 'app.components.DeleteGroupDialog.submit',
    defaultMessage: 'Delete',
  },
  cancel: {
    id: 'app.components.DeleteGroupDialog.cancel',
    defaultMessage: 'Cancel',
  },
});
