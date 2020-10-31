import React,{useState} from "react";
import { connect } from "react-redux";
import {addArticle} from "../actions"

const mapDispatchToProps = (dispatch) =>{
    return {addArticle: article=>dispatch(addArticle(article))}
}

const Form = (props) => {
    const [title,setTitle] = useState("");
    const [validation,setValidation] = useState("")


    const {addArticle} = props;
 
    function handleSubmit(e){
        e.preventDefault();
        if(!title){
            setValidation("enter title");
            return;
        }
       
        {
           
            setTitle(addArticle({title})) ;
                console.log("title",title)
        }
        setTitle("");
        setValidation("");
        
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
    <p>{validation}</p>
            <button type="submit">SAVE</button>
        </form>

    )
}

export default connect(null,mapDispatchToProps)(Form);