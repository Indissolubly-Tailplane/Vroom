import React, {Component} from 'react'
import {fetchUser} from '../store/user'
import {connect} from 'react-redux'
import {Grid, Image, Icon, Label, Menu, Table, Button} from 'semantic-ui-react'

class UserCard extends Component {
  componentDidMount() {
    this.props.loadOneUser()
  }

  render() {
    console.log('this.props.singleUser: ', this.props.singleUser)
    if (!this.props.singleUser) return <div>Loading...</div>
    const singleUser = this.props.singleUser

    return (
      <Table celled padded>
        {/* <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Admin Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header> */}

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {singleUser.firstName} {singleUser.lastName}
            </Table.Cell>
            <Table.Cell>{singleUser.email}</Table.Cell>
            {singleUser.adminStatus ? (
              <Table.Cell> This user is an admin </Table.Cell>
            ) : (
              <Table.Cell> This user is NOT an admin </Table.Cell>
            )}
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button size="small" color="red">
                Remove User
              </Button>
              <Button size="small" color="blue">
                Make Admin
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {singleUser: state.user.singleUser[0]}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOneUser: () => {
    dispatch(fetchUser(ownProps.match.params.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
