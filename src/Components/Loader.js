///import logo from './logo.svg';
//import './App.css';
import Skeleton from 'react-loading-skeleton';
import React from 'react';
function Loader() {
  return (
    <React.Fragment>
    <div className="App">
      <div style={{ fontSize: 20, lineHeight: 2 }}>
        <h1>{<Skeleton />}</h1>
        { <Skeleton count={10} />}
      </div>
    </div>
    </React.Fragment>
  );
}

export default Loader;