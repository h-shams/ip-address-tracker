import './Header.css'

import Input from './Input.js'

function Header(props) {
  return (
    <header className='header' style={{paddingBottom: props.paddingBottom}}>
      <Input onSubmit={props.onSubmit}/>
    </header>
  );
}

export default Header;
