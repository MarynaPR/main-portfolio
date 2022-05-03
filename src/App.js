// import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Layout from './components/Layout'
// import Contact from './components/Contact'
// import Portfolio from './components/Portfolio'
// import './App.scss'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/portfolio' element={<Portfolio />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'

function App() {
  return (

    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Route>
      </Routes>

    </>

  )
}

export default App