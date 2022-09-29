import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import News from './components/News';

function App()
{
  return (
    <div>
      <NavBar />

      <div className='container'>
        <News />
      </div>
    </div>
  );
}

export default App;
