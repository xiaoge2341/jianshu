import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class write extends Component {
  render() {
    let login = this.props.signInReducer.get('login')
  if (login) {
    return (
      <div>
        write页
      </div>
    );
  }else {
    return <Redirect to='/sign_in'></Redirect>
  }

  }
}
const mapState = (state) => {
  // console.log(state)
 return {
  signInReducer:state.signInReducer
 }
}
export default connect(mapState)(write);

