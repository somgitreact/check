import axios from "axios"

const config = 'https://fakestoreapi.com'

export const apidata = async (endpoint)=>{
    console.log("--------", `${config}/${endpoint}`);
    
    try {
       let res = await axios.get(`${config}/${endpoint}`)
       if(!res.status == 200) throw new Error("network error")
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}