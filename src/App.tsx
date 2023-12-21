import { ThemeProvider } from '@mui/material/styles'
import Counter from 'components/Counter'
import Login from 'pages/Login'
import { Route, Routes } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import theme from './styles/theme'
import LabPage from 'pages/Lab'
import LabSingleItemPage from 'pages/Lab/single-item'
import { LAB_TEST_PAGE, LAB_TEST_SINGLE_ITEM_PAGE, LOGIN_PAGE } from 'constant'
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/2" element={<Counter />} />
                <Route path={LOGIN_PAGE} element={<Login />} />
                <Route path={LAB_TEST_PAGE} element={<LabPage />} />
                <Route
                    path={LAB_TEST_SINGLE_ITEM_PAGE}
                    element={<LabSingleItemPage />}
                />
            </Routes>
        </ThemeProvider>
    )
}

export default App
