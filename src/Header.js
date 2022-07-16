import './Header.css'

import Input from './Input.js'
import List from './List.js'

function Header() {
  return (
    <header className='header'>
      <Input onSubmit={(str) => console.log(str)}/>
    </header>
  );
}

export default Header;
