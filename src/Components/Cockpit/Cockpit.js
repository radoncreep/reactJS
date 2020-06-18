import React, { useEffect, useRef} from 'react';
import './Cockpit.css';


const cockpit = props => {
  // const toggleBtnRef = useRef(null);

  // This hook "useEffect runs after every render cycle"
  // useEffect(() => {
  //   // toggleBtnRef.current.click();
  //   // return () => {
  //   //   console.log(`[Cockpit.js] clean up work in useEffect`);
  //   // }
  // })
 
  return (
      <div className="">
            <h1>{props.title}</h1>
        <p className="red">It is really working</p>

        <button className="Cockpit button"
          onClick = {props.clicked}>
            Switch Name
        </button>
      </div>
  )
};

export default cockpit;