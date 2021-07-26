import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const [token, setToken] = useState<string>("");

  const hasValidToken = token.length > 0;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar token={token} />
        <Switch>
          {!hasValidToken && (
            <React.Fragment>
              <Route path="/login">
                <Login submitHandler={setToken} />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </React.Fragment>
          )}
          {!hasValidToken && <Redirect from="/" to="/login" />}
          {hasValidToken && (
            <Route path="/dashboard">
              <MapContainer accessToken={token} />
            </Route>
          )}
          {hasValidToken && <Redirect from="/" to="/dashboard" />}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
