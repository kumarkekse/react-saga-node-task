import React from "react"

class usersList extends React.Component {

  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  async handleFilter(e){
    if(e.target.value !== ""){
      const value = e.target.value;
      this.props.fetchFilteredUsers(value);
    }
    else{
      this.props.fetchUsers();
    }
  }

  render(){
    return(
      <div>
      <div>
        <label>Filter</label>
        <input onChange={this.handleFilter} type="text" />
        <table className="table table-striped table-bordered table-list">
          <thead>
            <tr>
              <th><em className="fa fa-cog"></em></th>
              <th>Name</th>
              <th>Email</th>
            </tr> 
          </thead>
        <tbody>
          {this.props.users.map((user) =>(
            <tr>
              <td align="center">
                <a id={user._id} onClick={this.props.handleEdit} className="btn btn-default">Edit</a>
                <a id={user._id} onClick={this.props.handleDelete} className="btn btn-danger">delete</a>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
    );
  }
}


export default usersList;