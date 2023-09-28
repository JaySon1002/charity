import React from "react";
import './Ourmission.css';

const Ourmission = () => {
    return (  
        <>
        
            <div className="mission-container">
                <div className="mission-top">
                    <img className="back1" src="/images/about-bg1.png" alt=""/>
                    <img className="back2" src="/images/about-bg2.png" alt=""/>
                    <h2>Our Mission</h2>
                    <p>At "Passion for Giving", our goal is to meet urgent needs, improve people's lives, and foster a culture of giving within the community. We sincerely think that small acts of kindness can lead to significant transformations.</p>
                </div>
                <div className="mission-bottom">
                    <div className="mission">
                        <div className="mission-icon">
                            <img className="women" src='/images/icon-women.png' alt=''/>
                        </div>
                        <p>To organize significant events and initiatives that inspire participation in the community, address urgent social concerns, and influence positive change. </p>
                    </div>
                    <div className="mission">
                        <div className="mission-icon">
                            <img className="earth" src='/images/icon-earth.png' alt=''/>
                        </div>
                        <p> To empower the local community in Manila by encouraging active engagement, idea sharing, and the contribution of time and resources through our website, fostering a brighter future for all.</p>
                    </div>
                    <div className="mission">
                        <div className="mission-icon">
                            <img className="heart" src='/images/icon-heart.png' alt=''/>
                        </div>    
                        <p>To encourage giving and have a significant impact on people's lives by facilitating secure, transparent, and meaningful donations that meet urgent needs, promote change, and make the brighter futures of those we serve.</p>
                    </div>
                    <img className="back3" src="/images/about-bg2.png" alt=""/>
                    <img className="back4" src="/images/about-bg1.png" alt=""/>
                </div>
                
            </div>


        </> 
    );
}
 
export default Ourmission;