import './Input.css'
import arrow from './images/icon-arrow.svg'
import { useState } from 'react';

function Input(props) {
  const [inputValue, setInputValue] = useState('')
  
  function handleChange(event) {
    setInputValue(event.target.value)
  }
  
  function handleClick(event) {
    const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/
    if ( regex.test(inputValue) ) {
      props.onSubmit(inputValue)
    } else {
      // invalid ip address
    }
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
