import axios from "axios";
import { useState } from "react"
import { ApiRoutes, Host } from "../constants/constants";
import {useNavigate} from "react-router-dom"

const Login = ({setemail}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [showErr, setShowErr] = useState(false);
    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email.length != 0 && password.length != 0) {
            try {
                const response = await axios.get(Host.APIHOST + ApiRoutes.LOGIN + `?email=${email}&password=${password}`);
                console.log(response);
                if (response.status == 200) {
                    setErrMsg("Valid Credentials");
                    setemail(email);
                    navigate('/goals', {state: { email } });
                    
            setShowErr(true);

                }
            } catch (error) {
                console.log(error);
                setErrMsg(error.response.statusText);
                setErrMsg("Invalid credentials!");
            setShowErr(true);

            }

        }
        else{
            setErrMsg("Email and Password is required");
            setShowErr(true);
        }
    }
    return (
        <div className="w-screen h-screen bg-white  text-xl flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start space-y-5">
                <div className="flex flex-col">

                    <label htmlFor="Email"> Email</label>
                    <input id="Email" type="text" 
                    className="bg-white rounded-2xl p-3 border-2 border-black" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col">

                    <label htmlFor="password"> Password</label>
                    <input id="password" type="text" className="bg-white rounded-2xl p-3 border-2 border-black" 
                    onChange={(e)=>setPassword(e.target.value)}/>

                </div>
                <button className="p-3 w-full bg-red-500 rounded-2xl"
                onClick={(e)=>handleSubmit(e)}>Submit</button>
                {showErr && <p className="text-black w-fit">{errMsg}</p>}
            </div>

        </div>
    )
}

export default Login