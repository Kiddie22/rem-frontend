import {
  AbilityTuple,
  MongoAbility,
  MongoQuery,
  defineAbility,
} from '@casl/ability';

const customAbility = (
  userId: string,
): MongoAbility<AbilityTuple, MongoQuery> =>
  defineAbility((can) => {
    can('read', 'Property');
    can('edit', 'Property', { id: userId });
  });

export default customAbility;
