import { createContext, useState, useEffect } from "react";
export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [sidebar, setsidebar] = useState(false);

  const [currentpage, setcurrentpage] = useState("Home");

  const [username, setusername] = useState(() => {
    return localStorage.getItem("username") || "user";
  });

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const [loginstatus, setloginstatus] = useState(() => {
    return localStorage.getItem("loginstatus") || "Login";
  });

  useEffect(() => {
    localStorage.setItem("loginstatus", loginstatus);
  }, [loginstatus]);

  return (
    <DataContext.Provider
      value={{
        sidebar,
        setsidebar,
        currentpage,
        setcurrentpage,
        username,
        setusername,
        loginstatus,
        setloginstatus,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
