/**
 * File: SubmitButton.jsx
 * Author: Joseph Koh
 * Description: Component for a custom submit button using Material-UI.
 */

import { Button } from "@mui/material";

export const SubmitButton = ({ onClick, sx }) => {
  return (
    <>
      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        size="large"
        disableElevation
        disableRipple
        onClick={onClick}
        sx={sx}
      >
        Add
      </Button>
    </>
  );
};
