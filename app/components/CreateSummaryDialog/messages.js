/*
 * CreateSummaryDialog Messages
 *
 * This contains all the text for the CreateSummaryDialog component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'app.components.CreateSummaryDialog.title',
    defaultMessage: 'Create new bill',
  },
  submit: {
    id: 'app.components.CreateSummaryDialog.submit',
    defaultMessage: 'Create',
  },
  ok: {
    id: 'app.components.CreateSummaryDialog.ok',
    defaultMessage: 'Ok',
  },
  cancel: {
    id: 'app.components.CreateSummaryDialog.cancel',
    defaultMessage: 'Cancel',
  },
  fromHint: {
    id: 'app.components.CreateSummaryDialog.fromHint',
    defaultMessage: 'From',
  },
  toHint: {
    id: 'app.components.CreateSummaryDialog.toHint',
    defaultMessage: 'To',
  },
  currencyLabel: {
    id: 'app.components.CreateSummaryDialog.currencyLabel',
    defaultMessage: 'Currency',
  },
  currencyHint: {
    id: 'app.components.CreateSummaryDialog.currencyHint',
    defaultMessage: 'e.g. EUR, HUF',
  },
  hotWaterPriceLabel: {
    id: 'app.components.CreateSummaryDialog.hotWaterPriceLabel',
    defaultMessage: 'Hot water price',
  },
  hotWaterPriceHint: {
    id: 'app.components.CreateSummaryDialog.hotWaterPriceHint',
    defaultMessage: 'price / {cubicMeter}',
  },
  coldWaterPriceLabel: {
    id: 'app.components.CreateSummaryDialog.coldWaterPriceLabel',
    defaultMessage: 'Cold water price',
  },
  coldWaterPriceHint: {
    id: 'app.components.CreateSummaryDialog.coldWaterPriceHint',
    defaultMessage: 'price / {cubicMeter}',
  },
  heatPriceLabel: {
    id: 'app.components.CreateSummaryDialog.heatPriceLabel',
    defaultMessage: 'Heat price',
  },
  heatPriceHint: {
    id: 'app.components.CreateSummaryDialog.heatPriceHint',
    defaultMessage: 'price / kWh',
  },
});
