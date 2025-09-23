import { useState, lazy, Suspense } from 'react' 
import './App.css'

const Home = lazy(() => import('./Pages/Home'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home/>
      </Suspense>
    </>
  )
}

export default App