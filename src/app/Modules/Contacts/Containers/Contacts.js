




// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import View from '../Components/View'
//
// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };
//
// class ContactsModal extends React.Component {
//
//     state = {
//         modalIsOpen: false
//     };
//
//     openModal() {
//         this.setState({ modalIsOpen: true });
//     }
//
//     afterOpenModal() {
//         // references are now sync'd and can be accessed.
//         this.subtitle.style.color = '#f00';
//     }
//
//     closeModal() {
//         this.setState({ modalIsOpen: false });
//     }
//
//     render() {
//         return (
//             <View
//                 state={this.state}
//                 open={this.openModal}
//                 after={this.afterOpenModal}
//                 close={this.closeModal}
//             />
//         );
//     }
// }