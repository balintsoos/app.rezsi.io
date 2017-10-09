/**
*
* GroupList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'material-ui/List';

import GroupListItem from 'components/GroupListItem';
import ListPlaceholder from 'components/ListPlaceholder';

function GroupList(props) {
  if (!props.groups.length && props.placeholder) {
    return (
      <ListPlaceholder>
        {props.placeholder}
      </ListPlaceholder>
    );
  }

  return (
    <List>
      {props.groups.map((group) => (
        <GroupListItem key={group.id} select={props.select} {...group} />
      ))}
    </List>
  );
}

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
  select: PropTypes.func,
  placeholder: PropTypes.node,
};

export default GroupList;
