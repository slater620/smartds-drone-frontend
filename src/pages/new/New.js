import React from "react"
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon  from "@mui/icons-material/DriveFolderUploadOutlined";


const New = ( ) => {

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left"></div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">  File: <DriveFolderUploadOutlinedIcon className="icon"/> </label>
                                <input type="file" id="file" style={ {display:'none'} } placeholder="chose file"/>
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="email" placeholder="eee"/>
                            </div>
                            <div className="formInput">
                                <label> Country</label>
                                <input type="text" placeholder="eee"/>
                            </div>
                            <div className="formInput">
                                <label> Country</label>
                                <input type="text" placeholder="eee"/>
                            </div>
                            <div className="formInput">
                                <label> Country</label>
                                <input type="text" placeholder="eee"/>
                            </div>
                            <div className="formInput">
                                <label>password</label>
                                <input type="password" />
                            </div>
                            <button>Send</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;