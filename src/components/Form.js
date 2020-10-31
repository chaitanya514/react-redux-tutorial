import React,{useState} from "react";
import { connect } from "react-redux";
import {addArticle} from "../actions"

const mapDispatchToProps = (dispatch) =>{
    return {addArticle: article=>dispatch(addArticle(article))}
}

const Form = (props) => {
    const [title,setTitle] = useState("")

    const {addArticle} = props;
    function handleSubmit(e){
        e.preventDefault();
       setTitle(addArticle({title})) ;
        setTitle("");
        console.log("title",title)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <button type="submit">SAVE</button>
        </form>

    )
}

export default connect(null,mapDispatchToProps)(Form);