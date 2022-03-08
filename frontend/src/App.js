import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Container>
      <h1>Welcome to My EventBrite</h1>
        <h6>EventBrite is a ticketing and event technology platform
        that helps businesses organize and sell 
        tickets to events online</h6>
        </Container>
    </main>
    <Footer /> 
    </>
   
  );
}

export default App;
