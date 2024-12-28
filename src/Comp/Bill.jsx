// import React, { useContext } from "react";
// import UserContext from "../Context/CreateContext";

// const Bill = () => {
//   const { user } = useContext(UserContext);

//   return (
//     <div className="bg-black text-white py-20">
//       <h1 className="text-black bg-white font-bold text-center text-2xl mb-10">Your Order</h1>
//       <table className="table-auto border-collapse border border-gray-400 w-full text-center">
//         <thead>
//           <tr>
//             <th  className="border border-gray-400 px-4 py-2">#</th>
//             <th className="border border-gray-400 px-4 py-2">Description</th>
//             <th className="border border-gray-400 px-4 py-2">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.length > 0 ? (
//             user.map((item, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
//                 <td className="border border-gray-400 px-4 py-2">{item.name}</td>
//                 <td className="border border-gray-400 px-4 py-2">{item.price}</td>
//                 <td className="border border-gray-400 px-4 py-2">{}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td className="border border-gray-400 px-4 py-2" colSpan="3">
//                 No items ordered yet.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Bill;
import React, { useContext } from 'react';
import { UserContext } from '../Context/CreateContext';

const Bill = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="border-4 border-black py-20" id='bill'>
      <div>
        <h1 className="text-black font-bold text-center text-2xl mb-10">Your Order</h1>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">#</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {user.items.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{item.name}</td>
                <td className="border border-gray-400 px-4 py-2">${item.price}</td>
              </tr>
            ))}
            <tr>
              <td  colSpan="2" className="font-bold border border-gray-400 px-4 py-2">Total</td>
              <td className="font-bold border border-gray-400 px-4 py-2">${user.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bill;

