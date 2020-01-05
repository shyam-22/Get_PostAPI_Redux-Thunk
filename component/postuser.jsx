import React, { Component } from "react";

import {connect} from "react-redux";
import {fetchuserlist} from "../redux/actions/action";

class Postuser extends Component
{
    constructor(props)
    {
        super();
    };

    componentDidMount()
    {
    this.props.fetchuserlist(this.props.id);
    }

    render()
    {
        if(!this.props.user)
        {
            return null;
        }


        return(
<div className="container">
        <div className="col-lg-12">
        <h2>UserName:{this.props.user.name}</h2>
        </div>
    </div>

        );
    }
};
const mapStateToProps = (state,ownprops) =>
{
 console.log(state,ownprops);
 return {user:state.postuser.find(item=>item.id===ownprops.id)}
 
}

export default connect(mapStateToProps,{fetchuserlist})(Postuser);
