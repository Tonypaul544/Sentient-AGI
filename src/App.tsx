
import './App.css';
import Hero from './Hero';
import SideBar from './sidebar';
import Header from './header'

function App() {

  return (
    <>
      <div className='flex h-[100vh] w-[100%]'>
        <div className="flex w-[30%] ml-[-12px]  max-sm:ml-0  max-sm:z-0"><SideBar /></div>
        <div className="flex flex-col w-full">
          <Header />
          <Hero />
        </div>
      </div>
      
    </>
  )
}

export default App
