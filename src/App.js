import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
          <Switch>
                  <Route path="/home">
                      <Home/>
                  </Route>
              </Switch>
          </div>
        </div>
    </Router>
    
  );
}
export default App;
// switch - route are component of react-router-dom
//switch -> route-path make the element available if that path is visited otherwise the current path element is shown