import './Header.css'

import Input from './Input.js'
import List from './List.js'

function Header(props) {
  return (
    <header className='header'>
      <Input onSubmit={props.onSubmit}/>
    </header>
  );
}

export default Header;
