import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import MyRollupWidget from 'my-rollup-widget';
import MyWebpackWidget from 'my-webpack-widget';

const App = () => {
  return (
    <Fragment>
      <MyRollupWidget />
      <MyWebpackWidget />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
