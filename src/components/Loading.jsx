import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/img/loading.svg';

const Loading = ({ loading }) => (
  loading ? (
    <div className="loading">
      <Logo />
    </div>
  ) : null
);
const mapStateToProps = (state) => ({ loading: state.loading });

export default connect(mapStateToProps)(Loading);
