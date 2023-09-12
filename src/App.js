import logo from './logo.svg';
import './App.css';
import Box1 from './components/box1/Box1';
import Box2 from './components/box2/Box2';
import Box3 from './components/box3/Box3';
import Box4 from './components/box4/Box4';
import Box5 from './components/box5/Box5';


function App() {
  return (
    <>
    
      <header>
          <h1 id='head1'>JSS Institute Of Speech And Hearing and JSS Hospital</h1>
          <h1 id='head2'>Department Of Audiology And Department Of Geriatrics</h1>
          <h2 id='head3'>Hearing Wellness Clinic</h2>
      </header>


      <div className='rows'>
      <div id='row1'>
        <Box1 className='box'/>
        <Box2 className='box'/>
      </div>
      
      <div id='row2'>
        <Box3 className='box'/>
        <Box4 />
      </div>

      <div id='row3'>
        <Box5 className='box'/>
      </div>

      </div>

    </>
    
  );
}

export default App;
