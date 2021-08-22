import React from 'react';
import { connect } from 'react-redux';

const Page =(props) => {
  return (
    <div>Opa sera que vai funcionar</div>
  );
}
const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}

const mapDisphatchToProps = (dispatch) => {
  return {

  };

}

export default connect(mapStateToProps, mapDisphatchToProps) (Page);