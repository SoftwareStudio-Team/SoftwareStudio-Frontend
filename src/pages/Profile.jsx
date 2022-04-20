import { useEffect, useRef , useState} from "react";
import { Context } from "../context/Context"
import {useParams} from "react-router-dom";
import axios from "axios";
function Profile(){
    let userData = window.localStorage.getItem("user")
      userData = JSON.parse(userData)
      console.log(userData.id)
      let id =useParams().id;
    
   
    const [ProfileList, setProfileList] = useState({
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        role: "",
        isBanned: ""
    });
    const getdata = async() => {
        const load = await axios.get(`https://161.246.6.18:8880/api/Accounts/${id}`,{ withCredentials: true}, {headers:{'access-control-allow-credentials': 'true'}})
      
        setProfileList({...ProfileList,
            id: load.data.id,
            username: load.data.username,
            firstName: load.data.firstName,
            lastName: load.data.lastName,
            birthDate: load.data.birthDate,
            role: load.data.role,
            isBanned: load.data.isBanned
           
         
          
        })
        console.log(load)
        
        
      }
      

      useEffect( () => {
        getdata()
        window.scrollTo(0, 0);
       },[id]);

    return(
        <div className="flex flex-col">
            <div>{ProfileList.id}</div>
            <div>{ProfileList.firstName}</div>
            <div>{ProfileList.lastName}</div>
            <div>{ProfileList.username}</div>
            <div>{ProfileList.birthDate}</div>
            <div>{ProfileList.role}</div>
           
        </div>
    );
}
export default Profile;