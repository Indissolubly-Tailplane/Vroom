/*eslint-disable react/self-closing-comp, no-nested-ternary*/

import React, {Component} from 'react';
import {injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement} from 'react-stripe-elements';
import axios from 'axios'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentSuccess: null
    }
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    console.log('SUBMIT RAN')
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log('TOKEN: ', token);
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    // console.log("TOKEN", token)
    // let response = await axios.post('/charge', token.id)
    // console.log('RESPONSE: ', response)
    if (response.ok) {
      console.log("PURCHASE: ", response)
      this.setState({paymentSuccess: true})
    } else {
      this.setState({paymentSuccess: false})
    }

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
      <div class="cell example example3">
        <form>
          <div class="fieldset">
            <input id="example3-name" data-tid="elements_examples.form.name_label" class="field" type="text" placeholder="Name" required="" autocomplete="name"></input>
            <input id="example3-email" data-tid="elements_examples.form.email_label" class="field half-width" type="email" placeholder="Email" required="" autocomplete="email"></input>
            <input id="example3-phone" data-tid="elements_examples.form.phone_label" class="field half-width" type="tel" placeholder="Phone" required="" autocomplete="tel"></input>
          </div>
          <div class="fieldset">
            <input id="example3-card-number" data-tid="elements_examples.form.name_label" class="field empty" type="text" placeholder="Name" required="" autocomplete="name"></input>
            <input id="example3-card-expiry" class="field empty third-width"></input>
            <input id="example3-card-cvc" class="field empty third-width"></input>
            <input id="example3-zip" data-tid="elements_examples.form.postal_code_placeholder" class="field empty third-width" placeholder="94107"></input>
          </div>
          <button type="submit" data-tid="elements_examples.form.pay_button">Pay $25</button>
          <div class="error" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
              <path class="base" fill="#000" d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"></path>
              <path class="glyph" fill="#FFF" d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"></path>
            </svg>
            <span class="message"></span></div>
        </form>


      </div>
    );

  }

}

export default injectStripe(CheckoutForm);
