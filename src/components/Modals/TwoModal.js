import React from 'react'
import {  Modal, Button, ModalBody } from 'reactstrap'




function TwoModal({isOpen}) {

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
   src="https://www.youtube.com/embed/XHp4zbsxo94"
   frameBorder="0"
   allow="autoplay; encrypted-media"
   allowFullScreen
   title="video"
 />{" "}
 <div className='modal-footer'>
    <p>
        Audience size: Small/Medium (10-50 people)
        Examples of gigs played: Dinner parties, birthday parties, cocktail hours, etc.
    </p>
</div>
   </ModalBody>
   </Modal>
    
)

}


export default TwoModal