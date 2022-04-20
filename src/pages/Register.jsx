import React from "react";
import { useState } from "react";
import axios from "axios";

function Register(){
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setbirthdate] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        console.log(  username,
            password,
            firstname,
            lastname,
            birthdate)
        try {
          const res = await axios.post("https://161.246.6.18:8880/api/Accounts",{
              
            //ไม่แน่ใจบรรทัดนี้
          
            username:username,
            password:password,
            firstname:firstname,
            lastname:lastname,
            birthdate:birthdate,
            
          },{ withCredentials: true,
            headers:{'Content-Type': 'application/json'}});
          console.log("kuy")
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
      };


    return(
                <div class="flex justify-center items-center h-screen w-full bg-amber-300">
            <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register</h1>
                <form  onSubmit={handleSubmit}>
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">First Name</label>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" onChange={e=>setFirstname(e.target.value)}/>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Last Name</label>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" onChange={e=>setLastname(e.target.value)}/>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="username">Username</label>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="username" id="username" onChange={e=>setUsername(e.target.value)}/>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="password">Password</label>
                        <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="Date">Date</label>
                        <input class="border py-2 px-3 text-grey-800" type="date" name="birthdate" id="birthdate"onChange={e=>setbirthdate(e.target.value)} />
                    </div>
                    <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
                </form>
                {/* {error && <span style={{color:"red", marginTop:"10px"}}>form still not complete</span>} */}
                <a class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/login">Already have an account?</a>
            </div>
        </div>
    );
}
export default Register;