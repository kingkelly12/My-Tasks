import React, { Component } from 'react';


class UserProfile extends Component {
  render() {
    const { firstName, lastName, email, cell } = this.props;

    return (
      <div className="userProfile">
        <h2 className="userProfile">User Profile</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Cell: {cell}</p>
      </div>
    );
  }
}

export default UserProfile;
