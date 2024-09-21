import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
          <Switch>
                  <Route exact path="/">
                      <Home/>
                  </Route>
                  <Route path="/create">
                      <Create/>
                  </Route>
              </Switch>
          </div>
        </div>
    </Router>
    //routes matches : if some character of routes matches then it displays that not the actual one
  );
}
export default App;
// switch - route are component of react-router-dom
//switch -> route-path make the element available if that path is visited otherwise the current path element is shown

// there to make sure that only one route component shows in the browser at any one time so when a request is made to a route react will look at that request and then go from top to bottom inside the switch so and try to match against a route and its going to stop at the first match it finds for that route render that component inside the route now
//component didn't surround all of these routes it would carry on and render other matches as well meaning you could end up with more than one page showing one time so its always a good idea to surround all of our routes with the switch component 
//now there is still problem with setup when click on links to go to different pages its still sending request to the server for each click so when