import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {updateUser} from "./actions/user-actions";

// import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser() {
    this.props.onUpdateUser("Mark");
  }


  render() {

    console.log("------ ",this.state);

    return (
        <div className="App">
          <div onClick={this.onUpdateUser}>Update user</div>
          {this.props.user}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
