import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
