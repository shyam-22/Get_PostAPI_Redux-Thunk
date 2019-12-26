import React, { Component } from "react";
import {connect} from "react-redux";

import {fetchPostList} from "../redux/actions/action"
class Postlist extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        );
    }
};
const mapStateToProps =state =>
{
    console.log(state);
    return state;

    
}


export default connect(mapStateToProps,{})(Postlist);