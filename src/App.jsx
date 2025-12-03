import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'
import CharacterDetailPage from './pages/CharacterDetailPage'
import CharactersPage from './pages/CharactersPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
