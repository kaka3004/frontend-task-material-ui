import React from 'react';
import {Paper} from 'material-ui';

const styles = {
  container: {
  	"margin-top": 20
  },
  paper: {
  	"padding": 10
  }
};

class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
  	return (
	  	<div style={styles.container}>
	  		<Paper style={styles.paper}>
	  			<h1>Manage products</h1>
	  			<p>Start working here ...</p>
  			</Paper>
	  	</div>
  	);
  }
}

export default ProductPage;