import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if(isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                <Route
                    element={<route.element/>}
                    path={route.path}
                    key={route.path}
                />
                )}
                <Route path="/*" element={<Posts />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Login />} />
            </Routes>

    );
};

export default AppRouter;