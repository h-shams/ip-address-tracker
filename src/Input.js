import './Input.css'
import arrow from './images/icon-arrow.svg'
import { useState } from 'react';

function Input(props) {
  const [inputValue, setInputValue] = useState('')
  
  function handleChange(event) {
    setInputValue(event.target.value)
  }
  
  function handleClick(event) {
    props.onSubmit(inputValue)
  }
  
  return (
    <div className="input">
      <input type="text"
             className="input__input"
             placeholder="Search for any IP address or domain"
             value={inputValue}
             onChange={handleChange}
      />
      <button className="input__button" onClick={handleClick}>
        <img src={arrow}/>
      </button>
    </div>
  );
}

export default Input;
