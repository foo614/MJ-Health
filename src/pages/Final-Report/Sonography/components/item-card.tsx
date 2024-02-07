import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

const ItemCard = ({
    label,
    isEdit,
    arrayField,
    hasLeftRightLabel,
    isCurrent,
    sonography,
    handleSonography,
}: {
    label: string
    isEdit: boolean
    arrayField: any
    hasLeftRightLabel: boolean
    isCurrent: boolean
    sonography: string
    handleSonography: (event: SelectChangeEvent) => void
}) => {
    return (
        <Box
            sx={{
                background: isEdit
                    ? isCurrent
                        ? '#DDDDDD'
                        : '#F9F9F9'
                    : '#fdfdfd',
                borderRadius: '8px',
                border: !isEdit ? '1px solid #ededed' : undefined,
            }}
        >
            <Grid container spacing={1}>
                <Grid xs={12}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#211D4E',
                            fontSize: '16px',
                            fontWeight: 600,
                            textAlign: 'center',
                            mt: 1,
                            mb: hasLeftRightLabel ? 0 : 2,
                        }}
                    >
                        {label}
                    </Typography>
                </Grid>
                {hasLeftRightLabel && (
                    <>
                        <Grid
                            xs={6}
                            sx={{
                                pl: 2,
                                color: '#211D4E',
                                fontWeight: 600,
                                textAlign: 'center',
                            }}
                        >
                            Right
                        </Grid>
                        <Grid
                            xs={6}
                            sx={{
                                pr: 2,
                                color: '#211D4E',
                                fontWeight: 600,
                                textAlign: 'center',
                            }}
                        >
                            Left
                        </Grid>
                    </>
                )}

                {arrayField.map(
                    (x: any, key: any) =>
                        x.list?.map((y: any, key2: any, array: any) => (
                            <>
                                <Grid xs={y.hasLength ? 8 : 12} key={key2}>
                                    <FormControl
                                        sx={{
                                            pl: 1,
                                            pr: y.hasLength ? 0 : 1,
                                            pb:
                                                key2 + 1 === array.length
                                                    ? 11
                                                    : 0.2,
                                        }}
                                        size="small"
                                        fullWidth
                                    >
                                        {y.hasDimension ? (
                                            <Grid container>
                                                <Grid xs={5} key={key2}>
                                                    <FormControl
                                                        sx={{
                                                            pr: y.hasLength
                                                                ? 1
                                                                : 0,
                                                        }}
                                                        fullWidth
                                                    >
                                                        <TextField
                                                            size="small"
                                                            fullWidth
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        cm
                                                                    </InputAdornment>
                                                                ),
                                                                readOnly:
                                                                    !isEdit,
                                                            }}
                                                            defaultValue={'-'}
                                                            sx={{
                                                                background:
                                                                    '#fff',
                                                                boxShadow:
                                                                    '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                                borderRadius:
                                                                    '3px',
                                                            }}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid
                                                    xs={1}
                                                    sx={{
                                                        alignSelf: 'center',
                                                    }}
                                                >
                                                    x
                                                </Grid>
                                                <Grid xs={5} key={key2}>
                                                    <FormControl
                                                        sx={{
                                                            pr: y.hasLength
                                                                ? 1
                                                                : 0,
                                                        }}
                                                        fullWidth
                                                    >
                                                        <TextField
                                                            size="small"
                                                            fullWidth
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        cm
                                                                    </InputAdornment>
                                                                ),
                                                                readOnly:
                                                                    !isEdit,
                                                            }}
                                                            defaultValue={'-'}
                                                            sx={{
                                                                background:
                                                                    '#fff',
                                                                boxShadow:
                                                                    '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                                borderRadius:
                                                                    '3px',
                                                            }}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid
                                                    xs={1}
                                                    sx={{
                                                        alignSelf: 'center',
                                                    }}
                                                >
                                                    x
                                                </Grid>
                                            </Grid>
                                        ) : y.hasInput ? (
                                            x.name === 'Gray Scale Imaging' ? (
                                                <Grid container spacing={2}>
                                                    <Grid xs={6}>
                                                        <TextField
                                                            fullWidth
                                                            defaultValue="-"
                                                            size="small"
                                                            sx={{
                                                                background:
                                                                    '#fff',
                                                                borderRadius:
                                                                    '5px',
                                                            }}
                                                            InputProps={{
                                                                readOnly:
                                                                    !isEdit,
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid xs={6}>
                                                        <TextField
                                                            fullWidth
                                                            defaultValue="-"
                                                            size="small"
                                                            sx={{
                                                                background:
                                                                    '#fff',
                                                                borderRadius:
                                                                    '5px',
                                                            }}
                                                            InputProps={{
                                                                readOnly:
                                                                    !isEdit,
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            ) : (
                                                <TextField
                                                    fullWidth
                                                    defaultValue="-"
                                                    size="small"
                                                    sx={{
                                                        background: '#fff',
                                                        borderRadius: '5px',
                                                    }}
                                                    InputProps={{
                                                        readOnly: !isEdit,
                                                    }}
                                                />
                                            )
                                        ) : (
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={sonography}
                                                onChange={handleSonography}
                                                sx={{
                                                    background: '#fff',
                                                }}
                                                placeholder="Normal"
                                                disabled={!isEdit}
                                            >
                                                {y.option.map(
                                                    (z: any, key3: any) => (
                                                        <MenuItem
                                                            value={z}
                                                            key={key3}
                                                        >
                                                            {z}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        )}
                                    </FormControl>
                                </Grid>
                                {y.hasLength && (
                                    <Grid xs={4} key={key2}>
                                        <FormControl
                                            sx={{
                                                pr: y.hasLength ? 1 : 0,
                                                py: 0,
                                            }}
                                            fullWidth
                                            size="small"
                                        >
                                            <TextField
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            cm
                                                        </InputAdornment>
                                                    ),
                                                    readOnly: !isEdit,
                                                }}
                                                size="small"
                                                defaultValue={'-'}
                                                sx={{
                                                    background: '#fff',
                                                    boxShadow:
                                                        '0px 1px 4px rgba(0, 0, 0, 0.10) inset',
                                                    borderRadius: '5px',
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                )}
                            </>
                        ))
                )}
            </Grid>
        </Box>
    )
}

export default ItemCard
