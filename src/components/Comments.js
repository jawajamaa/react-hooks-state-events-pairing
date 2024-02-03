import React from "react";
import Comment from "./Comment";

function Comments({ comments }) {

    console.log(comments);

    return (
        <>
        <div>
            <h1><b>{ comments.length } Comments</b></h1>
        </div>
        <div>
            { comments.map((remark)=>(
                <Comment
                key = { remark.id }
                user = { remark.user }
                comment = { remark.comment }
                />
            ))}
        </div>
        </>
    )
}

export default Comments;