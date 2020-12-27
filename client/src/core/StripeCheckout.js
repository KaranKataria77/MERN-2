import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from './helper/CartHelper';
import StripeCheckoutButton from 'react-stripe-checkout';
import { API } from '../backend';
import { createOrder } from './helper/orderHelper';



function StripeCheckout({
     products
    , setReload = f => f
    , reload = undefined}) {

        const [data, setData] = useState({
            loading: false,
            success: false,
            error: "",
            address: ""
        })

        const token = isAuthenticated() && isAuthenticated().token;
        const userId = isAuthenticated() && isAuthenticated().user._id;

        const getFinalPrice = () => {
            let amount = 0
            products.map(p => {
                amount = amount + p.price
            })
            return amount
        }

        const makePayment = (token) => {
            const body = {
                token,
                products
            }
            const headers = {
                "Content-Type": "application/json"
            }
            return fetch(`${API}/stripepayment`, {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })
             .then(response => {
                 console.log(response)
                 const {status} = response;
                 console.log("Status is", status)
                 cartEmpty(() => {
                     console.log("did we got a crash")
                 })
                 setReload(!reload)
                //  
             })
             .catch(error => console.log(error))
        }

        const showStripeButton = () => {
            return isAuthenticated() ? (
                <StripeCheckoutButton 
                  stripeKey="pk_test_51Hp6GKHx52WIbetHYK1FEAu33J0FKgYyJ5FMIpa4BcSHcOzWQXEIV7gQz2woAZ5SL3HcOrwaKzAwpyVyUo2LjwD800Wy41ZVgG"
                  token={makePayment}
                  amount={getFinalPrice() * 100}
                  name="Buy T-Shirt" 
                  shippingAddress
                  billingAddress
                >
                <button className="btn btn-success">Pay with stripe</button>
                </StripeCheckoutButton>
            ) : (
                <Link to="/signin">
                    <button className="btn btn-warning">Sign in</button>
                </Link>
            )
        }

    return (
        <div>
            <h3>
                Stripe Checkout {getFinalPrice()}
                {showStripeButton()}
            </h3>
        </div>
    )
}

export default StripeCheckout
