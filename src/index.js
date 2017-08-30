import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from "./components/BaseLayout"
import Sup from "./components/Sup"
import BodyParts from "./components/BodyParts"
import Experiences from "./components/Experiences"
import Food from "./components/Food"
import Contact from "./components/Contact"

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/sup" component={Sup} />
        <Route path="/bodyparts" component={BodyParts} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/food" component={Food} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
