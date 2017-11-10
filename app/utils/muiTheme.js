import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  grey50 as accent1Color,
  cyan200 as accent4Color,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color,
    accent4Color,
  },
});

export default muiTheme;
