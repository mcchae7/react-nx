import { createContext } from 'react';
import { Theme } from '../app.models';

export interface AppContextValue {
  appThemes: string[];
}

export const AppContext = createContext<AppContextValue>({
  appThemes: [Theme.base],
});
