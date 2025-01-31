import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import ToDo from "./pages/todo";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import TodoAdd from "./pages/todo/Add";
import TodoRead from "./pages/todo/Read";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/todo/add" element={<TodoAdd />} />
              <Route path="/todo/read/:id" element={<TodoRead />} />
              <Route path="/todo/edit/:id" element={<TodoRead />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};
export default App;
