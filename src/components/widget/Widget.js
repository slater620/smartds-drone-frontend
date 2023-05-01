import "./widget.scss"
import KeyboardControlKeySharpIcon from '@mui/icons-material/KeyboardControlKeySharp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const Widget = ({type} ) => {

    let data;


    const amount =100
    const diff = 20

    switch (type) {
        case "DRONES":
            data={
                title:"DRONES",
                status : false,
                link : "See all drones",
                icon: < ConnectingAirportsIcon className="icon" style={{color:"crimson"}}/>

            };
            
            break;

        case "MISSIONS":
            data={
                title:"MISSIONS",
                link : "See all missions",
                icon: <FmdGoodIcon className="icon" style={{color:"crimson"}}/>
    
                };
                
             break;

        case "DRONES-MISSIONS":
                data={
                    title:"DRONES EN MISSIONS",
                    isMoney : true,
                    link : "",
                    icon: <ConnectingAirportsIcon className="icon"/>

                };
                
            break;

        default:
            break;
    }
    



    return (
        <div className="widget">
            <div className="left">
                <span className="title"> {data.title} </span>
                <span className="counter"> {amount} </span>
                <span className="link"> {data.link} </span>
            </div>
            <div className="right">

                {data.icon}
            </div>
        </div>
    )
}

export default Widget;