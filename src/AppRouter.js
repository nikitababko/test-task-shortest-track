import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { privateRoutes, publicRoutes, RouteNames } from './routes';
import { getUser } from 'redux/actions/authAction';

const mapStateToProps = (store) => {
  // console.log(store);
  return {
    isAuth: store.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuth: () => dispatch(getUser()),
  };
};

class AppRouter extends Component {
  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    return this.props.isAuth ? (
      <Switch>
        {privateRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}

        <Redirect to={RouteNames.HOME} />
      </Switch>
    ) : (
      <Switch>
        {publicRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}

        <Redirect to={RouteNames.AUTH} />
      </Switch>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
