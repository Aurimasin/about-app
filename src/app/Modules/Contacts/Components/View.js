import React from 'react';
import Modal from '../../../Layout/Components/Modal';

export default () => {

    return(
    <Modal label="Contacts">
        <div className="contacts">
            <h1>Fell free to contact me</h1>
            <p>aurimas.in@gmail.com</p>
            <a href="https://github.com/Aurimasin/about-app"> <i className="fab fa-github" href="https://www.google.com"></i></a>
            <a href="https://www.linkedin.com/in/aurimas-i"> <i className="fab fa-linkedin"></i></a>
        </div>
    </Modal>
    )
}