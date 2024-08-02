import React, { Component } from "react";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

class App extends Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.listNotifications} />
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-body">
            {this.props.isLoggedIn ? (
              <CourseList listCourses={this.listCourses} />
            ) : (
              <Login />
            )}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
