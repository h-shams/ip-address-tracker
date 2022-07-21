import './Header.css'

import Input from './Input.js'
import List from './List.js'

function Header(props) {
  return (
    <header className='header' style={{paddingBottom: props.paddingBottom}}>
      <Input onSubmit={props.onSubmit}/>
      <List onResize={props.onResize}>
        { props.data }
      </List>
    </header>
  );
}

export default Header;
