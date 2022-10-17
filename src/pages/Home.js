import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from "../images/mobile-image-banner.png"
import statesec from "../images/static-page.jpg"
import rightsecond from "../images/right-second.png"
import bottomsecond from "../images/bottom-second.png"
import userfriend from "../images/user-friend.jpg"
import whatdo from "../images/what-do.jpg"
import yash from "../images/yash.png"
import ContactForm from "../components/contact.js"
function homedata() {
    return (
        <div class="home">
            <div class="section-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">

                            <h1>Make cool landing with Us</h1>

                            <p>We develop the best web landing page which will help you showcase your business,
                                lifestyle, social, or shopping web in the best possible manner.</p>
                        </div>
                        <div class="col-md-6">
                            <div className="header-right-image"><img alt="logo" src={phone} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-let-start">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div className="row let-row">
                                <div className="let-card"><img alt="logo" src={statesec} />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 u-section-3">
                            <p class="u-text u-text-1">01</p>
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color">AN INSPIRATIONAL TECHNOLOGY</h2>
                            <p className="text-one">Create professional website designs. Responsive, fully customizable with easy Drag-n-Drop jscomposer, elementor editor.
                                Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 u-section-3">
                            <p class="u-text u-text-1">02</p>
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color">Quickly pick up </h2>
                            <p className="text-one">How much time do you think that you get to make a good impression with a potential customer? If you’re
                                talking about interacting with them online, you have less than three seconds.</p>
                        </div>
                        <div class="col-md-6">
                            <div className="row let-row">
                                <div className="right-card"><img alt="logo" src={rightsecond} /></div>
                                <div className="right-second"><img alt="logo" src={bottomsecond} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-1">3 Benefits of a Design Studio</h2>

                            <p>We develop the best web landing page which will help you showcase your business,
                                lifestyle, social, or shopping web in the best possible manner.</p>
                        </div>
                        <div class="col-md-6">

                        </div>
                        <div className="row inner-row">
                            <div class="col-md-4">
                                <div className="inner-card"><span>1</span><h3>CONVENIENCE</h3>
                                    <p>Sit amet consectetur adipiscing elit. Aenean et tortor at risus viverra adipiscing at.
                                        A scelerisque purus semper eget duis at. Non sodales neque sodales ut etiam.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className="inner-card"><span>2</span><h3>CUSTOMIZATION</h3>
                                    <p>Sit amet consectetur adipiscing elit. Aenean et tortor at risus viverra adipiscing at.
                                        A scelerisque purus semper eget duis at. Non sodales neque sodales ut etiam.</p></div>
                            </div>
                            <div class="col-md-4">
                                <div className="inner-card"><span>3</span><h3>CREATIVITY</h3>
                                    <p>Sit amet consectetur adipiscing elit. Aenean et tortor at risus viverra adipiscing at.
                                        A scelerisque purus semper eget duis at. Non sodales neque sodales ut etiam.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="whattodo">
               
                <div className="container">
                    <div class="row">   
                    <div class="col-md-6">
                        <div className="row let-row">
                            <div className="right-card"><img alt="logo" src={userfriend} /></div>
                        </div>
                    </div>
                    <div class="col-md-6 u-section-3">
                        <div className="inner-what">
                            <p class="u-text u-text-1">03</p>
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color">USERFRIENDLY DESIGN</h2>
                            <p className="text-one">How much time do you think that you get to make a good impression with a potential customer? If you’re
                                talking about interacting with them online, you have less than three seconds.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="whattodos">
            <div className="container">
                    <div class="row">   
                    <div class="col-md-6 u-section-3">
                        <div className="inner-what">
                            <p class="u-text u-text-1">04</p>
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color">WHAT WE DO </h2>
                            <p className="text-one">While you could create a separate version of your website that works well on mobile devices from the one people see on desktop,
                                for most businesses the better option is to make one website that’s responsive.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="row let-row">
                            <div className="right-card"><img alt="logo" src={whatdo} /></div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <div class="section-profile">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-1">Pro​file</h2>
                            <h3>I am professional web developer </h3>
                        </div>
                        <div class="col-md-12">
                            <div class="u-border-8" alt="" data-image-width="900" data-image-height="978">
                                <img alt="logo" src={yash} />
                            </div>
                            <div className="col-md-12 about-me">
                                <p>Senior Web Developer responsibilities include leading a team of junior developers,
                                    refining website specifications and resolving technical issues. To be successful in this role,
                                    you should have extensive experience building web pages from scratch and in-depth knowledge of
                                    at least one of the following programming languages: Javascript, react or PHP.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="u-custom-font u-font-oswald u-text u-text-body-alt-color u-text-1">Contact us for more details</h2>
                            <p>Just text us, we dlivered best experience</p>
                        </div>
                        <div class="col-md-6">
                            <div class="u-border-8" alt="" data-image-width="900" data-image-height="978">
                            <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default homedata;