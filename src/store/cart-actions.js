import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
   
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-7dbf8-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      console.log('fetchDatazz',data)
      return data;

    };
    try {
      const cartData = await fetchHandler();
      console.log('yeelow',cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
    console.log('sendCartDayazxz')
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request To Database!",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      // Send state as Sending request

      const res = await fetch(
        "https://redux-http-7dbf8-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      console.log('9945',data)
      // Send state as Request is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Sent Successfully!!",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
// import { cartActions } from "./cart-slice";
// import { uiActions } from "./ui-slice";

// export const sendCartData = (cart) => {
//     return async (dispatch) => {

//         uiActions.showNotification({
//             open: true,
//             message: "Sending request",
//             type: "warning"
//         })

//         const sendRequest = async () => {
//             // sends state requests
//             dispatch(uiActions.showNotification({
//                 open: true,
//                 message: "Sending request",
//                 type: "warning"
//               }));
        
//              const res = await fetch("https://redux-http-7dbf8-default-rtdb.firebaseio.com/cartItems.json", {
//                 method: "PUT",
//                 body: JSON.stringify(cart)
//               });
        
//               const data = res.json();
              
//               // send state as req as notificatn
//               dispatch(uiActions.showNotification({
//                 open: true,
//                 message: "Sending request to data sucessfully",
//                 type: "success"
//               }));
           
//         }

        
// // thunk PATTERN
//         try {
//             await sendRequest()
//         } catch(err) {
//             sendRequest.catch(err => {
//                 console.log('err123',err)
//                 dispatch(uiActions.showNotification({
//                   open: true,
//                   message: "Sending request to data failed",
//                   type: "error"
//                 }));       
//               });
//         }
//     }
// }

// export const fetchData = () => {
//     return async (dispatch) => {
//       const fetchHandler = async () => {
//         const res = await fetch(
//           "https://redux-http-7dbf8-default-rtdb.firebaseio.com/cartItems.json"
//         );
//         const data = await res.json();
//         return data;
//       };
//       try {
//         const cartData = await fetchHandler();
//         console.log('cartData',cartData);
//         dispatch(cartActions.replaceData(cartData));
//       } catch (err) {
//         dispatch(
//           uiActions.showNotification({
//             open: true,
//             message: "Sending Request Failed",
//             type: "error",
//           })
//         );
//       }
//     };
//   };