import { createContext } from "react";


const defaultGitUser = null;

const gitHubContext = createContext<any | null>(defaultGitUser);

export default gitHubContext;
