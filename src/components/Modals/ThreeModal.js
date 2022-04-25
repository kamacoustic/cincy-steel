import React from 'react'
import {  Modal, Button, ModalBody } from 'reactstrap'




function ThreeModal({isOpen}) {

    const toggleisOpen = () => {
        isOpen(false)
    }
    
    React.useEffect(() => {
        // window.addEventListener('click', (e) => {
        //     const modalBackground = document.getElementsByClassName("modal")
            
            
            

        //     if (e.target === modalBackground) {
        //         isOpen(false)
        //     }
        // })
        
    })


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
   src="https://www.youtube.com/embed/eh52lwvo148"
   frameBorder="0"
   allow="autoplay; encrypted-media"
   allowFullScreen
   title="video"
 />{" "}
 <div className='modal-footer'>
    <p>
    Audience size: Medium (25-75 people)
    Examples of gigs played: Happy hours, quinceañeras, work after-hours events, etc.
    </p>
 </div>
   </ModalBody>
   </Modal>
    
)

}


export default ThreeModal