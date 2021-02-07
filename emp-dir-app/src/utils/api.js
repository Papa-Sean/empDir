import axios from "axios";

export default{ 
    getUsers:function(){    
//api will return 200 results from the US
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};