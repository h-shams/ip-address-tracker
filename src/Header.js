import './Header.css'

import Input from './Input.js'

function Header() {
  return (
    <header>
      <Input onSubmit={(str) => console.log(str)}/>
    </header>
  );
}

export default Header;
