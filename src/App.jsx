import { Suspense } from "react"
import Countries from "./Components/Countries/Countries"

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then((res)=> res.json())


function App() {


  return (
    <>
      {/* <h1>Hello react</h1> */}
      <Suspense fallback={<p>Data Loading...</p>}>
        <Countries countriesPromise={countriesPromise }></Countries>
      </Suspense>
    </>
  )
}

export default App
