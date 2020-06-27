import React from 'react';
import './App.css';
import LeftPanel from './LeftPanel'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './reducers/userReducer';
import RightPanel from './RightPanel';

const store = createStore(userReducer);
function App() {
  return (
    <Provider store={store}>
    <div className="Container">
      <LeftPanel />
      <RightPanel />
    </div>
    </Provider>
  );
};

export default App;
