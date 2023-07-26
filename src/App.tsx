import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import './clean-code/06-class-c';
import './clean-code/07-class-task-b';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        open console to view Code
      </p>
    </>
  )
}

export default App