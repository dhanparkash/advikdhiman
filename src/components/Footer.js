import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"
function Footers() {

    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div className="logo=footer"><img alt="logo" src={logo} style={{  height: 120, width: 120  }} /></div>
                        <p>We develop the best web landing page which will help you showcase your business, lifestyle, social,
                         or shopping web in the best possible manner.</p>
                    </div>
                    <div class="col-md-4">
                        <h3>Contact Us</h3>
                     <p>Email: Dhanparkashdhiman7@gmail.com</p>
                     <p>Email: yash.dhiman@advikitsolutions.com</p>
                     <p>Phone: +917895037707</p>
                        </div>
                    <div class="col-md-4">
                    <h3>Contact Us</h3>
                     <p>Email: Dhanparkashdhiman7@gmail.com</p>
                     <p>Email: yash.dhiman@advikitsolutions.com</p>
                     <p>Phone: +917895037707</p>
                        </div>
                </div>
            </div>
        </div>

    );
}

export default Footers;