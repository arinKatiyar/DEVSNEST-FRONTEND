import React, { Component } from "react";
import PropTypes from "prop-types";
import PostsPage from "./components/PostContainer/PostsPage";
import "./Style.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage loginUsr={this.props.loginUsr} logout={this.props.logout} />
      </div>
    );
  }
}

App.propTypes = {
  loginUsr: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    thumbnailUrl: PropTypes.string
  }),
  logout: PropTypes.func
};

export default Authenticate(App);
