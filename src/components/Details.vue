<template>
  <div class="details">
    <div class="detail">
      <h3>About TextLint</h3>
      <p>TextLint is a tool that helps modify and manipulate strings. Copy and paste, or directly type and click on the buttons to modify the text. <br>If you are still reading this then wow great for you. But you should really stop now I don't know what I am typing :^)</p>
    </div>
    <div class="detail">
      <h3>How to's</h3>
      <ul>
        <li>
          Regular expression are also supported. Give it a try
          <strong>\w.</strong>
        </li>
        <li>Persistent checkbox allows chain modification.</li>
      </ul>
    </div>
    <div class="detail">
      <h3>Credits</h3>
      <p>
        Developed and maintained by <a href="https://seanervinson.com">Sean Ervinson</a>. Special thanks to <a href="https://jsonlint.com">jsonlint.com</a> for the inspiration.
        <br>If you found any bugs, issues, or recommendation feel free to contact me (Just click on my name it'll send you somewhere or nowhere).
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.details li {
  list-style-type: square;
}
.detail{
  padding: 8px;
}
.detail p {
  text-align: justify;
}
</style>>