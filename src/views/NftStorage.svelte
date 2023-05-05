<script>
  import Uploader from "@/lib/Uploader.svelte";

  let _token = localStorage.getItem("_token");
  let inputKey = "";

  const change = (e) => {
    inputKey = e.target.value;
  };

  const submit = () => {
    localStorage.setItem("_token", inputKey);
    _token = inputKey;
  };

  const clear = () => {
    localStorage.clear();
    _token = "";
    inputKey = "";
  };
</script>

<div class="container">
  <h1 class="pt-4">NFT UP Folder Browser</h1>
  <p>
    由于上传文件夹的官方客户端基于 Electron 需要 Wi-Fi 越狱, 终端代理也不行,
    只能走网页上传
  </p>
  <button class="btn btn-warning text-white" on:click={clear}
    >Clear Token</button
  >
  <br />
  <br />
  <a
    href="https://github.com/nftstorage/nft.storage/tree/main/examples/client/browser"
    rel="noreferrer"
    target="_blank">github 案例</a
  >

  <hr />
  {#if _token}
    <Uploader token={_token} />
  {:else}
    <div class="form-floating mb-3">
      <input
        id="key"
        type="text"
        class="form-control"
        placeholder="Private Key"
        on:change={change}
        value={inputKey}
      />
      <label for="key">Your NFT.Storage Key</label>
    </div>
    <button class="btn btn-primary" on:click={submit}>Submit</button>
  {/if}
</div>
