import { Grid, FormControlLabel, Checkbox } from '@mui/material'
import styles from './_authorization-module.module.scss'

type Props = {
    serviceAuthorization: any[]
    healthScreeningAuthorization: any[]
    otherAuthorization: any[]
    additionalAccessAuthorization: any[]
}

const AuthorizationModule = (props: Props) => {
    return (
        <>
            <p className={styles.cardTitle} style={{ marginBottom: '2rem' }}>
                Authorization
            </p>

            <p
                className={styles.authorizationTitle}
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
            >
                Service
            </p>
            <Grid container spacing={2} columns={15}>
                {props.serviceAuthorization.map((item) => (
                    <Grid xs={15} md={3} key={item.id} item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={item.isSelected}
                                    disabled={item.isDisabled}
                                />
                            }
                            label={item.label}
                        />
                    </Grid>
                ))}
            </Grid>

            <p
                className={styles.authorizationTitle}
                style={{ marginTop: '2rem', marginBottom: '1rem' }}
            >
                Health & Screening
            </p>
            <Grid container spacing={2} columns={15}>
                {props.healthScreeningAuthorization.map((item) => (
                    <Grid xs={15} md={3} key={item.id} item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={item.isSelected}
                                    disabled={item.isDisabled}
                                />
                            }
                            label={item.label}
                        />
                    </Grid>
                ))}
            </Grid>

            <p
                className={styles.authorizationTitle}
                style={{ marginTop: '2rem', marginBottom: '1rem' }}
            >
                Other Function
            </p>
            <Grid container spacing={2} columns={15}>
                {props.otherAuthorization.map((item) => (
                    <Grid xs={15} md={3} key={item.id} item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={item.isSelected}
                                    disabled={item.isDisabled}
                                />
                            }
                            label={item.label}
                        />
                    </Grid>
                ))}
            </Grid>

            <p
                className={styles.authorizationTitle}
                style={{ marginTop: '2rem', marginBottom: '1rem' }}
            >
                Additional Access
            </p>
            <Grid container spacing={2} columns={15}>
                {props.additionalAccessAuthorization.map((item) => (
                    <Grid xs={15} md={3} key={item.id} item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    defaultChecked={item.isSelected}
                                    disabled={item.isDisabled}
                                />
                            }
                            label={item.label}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default AuthorizationModule
