import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Loading from './Loading'
import Success from './Success'
import Error from './Error'
export default function Checkout({subtotal}) {

  const ordersstate=useSelector((state)=>state.placeOrderReducer)
  const {loading,error,success}=ordersstate
  const dispatch=useDispatch()
    function tokenHandler(token){
console.log(token)
dispatch(placeOrder(token,subtotal))

    }
  return (
    <div>
     {loading && (<Loading/>)}
     {error && (<Error/>)}
     {success && (<Success success='Your Order Placed Successfully'/>)}
<StripeCheckout
amount={subtotal * 100}
shippingAddress
token={tokenHandler}
stripeKey='pk_test_51KsQbOEO4CLzb7D4tK4VVrIL3fnfpZ2MAhP3eeUsRj09ePv1Kwjx99dXK58UlSnzhEuvQnFCxJBhCBGWjRjg8Y2z00YL4Tj4rL'
currency='MAD'
>
    <button className='btn btn-danger'> Pay Now </button>
</StripeCheckout>
    </div>
  )
}
