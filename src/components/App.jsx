import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
// import SignInForm from './SignInForm'
import Home from './pages/Home'

import Cart from './pages/Cart'

const NavBar=(props)=><nav>
<ul>
  <li>
    <NavLink to ="/">Home</NavLink>
  </li>
</ul>
</nav>


function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
       <Header />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cart' component={Cart} />
      {/* <Route exact path='/signin' component={SignInForm} /> */}
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
