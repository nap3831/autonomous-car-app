import React,{Component} from 'react';
import Home from './Pages/Home';
import MyWallet from './Pages/MyWallet';
import Inbox from './Pages/Inbox';
import Account from './Pages/Account';
import NavigationBar from './Components/NavigationBar';
import CarDetail from './Pages/CarDetail';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <BrowserRouter>
           <div>
           <NavigationBar/>
            <Switch>
              <Route exact path="/" component={Home} />
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
export default App;
