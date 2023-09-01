// import React, { useState } from "react";

// import "./invite.css";

// export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
//   const [formState, setFormState] = useState(
//     defaultValue || {
//       page: "",
//       description: "",
//       status: "live",
//     }
//   );
//   const [errors, setErrors] = useState("");

//   const validateForm = () => {
//     if (formState.page && formState.description && formState.status) {
//       setErrors("");
//       return true;
//     } else {
//       let errorFields = [];
//       for (const [key, value] of Object.entries(formState)) {
//         if (!value) {
//           errorFields.push(key);
//         }
//       }
//       setErrors(errorFields.join(", "));
//       return false;
//     }
//   };

//   const handleChange = (e) => {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     onSubmit(formState);

//     closeModal();
//   };

//   return (
//     <div
//       className="inviteModalContainer"
//       onClick={(e) => {
//         if (e.target.className === "inviteModalContainer") closeModal();
//       }}
//     >
//       <div className="inviteModal">
//         <div>
//           <div className="form-group">
//             <label htmlFor="page">Page</label>
//             <input name="page" onChange={handleChange} value={formState.page} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea
//               name="description"
//               onChange={handleChange}
//               value={formState.description}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="status">Status</label>
//             <select
//               name="status"
//               onChange={handleChange}
//               value={formState.status}
//             >
//               <option value="live">Live</option>
//               <option value="draft">Draft</option>
//               <option value="error">Error</option>
//             </select>
//           </div>
//           {errors && <div className="error">{`Please include: ${errors}`}</div>}
//           <button type="submit" className="btn" onClick={handleSubmit}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
