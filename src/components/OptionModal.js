import React from 'react';
import Modal from 'react-modal';

export const OptionModal = () =>{
    return(
        <Modal 
        isOpen={true}
        contentLabel='Selected Option'
        className='modal'>
                <h3>Cannot connect to API</h3>
        </Modal>
    )
}