import { Box, Button, Divider, Modal, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Task } from '@/utils/tasks-util';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import style from '@/utils/modal-utils';
import queryClient from '@/react-query/queryClient';
import queryKeys from '@/react-query/contants';

type PropsType = { task: Task; propertyId: string | string[] | undefined };

function TaskCard(props: PropsType): JSX.Element {
  const { task, propertyId } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const instance = useAxiosInstance();

  const updateTask = async (): Promise<void> => {
    await instance.post(`properties/${propertyId}/tasks/${task.taskId}`);
  };

  const updateTasksMutation = useMutation({
    mutationFn: () => updateTask(),
    onSuccess: () => {
      handleClose();
    },
    onSettled: () => {
      queryClient.invalidateQueries([queryKeys.tasks]);
    },
  });

  const markTaskComplete = async (): Promise<void> => {
    await updateTasksMutation.mutateAsync();
  };

  return (
    <>
      <Paper elevation={6} style={{ width: '100%' }}>
        {task.isCompleted ? (
          <Button
            style={{ width: '100%' }}
            color="success"
            variant="contained"
            onClick={handleOpen}
          >
            <Typography variant="body1">{task.taskTitle}</Typography>
          </Button>
        ) : (
          <Button
            style={{ width: '100%' }}
            color="error"
            variant="contained"
            onClick={handleOpen}
          >
            <Typography variant="body1">{task.taskTitle}</Typography>
          </Button>
        )}
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h5">{task.taskTitle}</Typography>
          <Divider style={{ width: '100%' }} />
          <Typography variant="body2">{task.taskDetails}</Typography>
          {!task.isCompleted && (
            <Button onClick={markTaskComplete}>Mark Completed</Button>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default TaskCard;
