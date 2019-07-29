import React, { Component } from "react"
import { connect } from "react-redux";
import * as  actionType from "../Store/action/Index"
import UlLi from "./UlLi";
import Geocode from "react-geocode";
    class CompanyBox extends Component {
        state={
            notActive:"list-group-item list-group-item-action",
            active:"list-group-item list-group-item-action active",
            id:""

        }
        
        onClickHandler(name,address){
            Geocode.setApiKey("AIzaSyCmaRkdRWNFozLcuoPrbORbRLoojhZp9Vc");
            this.setState({id:name},()=>{
                
            })
            Geocode.fromAddress(address).then(
                response => {
                  const { lat, lng } = response.results[0].geometry.location;
                  
                  this.setState({lat:lat,lng:lng},()=>{
                    console.log(this.state);
                    this.props.updateAreaInfo(this.state)
                  })
                },
                error => {
                  console.error(error);
                }
              );
        }
        render() {
            if(this.props.isCompany){
                var list = this.props.companiesArr.map((temp,index)=>{
                    return(
                        <UlLi
                        className={this.state.id===temp.name ? this.state.active:index===0&&this.state.id===""?this.state.active:this.state.notActive}
                        key={index}
                        id={temp.name}
                        click={(name,address)=>this.onClickHandler(temp.name,temp.address)}
                        />
                    )
                })
            }
            return (
            <ul style={{height:"43vh",overflow:"auto"}} className="list-group">
                {list}
            </ul>
            )
        }
    }

const mapStateHandler = state => {
    return {
        companiesArr:state.myState.companies,
        isCompany:state.myState.isCompany,
    };
};
const mapStateDispatch = dispatch => {
    return {
        updateAreaInfo:(area)=>{dispatch(actionType.updateAreaInfo(area))}
        
    };
};
export default connect(mapStateHandler,mapStateDispatch)(CompanyBox) 
