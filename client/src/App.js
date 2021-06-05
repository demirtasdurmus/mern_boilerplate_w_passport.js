import React from 'react';
import Landing from "./pages/landing";
import Sample from "./pages/sample";
import EditSample from "./pages/editSample";
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function App() {

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/sample" exact={true} component={Sample} />
          <Route path="/edit-sample/:id" exact={true} component={EditSample} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
