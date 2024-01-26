import Image from './component/image';
import Name from './component/name';
import './App.css';
import Card from 'react-bootstrap/Card';
import Description from './component/description';
import Price from './component/price';
import ColorSchemesExample from './component/Navbar/navbar';
import Greeting from './greeting/greetings';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
    <Card className="bg-dark text-white">
      <Image />
      <Card.ImgOverlay>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Price />
      </Card.ImgOverlay>
    </Card>
    <Greeting/>
    </div>
  );

  
}

export default App;
