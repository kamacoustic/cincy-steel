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
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel";
import TwoModal from "components/Modals/TwoModal";
import ThreeModal from "components/Modals/ThreeModal";
import SixModal from "components/Modals/SixModal";
import FullModal from "components/Modals/FullModal";



function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
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
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div 
        className="section text-center"
        style={{borderBottom: "solid grey 1px"}}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
              
                <h2 className="title">Who is Cincy Steel?</h2>
                <h5 className="description">
                Cincy Steel was founded in 2017 and is comprised of musicians from all over the Greater Cincinnati area. 
                Its members learned to play at colleges such as Miami, UC, Northern Kentucky, and Xavier or at high schools such as Clark, Elder, or Walnut Hills (just to name a few).
                Some of them became music educators, while some hold desk jobs, but they all want to spread the sweet pan music across the city of Cincinnati.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <div 
          className="director"
          style={{marginLeft: "5%"}}
          >
          <h2>Meet our director!</h2>
          <div className="avatar">
            <img
              alt="..."
              style={{
                float: "right",
                maxWidth: "25%",
                height: "auto",
                borderRadius: "25%",
                marginLeft: "5px"
            }}
              src={require("assets/img/faces/director.png").default}
            />
        </div>
        <h3 className="name"> Mike Wendeln</h3>
        <h5 className="description" >
        Mike Wendeln has been teaching steelband full-time since 2009, 
        and residing in Cincinnati, Ohio, Wendeln directs steelband programs at Walnut Hills High School and Withrow High School.
        In addition, he founded the Cincy Steel community steelband. Accomplishments include teaching at Leon High School in 
        Tallahassee, Florida for 8 years where the steelband program grew to be one of the largest and most successful in the state. Throughout college and his professional career, he has had the opportunity to perform alongside many of the great pan players and educators in steel pan today, and has traveled to Trinidad on three occasions to absorb pan culture firsthand. In both 2015 and 2016, Wendeln performed with birdsong Steel Orchestra in the Trinidad National Panorama competition. Away from the classroom, Wendeln currently serves on the steering committee of the National Society of Steel Band Educators, and for the past three years, co-chaired their National Conference. He has earned a Bachelor degree in Music Education from Miami University and a Masters degree in Percussion Performance from Eastern Kentucky University and was a member of the Miami University Steel Band under Dr. Chris Tanner and EKU Steel Band under Dr. Jason Koontz. 
        </h5>
      </div>
        
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Lately. . . </h2>
            <SectionCarousel />
          </Container>
        </div>
        <div className="section">
          <Container>
            <h2>Upcoming Events</h2>
            <Container>
                <h4>Wed. 05/18/2022: Pans & Cans Tropical Night @ Taft's Brewporium 7pm</h4>
            </Container>
            <Container>
              <h4>Wed 07/20/2022: Pan & Cans @ Taft's Brewpourium 8pm</h4>
            </Container>
          </Container>
        </div>
        <div className="section section-dark landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact us</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Excited to hear from you!"
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
