import { useState } from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
    incrementIfOdd,
    selectCount,
} from '../redux/slices/counterSlice'

export default function Counter(): JSX.Element {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    const incrementValue = Number(incrementAmount) || 0

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    - secondary
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h4" component="h2">
                    {count}
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Button
                    variant="contained"
                    color="primary"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    + primary
                </Button>
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-basic"
                    label="Amount"
                    variant="outlined"
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button
                        variant="contained"
                        onClick={() =>
                            dispatch(incrementByAmount(incrementValue))
                        }
                    >
                        Add Amount
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch(incrementAsync(incrementValue))}
                    >
                        Add Async
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => dispatch(incrementIfOdd(incrementValue))}
                    >
                        Add If Odd
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}
