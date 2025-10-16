
import './App.css';
import Hero from './Hero';
import SideBar from './sidebar';
import Header from './header'

function App() {

  return (
    <>
      <div className="flex max-w-[687px h-auto">
        {/* SIDEBAR SECTION */}
        <div className="flex sidebar w-[200px] max-md:hidden z-10 max-md:flex-">
          <SideBar />
        </div>
        {/* BODY */}
        <div className="body flex flex-col w-[100%] items-center overflow-x-hidden">
          {/* HEADER SECTION */}
          <div className="flex bg-gray-600 w-full h-[70px] items-center justify-center fixed top-0 mb-15">
            <Header />
          </div>
          {/* HERO SECTION */}
          <div className="flex w-full items-center justify-center">
            <Hero />
          </div>
          {/* FOOTER SECTION */}
          <div className="flex bg-gray-600 w-full h-[70vh] items-center justify-center">
            <h1 className="text-3xl flex">Footer</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
