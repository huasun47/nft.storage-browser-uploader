<script>
  import "bootstrap/dist/js/bootstrap.bundle";
  import Router from "svelte-spa-router";
  import { routes } from "./router.js";
</script>

<Router {routes} />

<style>
  @import url("bootstrap/dist/css/bootstrap.min.css");
</style>
