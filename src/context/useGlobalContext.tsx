import { createContext, useContext, ReactNode, FC, useState } from "react";

interface AppContextProps {
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  pageType: string;
  setpageType: React.Dispatch<React.SetStateAction<PageTye>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export enum PageTye {
  home = "home",
  about = "about",
  blog = "articles",
  contact = "contact",
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  // loading state
  const [loading, setloading] = useState<boolean>(false);

  // page type
  const [pageType, setpageType] = useState<PageTye>(PageTye.home);

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,
        pageType,
        setpageType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { useGlobalContext, AppProvider };
