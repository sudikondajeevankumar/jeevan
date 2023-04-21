import "../styles/styles.css";
import { Link } from "react-router-dom";


const Login2 = ()=>{
    return(
        <div className="login2-container">
        <div className="login2-content">

        <h1>SUBMIT</h1>
            <label>EMAIL</label>
            <input placeholder="@email" />
            <label>password</label>
            <input placeholder="*******" />

           <Link to="/login"><button className="prev">PREV</button></Link>
           <Link><button>SUBMIT</button></Link>

        </div>
        </div>

    )
}
export default Login2;