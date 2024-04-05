'use client';

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import toast from "react-hot-toast";

function ExpenseDetailsPage() {

  const handleOnconfirmClick = () => {
    toast.success("Expense confirmed");
  };

  const handleOnDeleteClick = () => {
    toast.error("Expense confirmed");
  };

  return (
    <Stack direction="row" spacing={ 1 }>
      <Button variant="outlined" onClick={ handleOnconfirmClick }>
        Confirm Expense
      </Button>
      <Button variant="contained" onClick={ handleOnDeleteClick } >
        Delete Expense
      </Button>
    </Stack>
  );
}

export default ExpenseDetailsPage;