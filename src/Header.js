import './Header.css'

import Input from './Input.js'
import List from './List.js'

function Header() {
  return (
    <header>
      <Input onSubmit={(str) => console.log(str)}/>
      <List>
        {{
          'IP Address': '192.212.174.101',
          'Location': 'Brooklyn, NY 10001',
          'Timezone': 'UTC -05:00',
          'ISP': 'SpaceX Starlink',
        }}
      </List>
    </header>
  );
}

export default Header;
