import React from 'react';
import ReactDOM from 'react-dom';
import Product from './components/Product';
import Detail from './components/Detail';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  browserHistory
} from 'react-router-dom';

import './styles.css';


function NotFound() {
  return (
    <div>
      <h2>Page not found :(</h2>
    </div>
  );
}

function App() {
  return (
    <Router history={browserHistory}>
      <div class="col-md-12">
        <NavBar />
        <hr />
        <Switch>        
          <Route path="/listcatalog" component={Product} />
          <Route path="/catalog/:id" component={Detail} />
          <Route path="/cart/" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

