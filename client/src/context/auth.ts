import {createContext} from 'react'

interface AppContextInterface {
    name: string;
    author: string;
    url: string;
  }


const sampleAppContext: AppContextInterface = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
  };


const AuthContext= createContext<AppContextInterface | null>(null);

export const authContextProvider = ({children}: any) =>  {
    return <AuthContext.Provider value={sampleAppContext}>
        {children}
    <AuthContext>
}

export default AuthContext;