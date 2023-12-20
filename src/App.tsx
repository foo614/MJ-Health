import { ThemeProvider } from '@mui/material/styles'
import Counter from 'components/Counter'
import Login from 'pages/Login'
import { Route, Routes } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import theme from './styles/theme'
import LabPage from 'pages/Lab'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/2" element={<Counter />} />
                <Route path="/3" element={<Login />} />
                <Route path="/lab-test" element={<LabPage />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
