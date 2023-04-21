import "../styles/styles.css";
import { Link } from "react-router-dom";


const Login = ()=>{
    return(
        <div className="login-container">
        <div className="login-content">
            <h1>INFORMATION</h1>
            <label><h4>NUMBER</h4></label>
            <input className="inp" placeholder="Phone no" />
            <label><h4>ADDRESS</h4></label>
            <textarea className="text-area" placeholder="Address" />

           <Link to="/"><button className="prev">PREV</button></Link>
           <Link to="/login2"><button>NEXT</button></Link>

        </div>
        </div>

    )
}
export default Login;