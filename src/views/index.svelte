<script>
  import { link } from "svelte-spa-router";
</script>

<div class="home">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/nft-storage" use:link
        >NFT Storage</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/mfs" use:link>MFS</a>
    </li>
  </ul>
</div>

<style>
  .home {
    height: 100vh;
    display: grid;
    place-items: center;
  }
</style>
