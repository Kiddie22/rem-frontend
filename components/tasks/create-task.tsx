import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import CreateTaskForm from '../forms/create-task-form';
import style from '@/utils/modal-utils';

function CreateTask(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Paper style={{ width: '100%' }}>
        <Button style={{ width: '100%' }} onClick={handleOpen}>
          <Typography fontSize={36} color="gray">
            +
          </Typography>
        </Button>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateTaskForm handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default CreateTask;
