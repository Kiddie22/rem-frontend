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
    can('edit', 'Property', { 'user.id': userId });
    can('delete', 'Property', { 'user.id': userId });
  });

export default customAbility;
