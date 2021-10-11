import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

class Alert extends Component {
  openNotification = (status, message) => {
    if (status === 'success') {
      notification.success({
        message: message,
      });
    }

    if (status === 'warning') {
      notification.success({
        message: message,
      });
    }

    if (status === 'info') {
      notification.info({
        message: message,
      });
    }
  };

  render() {
    const { alert } = this.props;
    alert && this.openNotification(alert.status, alert.message);
    return <></>;
  }
}

export default connect(mapStateToProps)(Alert);
