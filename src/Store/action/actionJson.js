import * as actionType from "./actionType"
import data from "../../data/clients.json";

export const updateCountryInfo =(obj)=>{
    return {
        type:actionType.UPDATE_COUNTRY_INFO,
        payload:obj
    }
}
export const updateCityInfo =(country)=>{
    return {
        type:actionType.UPDATE_CITY_INFO,
        payload:country
    }
}
export const updateCompanyInfo =(city)=>{
    return {
        type:actionType.UPDATE_COMPANY_INFO,
        payload:city
    }
}
export const updateAreaInfo =(area)=>{
    return {
        type:actionType.UPDATE_AREA_INFO,
        payload:area
    }
}
export const sortByCompanies=(city)=>{
    return dispatch=>{
        var citiesByCompany=data.Customers.map(customer=>customer)
        .reduce((cities,customer)=>{
            
            cities[customer.City]= cities[customer.City] || []
            cities[customer.City].push({name:customer.CompanyName,address:customer.Address})
            
            return cities
        },[])
        dispatch(updateCompanyInfo(citiesByCompany[city]))
        
    }
}


export const sortByCities=(country)=>{
    return dispatch=>{
        let result=[]
        var citiesByCountries=data.Customers.map(customer=>customer)
        .reduce((countries,customer)=>{
                countries[customer.Country]=countries[customer.Country] || []
                if(!countries[customer.Country][customer.City])
                    countries[customer.Country][customer.City]=1
                else countries[customer.Country][customer.City]+=1           
            
            
            return countries

        },[])
        let keys = Object.keys(citiesByCountries[country])
        for(let i in keys){
            result.push({"name":keys[i],"count":citiesByCountries[country][keys[i]]})
        }
        result.sort((a,b)=>{return b.count-a.count})
        dispatch(updateCityInfo(result))
        dispatch(sortByCompanies(result[0].name))
    }
}
export const sortByCountries=()=>{
    return dispatch=>{
        let countries=[]
        let result=[]
        data.Customers.map((curr)=>{
            return !Object.keys(countries).includes(curr.Country) ? countries[curr.Country]=1 : countries[curr.Country]+=1
        })
        let keys = Object.keys(countries)
        for(let i in keys){
            result.push({"name":keys[i],"count":countries[keys[i]]})

        }
            result.sort((a,b)=>{return b.count-a.count})
            // console.log(result)
            
            dispatch(updateCountryInfo(result))
            dispatch(sortByCities(result[0].name))
            
        }
        
    }

export const init=()=>{
    return dispatch=>{
        dispatch(sortByCountries())
        
    }
    
}
   













// export const sortByCountries=()=>{
//     let countries=[]
//     let result=[]
//     data.Customers.map((curr)=>{
//         return !Object.keys(countries).includes(curr.Country) ? countries[curr.Country]=1 : countries[curr.Country]+=1
//     })
//     let keys = Object.keys(countries)
//     for(let i in keys){
//         result.push({"country":keys[i],"count":countries[keys[i]]})

//     }
//     result.sort((a,b)=>{return b.count-a.count})
//     console.log(result)
//     updateCountryInfo(result)
    
// }
// export const sortByCities=()=>{
//     let cities=[]
//     let result=[]
//     data.Customers.map((curr)=>{
//         return !Object.keys(cities).includes(curr.City) ? cities[curr.City]=1 : cities[curr.City]+=1
//     })
//     let keys = Object.keys(cities)
//     for(let i in keys){
//         result.push({"city":keys[i],"count":cities[keys[i]]})

//     }
//     result.sort((a,b)=>{return b.count-a.count})
    // console.log(result)
//}