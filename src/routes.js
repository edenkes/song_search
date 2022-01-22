import { Navigate,Outlet } from 'react-router-dom';

const routes = (isLoggedIn) => [
    {
        path: '/app',
        element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'account', element: <Account /> },
            { path: '', element: <Navigate to="/app/dashboard" /> },
            {
                path: 'member',
                element: <Outlet />,
                children: [
                    { path: '', element: <MemberGrid /> },
                    { path: 'add', element: <AddMember /> },
                ],
            },
        ],
    },
    {
        path: '/',
        element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
        children: [
            { path: 'login', element: <Login /> },
            { path: '', element: <Navigate to="/login" /> },
        ],
    },
];

const DashboardLayout = ()=><h1>DashboardLayout</h1>
const Dashboard = ()=><h1>Dashboard</h1>
const Account = ()=><h1>Account</h1>
const MemberGrid = ()=><h1>MemberGrid</h1>
const AddMember = ()=><h1>AddMember</h1>
const MainLayout = ()=><h1>MainLayout</h1>
const Login = ()=><h1>Login</h1>
export default routes;
