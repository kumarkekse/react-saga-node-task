import React from "react";

class User extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleLogout(e){
    this.props.fetchLogoutUser({auth: true,currentUser: {}});
    this.props.history.push("/login");
  }

  render(){
    return(
      <div className="conatiner">
        <h2>Hello World!</h2>
        <input type="button" className="btn btn-lg btn-warning" onClick={this.handleLogout} value="Logout"/>
      </div>
    );
  }

}

export default User;