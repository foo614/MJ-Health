import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Divider from '@mui/material/Divider'
import { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import ItemCard from './item-card'

type Props = {
    arrayField: any
    readonly: boolean
    sonography: string
    handleSonography: (event: SelectChangeEvent) => void
}

const RowItemCard = ({
    arrayField,
    readonly,
    sonography,
    handleSonography,
}: Props) => {
    return (
        <Grid xs={12}>
            <Box sx={{ p: 3 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={3}>
                        <>
                            <Grid container>
                                {arrayField.map((x: any, key: any) => (
                                    <>
                                        <Grid xs={12}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: readonly
                                                        ? 'var(--title-color)'
                                                        : 'var(--mj-deep-green)',
                                                    fontSize: '20px',
                                                    fontWeight: 600,
                                                    mt: key == 0 ? 0 : 3,
                                                    mb:
                                                        arrayField[0].name ===
                                                        'Gray Scale Imaging'
                                                            ? 5
                                                            : 4.5,
                                                }}
                                            >
                                                {x.name}
                                            </Typography>
                                        </Grid>
                                        {x.list.map((y: any, key2: any) => (
                                            <Grid xs={12} key={key2}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: '#211D4E',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        mb: 1,
                                                    }}
                                                >
                                                    {y.name}
                                                </Typography>
                                                <Divider
                                                    sx={{
                                                        mb: 2,
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </>
                                ))}
                            </Grid>
                        </>
                    </Grid>
                    <Grid xs={12} md={3}>
                        <ItemCard
                            label="Current"
                            isEdit={!readonly}
                            isCurrent={true}
                            hasLeftRightLabel={
                                arrayField[0].name === 'Gray Scale Imaging'
                            }
                            arrayField={arrayField}
                            sonography={sonography}
                            handleSonography={handleSonography}
                        />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <ItemCard
                            label="22-09-2020"
                            isEdit={!readonly}
                            isCurrent={false}
                            hasLeftRightLabel={
                                arrayField[0].name === 'Gray Scale Imaging'
                            }
                            arrayField={arrayField}
                            sonography={sonography}
                            handleSonography={handleSonography}
                        />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <ItemCard
                            label="22-09-2018"
                            isEdit={!readonly}
                            isCurrent={false}
                            hasLeftRightLabel={
                                arrayField[0].name === 'Gray Scale Imaging'
                            }
                            arrayField={arrayField}
                            sonography={sonography}
                            handleSonography={handleSonography}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default RowItemCard
