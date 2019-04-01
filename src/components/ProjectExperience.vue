<template>
  <div class="projectexperience">
    <h2>Project Experience</h2>
    <div class="actions">
      <el-button type="success" class="addBtn" size="mini" v-on:click="addExperience">Add</el-button>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" size="small" v-model="experienceForm">
      <!-- <div v-for="(work, idx) in experienceForm" :key="idx">{{work}}+++++++++{{idx}}</div> -->
      <div v-for="(project, idx) in experienceForm" :key="idx" class="experience">
        <el-form-item label="Project Name">
          <el-input v-model="project.projectName"></el-input>
        </el-form-item>
        <el-form-item label="Duty">
          <el-input v-model="project.duty"></el-input>
        </el-form-item>
        <el-form-item label="Project Description">
          <el-input v-model="project.projectDescription"  type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="Technical Realization">
          <el-input v-model="project.technicalRealization"  type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            class="delBtn"
            size="mini"
            v-on:click="delExperience(project)"
          >Delete</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['experienceForm'],
  data() {
    return {
      labelPosition: "top",
      // experienceForm: [{ projectName: "", duty: "", projectDescription: "",technicalRealization: "" }]
    };
  },
  methods: {
    addExperience() {
      this.experienceForm.push({
            projectName: "",
            duty: "",
            projectDescription: "",
            technicalRealization: ""
          });
    },
    delExperience(idx) {
      // console.log(idx)
      this.experienceForm.splice(idx, 1);
    }
  },
  created() {}
};
</script>


<style lang='scss'>
.projectexperience {
  .el-form {
    .experience {
      border-bottom: 1px solid rgb(192, 187, 187);
      border-top: 1px solid rgb(192, 187, 187);
      padding-bottom: 10px;
    }
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -16px;
  }
}
</style>

