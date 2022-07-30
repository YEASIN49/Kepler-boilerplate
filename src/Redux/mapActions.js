import { loadCustomMapStyle, receiveMapConfig } from 'kepler.gl/actions'
import { KeplerGlSchema } from 'kepler.gl/dist/schemas'
import config from '../config/mapConfig'



// Load Initial Custom Map with Two Default Styles such as OSM Liberty and Barikoi Dark
export async function loadInitialCustomMap() {
    // return dispatch => {
      console.log('called')
      // const mapStyle= {
      //   customConfig,
      //   styleType: 'barikoi_osm'
      // }
    //   const initialCustomMapConfig = initial_map_config
    //   const parsedInitialCustomMapConfig = KeplerGlSchema.parseSavedConfig(initialCustomMapConfig)
    //   dispatch( receiveMapConfig(parsedInitialCustomMapConfig) )
    const initialCustomMapConfig = config
    const parsedInitialCustomMapConfig = KeplerGlSchema.parseSavedConfig(initialCustomMapConfig)
    // dispatch( receiveMapConfig(parsedInitialCustomMapConfig) )
    return parsedInitialCustomMapConfig
  
      // Render Barikoi Attributions
    //   renderBarikoiAttributions()
    // }
  }