import { Link } from "react-router-dom";
import "../styles/styles.css";

const Form = ()=>{
    return(
        <div className="form-container">
        <div className="form-content">

            <h1>USER</h1>
            <label><h4>FIRST NAME</h4></label>
            <input className="inp" placeholder="firstname" />
            <label><h4>LAST NAME</h4></label>
            <input className="inp" placeholder="lastname" />
            
           <Link to="/login"><button>NEXT</button></Link>

        </div>
        </div>

    )
}
export default Form;