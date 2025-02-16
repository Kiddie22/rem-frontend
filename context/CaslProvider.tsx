import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { AbilityTuple, MongoAbility, MongoQuery } from '@casl/ability';
import customAbility from '@/casl/ability';
import useAuthData from '@/hooks/useAuthData';

type AbilityContextType = null | MongoAbility<AbilityTuple, MongoQuery>;

export const AbilityContext = createContext<AbilityContextType>(null);
export const Can = createContextualCan(AbilityContext.Consumer);

export function CaslProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;
  const { user } = useAuthData();
  const userId = user?.id;

  if (user) {
    return (
      <AbilityContext.Provider value={customAbility(userId)}>
        {children}
      </AbilityContext.Provider>
    );
  }

  return (
    <AbilityContext.Provider value={null}>{children}</AbilityContext.Provider>
  );
}
