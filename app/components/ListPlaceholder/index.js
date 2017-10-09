import styled from 'styled-components';

import { grey600 as color } from 'material-ui/styles/colors';

const ListPlaceholder = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 25vh;

  & * {
    color: ${color} !important;
    fill: ${color} !important;
  }
`;

export default ListPlaceholder;
