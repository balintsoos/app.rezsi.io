/*
 * CreateReportDialog Messages
 *
 * This contains all the text for the CreateReportDialog component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.CreateReportDialog.title',
    defaultMessage: 'Create new consumption report',
  },
  submit: {
    id: 'app.components.CreateReportDialog.submit',
    defaultMessage: 'Create',
  },
  cancel: {
    id: 'app.components.CreateReportDialog.cancel',
    defaultMessage: 'Cancel',
  },
  heat: {
    id: 'app.components.CreateReportDialog.heat',
    defaultMessage: 'Heat (kWh)',
  },
  hotWater: {
    id: 'app.components.CreateReportDialog.hotWater',
    defaultMessage: 'Hot water (cubic meter)',
  },
  coldWater: {
    id: 'app.components.CreateReportDialog.coldWater',
    defaultMessage: 'Cold water (cubic meter)',
  },
});
