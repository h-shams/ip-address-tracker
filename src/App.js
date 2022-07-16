import './App.css';

import Header from './Header.js'
import List from './List.js'

function App() {
  return (
    <main className="app">
      <Header/>
      <List>
        {{
          'IP Address': '192.212.174.101',
          'Location': 'Brooklyn, NY 10001',
          'Timezone': 'UTC -05:00',
          'ISP': 'SpaceX Starlink',
        }}
      </List>
    </main>
  );
}

export default App;
