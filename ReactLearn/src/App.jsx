
import App1Redux from './components/Redux/App1Redux'
import Ref from './components/useRef/Ref';
import UseMemo from './components/UseMemo/UseMemo';
import UseCallback from './components/UseCallback/UseCallback';
import UseContext from './components/UseContext/UseContext';

function App() {
  return (
    <div className='app'>
    {/* <App1Redux/> */}
    {/* <Ref/> */}
    {/* <UseMemo/> */}
    {/* <UseCallback /> */}
    <UseContext/>
    </div>
  )
}

export default App;