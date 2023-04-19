import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import CreatePropertyForm from '../forms/create-property-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CreateProperty(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Paper
        elevation={6}
        style={{
          height: '425px',
          width: '300px',
          borderWidth: '5px',
          borderRadius: '5%',
        }}
      >
        <Button
          style={{ height: '425px', width: '300px' }}
          onClick={handleOpen}
        >
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
          <CreatePropertyForm handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default CreateProperty;
