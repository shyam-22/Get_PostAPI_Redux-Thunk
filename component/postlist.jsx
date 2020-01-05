import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchPostList} from "../redux/actions/action";
import Postuser from "./postuser";

class Postlist extends Component
{
    componentDidMount()
    {
        this.props.fetchPostList();
    }
    render()
    {
        return(
            <div className="container">
                
                    {
                        this.props.list.slice(1,6).map(item =>(
                            <div className="col-md-12" key={item.id}>
                        <h2>TITLE : {item.title}</h2>
                        <hr/>
                        <p>BODY : {item.body}</p>
                        <hr/>
                        <Postuser id={item.id}/>
                            </div>
                        ))
                    }
                    </div>
              
        )
    }
};
const mapStateToProps =state =>
{
    console.log(state);
    return {list: state.Postlist};
}
export default connect(mapStateToProps,{fetchPostList})(Postlist);