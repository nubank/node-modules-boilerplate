import React from 'react';
import ReactDOM from 'react-dom';

import myWidget from 'my-rollup-widget';

const App = () => {
  return <div>Oi Sample</div>;
}

console.log(document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
