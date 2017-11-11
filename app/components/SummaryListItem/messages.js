/*
 * SummaryListItem Messages
 *
 * This contains all the text for the SummaryListItem component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  from: {
    id: 'app.components.SummaryListItem.from',
    defaultMessage: 'from {date}',
  },
  to: {
    id: 'app.components.SummaryListItem.to',
    defaultMessage: 'To',
  },
  download: {
    id: 'app.components.SummaryListItem.download',
    defaultMessage: 'Download as .xlsx',
  },
  heat: {
    id: 'app.components.SummaryListItem.heat',
    defaultMessage: 'Heat: {price} {currency}/kWh',
  },
  hotWater: {
    id: 'app.components.SummaryListItem.hotWater',
    defaultMessage: 'Hot water: {price} {currency}/{cubicMeter}',
  },
  coldWater: {
    id: 'app.components.SummaryListItem.coldWater',
    defaultMessage: 'Cold water: {price} {currency}/{cubicMeter}',
  },
});
