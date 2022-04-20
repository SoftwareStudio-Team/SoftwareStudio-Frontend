import React from "react";

import axios from "axios";
function Change(){


            return(
                <div class="flex justify-center items-center h-screen w-full bg-amber-300">
            <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Change data</h1>
                <form  >
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="username">Username</label>
                        <input class="border py-2 px-3 text-grey-800" type="text" name="username" id="username" onChange={e=>setUsername(e.target.value)}/>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label class="mb-2 font-bold text-lg text-gray-900" for="password">New Password</label>
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
export default Change;