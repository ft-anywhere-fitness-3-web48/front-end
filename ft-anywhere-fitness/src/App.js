
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Search</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
            <NavLink activeClassName="active" to="/dashboard">Register</NavLink><small></small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Register} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
