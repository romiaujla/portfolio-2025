import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<div>Home</div>} />
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
