import React, {Component} from 'react'
import {fetchUser, deleteUser} from '../store/user'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Table, Button} from 'semantic-ui-react'

class UserCard extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.props.loadOneUser()
  }
  handleDelete() {
    this.props.deleteUser(Number(this.props.singleUser.id))
  }
  render() {

    if (!this.props.singleUser) return <div>Loading...</div>
    const singleUser = this.props.singleUser

    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Admin Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {singleUser.firstName} {singleUser.lastName}
            </Table.Cell>
            <Table.Cell>{singleUser.email}</Table.Cell>
            {singleUser.adminStatus === true ? (
              <Table.Cell> This user is an admin </Table.Cell>
            ) : (
              <Table.Cell> This user is NOT an admin </Table.Cell>
            )}
          </Table.Row>
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Link to="/users">
                <Button size="small" color="red" onClick={this.handleDelete}>
                  Remove User
                </Button>
              </Link>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}
const mapStateToProps = (state) => {
  return {singleUser: state.user.singleUser}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOneUser: () => {
    dispatch(fetchUser(ownProps.match.params.id))
  },
  deleteUser: userId => {
    dispatch(deleteUser(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
