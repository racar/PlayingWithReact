import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkbox from './Checkbox';
import Menu from './menu';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
                  <App text="original">I am the first copy</App>
                  <Checkbox/>
                  <Menu count={101}/>
                  <App text="copy"/>
                </div>, document.getElementById('root'));
registerServiceWorker();
