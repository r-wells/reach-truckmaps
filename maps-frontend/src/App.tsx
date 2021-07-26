import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const [token, setToken] = useState<string>("");

  // const hasValidToken = true;
  const hasValidToken = token.length > 0;
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVhMjVkZWQ0MWFlNjNhNDA2NjM2NDkiLCJlbWFpbCI6ImNhZXNhckBnbWFpbC5jb20iLCJuYW1lIjoiSnVsaXVzIiwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xMFQyMjo1NzozNC4zNjZaIiwidXBkYXRlZEF0IjoiMjAyMS0wNy0xMFQyMjo1NzozNC4zNjZaIiwiX192IjowLCJzZXNzaW9uIjoiNjBmYjFjNzg3ODI1Yzg4MjRjMjFkODQ2IiwiaWF0IjoxNjI3MDY5NTYwLCJleHAiOjE2MjcwNzA0NjB9.Embzi7FjuQo7NFT--txpow_eeKFSwo0A8Jn2GFTbMlE

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar token={token} />
        <Switch>
          {!hasValidToken && (
            <Route path="/login">
              <Login submitHandler={setToken} />
            </Route>
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
