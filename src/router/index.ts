import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Selector from "../views/Selector.vue";
import Playlist from "@/views/Playlist.vue";

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: Home },
    { path: '/selector', name: 'Selector', component: Selector },
    { path: '/playlist', name: 'Playlist', component: Playlist },

];

const router = createRouter({
    history: createWebHashHistory(),  // Cambié aquí
    routes,
});

export default router;

