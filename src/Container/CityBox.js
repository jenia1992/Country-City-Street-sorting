import React, { Component } from "react"
import { connect } from "react-redux";
import * as  actionType from "../Store/action/Index"
import UlLi from "./UlLi";
    class CityBox extends Component {
        state={
            notActive:"list-group-item list-group-item-action",
            active:"list-group-item list-group-item-action active",
            id:""

        }
        onClickHandler(event){
            this.props.sortByCompanies(event.target.id)
            this.setState({id:event.target.id},()=>{
                console.log(this.state.id)
            })
        }
        render() {
             if ( this.props.isCity){
                
                var list = this.props.citiesArr.map((temp,index)=>{
                    return(
                        <UlLi
                        className={this.state.id===temp.name ? this.state.active:index===0&&this.state.id===""?this.state.active:this.state.notActive}
                        key={index}
                        id={temp.name}
                        click={event=>this.onClickHandler(event)}
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
        citiesArr:state.myState.cities,
        isCity:state.myState.isCity
    };
};
const mapStateDispatch = dispatch => {
    return {
        sortByCompanies:(city)=> dispatch(actionType.sortByCompanies(city))
    };
};
export default connect(mapStateHandler,mapStateDispatch)(CityBox) 
