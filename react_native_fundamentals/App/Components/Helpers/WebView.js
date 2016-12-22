var React = require("react");

import {
	View,
	WebView,
	StyleSheet
} from "react-native";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

class Web_View extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<WebView source={this.props.url} />
			</View>
		);
	}
}

Web_View.propTypes = {
	url: React.PropTypes.object.isRequired
};

module.exports = Web_View;