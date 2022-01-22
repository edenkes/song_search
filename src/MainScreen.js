import React, {useState} from "react";
import Search from "./components/Search";
import TopTracks from "./components/TopTracks";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {Route, Routes} from "react-router-dom";
import DashboardAppBar from "./components/dashboard/DashboardAppBar";
import DashboardDrawer from "./components/dashboard/DashboardDrawer";
import DashboardContext from "./context/DashboardContext";
import {CssBaseline} from "@mui/material";

export const drawerWidth = 240;


const mdTheme = createTheme();

export default function MainScreen() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <DashboardContext.Provider value={{open, toggleDrawer}}>
                <Box sx={{display: "flex"}}>
                    <CssBaseline/>
                    <DashboardAppBar/>
                    <DashboardDrawer/>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <Toolbar/>
                        <Routes>
                            <Route path="search" element={<Search/>}/>
                            <Route path="top_tracks" element={<TopTracks/>}/>
                        </Routes>
                    </Box>
                </Box>
            </DashboardContext.Provider>
        </ThemeProvider>
    );
}