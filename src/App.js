//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="Trial Props"/>
    <div className="container my-6">
    <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
