    import React from "react";

    function VidView({ video }) {
        // const options = {
        //     height="315",
        //     width="560", 
        //     frameborder="0", 
        //     allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", 
        //     allowfullscreen
        // }
        
        console.log(video);


        return (
              <>
                <iframe
                width = "560"
                height ="315"
                src = { video.embedUrl }
                frameborder="0"
                allowFullScreen
                title = { video.title }
                />
            </>
        )
    }

    export default VidView;