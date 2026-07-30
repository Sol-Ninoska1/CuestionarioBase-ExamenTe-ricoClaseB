import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ExamRoute } from './pages/ExamRoute'
import { ResultPage } from './pages/ResultPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examen/:id" element={<ExamRoute />} />
          <Route path="/resultado/:id" element={<ResultPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

