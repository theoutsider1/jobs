import { ReactNode, createContext, useState } from "react";


type Props = {
    children?:ReactNode;
}
// Create the context
// Define the interface for the context value
interface AuthContextType {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Export the context to be used in other components


// Create the provider component
export const AuthProvider = ({ children} : Props) => {
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;