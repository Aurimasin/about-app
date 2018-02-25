import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

const ModalView = ({label, history, children}) => (
    <Modal
        appElement={document.getElementById('app')}
        isOpen={true}
        contentLabel={label}
        onRequestClose={history.goBack}
        className='Modal'
        overlayClassName='Overlay'
    >
        {children}
    </Modal>
);

export default withRouter(ModalView);