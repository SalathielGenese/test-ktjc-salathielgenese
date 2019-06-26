import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { IonPage, IonRouterOutlet } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

import { Login } from './pages/login';

const App: React.SFC = () => (
  <Router>
    <Route exact path="/" render={() => <Redirect to="/login"/>} />
    <div className="App">
      <IonPage>
        <IonRouterOutlet>
          <Route path="/login" component={ Login } exact={true} />
        </IonRouterOutlet>
      </IonPage>
    </div>
  </Router>
);

export default App;