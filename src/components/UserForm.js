import React, { Component } from "react";
import { connect } from "react-redux";
import lod from "lodash";
//import { database } from "../config/fbConfig";
import { getUsers, saveUser } from "../actions/userAction";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", city: "", age: "" };
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderUser = this.renderUser.bind(this);
  }

  componentWillMount() {
    // database.on("value", snap => {
    //   this.setState({ users: snap.val() });
    // });
    this.props.getUsers();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitMessage = e => {
    e.preventDefault();
    const params = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      age: this.state.age
    };
    //  database.push(params);
    this.props.saveUser(params);
    this.setState({ name: "", email: "", city: "", age: "" });
  };

  renderUser() {
    return lod.map(this.props.users, (user, key) => {
      return (
        <div key={user.email} className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{user.name}</h4>
              <a href={`mailto:${user.email}`} className="card-link">
                {user.email}
              </a>
            </div>
          </div>
          <hr />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h2>Contact Form</h2>
            <form onSubmit={this.submitMessage}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              <div className="form-group">
                <label htmlFor="emai1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <select
                  className="form-control"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Japan">Japan</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  placeholder="Age"
                  value={this.state.age}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>

          <div className="col-sm-1" />

          <div className="col-sm-7">
            <div className="row">
              <h2>User Info</h2>
              {this.renderUser()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: user => dispatch(saveUser(user)),
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
