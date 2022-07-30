import { createStore, combineReducers, applyMiddleware } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import { taskMiddleware } from "react-palm/tasks";
import customConfig from '../config/mapConfig'


function appReducer() {
	return {}
}
const initialState = {};

const keplerReducer = keplerGlReducer.initialState({
	uiState: {
		activeSidePanel: null,
		currentModal: null
	},
	// mapStyle: {
	// 	customConfig,
	// 	styleType: 'barikoi_osm'
	// }
});

const reducers = combineReducers({
	keplerGl: keplerReducer,
	app: appReducer
});


export default createStore(
	reducers,
	initialState,
	applyMiddleware(
		taskMiddleware
	)
)
