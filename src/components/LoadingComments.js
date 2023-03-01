import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const LoadingComments = () => {
    return (
        <div>
            <div>
                <p style={{'width': '20%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '50%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '10%', 'padding-left': '1rem'}}><Skeleton /></p> 
            </div>
            <div>
                <p style={{'width': '20%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '50%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '10%', 'padding-left': '1rem'}}><Skeleton /></p> 
            </div>
            <div>
                <p style={{'width': '20%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '50%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '10%', 'padding-left': '1rem'}}><Skeleton /></p> 
            </div>
            <div>
                <p style={{'width': '20%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '50%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '10%', 'padding-left': '1rem'}}><Skeleton /></p> 
            </div>
            <div>
                <p style={{'width': '20%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '50%', 'padding-left': '1rem'}}><Skeleton /></p> 
                <p style={{'width': '10%', 'padding-left': '1rem'}}><Skeleton /></p> 
            </div>
        </div>
    )
}