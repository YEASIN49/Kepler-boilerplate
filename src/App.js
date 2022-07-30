import React from 'react'
import { connect } from 'react-redux';
import KeplerGL from './Components/KeplerGL';


// sample-data
import sampleDataOne from './Sampla_data/sample_1'


const App = () => { 
  return (
    <div className='App'>
      <KeplerGL />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(App);
