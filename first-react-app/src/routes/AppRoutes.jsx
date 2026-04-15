import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import DashboardPage, { DashboardMessages, DashboardTasks,} from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import PostsPage, { PostList, Post } from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../components/LoginForm";


// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {

  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/messages etc */}
      <Route path="dash" element={<ProtectedRoute>
        <DashboardPage {...props} /></ProtectedRoute>}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
     <Route path="login" element={<LoginForm/>} />

      <Route path="/about" element={<AboutPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />

      {/* // add new Route branch to AppRoutes.jsx */}
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />

        {/* dynamic param taken from route, stored in variable called id  */}
        <Route path=":id" element={<Post />} />

      </Route>
    </Routes>
  );
}
export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'
