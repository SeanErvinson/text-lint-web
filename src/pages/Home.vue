<template>
  <div class="container">
    <header class="header">
      <h1>Text Formatter</h1>
      <h4>quickly format your text</h4>
    </header>
    <main class="wrapper">
      <div class="left commands">
        <ul>
          <li class="command">
            <i class="fas fa-upload"></i>
          </li>
          <li class="command">
            <i class="far fa-clipboard"></i>
          </li>|
          <li class="command">
            <i class="fas fa-eraser"></i>
          </li>
        </ul>
      </div>
      <div class="source">
        <textarea v-model="source" class="textarea" placeholder="Enter your text here."></textarea>
      </div>
      <div class="controls">
        <ul>
          <li>
            <button @click="removeWhitespaces" class="control-btn">Remove whitespaces</button>
          </li>
          <li>
            <button @click="removeTabs" class="control-btn">Remove tabs</button>
          </li>
          <li>
            <button @click="removeLineBreaks" class="control-btn">Remove line breaks</button>
          </li>
          <li>
            <div class="control-inline">
              <button @click="removeValues" class="control-btn">Remove</button>
            </div>
            <div class="control-inline">
              <input v-model="removeValue" type="text" class="control-input" />
            </div>
          </li>
          <li>
            <button @click="allUpper" class="control-btn">ALL UPPER</button>
          </li>
          <li>
            <button @click="allLower" class="control-btn">all lower</button>
          </li>
          <li>
            <div>
              <input
                id="caseSensitive"
                type="checkbox"
                v-model="caseSensitive"
                :value="caseSensitive"
              />
              <label for="caseSensitive">Case Sensitive</label>
            </div>
          </li>
          <li>
            <div>
              <input id="persistent" type="checkbox" v-model="persistent" :value="persistent" />
              <label for="persistent">Persistent</label>
            </div>
          </li>
        </ul>
      </div>
      <div class="right commands">
        <ul>
          <li class="command">
            <i class="fas fa-save"></i>
          </li>
          <li class="command">
            <i class="far fa-clipboard"></i>
          </li>|
          <li class="command">
            <i class="fas fa-eraser"></i>
          </li>
        </ul>
      </div>
      <div class="result">
        <textarea class="textarea" readonly>{{result}}</textarea>
      </div>
      <div class="info">Number of affected characters: 0</div>
      <div class="details">
        <div class="how-tos">
          <h3>How to's</h3>
          <ul>
            <li>
              Regular expression are also supported. Give it a try
              <strong>\w.</strong>
            </li>
          </ul>
        </div>
        <div class="how-tos">
          <h3>How to's</h3>
          <ul>
            <li>
              Regular expression are also supported. Give it a try
              <strong>\w</strong>
            </li>
          </ul>
        </div>
        <div class="how-tos">
          <h3>Credits</h3>
          <p>
            Developed and maintained by Sean Ervinson. Special thanks to jsonlint.com for the inspiration.
            Source code can be found here.
          </p>
        </div>
      </div>
    </main>
    <footer class="footer">&copy; 2019 textlint.com</footer>
  </div>
</template>

<script>
import actions from "@/action";

export default {
  data() {
    return {
      source: "",
      result: "",
      removeValue: "",
      caseSensitive: false,
      persistent: false
    };
  },
  methods: {
    removeWhitespaces() {
      this.result = actions.removeWhitespaces(this.source, this.caseSensitive);
    },
    removeTabs() {
      this.result = actions.removeTabs(this.source, this.caseSensitive);
    },
    removeLineBreaks() {
      this.result = actions.removeLineBreaks(this.source, this.caseSensitive);
    },
    removeValues() {
      this.result = actions.removeValues(
        this.source,
        this.removeValue,
        this.caseSensitive
      );
    },
    allUpper() {
      this.result = actions.allUpper(this.source);
    },
    allLower() {
      this.result = actions.allLower(this.source);
    }
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
  font-family: "Open Sans", sans-serif;
}
.info {
  background-color: #8ba8b7;
}
.details li {
  list-style-type: square;
}
.control-inline {
  display: inline-block;
  margin-right: 8px;
}
.control-btn {
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  padding: 6px 4px;
  margin-bottom: 8px;
}
.control-btn:hover {
  background-color: #8ba8b7;
}
.control-input {
  padding: 4px;
  text-align: center;
  height: 3em;
  width: 5em;
}
</style>
