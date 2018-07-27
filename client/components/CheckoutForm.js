import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    console.log('SUBMIT RAN')
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    // console.log("TOKEN", token)
    // let response = await axios.post('/charge', token.id)
    // console.log('RESPONSE: ', response)
    if (response.ok) console.log("PURCHASE: ", response)
  }

  render() {
    return (
      <div className="checkout group">
        <p>Would you like to complete the purchase?</p>
        <CardElement className="StripeElement" style={{
            base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '12px',

                '::placeholder': {
                    color: '#CFD7E0',
                }
            }
        }}/>
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
