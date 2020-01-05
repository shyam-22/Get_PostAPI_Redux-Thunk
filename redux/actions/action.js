// import React from "react";
import axios from "axios";


export const fetchPostList = () =>
{
    return async(dispatch) =>
    {
        let response= await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({type: "FETCH_LIST", payload :response.data});
    console.log(response); 
    }
};


export const fetchuserlist =(id)=>
{
    return async(dispatch)=>
    {
        let response= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type: "FETCH-USER", payload: response.data});

    }
};


