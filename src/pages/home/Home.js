import React from "react"
import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import List from "../../components/table/List"




const Home = () => {

    return (
        <div className="home"> 
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="DRONES"/> 
                    <Widget type="MISSIONS"/>
                    <Widget type="DRONES-MISSIONS"/> 
                </div>
                <div className="listContainer">
                    <div className="listTitle">transactions</div>
                    <List/>
                </div>
               
            </div>
        </div>
    )
}

export default Home;