import React from 'react'

class userDetailsForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e){
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const token = false;
    if(this.props.createUser){
      const role = this.refs.role.value;
      this.props.fetchNewUser({ name, email, password, role, token });
    }
    else{
      this.props.fetchUpdateUser({name,email,password,id:this.props.user._id});
      this.props.fetchUsers();
    }
  }

  render(){
    return(
      <div className="well well-lg">
        <h1>{this.props.createUser ? 'Create User' : 'Update User'}</h1>
  
        <label><b>Name</b></label>
        <input type="text" ref="name" defaultValue={this.props.createUser ? '' : this.props.user.name} placeholder="Enter your name" name="name" required/>
  
        <label><b>Email</b></label>
        <input type="text" ref="email" defaultValue={this.props.createUser ? '' : this.props.user.email} placeholder="Enter Email" name="email" required/>
  
        <label><b>Password</b></label>
        <input type="password" ref="password" placeholder="Enter Password" name="psw" required/>
        <label><b>Role</b></label><br/>
        {this.props.createUser && (
        <div className="form-group">
          <select ref="role" className="form-control">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>)
        }
        <hr/>
        <button className="btn btn-lg btn-success" type="submit" onClick={this.handleSubmit}>{this.props.createUser ? 'Create User' : 'Update User'}</button>
      </div>
    );
  }
}

export default userDetailsForm;