import React,{Component} from 'react';
import Home from './Pages/Home';
import NavigationBar from './Components/NavigationBar';
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
              {/* <Route path="/Product" component={Product} />
              <Route path="/Mycart" component={Mycart} />
              <Route path="/News" component={News} />
              <Route path="/Promotion" component={Promotion} />
              <Route path="/ResultsSearch" component={ResultsSearch} />
              <Route path="/ProductDetail/:id" component={ProductDetail} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
