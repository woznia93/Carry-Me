
import BriefInfo from "./LandingPage/BriefInfo"
import MainHeader from "./LandingPage/MainHeader"
import Register from "./LandingPage/Register"

function App() {

  return (
    <div className='grid grid-cols-1 px-12 md:px-16 place-items-center overflow-visible min-w-[350px] mb-24'>
      <div className='container'>
        <MainHeader/>
        <BriefInfo/>
        <Register/>
        <div className="h-32"></div>
      </div>
    </div>
  )
}

export default App
