import { ReactNode, createContext, useState } from "react";

export interface ServerError {
    signup: string;
    login: string;
    google: string;
}

interface ServerErrorContextType {
    serverError: ServerError;
    setServerError: (errors: ServerError) => void;
}

export const ServerErrorContext = createContext<ServerErrorContextType>(
    {} as ServerErrorContextType
);

interface Props {
    children: ReactNode;
}

const ServerErrorProvider = ({ children }: Props) => {
    const [serverError, setServerError] = useState({} as ServerError);

    return (
        <ServerErrorContext.Provider value={{ serverError, setServerError }}>
            {children}
        </ServerErrorContext.Provider>
    );
};

export default ServerErrorProvider;
