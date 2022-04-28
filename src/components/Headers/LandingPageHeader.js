/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Card, CardBody, Row } from "reactstrap";
import TwoModal from "components/Modals/TwoModal";
import ThreeModal from "components/Modals/ThreeModal";
import SixModal from "components/Modals/SixModal";
import FullModal from "components/Modals/FullModal";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [openTwoModal, setOpenTwoModal] = React.useState(false)
  const [openThreeModal, setOpenThreeModal] = React.useState(false)
  const [openSixModal, setOpenSixModal] = React.useState(false)
  const [openFullModal, setOpenFullModal] = React.useState(false)

  const toggleSetOpenTwoModal = () => {
       setOpenTwoModal(!openTwoModal)
   }

   const toggleSetOpenThreeModal = () => {
    setOpenThreeModal(!openThreeModal)
}

const toggleSetOpenSixModal = () => {
  setOpenSixModal(!openSixModal)
}

const toggleSetOpenFullModal = () => {
  setOpenFullModal(!openFullModal)
}

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/drums.jpg").default + ")",
      
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div 
          className=" motto text-center"
          style={{
            fontWeight: "bold",
            textShadow: "2px 2px 2px black, 0 0 5px darkblue"
          }}
          
          >
            <h1>Welcome!</h1>
            <h3>The official website of Cincy Steel!</h3>
            

            
            <div className="example-vid">
            
              <h3>Watch and book for your event now!</h3>
              <Container>
                <Row xs="2">
                  <Card
                  onClick={toggleSetOpenTwoModal}
                  style={{
                    cursor:"pointer"
                  }}
                  >
                    <img 
                    className="card-img" 
                    src= {require("assets/img/two.jpg").default} 
                    alt="Card image"
                    
                    >
                    </img>
                    <div className="card-img-overlay">
                    
                      <h4 
                      className="card-title text-white"
                      >
                      2 Players
                      </h4>
                      
                    </div>
                  </Card>
                  {openTwoModal && <TwoModal isOpen={setOpenTwoModal} />}
                  
                  
                
                  <Card
                  onClick={toggleSetOpenThreeModal}
                  style={{
                    cursor:"pointer"
                  }}
                  >
                    <img 
                    className="card-img-top" 
                    src= {require("assets/img/three.jpg").default} 
                    alt="Card image cap"
                    
                    >
                    </img>
                    
                    <div className="card-img-overlay">

                      <h4 
                      className="card-title text-white"
                      >
                        3-4 Players
                      </h4>
                    </div>
                  </Card>
                  {openThreeModal && <ThreeModal isOpen={setOpenThreeModal} />}

                  <Card
                  onClick={toggleSetOpenSixModal}
                  style={{
                    cursor:"pointer"
                  }}
                  >
                    <img 
                    className="card-img-top" 
                    src= {require("assets/img/six.jpg").default} 
                    alt="Card image cap"
                    
                    >
                    </img>

                    <div className="card-img-overlay">
                      <h4 
                      className="card-title text-white"
                      >
                      6-8 Players
                      </h4>
                    </div>
                  </Card>
                  {openSixModal && <SixModal isOpen={setOpenSixModal} />}

                  <Card
                  onClick={toggleSetOpenFullModal}
                  style={{
                    cursor:"pointer"
                  }}
                  >
                    <img 
                    className="card-img-top" 
                    src= {require("assets/img/full.jpg").default} 
                    alt="Card image cap"
                    >
                    </img>

                    <div className="card-img-overlay">
                      <h4 
                      className="card-title text-white"
                      >
                      Full Band!
                      </h4>
                    </div>
                  </Card>
                  {openFullModal && <FullModal isOpen={setOpenFullModal} />}
                </Row>
              </Container>
            
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
