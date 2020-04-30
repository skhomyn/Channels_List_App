import React, { useState } from 'react';
import './App.css';
import { Channel } from './Channel.js';

// todo create separate file.
const data = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
  { id: 3, name: "Third" },
  { id: 4, name: "Fourth" },
  { id: 5, name: "Fifth" }
];


function App() {
  const [isHovered, setIsHovered] = useState(true);
  const [channels, setChannels] = useState(null);

  setTimeout(() => {
    setChannels(data);
  }, 1000);

  return (
    <>
      <header className="App-header" onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
        {isHovered ?
          <p>Welcome </p> :
          <p>Hey </p>
        }
      </header>

      <main>
        {channels
          ? (<ul className='nobull'>
              {channels.map((item) => <Channel channel={item} key={item.id} />)}
            </ul>)
          : 'Loading'
        }

      </main>
    </>
  );
}



export default App;
