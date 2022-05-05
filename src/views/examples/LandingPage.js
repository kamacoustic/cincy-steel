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

// non-client dependencies
import { send } from "@emailjs/browser"
import axios from "axios";





function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  // Logic for sending emails with emailjs

  const [contactInfo, setContactInfo] = React.useState({
    from_name: '',
    to_name: 'Mr. Mojo',
    reply_to: '',
    message: ''
  })

  const [thanksMessage, setThanksMessage] = React.useState(false)

  const toSubmit = (e) => {
    e.preventDefault()
    send(
        'service_1p2rvpc',
        'template_5l6ljre',
        contactInfo,
        'user_lqLr167J4YsZhVWPD9Ew4'
    )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text)
            setThanksMessage(true)
            
        })
        .catch((err) => {
            console.log('FAILED', err)
        })
  }

  const handleChange = (e) => {
    setContactInfo({...contactInfo, [e.target.name]: e.target.value})
  }

  // Logic for api calls for loading upcoming events
 


  const getEventInfo =  () => {
    axios.get('http://localhost:1337/api/upcoming-events').
      then( response => {

        document.getElementById("upcoming_events").innerHTML = "<div class=\"container\"><h2>Upcoming Events</h2></div>"; // Reset the innerHTML each time this function runs (else it will append on reloads)

        for (let index = 0; index < response.data.data.length; index++) { // for each element in the array, add another "Event Container" to "Upcoming Events" and populate it with the specific even't details
          let element = response.data.data[index];
          let date_array = element.attributes.event_date.split("-");
          let event_year = date_array[0];
          let event_month = date_array[1];
          let event_day = date_array[2];
          let date_string = event_month + "/" + event_day + "/" + event_year;
          let title_string = element.attributes.event_title;
          document.getElementById("upcoming_events").innerHTML +=
          "<div class=\"container\">" +
          "<h4>" + element.attributes.day + ". " + date_string + ": " + title_string + " @ " + element.attributes.event_location + " " + element.attributes.event_time + "</h4>" +
          "</div>";
          
        }
      })
  }

    
   React.useEffect(getEventInfo)


  //  const getPhotos =  () => {
  //   axios.get('http://localhost:1337/api/photos?populate=*').
  //     then( response => {

  //       document.getElementById("upcoming_events").innerHTML = "<div class=\"container\"><h2>Upcoming Events</h2></div>"; // Reset the innerHTML each time this function runs (else it will append on reloads)

// let image_loop_array = response.data.attributes.image.data;

  //       for (let index = 0; index < image_loop_array.length; index++) { // for each element in the array, add another "Event Container" to "Upcoming Events" and populate it with the specific even't details
  //         let element = image_loop_array[index].attributes;
  //         let date_array = element.aevent_date.split("-");
  //         let event_year = date_array[0];
  //         let event_month = date_array[1];
  //         let event_day = date_array[2];
  //         let date_string = event_month + "/" + event_day + "/" + event_year;
  //         let title_string = element.event_title;
  //         document.getElementById("upcoming_events").innerHTML +=
  //         "<div class=\"container\">" +
  //         "<h4>" + element.day + ". " + date_string + ": " + title_string + " @ " + element.event_location + " " + element.event_time + "</h4>" +
  //         "</div>";
          
  //       }
  //     })
  // }

    
  //  React.useEffect(getEventInfo)
   



   

   

   

   

    



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
            <SectionCarousel jParams="" />
          </Container>
        </div>
        <div className="section" id="upcoming_events">
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
                <Form className="contact-form" method="post" onSubmit={toSubmit}>
                  <Row>
                    <Col md="6">
                      <label htmlFor="name">Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        placeholder="Name"
                         type="text"
                         name="from_name"
                         onChange={handleChange}
                         value={contactInfo.from_name}
                          />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label htmlFor="email">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        placeholder="Email"
                         type="text" 
                         name="reply_to"
                         onChange={handleChange}
                         value={contactInfo.reply_to}
                         />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Excited to hear from you!"
                    type="textarea"
                    name="message"
                    rows="4"
                    onChange={handleChange}
                    value={contactInfo.message}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button 
                      className="btn-fill" 
                      color="danger" 
                      size="lg"
                      type="submit"
                      value="submit"
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                  {thanksMessage && <h1 className="text-white">Thanks!</h1>}
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
