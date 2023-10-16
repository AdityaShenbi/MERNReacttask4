import React, { Component } from 'react';

class UserTable extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data.users }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { users } = this.state;
    return (
      <div style = {{backgroundColor: 'black', color:'white'}}>
        <h2 style={{textAlign:'center'}}>Dummy Data</h2>
        <table border={'white'} borderColor={'white'} cellSpacing={'0'} style={{margin:'auto'}}>
          <thead>
            <tr>
              <th style={{border: '10px', borderColor:'white'}}>Sno.</th>
              <th>Profile pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><img src={user.image} style = {{height: '75px', width: '75px'}} alt={`Profile of ${user.firstName} ${user.lastName}`} /></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserTable;