import React, {Component} from 'react'
import {SingleUser} from './SingleUser'
import {fetchAllUsers} from '../store/user'
import {connect} from 'react-redux'
class Users extends Component {
  componentDidMount() {
    this.props.fetchAllUsers() //??
  }
  render() {
    const allUsers = this.props.allUsers
    return (
      <div>
        {!allUsers ? (
          <h1>Loading...</h1>
        ) : (
          allUsers.map(user => {
            return <SingleUser key={user.id} user={user} />
          })
        )}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {allUsers: state.user.allUsers}
}
const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => {
    dispatch(fetchAllUsers())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)
