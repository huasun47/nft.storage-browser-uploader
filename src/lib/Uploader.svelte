<script>
  import { NFTStorage } from "nft.storage";

  export let token = "";

  const client = new NFTStorage({ token });
  let fileList = [];
  let logMsg = "";

  function log(msg) {
    const _msg = JSON.stringify(msg, null, 2);
    logMsg += `${_msg}\n`;
  }

  const fileChange = async (e) => {
    fileList = e.target.files;
  };
  const upload = async (e) => {
    e.preventDefault();
    if (!fileList.length) {
      return log("No files selected");
    }

    log(`Storing ${fileList.length} files...`);
    try {
      const cid = await client.storeDirectory(fileList);
      log({ files: Array.from(fileList).map((f) => f.name), cid });
      const status = await client.status(cid);
      log(status);
      fileList = [];
    } catch (err) {
      log(err);
      fileList = [];
    }
  };
</script>

<div class="container form-wraper">
  <form class="form">
    <div>
      <label for="formFileLg" class="form-label"> File(s):</label>
      <input
        class="form-control form-control-lg"
        id="formFileLg"
        type="file"
        multiple
        on:change={fileChange}
      />
    </div>
    <div class="mt-3 text-center">
      <button class="btn btn-primary" on:click={upload}>Store</button>
    </div>
  </form>
  <pre>
    <code>{logMsg}</code>
  </pre>
</div>

<style>
  .form-wraper {
    height: 100vh;
  }
  .form {
    width: 350px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
