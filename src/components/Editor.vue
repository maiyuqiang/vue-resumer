<template>
  <div id="editor">
    <nav>
      <ol>
        <li
          v-for="i in [0,1,2,3,4,5]"
          v-bind:class="{active: currentTab === i }"
          v-on:click="currentTab = i"
          v-bind:key="i"
        >
          <svg class="icon">
            <!-- ES6写法 -->
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panse">
      <li v-bind:class="{active: currentTab ===0 }">
        <Intro v-bind:introForm="resume.introForm"></Intro>
      </li>
      <li v-bind:class="{active: currentTab ===1 }">
        <ContactInformation v-bind:waysForm="resume.waysForm"></ContactInformation> 
      </li>
      <li v-bind:class="{active: currentTab ===2 }">
        <AwardsExperience v-bind:awardsForm="resume.awardsForm"></AwardsExperience> 
      </li>
      <li v-bind:class="{active: currentTab ===3 }">
        <StudyExperience v-bind:studyForm="resume.studyForm"></StudyExperience>
      </li>
      <li v-bind:class="{active: currentTab ===4 }">
        <WorkExperience v-bind:workExperience="resume.workExperience"></WorkExperience>
      </li>
      <li v-bind:class="{active: currentTab ===5 }">
        <ProjectExperience v-bind:experienceForm="resume.experienceForm"></ProjectExperience>
      </li>
      <li v-bind:class="{active: currentTab ===6 }">
        <AwardsExperience v-bind:awardsForm="resume.awardsForm"></AwardsExperience> 
      </li>
    </ol>
  </div>
</template>
<script>
import WorkExperience from "./WorkExperience";
import Intro from "./Intro";
import StudyExperience from "./StudyExperience";
import ProjectExperience from "./ProjectExperience";
import AwardsExperience from "./AwardsExperience";
import ContactInformation from "./ContactInformation";

export default {
  components: { WorkExperience, Intro,StudyExperience,ProjectExperience,AwardsExperience,ContactInformation},
  props: ['resume'],
  data() {
    return {
      currentTab: 0,
      icons: [
        "credentials_icon",
        "weibiaoti-",
        "rongyu",
        "shu1",
        "gongwenbao",
        "gongcheng",
      ]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  nav {
    background: #000;
    width: 100px;
  }
  nav > ol > li {
    border: 1px solid #fff;
    padding: 16px 0;
    text-align: center;
    > .icon {
      width: 32px;
      height: 32px;
      fill: #fff;
    }
    &.active {
      background: #fff;
      > .icon {
        fill: #000;
      }
    }
  }
  > .panse {
    flex: 1;
    > li {
      display: none;
      height: 100%;
      overflow: auto;
      width: 100%;
      padding: 0 30px;
      &.active {
        display: block;
        h2 {
          padding: 20px;
        }
      }
    }
  }
}
</style>