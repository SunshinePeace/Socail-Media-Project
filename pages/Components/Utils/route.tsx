import Home from "../..";
import SignUp from "../SignUp";

export interface IRoute{
    path: string;
    exact: boolean;
    component: any;
    name: string;
    protected: boolean;
}

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: Home,
        name: "Home Page",
        protected: true
    },

    {

        path: '/SignUp',
        exact: true,
        component: SignUp,
        name: "Sign Up Page",
        protected: false

    }






]

export default routes;