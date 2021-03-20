import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";



function Project(proj_id, proj_name) {
    function moveLeft() {
        // Method Stub
        console.log("Left!")
    }

    function moveRight() {
        // Method Stub
        console.log("Right!")
    }
    
    function clickProject() {
        // COMMENTED FOR DEBUGGING PURPOSES
        // window.location="../../projects/"+proj_id.proj_id
        console.log("Project Page!")
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            "display": "flex",
            "flex-direction": "column",
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
        <div className={classes.root} onClick={()=>{clickProject()}}>
            <div>
                {proj_id.proj_name}
            </div>
            <br/>
            <div>
                <div className={classes.column}>
                    <ChevronLeftIcon onClick={(event) => {
                        moveLeft();
                        event.stopPropagation(); //Prevents div onClick from triggering
                    }}/>
                </div>
                <div className={classes.column} style={{"text-align": "right"}}>
                    <ChevronRightIcon onClick={(event) => {
                        moveRight();
                        event.stopPropagation(); //Prevents div onClick from triggering
                        }}/>
                </div>
            </div>
        </div>
    ); 
}

export default Project;
