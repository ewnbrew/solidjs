import logo from './logo.svg';
import styles from './App.module.css';
import HelloWorld from './HelloWorld';
import MyBook from './app/components/MyBook';
import Navbar from './app/components/web/Navbar';
import Footer from './app/components/web/Footer';
import Counter from './app/components/Counter';
function App() {
  return <>
  <Navbar />
  <Footer />
  <Counter />
  </>
}

export default App;
