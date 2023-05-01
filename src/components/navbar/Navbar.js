
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import "./navbar.scss"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
const Navbar = () => {


    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="search.."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ChatOutlinedIcon className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar