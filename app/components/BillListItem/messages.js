/*
 * BillListItem Messages
 *
 * This contains all the text for the BillListItem component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.BillListItem.header',
    defaultMessage: 'Counted between {from} and {to}',
  },
  download: {
    id: 'app.components.BillListItem.download',
    defaultMessage: 'Download as .pdf',
  },
  heat: {
    id: 'app.components.BillListItem.heat',
    defaultMessage: 'Heat',
  },
  hotWater: {
    id: 'app.components.BillListItem.hotWater',
    defaultMessage: 'Hot water',
  },
  coldWater: {
    id: 'app.components.BillListItem.coldWater',
    defaultMessage: 'Cold water',
  },
  item: {
    id: 'app.components.BillListItem.item',
    defaultMessage: 'Item',
  },
  quantity: {
    id: 'app.components.BillListItem.quantity',
    defaultMessage: 'Quantity',
  },
  unitPrice: {
    id: 'app.components.BillListItem.unitPrice',
    defaultMessage: 'Unit Price',
  },
  amount: {
    id: 'app.components.BillListItem.amount',
    defaultMessage: 'Amount',
  },
});
