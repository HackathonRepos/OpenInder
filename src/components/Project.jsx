import React from "react";
import { makeStyles } from "@material-ui/core/styles";



function Project(proj_id, proj_name) {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            "cursor":"pointer", 
            "background-color": "gray",
            "border-radius": "4px",
            "min-height": "25px",
            "line-height": "25px", //Quick hack to vertically center text
          }        
    }));
      
    const classes = useStyles(); // Imports prementioned CSS
    return (
        <div className={classes.root} onClick={()=>{window.location="../../projects/"+proj_id.proj_id}}>
            {proj_id.proj_name}
        </div>
    ); 
}

export default Project;
