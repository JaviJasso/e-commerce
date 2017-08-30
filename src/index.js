import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from "./components/BaseLayout"
import Sup from "./components/Sup"
import SurfLongboard from "./components/SurfLongboard"


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/sup" component={Sup} />
        <Route path="/surflongboard" component={SurfLongboard} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
