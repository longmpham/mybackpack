import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateItems extends Component {
  constructor(props) {
    super(props);

    // reassure this refers to this class object
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      weight: 0,
      users: []
    };
  }

  // this is a react lifecycle method
  componentDidMount() {
    // does this function before the page loads
    axios.get("http://localhost:5000/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      username: this.state.username,
      description: this.state.description,
      weight: this.state.weight,
    };

    console.log(item);

    // send item data to backend
    axios
      .post("http://localhost:5000/items/add", item)
      .then(res => console.log(res.data));

    window.location = "/list";
  }

  render() {
    return (
      <div>
        <h3>Create New Item Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Weight (in grams): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Item Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
