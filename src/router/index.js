import Vue from "vue";
import Router from "vue-router";
import mainWrapper from "@/components/mainPageComponent";
import blog from "@/components/blogComponent";
import blogDetails from "@/components/blogDetailsComponent";
import projectPage from "@/components/projectPageComponent";
import projectDetails from "@/components/projectDetailsComponent";
import pageNotFound from "@/components/pageNotFoundComponent";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/home",
            name: "home",
            component: mainWrapper,
            alias: "/",
        },
        {
            path: "/blog",
            name: "blog",
            component: blog,
        },
        {
            path: "/blog-details",
            name: "blog-details",
            component: blogDetails,
        },
        {
            path: "/project-page",
            name: "project-page",
            component: projectPage,
        },
        {
            path: "/project-details",
            name: "project-details",
            component: projectDetails,
        },
        {
            path: "/:catchAll(.*)",
            name: "404",
            component: pageNotFound,
        },
    ],
});
