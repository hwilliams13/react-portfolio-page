import React from 'react';

import '../MyInfo.css';

import resume from '../Resume_Harold_Williams_2019_SE.pdf';

class MyInfo extends React.Component {

    render() {
        return (
            <section id="my info">
                <div className="placeholder"></div>
                <div className="section-body">
                    <div className="section-header">
                        <p className="section-title">Connect With Me</p>
                        {/* <p id="blurb-2">From Legos to lines of code, blocks are blocks and I love to build</p> */}
                    </div>
                    <div id="contact-info-section">
                        <div className="info-container">
                            <img className="info-icon" src={this.props.phone} alt="Phone icon" />
                            <p>502-774-0973</p>
                        </div>
                        <a className="info-container" href="mailto: harold.williams.87@gmail.com">
                            <img className="info-icon" src={this.props.gMail} alt="GMail Logo" />
                            <p>harold.williams.87@gmail.com</p>
                        </a>
                        <a className="info-container" rel="noopener noreferrer" href="http://www.linkedin.com/in/harold-williams-3b208132" target="_blank">
                            <img className="info-icon" src={this.props.linkedIn} alt="LinkedIn Logo" />
                            <p>linkedin.com/in/harold-williams-3b208132</p>
                        </a>
                        <a className="info-container" rel="noopener noreferrer" href="https://github.com/hwilliams13" target="_blank">
                            <img className="info-icon" src={this.props.gitHub} alt="GitHub Logo" />
                            <p>github.com/hwilliams13</p>
                        </a>
                        <a className="info-container" rel="noopener noreferrer" href={resume} target="_blank">
                            <img className="info-icon" src={this.props.acrobat} alt="Phone icon" />
                            <p>resume</p>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default MyInfo;