import React, { PureComponent } from 'react';
import { KeplerGl } from 'kepler.gl';

class KeplerGL extends PureComponent {
	render() {
		return (
			<KeplerGl
				id='map'
				width={window.innerWidth}
				height={window.innerHeight}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
				appName={'keplerBoilerplate'}
			/>
		)
	}
}

export default KeplerGL