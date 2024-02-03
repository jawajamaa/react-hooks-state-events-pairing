import React from "react";

function Comment({ user, comment }) {



    return (
        <>
           <div>
                <h3><b>{ user }</b></h3>
           </div>
           <div>
                <p>{ comment }</p>
           </div>
        </>
    )
}

export default Comment;


