<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
.wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 16px;
}
.commands {
  background-color: #f9f6f2;
  border-radius: 3px;
  color: #132743;
  padding: 2px;
}
.commands li {
  display: inline;
}
.command {
  padding: 4px;
}
.command:hover {
  color: #224372;
}
.textarea {
  border: none;
  background-color: white;
  border-radius: 3px;
  min-height: 24em;
  height: 100%;
  width: 100%;
  resize: none;
  padding: 8px;
  font-size: 1.1em;
  font-family: "Open Sans", sans-serif;
}
.info {
  background-color: #8ba8b7;
}
.details li {
  list-style-type: square;
}
button {
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  padding: 4px;
  width: 100%;
}
button:hover {
  background-color: #8ba8b7;
}
</style>
