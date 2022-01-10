import React from "react";
// import call from "./Image/call.jpeg";
// import fb from "./Image/fb.png";
// import website from "./Image/website.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-st">
        <span className="fot">
          <div className="call">
            
            <i class="fas fa-phone-square-alt"></i>
            
            <span style={{fontSize:"14px", fontWeight:"200",color:"white"}}><a className="text-dec" href="18002001234">Toll free 18002001234</a></span>
            
          </div>
          <div className="fb">
          <i class="fab fa-facebook"></i>
          <span style={{fontSize:"14px", fontWeight:"200",color:"white"}}><a className="text-dec" href="www.facebook.com/cripumps">www.facebook.com/cripumps</a></span>
          </div>
          <div className="web">
            <i class="fas fa-globe"></i>
            <span style={{fontSize:"14px", fontWeight:"200",color:"white"}}><a className="text-dec" href="www.crigroups.com">www.crigroups.com</a></span>
          </div>
        </span>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
