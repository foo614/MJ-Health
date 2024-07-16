import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps,
} from '@mui/base/Unstable_NumberInput'
// import AddIcon from '@mui/icons-material/Add'
// import RemoveIcon from '@mui/icons-material/Remove'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import React from 'react'

const NumberInput = React.forwardRef(function CustomNumberInput(
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>
) {
    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    // children: <AddIcon fontSize="small" />,
                    children: (
                        <Typography fontSize="1" fontWeight={600}>
                            +
                        </Typography>
                    ),
                    className: 'increment',
                },
                decrementButton: {
                    // children: <RemoveIcon fontSize="small" />,
                    children: (
                        <Typography fontSize="1" fontWeight={600}>
                            -
                        </Typography>
                    ),
                },
            }}
            {...props}
            ref={ref}
        />
    )
})

type Props = {
    min?: number
    max?: number
    defaultValue?: number
}

const QuantityInput = ({ min, max, defaultValue }: Props) => {
    return (
        <NumberInput
            aria-label="Quantity Input"
            min={min}
            max={max}
            defaultValue={defaultValue}
        />
    )
}

export default QuantityInput

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-weight: 400;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  `
)

const StyledInput = styled('input')(
    ({ theme }) => `
    font-size: 1rem;
    font-family: inherit;
    font-weight: 700;
    border: unset;
    border-radius: 8px;
    margin: 0 4px;
    outline: 0;
    min-width: 0;
    max-width: 2rem;
    width: auto;
    text-align: center;
    
    &:focus-visible {
      outline: 0;
    }
  `
)

const StyledButton = styled('button')(
    ({ theme }) => `
    border: unset;
    border-radius: 5px;
    box-shadow: unset;
    background: var(--mj-deep-green);
    color: var(--color-white);
    width: 24px;
    height: 24px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      color: var(--color-lightgray);
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
)
