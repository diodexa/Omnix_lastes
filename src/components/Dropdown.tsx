import { useState, useRef, useLayoutEffect } from "react";

export default function DropdownTrain() {
  const buttonRef=useRef <HTMLButtonElement> (null)
  const dropdownRef=useRef <HTMLDivElement> (null)

  const [isOpen,setisOpen] = useState (false)
  const [position, setPosition] = useState({
    top: 0,left: 0
  });

  useLayoutEffect(() => {
    if (!isOpen) return;
    if (!buttonRef.current || !dropdownRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();

    const spaceBottom = window.innerHeight - buttonRect.bottom;

    let finalTop = buttonRect.bottom;

    // flip ke atas jika tidak cukup space
    if (spaceBottom < dropdownRect.height && buttonRect.top > dropdownRect.height) 
      {finalTop = buttonRect.top - dropdownRect.height;}

    setPosition({
      top: finalTop,
      left: buttonRect.left,
    });

}, [isOpen]);

  return (
    <div>
      <button style={{border:"2px solid",padding:"10px",position:"fixed",top:"50%"}} onClick={()=>setisOpen(!isOpen)} ref={buttonRef}> Dropdown</button>
        {isOpen && 
        <div ref={dropdownRef} style={{position:"fixed", top: position.top, left:position.left, border:"1px solid"}}> 
          <div style={{padding:"10px"}}>1</div>
          <div style={{padding:"10px"}}>2</div>
          <div style={{padding:"10px"}}>3</div>
        </div>
        }
        
      
    </div>
  );
}