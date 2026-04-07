// import { useState, useEffect } from "react";
// // hooks are usually named exports rather than default
// export function useData(url) {
//   // state variable for holding fetched json data
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     if (url) {
//       let ignore = false;
//       setData(null); // reset data before loading new url
//       fetch(url)
//         .then((response) => response.json())
//         .then((json) => {
//           if (!ignore) setData(json);
//         })
//         .catch(() => {
//           if ((!ignore)) setData(null);
//       }
//     );

//       // cleanup function, in case url changes before complete
//       return () => {
//         ignore = true;
//       };
//     }
//   }, [url]);  // re-run effect if url changes
//               // return the data fetched from the given url
  
//   return data;
// }
// // save as useData.jsx in the 'hooks' folder


//  ============================= Module 07 Exercise 01 Side 34 =============================

import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false };
    case 'FETCH_START':
      return { data: null, loading: true };
    default:
      return state;
  }
};

export function useData(url) {
  const [state, dispatch] = useReducer(reducer, { data: null, loading: true });

  useEffect(() => {
    if (url) {
      let ignore = false;
      dispatch({ type: 'FETCH_START' });
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            dispatch({ type: 'FETCH_SUCCESS', payload: json });
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [url]);

  return state;
}