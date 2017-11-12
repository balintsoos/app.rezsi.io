/**
*
* BillListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import format from 'date-fns/format';

import { CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';

import Card from 'components/Card';
import CubicMeter from 'components/CubicMeter';

import Table from './Table';

import messages from './messages';

const date = (d) => format(d, 'YYYY MMM D');

function BillListItem(props) {
  const data = [
    {
      item: 'heat',
      consumption: props.heatConsumption,
      price: props.summary.heatPrice,
      unit: 'kWh',
      currency: props.summary.currency,
    },
    {
      item: 'hotWater',
      consumption: props.hotWaterConsumption,
      price: props.summary.hotWaterPrice,
      unit: <CubicMeter />,
      currency: props.summary.currency,
    },
    {
      item: 'coldWater',
      consumption: props.coldWaterConsumption,
      price: props.summary.coldWaterPrice,
      unit: <CubicMeter />,
      currency: props.summary.currency,
    },
  ];

  return (
    <Card>
      <CardTitle
        actAsExpander
        showExpandableButton
        title={`${props.total} ${props.summary.currency}`}
        subtitle={<FormattedMessage
          {...messages.issued}
          values={{ date: date(props.createdAt) }}
        />}
      />
      <CardText expandable>
        <Table
          data={data}
          header={<FormattedMessage
            {...messages.header}
            values={{
              from: <b>{date(props.summary.from)}</b>,
              to: <b>{date(props.summary.to)}</b>,
            }}
          />}
          footer={<FormattedMessage
            {...messages.total}
            values={{
              total: `${props.total}`,
              currency: props.summary.currency,
            }}
          />}
        />
      </CardText>

      <Divider />

      <CardActions>
        <FlatButton
          primary
          label={<FormattedMessage {...messages.download} />}
          icon={<DownloadIcon />}
        />
      </CardActions>
    </Card>
  );
}

BillListItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  hotWaterConsumption: PropTypes.number.isRequired,
  coldWaterConsumption: PropTypes.number.isRequired,
  heatConsumption: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  summary: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    hotWaterPrice: PropTypes.number.isRequired,
    coldWaterPrice: PropTypes.number.isRequired,
    heatPrice: PropTypes.number.isRequired,
  }),
};

export default BillListItem;
