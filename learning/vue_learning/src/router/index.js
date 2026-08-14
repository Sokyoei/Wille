import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [{
  path: "/", name: "index", component: Index
}, {
  path: "/test", name: "test", component: Test
}]
