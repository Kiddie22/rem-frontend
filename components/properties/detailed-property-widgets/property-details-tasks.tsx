import TasksList from '@/components/tasks/tasks-list';

type PropsType = { propertyId: string | string[] | undefined };

export default function PropertyDetailsTasks(props: PropsType): JSX.Element {
  const { propertyId } = props;
  return (
    <>
      <h1>Tasks</h1>
      <TasksList propertyId={propertyId} />
    </>
  );
}
