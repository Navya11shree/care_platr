import './App.css'
import LookerEmbed from './components/LookerEmbed'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <LookerEmbed />
      </div>
    </div>
  )
}

export default App
