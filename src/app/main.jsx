import React from 'react';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import ProductPage from './product-page';
import AppBar from 'material-ui/lib/app-bar';

const styles = {
  container: {
    
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar title="Goodsense CMS" />
          <ProductPage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
