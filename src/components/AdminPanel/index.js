import React from "react"
import UsersList from "./usersList"
import UserDetailsForm from "./userDetailsForm"
import Pagination from "./pagination"

class AdminPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCreateNewUser: false,
      showEditUser: false,
      updateUser: {},
      pageUsers: [],
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  onChangePage (pageUsers) {
    this.setState(prevProps => ({ ...prevProps, pageUsers }));
  }

  componentDidMount(){
    this.props.fetchUsers();
  }

  handleEdit(e){
    const updateUser = this.props.users.find(u => u._id === e.target.id);
    this.setState(prevState => ({
      ...prevState,
      showEditUser:  !prevState.showEditUser,
      updateUser, 
      showCreateNewUser: false})
    )
  }

  async handleDelete(e){
    const id = e.target.id;
    this.props.fetchDeleteUser(id);
  }

  handleLogout(e){
    this.props.fetchLogoutUser({auth: true,currentUser: {}});
    this.props.history.push("/login");
  }

  handleCreate(e){
    this.setState(prevState => ({ ...prevState, showCreateNewUser:  !prevState.showCreateNewUser, showEditUser: false}))
  }

  render(){
    const showListUsers = !this.state.showCreateNewUser && !this.state.showEditUser;
    return(
      <div className="container-fluid">
        <button className="btn btn-lg btn-success" onClick={this.handleLogout}>Logout</button>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="panel panel-default panel-table">
              <h1 id="admin">Admin Panel</h1>
              <div className="panel-heading">
                <div className="btn-group btn-group-justified">
                  <a onClick={() => this.setState({showCreateNewUser: false, showEditUser: false})} className="btn">List Users</a>
                  <a onClick={this.handleCreate} className="btn">Create New</a>
                </div>
              </div>
              <div className="panel-body">
                { showListUsers && <UsersList {...this.props} fetchUsers={this.props.fetchUsers} fetchFilteredUsers={this.props.fetchFilteredUsers} users={this.state.pageUsers} handleDelete={this.handleDelete} handleEdit={this.handleEdit} /> }
                { this.state.showCreateNewUser && <UserDetailsForm createUser fetchNewUser={this.props.fetchNewUser}/> }
                { this.state.showEditUser && <UserDetailsForm editUser fetchUsers={this.props.fetchUsers} fetchUpdateUser={this.props.fetchUpdateUser} user={this.state.updateUser}/> }
                { showListUsers && <Pagination items={this.props.users} onChangePage={this.onChangePage }/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;