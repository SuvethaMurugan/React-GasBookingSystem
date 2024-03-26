// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './Header';
// import Home from './Home';
// import Register from './Register';
// import Login from './Login';
// import Admin from './Admin';

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <Header />
//                 <Switch>
//                     <Route path="/" component={Home} exact />
//                     <Route path="/register" component={Register} />
//                     <Route path="/login" component={Login} />
//                     <Route path="/admin" component={Admin} />
//                 </Switch>
//             </div>
//         </Router>
//     );
// };

// export default App;
import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav>
        <Link to="/">BookItEasy</Link>
        <ul>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header
