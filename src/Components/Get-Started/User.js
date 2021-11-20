import "./Get-Started.css"

import { Link } from "react-router-dom";
import LatestArray from "../Home Section/The Latest/LatestArray";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

function UserProfile() {
    return (
        <>
            <div className="user-profile">
                <div className="user-flex">
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Avatar sx={{ bgcolor: deepPurple[500], width: 200, height: 200, fontSize: 150 }}>
                                {LatestArray[0].fullname.charAt(0).toUpperCase()}</Avatar>
                        </Stack>
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
