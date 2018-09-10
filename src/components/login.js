import React from "react"

class Login extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(){
   
    let email = this.refs.email.value; 
    let password = this.refs.password.value;
    this.props.fetchLoginUser({ email, password });
  }
  
  render() {
    return(
      <div className="container">
        <div className="card card-container">
          <h1>Login</h1><br/>
          {!this.props.user.message ? "" :<div className="alert alert-danger"><strong>{this.props.user.message}</strong></div>}
          <label><b>Email</b></label>
          <input type="text" ref="email" placeholder="Enter Email" name="email" required/>

          <label><b>Password</b></label>
          <input type="password" ref="password" placeholder="Enter Password" name="psw" required/>

          <button type="submit" className="btn btn-lg btn-success" onClick={this.handleSubmit}>Login</button>
          <h4>Don't have an account? <a className="text-info" href="/register">Sign up</a></h4>
        </div>
      </div>
    );
  }
}

export default Login;