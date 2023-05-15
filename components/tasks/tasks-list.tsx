import { Box, Grid } from '@mui/material';
import TaskCard from './task-card';
import CreateTask from './create-task';
import useTasks from '@/hooks/react-query/useTasks';
import usePropertyId from '@/hooks/usePropertyId';

function TasksList(): JSX.Element {
  const propertyId = usePropertyId();
  const tasks = useTasks(propertyId);

  return (
    <Box>
      <Grid container spacing={2}>
        {tasks &&
          tasks?.map((task) => (
            <Grid item key={task.taskId} md={12}>
              <TaskCard task={task} propertyId={propertyId} />
            </Grid>
          ))}
        <Grid item md={12}>
          <CreateTask />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TasksList;
