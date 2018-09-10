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
      <div className="well well-lg">
        <input placeholder="Enter your text here to search by name..." onChange={this.handleFilter} type="text" />
        <table className="table table-bordered">
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
                  <button id={user._id} onClick={this.props.handleEdit} className="btn btn-primary"><span className="glyphicon glyphicon-edit"></span> Edit</button>
                  <button id={user._id} onClick={this.props.handleDelete} className="btn btn-danger"> <span className="glyphicon glyphicon-remove"></span>delete</button>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


export default usersList;