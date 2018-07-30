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
    this.props.UpdateItemsInCart();
  }
  render() {
    const {make, model, id, image} = this.props.car
    return (
      <div className="card" id="card">
        <Image
          // height="auto"
          // width="100%"
          // position="absolute"
          src={image}
          className="ui image"
          id="carImageCard"
        />
        <div className="content">
          <div className="header">{make}</div>
          <div className="meta">{model}</div>
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
              {/* <div
                className="ui vertical animated button"
                onClick={addToCar}
                tabIndex="0"
              >
                <div className="visible content">Add To Cart</div>
                <div className="hidden content">
                  <i className="shop icon" />
                </div>
              </div> */}
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

