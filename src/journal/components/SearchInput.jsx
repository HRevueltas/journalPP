import { Grid, TextField } from "@mui/material"
export const SearchInput = () => {
  return (
    <Grid
      item xs={12}
      sx={{
        mt: 1,

      }}>
      <TextField
        label={'Search notes'}
        type="text"
        placeholder="Search notes..."
        fullWidth
        name=""

      // value={''}
      // onChange={''}
      // error={''}
      // helperText={''}

      />
    </Grid>
  )
}
