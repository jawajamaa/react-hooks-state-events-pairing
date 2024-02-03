import React, { useState } from "react";
import Comments from "./Comments"

function Filter({ views,
    dateUploaded,
    upvotes,
    downvotes,
    comments, 
}) {
    const [upVotes, setUpVotes] = useState(9210);
    const [downVotes, setDownVotes] = useState(185);
    const [commentsHidden, setCommentsHidden] = useState(false);

        function handleClick(event) {
            console.log(event.target.id)
            if (event.target.id === "thumbsUp") {
                setUpVotes(upVotes=>upVotes+1);
            }
            if (event.target.id === "thumbsDown") {
                setDownVotes(downVotes=>downVotes+1);
            } 
            if (event.target.id === "hideComments") {
                setCommentsHidden(!commentsHidden);
            }
        }
console.log(commentsHidden)

    return (
        <>
        <div>
            { views } Views | Uploaded { dateUploaded }
        </div>
        <div>
            <br/>
            <button id = "thumbsUp" onClick = { handleClick }>{ upVotes }👍</button>
            <button id = "thumbsDown" onClick = { handleClick }>{ downVotes }👎</button>
        </div>
        <div>
            <br/>
            <button id = "hideComments" onClick = { handleClick }>{commentsHidden ? "Show Comments" : "Hide Comments"}</button>
            <hr/>
        </div>
        <div>
            {!commentsHidden ? 
            <Comments
                comments = { comments } />
                : null
            }
        </div>
        </>
    )
}

export default Filter;