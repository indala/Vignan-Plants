import React from 'react'
import { lazy,Suspense } from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
const Plants=lazy(()=>import( './pages/Plants'))  // Lazy load the Plants component
const MainLayout=lazy(()=>import( './layout/MainLayout'))  // Lazy load the MainLayout component
const Home=lazy(()=>import( './pages/Home'))  // Lazy load the Home component
const Plant=lazy(()=>import( './pages/Plant'))  // Lazy load the Plant component
import Loader from './components/Loader'
import Error from './pages/Error'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => {
  return (
    <>
    <BrowserRouter basename='/Vignan-Plants'>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route  path="/" element={<Home/>} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants/:sno" element={<Plant />} />  {/* Add the route for plant details */}
          <Route path="*" element={<Error/>} />

        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
    <ScrollToTopButton/>
    </>
  )
}

export default App