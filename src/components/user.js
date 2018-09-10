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
        <div className="card-columns">
          <div className="card bg-primary">
            <div className="card-body text-center">
              <h1 className="card-text">HELLO WORLD!</h1>
            </div>
          </div>
        </div>
        <input type="button" className="btn btn-lg btn-warning" onClick={this.handleLogout} value="Logout"/>
      </div>
    );
  }

}

export default User;