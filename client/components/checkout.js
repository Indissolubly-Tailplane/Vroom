import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_NIADJgaPnph0TGWHkcqwcW7V">
        <div >
          <Elements>
            <CheckoutForm {...this.props} className="StripeElement"/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;
