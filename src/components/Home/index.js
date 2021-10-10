import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    auth: store.auth,
  };
};

class Home extends Component {
  componentDidMount() {
    console.log(this.props.auth);
  }

  render() {
    return <div>Home</div>;
  }
}

export default connect(mapStateToProps)(Home);
