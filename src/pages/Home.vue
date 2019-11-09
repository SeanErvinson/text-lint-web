<template>
  <main class="wrapper">
    <div class="content">
      <div class="left commands">
        <ul>
          <li class="command">
            <input @change="fileUpload" type="file" id="source-file" hidden />
            <a @click="activateUpload" title="Upload file" id="source-file-btn">
              <i class="fas fa-upload"></i>
            </a>
          </li>
          <li class="command">
            <a @click="copyClipboard" title="Copy to clipboard" id="source-copy-clipboard">
              <i class="far fa-clipboard"></i>
            </a>
          </li>
          <span class="fixed">|</span>
          <li class="command">
            <a @click="clearText" id="source-clear" title="Clear text">
              <i class="fas fa-eraser"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="source">
        <textarea v-model="source" class="textarea" placeholder="Enter your text here."></textarea>
      </div>
      <div class="controls">
        <ul class="remove-controls">
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
        </ul>
        <hr />
        <ul class="replace-controls">
          <li>
            <div>
              <input v-model="oldPatternValue" type="text" class="control-input" />
              <div>
                <button @click="replacesWith" class="control-btn">Replace with</button>
              </div>
              <input v-model="newPatternValue" type="text" class="control-input" />
            </div>
          </li>
        </ul>
        <hr />
        <ul class="modify-controls">
          <li>
            <button @click="allUpper" class="control-btn">ALL UPPER</button>
          </li>
          <li>
            <button @click="allLower" class="control-btn">all lower</button>
          </li>
          <li>
            <div class="global-controls">
              <div>
                <input
                  id="caseSensitive"
                  type="checkbox"
                  v-model="caseSensitive"
                  :value="caseSensitive"
                />
                <label for="caseSensitive">Case Sensitive</label>
              </div>
              <div>
                <input id="persistent" type="checkbox" v-model="persistent" :value="persistent" />
                <label for="persistent">Persistent</label>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right commands">
        <ul>
          <li class="command">
            <a @click="copyClipboard" title="Copy to clipboard" id="result-copy-clipboard">
              <i class="far fa-clipboard"></i>
            </a>
          </li>
          <span class="fixed">|</span>
          <li class="command">
            <a @click="clearText" id="result-clear" title="Clear text">
              <i class="fas fa-eraser"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="result">
        <textarea class="textarea" v-model="result" readonly></textarea>
      </div>
      <div class="info">
        <p>Number of characters: {{getCharacterCount}}</p>
        <p>Number of affected characters: {{affectedCharacters}}</p>
      </div>
      <Details></Details>
    </div>
  </main>
</template>

<script>
import actions from "@/action";
import Details from "../components/Details.vue";

export default {
  components: {
    Details
  },
  data() {
    return {
      source: "",
      result: "",
      removeValue: "",
      caseSensitive: false,
      persistent: false,
      oldPatternValue: "",
      newPatternValue: "",
      affectedCharacters: 0
    };
  },
  computed: {
    getCharacterCount() {
      return this.source.length;
    }
  },
  methods: {
    activateUpload() {
      document.getElementById("source-file").click();
    },
    fileUpload() {
      let file = document.getElementById("source-file").files[0];
      var fileReader = new FileReader();
      fileReader.onload = event => {
        this.source = event.target.result;
      };
      fileReader.readAsText(file, "UTF-8");
    },
    removeWhitespaces() {
      this.result = actions.removeWhitespaces(this.source, this.caseSensitive);
      this.affectedCharacters = Math.abs(
        this.source.length - this.result.length
      );
      this.executePersistence();
    },
    removeTabs() {
      this.result = actions.removeTabs(this.source, this.caseSensitive);
      this.affectedCharacters = Math.abs(
        this.source.length - this.result.length
      );
      this.executePersistence();
    },
    removeLineBreaks() {
      this.result = actions.removeLineBreaks(this.source, this.caseSensitive);
      this.affectedCharacters = Math.abs(
        this.source.length - this.result.length
      );
      this.executePersistence();
    },
    removeValues() {
      this.result = actions.removeValues(
        this.source,
        this.removeValue,
        this.caseSensitive
      );
      this.affectedCharacters = Math.abs(
        this.source.length - this.result.length
      );
      this.executePersistence();
    },
    allUpper() {
      this.result = actions.allUpper(this.source);
      this.affectedCharacters = actions.removeAllWhiteCharacters(
        this.result
      ).length;
      this.executePersistence();
    },
    allLower() {
      this.result = actions.allLower(this.source);
      this.affectedCharacters = actions.removeAllWhiteCharacters(
        this.result
      ).length;
      this.executePersistence();
    },
    replacesWith() {
      this.result = actions.replacesWith(
        this.source,
        this.oldPatternValue,
        this.newPatternValue,
        this.caseSensitive
      );
      this.affectedCharacters = actions.getMatches(
        this.source,
        this.oldPatternValue
      );
      this.executePersistence();
    },
    clearText() {
      if (event.currentTarget.id == "source-clear") this.source = "";
      else this.result = "";
      this.affectedCharacters = 0;
    },
    copyClipboard(event) {
      let textarea;
      if (event.currentTarget.id == "source-copy-clipboard")
        textarea = document.querySelector(".source>textarea");
      else textarea = document.querySelector(".result>textarea");
      textarea.select();
      document.execCommand("copy");
    },
    executePersistence() {
      if (this.persistent) this.source = this.result;
    }
  }
};
</script>

<style>
.wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 16px 16px;
  min-height: calc(100% - 90px);
  margin-bottom: -72px;
}
.wrapper::after {
  content: "";
  display: block;
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
.fixed {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
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
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
}
.info {
  background-color: #8ba8b7;
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
}
.control-inline {
  display: inline-block;
  width: 50%;
}
.control-btn {
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  padding: 6px 4px;
  margin: 4px 0px;
}
.control-btn:hover {
  background-color: #8ba8b7;
}
.control-input {
  text-align: center;
  font-size: 1em;
  padding: 8px 4px;
  width: 90%;
  border-radius: 5px;
}
.controls {
  text-align: center;
}
.global-controls {
  text-align: left;
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
