import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'
import CharactersPage from './pages/CharactersPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
