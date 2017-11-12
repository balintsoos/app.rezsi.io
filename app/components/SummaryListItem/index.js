/**
*
* SummaryListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import format from 'date-fns/format';

import { CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import HeatIcon from 'material-ui/svg-icons/notification/network-check';
import HotIcon from 'material-ui/svg-icons/social/whatshot';
import ColdIcon from 'material-ui/svg-icons/places/ac-unit';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import { grey200 as ChipColor } from 'material-ui/styles/colors';

import Card from 'components/Card';
import CubicMeter from 'components/CubicMeter';

import messages from './messages';

const styles = {
  firstChip: {
    marginTop: -16,
  },
  chip: {
    marginTop: 8,
  },
};

const date = (d) => format(d, 'YYYY MMM D');

function SummaryListItem(props) {
  return (
    <Card>
      <CardTitle
        actAsExpander
        showExpandableButton
        title={date(props.to)}
        subtitle={<FormattedMessage
          {...messages.from}
          values={{ date: date(props.from) }}
        />}
      />

      <CardText expandable>
        <Chip style={styles.firstChip} backgroundColor={ChipColor}>
          <Avatar icon={<HeatIcon />} />
          <FormattedMessage
            {...messages.heat}
            values={{
              price: props.heatPrice,
              currency: props.currency,
            }}
          />
        </Chip>

        <Chip style={styles.chip} backgroundColor={ChipColor}>
          <Avatar icon={<HotIcon />} />
          <FormattedMessage
            {...messages.hotWater}
            values={{
              price: props.hotWaterPrice,
              currency: props.currency,
              cubicMeter: <CubicMeter />,
            }}
          />
        </Chip>

        <Chip style={styles.chip} backgroundColor={ChipColor}>
          <Avatar icon={<ColdIcon />} />
          <FormattedMessage
            {...messages.coldWater}
            values={{
              price: props.coldWaterPrice,
              currency: props.currency,
              cubicMeter: <CubicMeter />,
            }}
          />
        </Chip>
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

SummaryListItem.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  heatPrice: PropTypes.number.isRequired,
  hotWaterPrice: PropTypes.number.isRequired,
  coldWaterPrice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default SummaryListItem;
