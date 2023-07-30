import { AuthForm } from "../AuthForm";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserInfo } from "../UserInfo";
import { UserParams } from "../UserParams";
import { Result } from "../Result";

const App = () => {
  return (
    <div className="wrapper">
        
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="userInfo" element={<UserInfo />}/>
        <Route path="userParams" element={<UserParams />}/>
        <Route path="result" element={<Result />}/>
      </Routes>
    </div>
  );
};
export default App;
