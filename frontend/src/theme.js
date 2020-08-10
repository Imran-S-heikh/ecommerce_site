import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const theme = unstable_createMuiStrictModeTheme({
    palette: {
        primary: {
            main: blue.A400
        }
    }
})