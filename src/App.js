import './App.css';
import Board from './Components/Board';
import Header from './Components/Header';
import SideNav from './Components/SideNav';

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Board />
    </div>
  );
}

export default App;
