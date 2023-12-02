import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Transaction from './Components/Transaction/Transaction';
import Dataa from './Components/Data/Dataa';

function App() {


  return (
    <>
     <Header/>
        <Routes>
          <Route path="/" Component={Home}/>
        </Routes>
        <Routes>
          <Route path="/transaction" Component={Transaction} />
       </Routes>
        <Routes>
          <Route path="/data" Component={Dataa} />
       </Routes>
    </>
  )
}

export default App
