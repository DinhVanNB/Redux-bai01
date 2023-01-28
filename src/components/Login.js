import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


export default function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({username:"", password:""}); 

    const userLogined  = useSelector(state=>state.userLogined);
    const setValueForUser = (key, value) =>{
        const newVal = {...user,[key]:value};
        setUser(newVal);
    }
    const login=()=>{
        dispatch({
            type:"LOGIN",payload:user
        })
    }
    useEffect(()=>{
        if(userLogined.username){
            navigate("/users")
        }
    },[userLogined, navigate])

    return(
        <form>   
           <label>User name</label>
           <input id="username" 
                onChange={e=>setValueForUser("username",e.target.value)}/>
           <label>Password</label>
            <input id="password" 
                onChange={e=> setValueForUser('password',e.target.value)}/>
            <button type='button'
                    onClick={()=>login()}>Login</button>
        
        </form>
    )
}