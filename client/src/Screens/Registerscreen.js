import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
import Success from '../Components/Success'
export default function Registerscreen() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword,setcpassword]=useState("")
    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate
const dispatch=useDispatch()
    function register(){
        if(password!=cpassword)
        {
            alert("passwords not matched")
        }
        else{
            const user={
                name,
                email,
                password
            }

            console.log(user)
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>

                {loading && (<Loading/>)}
                {success && (<Success success='User Registered Successfully '/>)}
                {error && (<Error error='Emain Already register'/>)}
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input required type="text" placeholder="name" className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <input required type="text" placeholder="email" className='form-control' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input required type="password" placeholder="password" className='form-control'  value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
                        <input required type="password" placeholder="Confirm Password" className='form-control'  value={cpassword}  onChange={(e)=>{setcpassword(e.target.value)}} />
                        <button onClick={register} className='btn btn-danger mt-3'>Register</button>
                        <br/>
                        <a style={{color:'black'}} href='/login'>Click here To Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
