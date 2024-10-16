/// check in console log 
///get data here

import React from "react";
import Signin from "./Register";
let a = document.getElementById("Registerb");
a.addEventListener("click", () => {



    let email = document.getElementById("userEmail").value

    let password = document.getElementById("Empasswrd").value

    //// sesion storage check in apllication --- set data here
    window.sessionStorage.setItem("Email", email);
    window.sessionStorage.setItem("Userpasswrd", password);

    window.open("src\Pages\Login.jsx");
});

