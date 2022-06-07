import React from 'react'
import {  
        Modal,
        Button, 
        ModalBody, 
        ModalFooter,
        Form,
        Input,
        InputGroupAddon,
        InputGroupText,
        InputGroup,
        Container,
        Row,
        Col
         } from 'reactstrap'
         import { send } from "@emailjs/browser"


         




function TwoModal({isOpen}) {

    const [form, setForm] = React.useState(false)

    const toggleisOpen = () => {
        isOpen(false)
    }

    const toggleForm = () => {
        setForm(true)
    }

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
    
 


return (
   

   <Modal
   isOpen={isOpen}
   style={{
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
    }}
   
   >

   <Button
   close
//    toggle={toggleisOpen}
   onClick={toggleisOpen}
   >

   </Button>
   <ModalBody>
   <iframe
   src="https://www.youtube.com/embed/XHp4zbsxo94"
   frameBorder="0"
   allow="autoplay; encrypted-media"
   allowFullScreen
   title="video"
   
   
 />{" "}
 <div className='modal-footer'>
    <p>
        Audience size: Small/Medium (10-50 people)
        <br></br>
        Great for: Dinner parties, birthday parties, cocktail hours, etc.
    </p>
</div>
   </ModalBody>
   <ModalFooter
    style={{
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
    }}

   >
    <Button
        onClick={toggleForm}
    >
        Book now!
    </Button>
    {form &&
        <div className="section" id="contact">
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
                  {thanksMessage && <h1>Thanks! We'll get back to you shortly!</h1>}
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
    }
   </ModalFooter>
   </Modal>
    
)

}


export default TwoModal