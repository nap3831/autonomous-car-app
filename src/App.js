import React, { Component } from 'react';
import Home from './Pages/Home';
import MyWallet from './Pages/MyWallet';
import Inbox from './Pages/Inbox';
import Account from './Pages/Account';
import Login from './Pages/Login';
import NavigationBar from './Components/NavigationBar';
import CarDetail from './Pages/CarDetail';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            {this.props.currentPath === '/' ? ('')
              : (
                <NavigationBar />
              )
            }
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Home" component={Home} />
              <Route path="/MyWallet" component={MyWallet} />
              <Route path="/Inbox" component={Inbox} />
              <Route path="/Account" component={Account} />
              <Route path="/CarDetail/:id" component={CarDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentPath: state.currentPath
  }
}
export default connect(mapStateToProps)(App);
