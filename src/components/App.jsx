import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import   SignInForm from './SignInForm'

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

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
      {/* <Route exact path='/' component={Header} /> */}
        <Route exact path='/signin' component={SignInForm} />
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
