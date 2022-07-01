// import { useEffect, useState } from "react";
// import React from "react";
// import ReactModalLogin from "react-modal-login";



// const SLModal = () => {

//     const [showModal, setShowModal] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//   const openModal = () => {
//     setShowModal(true);
//   }

//   const closeModal = () => {
//     setShowModal(false);
//     setError(null);
//   }

//   const onLoginSuccess = (method, response) => {
//     console.log("logged successfully with " + method);
//   }

//   const onLoginFail = (method, response) => {
//     console.log("logging failed with " + method);
//     setError(response);
//   }

//   const startLoading = () => {
//     setLoading(true);
//   }

//   const finishLoading = () => {
//     setLoading(false);
//   }

//   const afterTabsChange = () => {
//     setError(null);
//   }


//     return (
//       <div>
//         <button onClick={() => openModal()}>Open Modal</button>

//         <ReactModalLogin
//           visible={showModal}
//           onCloseModal={closeModal}
//           loading={loading}
//           error={error}
//           tabs={{
//             afterChange: afterTabsChange.bind(this)
//           }}
//           loginError={{
//             label: "Couldn't sign in, please try again."
//           }}
//           registerError={{
//             label: "Couldn't sign up, please try again."
//           }}
//           startLoading={startLoading.bind(this)}
//           finishLoading={finishLoading.bind(this)}
//         />
//       </div>
//     );
// }


// export default SLModal.js;