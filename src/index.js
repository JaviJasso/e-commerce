import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from "./components/BaseLayout"
import Boards from "./components/Boards"
import Destinations from "./components/Destinations"
import Kites from "./components/Kites"
import Contact from "./components/Contact"



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/boards" component={Boards} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/kites" component={Kites} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
