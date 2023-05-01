import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert" ;
import KeyboardArrowDownIcon  from "@mui/icons-material/KeyboardArrowDownOutlined";
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {

    return  (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total </h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">
                    previous transactions processing
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="result">$12.4k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Last</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="result">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="result">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured;