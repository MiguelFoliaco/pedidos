import React, { Dispatch, SetStateAction, useState } from "react";
import { ITheme, theme as T } from "../theme";

export const useAppStore = (): IAppContext => {
  //* JSON
  const [theme, setTheme] = useState<ITheme>(T);
  const [searchTerm, setSearchTerm] = useState('');
  return {
    values: {
      theme,
      searchTerm
    },
    actions: {
      setTheme,
      setSearchTerm
    },
  };
};

export interface IAppContext {
  values: {
    theme: ITheme;
    searchTerm: string;
  };
  actions: {
    setTheme: Dispatch<SetStateAction<ITheme>>;
    setSearchTerm: Dispatch<SetStateAction<string>>;
  };
}
