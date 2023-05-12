import { Box, Grid } from '@mui/material';
import TaskCard from './task-card';
import CreateTask from './create-task';
import useTasks from '@/hooks/react-query/useTasks';

type PropType = { propertyId: string | string[] | undefined };

function TasksList(props: PropType): JSX.Element {
  const { propertyId } = props;
  const tasks = useTasks(propertyId);

  return (
    <Box>
      <Grid container spacing={2}>
        {tasks &&
          tasks?.map((task) => (
            <Grid item key={task.taskId} md={12}>
              <TaskCard task={task} propertyId={propertyId}/>
            </Grid>
          ))}
        <Grid item md={12}>
          <CreateTask propertyId={propertyId} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TasksList;
