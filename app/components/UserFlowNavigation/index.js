import styled from 'styled-components';
import { CardActions } from 'material-ui/Card';

const UserFlowNavigation = styled(CardActions)`
  display: flex;
  justify-content: space-between;

  & > a {
    margin: 0px !important;
  }
`;

export default UserFlowNavigation;
