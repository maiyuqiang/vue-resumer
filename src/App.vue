<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <transition name="animate">
      <Topbar class="topbar"/>
    </transition>
    <content>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" v-on:preview="preview" class="preview"/>
    </content>
    <el-button
      type="danger"
      icon="el-icon-back"
      id="escPreview"
      size="mini"
      v-on:click="escPreview"
    >退出预览</el-button>
  </div>
</template>

<script>
//局部组件
import Topbar from "./components/Topbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
export default {
  data() {
    return {
      previewMode: false,
      resume: {
        introForm: {
          name: "",
          city: "",
          gender: "",
          education: "",
          birthDate: "",
          introduce: ""
        },
        experienceForm: [
          {
            projectName: "",
            duty: "",
            projectDescription: "",
            technicalRealization: ""
          }
        ],
        studyForm: [
          {
            school: "",
            duration: "",
            degree: ""
          }
        ],
        awardsForm: [
          {
            awards: ""
          }
        ],
        waysForm: [{ phone: "", email: "", adress: "", qq: "", wechat: "" }],
        workExperience: [{ company: "", timeInterval: "", mainContent: "" }]
      }
    };
  },
  components: {
    Topbar: Topbar,
    Editor: Editor,
    Preview: Preview
  },
  created() {},
  methods: {
    preview() {
      this.previewMode = true;
    },
    escPreview() {
      this.previewMode = false;
    }
  }
};
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(240, 231, 231);
}
.topbar {
  background: #fff;
  margin: 16px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: auto;
}
#app content {
  display: flex;
  flex: 1;
  > .editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
  > .preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: #fff;
  }
}
.previewMode > #topbar {
  display: none;
}
.previewMode #editor {
  display: none;
}
#escPreview {
  display: none;
}
.previewMode #escPreview {
    display: inline-block;
    position: absolute;
    bottom: 50px;
    right: 80px;
}
</style>
