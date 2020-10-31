import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {articles: state.articles}
}

const List = (props)=>{
    const {articles} = props;
    return (
        <ul>
            {articles.map((article,index)=>{
               return  <li key={index}>{article.title}</li>
            })}
            </ul>
    )
}

export default connect(mapStateToProps)(List);