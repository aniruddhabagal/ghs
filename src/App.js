import logo from './logo.svg';
import './App.css';
import Box1 from './components/box1/Box1';
import Box2 from './components/box2/Box2';
import Box3 from './components/box3/Box3';


function App() {
  return (
    <>
    
    <header>
        <h1>JSS Speech and Hearing</h1>
        <h1>Dept Of Audilogy</h1>
        <h2>Hearing Wellness</h2>
    </header>

    <div id='row1'>
      <Box1 />
      <Box2 />
    </div>
    
    <div id='row2'>
      <Box3 />
    </div>

    </>
    
  );
}

export default App;
