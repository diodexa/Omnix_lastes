import { useState, useRef, useLayoutEffect } from "react";

export default function DropdownTrain() {
  const buttonRef=useRef <HTMLButtonElement> (null)
  const dropdownRef=useRef <HTMLDivElement> (null)

  const [isOpen,setisOpen] = useState (false)
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  });

  useLayoutEffect(()=>{
    if (!isOpen) return;
    if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left
      });
  

      if(isOpen && buttonRef.current && dropdownRef.current){
        setPosition({
          top: rect.bottom, 
          left: rect.left ,
        }
        )
      }
  },[isOpen])

  return (
    <div>
      <button style={{border:"2px solid",padding:"10px",position:"fixed"}} onClick={()=>setisOpen(!isOpen)} ref={buttonRef}> Dropdown</button>
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