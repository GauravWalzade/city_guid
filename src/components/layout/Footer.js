import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* column1 */}
              <div className="col-md-3 col-sm-6">
                <h2>lorem ipsum</h2>
                <ul className="list-unstyled">
                  <li>lorem ipsum</li>
                  <li> lorem ipsum</li>
                  <li> lorem ipsum</li>
                  <li> lorem ipsum</li>
                </ul>
              </div>
              {/* column2 */}
              <div className="col-md-3 col-sm-6">
                <h2>lorem ipsum</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                </ul>
              </div>
              {/* column3 */}
              <div className="col-md-3 col-sm-6">
                <h2>lorem ipsum</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                </ul>
              </div>
              {/* column4 */}
              <div className="col-md-3 col-sm-6">
                <h2>lorem ipsum</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                  <li>
                    <a href="/">lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* footer bottom */}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} City guide App. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background:var(--mainDark); 
    padding-top:3rem;
    color:var(--mainWhite)
}
.footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
}
ul li a {
  color:var(--mainGrey);
}
ul li a:hover{
  color:var(--mainLightGrey);
}
`;
