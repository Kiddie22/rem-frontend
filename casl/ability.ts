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
    can('edit', 'Property', { 'owner.id': userId });
    can('delete', 'Property', { 'owner.id': userId });
  });

export default customAbility;
