import React, { PureComponent } from 'react';
import { KeplerGl } from 'kepler.gl';
import { connect } from 'react-redux';

import sampleDataOne from '../Sampla_data/sample_1'
import { loadInitialCustomMap } from '../Redux/mapActions';
import { loadCustomMapStyle, receiveMapConfig, addDataToMap } from 'kepler.gl/actions'
import { KeplerGlSchema } from 'kepler.gl/dist/schemas'
import config from '../config/mapConfig'

class KeplerGL extends PureComponent {

	componentDidMount() {
		const { dispatch } = this.props
	
		 // Load Initial Map Configs
         loadInitialCustomMap()
         .then(res => {
            dispatch(receiveMapConfig(res))
            // console.log(res)
         })
         .catch(err => {

         })

		// const initialCustomMapConfig = config
		// const parsedInitialCustomMapConfig = KeplerGlSchema.parseSavedConfig(initialCustomMapConfig)
		// dispatch( receiveMapConfig(parsedInitialCustomMapConfig) )


	}

	
	render() {

		return (
			<KeplerGl
				id='map'
				width={window.innerWidth}
				height={window.innerHeight}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
				// mapStyles={customMapStyle}
				// mapStylesReplaceDefault={true} 
				appName={'keplerBoilerplate'}
			/>
		)
	}
}


const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(KeplerGL)