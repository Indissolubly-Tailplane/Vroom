import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export const Checkout = (props) => (
      <StripeProvider apiKey="pk_test_NIADJgaPnph0TGWHkcqwcW7V">
        <div >
          <Elements>
            <CheckoutForm {...props} className="StripeElement"/>
          </Elements>
        </div>
      </StripeProvider>
)

export default Checkout;
