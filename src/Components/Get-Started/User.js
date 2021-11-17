import "./Get-Started.css"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function UserProfile() {



    return (

        <>
            <div className="user-profile">
                <div className="user-flex">
                    <div>
                        <img src="https://pyxis.nymag.com/v1/imgs/0f8/215/f94c469f85e9236ff328558fde50649c0e-brooklyn-nine-nine-ep-1.rsquare.w700.jpg" alt="Jake Peralta" />
                    </div>
                    <div className="user-details">
                        <div className="border-btm">  <h2> Jake Peralta  </h2>
                            <h6>    @username </h6>
                        </div>
                        <div>
                            <h5> Front End Developer @ NYPD</h5>
                        </div>
                        <div>
                            <h6>user@gmail.com</h6>
                        </div>
                        <Link to="/GetStarted"><button onClick={() => localStorage.removeItem("user")} className="login-btn">Log Out</button></Link>
                    </div>

                </div>

            </div>


        </>

    );
}

export default UserProfile;
