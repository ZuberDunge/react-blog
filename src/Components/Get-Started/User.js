import "./Get-Started.css"

import { Link } from "react-router-dom";
import LatestArray from "../Home Section/The Latest/LatestArray";
import userDP from "../../Images/blogging.png"

function UserProfile() {
    return (
        <>
            <div className="user-profile">
                <div className="user-flex">
                    <div>
                        <img src={userDP} alt="Jake Peralta" />
                    </div>
                    <div className="user-details">
                        <div className="border-btm">  <h2> {LatestArray[0].fullname}  </h2>
                            <h6>    @{LatestArray[0].fullname}  </h6>
                        </div>

                        <div>
                            <h6>{LatestArray[0].email} </h6>
                        </div>
                        <Link to="/GetStarted"><button onClick={() => localStorage.removeItem("user")


                        } className="login-btn">Log Out</button></Link>
                    </div>

                </div>

            </div>


        </>

    );
}

export default UserProfile;
