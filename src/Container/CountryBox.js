import React, { Component } from "react"
import { connect } from "react-redux";
import * as  actionType from "../Store/action/Index"
import UlLi from "./UlLi";
    class CountryBox extends Component {
        state={
            notActive:"list-group-item list-group-item-action",
            active:"list-group-item list-group-item-action active",
            id:""

        }
        onClickHandler(event){
            this.props.sortByCities(event.target.id)
            this.setState({id:event.target.id},()=>{})
        }
        
        render() {

            if(this.props.isCountry){
                var list = this.props.countriesArr.map((temp,index)=>{
                    return(
                        <UlLi
                        className={this.state.id===temp.name ? this.state.active:index===0&&this.state.id===""?this.state.active:this.state.notActive}
                        key={index}
                        id={temp.name}
                        click={(event)=>this.onClickHandler(event)}
                        />
                    )
                })
            }
            return (
            <ul style={{height:"43vh",overflow:"auto"}} className=" list-group">
                {list}
            </ul>
            )
        }
    }

const mapStateHandler = state => {
    return {
        countriesArr:state.myState.countries,
        isCountry:state.myState.isCountry,
    };
};
const mapStateDispatch = dispatch => {
    return {
        sortByCities:(country)=> dispatch(actionType.sortByCities(country)),
    };
};
export default connect(mapStateHandler,mapStateDispatch)(CountryBox) 
