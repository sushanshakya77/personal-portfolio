import Sidebar from './Components/Sidebar';
import Main from './Pages/Main';

export function App() {
  return (
    <div className="flex h-screen w-screen overflow-auto">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
