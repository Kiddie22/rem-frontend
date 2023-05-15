import CanPropertyAbility from '@/components/casl/can-property-ability';
import TasksList from '@/components/tasks/tasks-list';
import { Property } from '@/utils/properties-utils';

type PropsType = { property: Property };

export default function PropertyDetailsTasks(props: PropsType): JSX.Element {
  const { property } = props;

  return (
    <CanPropertyAbility property={property} md={6} ability="edit">
      <h1>Tasks</h1>
      <TasksList />
    </CanPropertyAbility>
  );
}
