import { createContext } from 'react';

const CurrentUserContext = createContext({
  avatar: null,
  displayName: '',
  email: '',
  account: '',
});

const EventContext = createContext({});

export { CurrentUserContext, EventContext };
