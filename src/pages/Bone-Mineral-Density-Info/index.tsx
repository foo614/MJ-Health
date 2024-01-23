import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ResponsiveAppBar from 'components/AppBar'
import ScreeningRoomInfoHeader from 'components/ScreeningRoom/InfoHeader'
import { BONE_MINERAL_DENSITY_PAGE } from 'constant'

const BoneMineralDensityInfo = () => {
    return (
        <>
            <ResponsiveAppBar />

            <ScreeningRoomInfoHeader
                title="BONE MINERAL DENSITY"
                to={BONE_MINERAL_DENSITY_PAGE}
            />
        </>
    )
}

export default BoneMineralDensityInfo
