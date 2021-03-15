import React from 'react';
import {Collapse} from 'react-collapse';

export default function Collapsible({ children, buttonText }) {
  const [isActive, setActive] = React.useState(false);
  
  function toggle(){
    setActive(!isActive);
  }

  return (
    <div>
      <button className="focus:outline-none hover:border-none focus:border-none focus:outline-none hover:outline-none tracking-tighter text-2xl block w-full text-left leading-tight" onClick={toggle}>{ buttonText } {isActive ? '-' : '+'}</button>

      { isActive && (
        <div className="mt-1">
          {children}
        </div>
      )}
    </div>
  )
}