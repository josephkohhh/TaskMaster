/**
 * File: TextInput.jsx
 * Author: Joseph Koh
 * Description: Component for a text input field using Material-UI TextField.
 */

import React from "react";
import { TextField } from "@mui/material";

export const TextInput = ({ value, onChange, placeholder, sx }) => {
  return (
    <>
      {/* Textfield input */}
      <TextField
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={sx}
      />
    </>
  );
};
