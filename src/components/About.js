import React from 'react';

class About extends React.Component {

    render() {
        return (
            <section id="about">
                <div className="placeholder"></div>
                <div className="section-body">
                    <div className="section-header">
                        <p className="section-title">Digital Engineer | Atypical Nerd | Sports Lover</p>
                        <p id="blurb-2">From Legos to lines of code, blocks are blocks and I love to build</p>
                    </div>
                    <div id="about-profile-pic-section">
                        <img id="profile-pic" src={this.props.profilePic} />
                        <p>Hi! I'm Harold!</p>
                    </div>
                    <div id="about-full">
                        <p>I've always had a passion for creating. My love for Legos led to my degree in Mechanical Engineering. Seeing friends enjoying their switch into software sparked my interest in building in the digital world. Hearing of the better work-life balance sealed the deal and now I look forward to my future as a developer.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;