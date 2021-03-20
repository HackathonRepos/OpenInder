import React from "react";
import { makeStyles } from "@material-ui/core/styles";



function Project(proj_id, proj_name) {

    const useStyles = makeStyles((theme) => ({
        root: {
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "width": "100%",          
            "cursor":"pointer", 
            "background-color": "gray",
            "border-radius": "4px",
            "min-height": "25px",
            "line-height": "25px", //Quick hack to vertically center text
            "margin-top":"10px",
          },
        column: {
            "float": "left",
            "width": "50%",
        }
    }));
      
    const classes = useStyles(); // Imports prementioned CSS
    return (
        <div className={classes.root} onClick={()=>{window.location="../../projects/"+proj_id.proj_id}}>
            <div>
                {proj_id.proj_name}
            </div>
            <br/>
            <span className={classes.column}>
                Text1
            </span>
            <span className={classes.column}>
                Text2
            </span>
        </div>
    ); 
}

export default Project;
