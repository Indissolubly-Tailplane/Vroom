/*eslint-disable react/self-closing-comp*/

import React, {Component} from 'react';
import {injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement} from 'react-stripe-elements';
import { connect } from 'react-redux';
import {postOrderToDb} from '../store/cart'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentSuccess: null,
      email: ""
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async submit(ev) {
    ev.preventDefault();
    try {
      let {token} = await this.props.stripe.createToken({name: "Name"});
      if (token) {
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: {
            tokenId: token.id,
            purchaseTotal: this.props.cartTotal
          }
        });
        if (response.ok) {
          this.setState({paymentSuccess: true})
          console.log('PAYMENT SUCCESS: ', this.state.paymentSuccess)
          this.props.postOrderToDb(this.state.email);
          window.sessionStorage.clear();
        }
      } else {
        this.setState({paymentSuccess: false})
        console.log('PAYMENT SUCCESS: ', this.state.paymentSuccess)
      }
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  render() {
    let elementStyles = {
      base: {
        color: '#fff',
        fontWeight: 600,
        fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',

        ':focus': {
          color: '#424770',
        },

        '::placeholder': {
          color: '#9BACC8',
        },

        ':focus::placeholder': {
          color: '#CFD7DF',
        },
      },
      invalid: {
        color: '#fff',
        ':focus': {
          color: '#FA755A',
        },
        '::placeholder': {
          color: '#FFCCA5',
        },
      },
    };

    let elementClasses = {
      focus: 'focus',
      empty: 'empty',
      invalid: 'invalid',
    };
    return (
      <div className="cell example example3">
          <form>
          <div className="fieldset">
            <input id="example3-name" data-tid="elements_examples.form.name_label" className="field" type="text" placeholder="Name" required="" autoComplete="name"></input>
            <input id="example3-email" data-tid="elements_examples.form.email_label" className="field half-width" type="email" placeholder="Email" required="" autoComplete="email" onChange={this.handleChange} value={this.state.email}></input>
            <input id="example3-phone" data-tid="elements_examples.form.phone_label" className="field half-width" type="tel" placeholder="Phone" required="" autoComplete="tel"></input>
          </div>

          <div className="fieldset" >
            <CardNumberElement className="example3-card-number field empty" style={elementStyles}
            classes={elementClasses}/>
            <CardExpiryElement className="example3-card-expiry field empty third-width" style={elementStyles}
            classes={elementClasses}/>
            <PostalCodeElement className="example3-postal-code field empty third-width" style={elementStyles}
            classes={elementClasses}/>
            <CardCVCElement className="example3-card-cvc field empty third-width" style={elementStyles}
            classes={elementClasses}/>
            <button onClick={this.submit}>Pay ${this.props.cartTotal}</button>
          </div>
          </form>

          {
            this.state.paymentSuccess !== null ? (
              this.state.paymentSucess ? (
                <h1>Payment Successful</h1>
              ) : (
                <h2>Payment Unsuccessful</h2>
              )
            ) : (
              null
            )
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartTotal: state.car.cartTotal
})

const mapDispatchToProps = dispatch => ({
    postOrderToDb: orderEmail => {
      dispatch(postOrderToDb(orderEmail))
    }
  })

const StripeComponent = injectStripe(CheckoutForm);
export default connect(mapStateToProps, mapDispatchToProps)(StripeComponent)

