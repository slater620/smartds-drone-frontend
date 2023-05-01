import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { droneColumns, droneRows, missionRows } from "./datasource";


function App() {

const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} /> 
            <Route path="login" element={<Login />} />
            <Route path= "drones">
              <Route index element={<List />} /> 
              <Route path=":droneId" element={<Single />} />
              <Route path="new" element={<New  />} />
            </Route>

            <Route path= "missions">
              <Route index element={<List/>} /> 
              <Route path=":missionId" element={<Single  />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
   
export default App;