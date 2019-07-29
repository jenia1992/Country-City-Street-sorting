import * as actionType from "../action/actionType"
import { updateObject } from "./utilReducer"
const initialState = {
   countries:[],
   isCountry:false,
   cities:[],
   isCity:false,
   companies:[],
   isCompany:false,
   area:"",
   isArea:false


}
//Form Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.UPDATE_COUNTRY_INFO:{
          return updateObject(state,{countries:action.payload,isCountry:true})
          
      }
      case actionType.UPDATE_CITY_INFO:{
        return updateObject(state,{cities:action.payload,isCity:true})
        
    }
    case actionType.UPDATE_COMPANY_INFO:{
        return updateObject(state,{companies:action.payload,isCompany:true})
        
    }
    case actionType.UPDATE_AREA_INFO:{
        return updateObject(state,{area:action.payload,isArea:true})
        
    }

        default:
            return state;

    }



}
export default reducer