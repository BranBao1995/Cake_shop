import React from 'react';

import classes from './BgVideo.css';
import Video from '../../assets/images/mixing-dough.mp4';

const bgVideo = (props) => {

    return (

        <div className={classes.bgVideo}>
            
            <video className={classes.vid} loop autoPlay>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>

    );


}

export default bgVideo;