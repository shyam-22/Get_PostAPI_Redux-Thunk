import React from "react";
import axios from "axios";


export const fetchPostList = async() =>
{
    let response= await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);

};