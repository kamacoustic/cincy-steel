import React from 'react'
import {  Modal, Button, ModalBody } from 'reactstrap'




function FullModal({isOpen}) {

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
   src="https://www.youtube.com/embed/-psTow5_Gtw"
   frameBorder="0"
   allow="autoplay; encrypted-media"
   allowFullScreen
   title="video"
    />{" "}
    <div className='modal-footer'>
    <p>
    Audience size: Large (200+ people)
    Examples of gigs played: Larger festivals, car shows, holiday concerts, city parks, etc.
    </p>
 </div>
    
   </ModalBody>
   </Modal>
    
)

}


export default FullModal