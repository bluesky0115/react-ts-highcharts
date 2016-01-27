import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'react-highcharts/dist/bundle/highcharts';
import ReactHighcharts from 'react-highcharts'; // Expects that Highcharts was loaded in the code.

import './App.less';

class App extends React.Component<any, any> {
	render() {
		let chartsConfig = {};

		return (
			<div>
				<h1>App title</h1>
				<div>App content</div>
				<ReactHighcharts config={chartsConfig}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);