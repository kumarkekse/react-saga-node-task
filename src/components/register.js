import React from "react";
import { Link } from "react-router-dom";
import './styles/register.css';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e){
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let role = this.refs.roles.value;
    const token = true;
    this.props.fetchRegisterUser({ name, email, password, role, token });  
  }
  
  render(){
    return(
      <div className="container">
        <h1>Register</h1>
        <h4>Please fill in this form to create an account.</h4>

        {!this.props.user.message ? "" :<div class="alert alert-danger"><strong>{this.props.user.message}</strong></div>}
        <label><b>Name</b></label>
        <input type="text" ref="name" placeholder="Enter your name" name="name" required/>

        <label><b>Email</b></label>
        <input type="text" ref="email" placeholder="Enter Email" name="email" required/>

        <label><b>Password</b></label>
        <input type="password" ref="password" placeholder="Enter Password" name="psw" required/>
        <label><b>Role</b></label><br/>
        <div className="form-group">
          <select ref="roles" className="form-control">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <hr/>
        <button type="submit" className="btn btn-lg btn-success" onClick={this.handleSubmit}>Register</button>
        <h4>Already have an account? <Link className="text-info" to="/login">Sign in</Link></h4><br/>
      </div>
    );
  }
}

export default Register;