import React from "react";
import Comments from "./Comments"

function Filter({ views,
    dateUploaded,
    upvotes,
    downvotes,
    comments 
}) {




    return (
        <>
        <div>
            { views } Views | Uploaded { dateUploaded }
        </div>
        <div>
            <br/>
            <button>{ upvotes }👍</button><button>{ downvotes }👎</button>
        </div>
        <div>
            <br/>
            <button><b><em>Hide Comments</em></b></button>
            <hr/>
        </div>
        <Comments
        comments = { comments }
        />
        </>
    )
}

export default Filter;