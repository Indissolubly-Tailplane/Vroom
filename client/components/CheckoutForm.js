import React, {Component} from 'react';
import {CardElement, injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement} from 'react-stripe-elements';
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
        <p>Would you like to complete the purchase?</p>

        <div className="fieldset">
        <input id="example3-name" data-tid="elements_examples.form.name_label" className="field" type="text" placeholder="Name" required="" autocomplete="name"></input>

        <input id="example3-email" data-tid="elements_examples.form.email_label" class="field half-width" type="email" placeholder="Email" required="" autocomplete="email"></input>

        <input id="example3-phone" data-tid="elements_examples.form.phone_label" class="field half-width" type="tel" placeholder="Phone" required="" autocomplete="tel"></input>

        </div>

        <div className="fieldset" >
          <CardNumberElement className="example3-card-number field empty" style={elementStyles}
          classes={elementClasses}/>
          <CardExpiryElement className="example3-card-expiry field empty third-width" style={elementStyles}
          classes={elementClasses}/>
          <CardCVCElement className="example3-card-cvc field empty third-width" style={elementStyles}
          classes={elementClasses}/>
          <button onClick={this.submit}>Pay $$$</button>
          {/* Pass prop in above to specify amount for $$$ */}
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
