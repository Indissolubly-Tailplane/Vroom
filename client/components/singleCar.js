import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Image} from 'semantic-ui-react'
import {UpdateItemsInCart} from '../store/cart'

/**
 * COMPONENT
 */
class SingleCar extends Component {
  addToCar = () => {
    window.sessionStorage.setItem(
      `item${window.sessionStorage.length + 1}`,
      JSON.stringify(this.props.car)
    )
    this.props.UpdateItemsInCart()
  }
  render() {
    const {make, model, id, image, limitedEdition} = this.props.car
    return (
      <div className="card" id="card">
        <Image
          src={image}
          className="ui image"
          id="carImageCard"
        />
        <div className="content">
          <div className="header">{make}</div>
          <div className="meta">{model}</div>
          {limitedEdition === true ? <div>Limited Edition</div> : null}
        </div>
        <div className="card">
          <div className="content">
            <center>
              <Link to={`/cars/${id}`}>
                <div className="ui basic grey button" id="singleCarButton">
                  Details
                </div>
              </Link>
              <div onClick={this.addToCar} className="ui blue button">
                <i className="shop icon" />
                Add to Cart
              </div>
            </center>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsInCart: state.cart.itemsInCart
})

const dispatchStateToProps = dispatch => ({
  UpdateItemsInCart: () => {
    dispatch(UpdateItemsInCart())
  }
})

export default connect(mapStateToProps, dispatchStateToProps)(SingleCar)
