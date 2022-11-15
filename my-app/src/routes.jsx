import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom/client';
import Admin from './components/Admin';
import login from  './components/login'

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={login}></Route>
      <Route path="/admin" component={Admin}></Route>
    </Router>,
    document.getElementById('root')
  );