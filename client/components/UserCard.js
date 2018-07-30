import React, {Component} from 'react'
import {fetchUser} from '../store/car'
import {connect} from 'react-redux'
import {Grid, Image} from 'semantic-ui-react'

class UserCard extends Component {
  componentDidMount() {
    this.props.loadOneUser()
  }

  render() {
    if (!this.props.singleUser) return <div>Loading...</div>
    const singleUser = this.props.singleUser
    return (
      <Grid columns="two" id="cardCardGrid" divided>
        <Grid.Column>
          <Image
            src={singleUser.image}
            size="big"
            verticalAlign="middle"
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <div className="CarCard">
            <div className="content">
              <div id="carName">
                {singleUser.firstName} {singleUser.lastName}
              </div>
              <div id="carYear">{singleUser.email}</div>
              <div id="carYear">Admin Status:</div>
              <div id="carDescription">Cars Purchase:</div>
              <button id="carButton">Remove</button>
              {/* quantity */}
            </div>
          </div>
        </Grid.Column>
      </Grid>
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
