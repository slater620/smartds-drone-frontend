import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import LogoDevSharpIcon from '@mui/icons-material/LogoDevSharp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import SystemSecurityUpdateGoodSharpIcon from '@mui/icons-material/SystemSecurityUpdateGoodSharp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar"> 
            <div className="top">
                <Link to= "/" style={{textDecoration:"none"}} >
                <span className="logo">SMARTDS</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/"  style={{textDecoration:"none"}} >
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/drones"  style={{textDecoration:"none"}} >
                    <li>
                        <ConnectingAirportsIcon className="icon"/>
                        <span>DRONES</span>
                    </li>
                    </Link>

                    <Link to="/missions" style={{textDecoration:"none"}}>
                        <li>
                            <FmdGoodIcon/>
                            <span>MISSIONS</span>
                        </li>
                    </Link>
                   
                    <p className="title">USEFULL</p>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <ViewListSharpIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SystemSecurityUpdateGoodSharpIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <LogoDevSharpIcon/>
                        <span>Logs</span>
                    </li>
                    <p className="title">USERS</p>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountCircleIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})} ></div>
                <div className="colorOption"  onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar