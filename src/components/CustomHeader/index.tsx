import styles from './_custom-header.module.scss'
import { Button } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type Props = {
    to: string
    title: string
}
const CustomHeader: React.FC<Props> = ({ to, title }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()
    return (
        <div className={styles.header}>
            {to ? (
                <div
                    className={
                        matches
                            ? styles.titleButtonDiv
                            : styles.titleButtonDivMobile
                    }
                >
                    <Button
                        variant="text"
                        className={styles.backButton}
                        startIcon={
                            <ChevronLeftIcon className={styles.backIcon} />
                        }
                        onClick={() => navigate(to)}
                    >
                        BACK
                    </Button>
                </div>
            ) : null}

            <div className={styles.headerTitle}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default CustomHeader
