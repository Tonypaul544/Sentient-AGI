
import './App.css';
import Hero from './Hero';
import SideBar from './sidebar';
import Header from './header'

function App() {

  return (
    <>
      <div className="flex max-w-[687px bg-gray-400] h-[100vh]">
        {/* SIDEBAR SECTION */}
        <div className="flex sidebar w-[200px] bg-red-400 max-sm:hidden">
          <SideBar />
        </div>
        {/* BODY */}
        <div className="body flex flex-col w-[100%] bg-green-400 items-center overflow-x-hidden">
          {/* HEADER SECTION */}
          <div className="flex bg-gray-600 w-full h-[70px] items-center justify-center fixed top-0 mb-15">
            <Header />
          </div>
          {/* BODY SECTION */}
          <div className="flex bg-green-600 w-full h-[100%] items-center justify-center">
            <Hero />
          </div>
          {/* FOOTER SECTION */}
          <div className="flex bg-gray-600 w-full h-[70px] items-center justify-center">
            <h1 className="text-3xl flex">Footer</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
