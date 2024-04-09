import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface INextPagesContext {
  nextPages: string[];
  setNextPages: Dispatch<SetStateAction<string[]>>;
}

const NextPagesContext = createContext<INextPagesContext | undefined>(
  undefined,
);

export const useNextPagesContext = () => {
  const context = useContext(NextPagesContext);
  if (!context) {
    throw new Error('NextPagesContext must be used within a SearchProvider');
  }
  return context;
};

export const NextPagesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [nextPages, setNextPages] = useState<string[]>([]);

  return (
    <NextPagesContext.Provider value={{nextPages, setNextPages}}>
      {children}
    </NextPagesContext.Provider>
  );
};
