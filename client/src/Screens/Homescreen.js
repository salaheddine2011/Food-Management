import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pizza from '../Components/Pizza'
import pizzas from '../PizzaData'
import { getAllPizzas } from '../actions/pizzaActions'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
export default function Homescreen() {
  const dispatch = useDispatch()
  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])
  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (<Loading/>) : error ? (<Error error='Something went wrong'/>) : (
          pizzas.map(pizza => {
            return <div className="col-md-3 m-3" key={pizza._id}>
              <div key={pizza._id}>
                <Pizza pizza={pizza} />
              </div>
            </div>
          }
          )

        )}
        {/* {pizzas.map(pizza =>
       {
           return <div className="col-md-4">
                     <div>
                     <Pizza pizza={pizza}/>
                     </div>
           </div>
       }
       )} */}
      </div>
    </div>
  )
}
