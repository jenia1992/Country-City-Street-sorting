import React, { Component } from "react"
import { connect } from "react-redux"
import * as  actionType from "../Store/action/Index"
import CountryBox from "./CountryBox"
import CityBox from "./CityBox"
import CompanyBox from "./CompanyBox"
import MapGoogle from"./MapGoogle"

    class Container extends Component {
    componentDidMount(){
        this.props.init()
    }
       
        render() {
            return (
            <div className="container-fluid">
            <div style={{height:"50vh"}} className="row">
                <div className="col">
                <h3>Country</h3>
                    <CountryBox/>
                
                </div>
                <div className="col">
                <h3>City</h3>
                    <CityBox/>
                </div>
                <div className="col">
                <h3>Company</h3>
                    <CompanyBox/>
                </div>
                <div style={{maxHeight:"43vh",marginRight:"2%"}} className="col-5">
                <h3>Map</h3>
                   {this.props.area? <MapGoogle center={this.props.area}/>: <MapGoogle />}
                </div>
            </div>
            </div>
            )
        }
    }
const mapStateHandler = state => {
    return {
        area:state.myState.area,
        isArea:state.myState.isArea
    };
};
const mapStateDispatch = dispatch => {
    return {
        init:()=>dispatch(actionType.init()),
    };
};
export default connect(mapStateHandler,mapStateDispatch)(Container) 