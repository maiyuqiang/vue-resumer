<template>
  <div class="studyexperience">
    <h2>Study Experience</h2>
    <div class="actions">
      <el-button type="success" class="addBtn" size="mini" v-on:click="addExperience">Add</el-button>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" size="small">
      <!-- <div v-for="(work, idx) in experienceForm" :key="idx">{{work}}+++++++++{{idx}}</div> -->
      <div v-for="(study, idx) in studyForm" :key="idx" class="experience">
        <el-form-item label="Duration">
          <el-date-picker
            v-model="study.duration"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy.MM.dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="School">
          <el-input v-model="study.school"></el-input>
        </el-form-item>
        <el-form-item label="Degree">
          <el-input v-model="study.degree"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            class="delBtn"
            size="mini"
            v-on:click="delExperience(study)"
          >Delete</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['studyForm'],
  data() {
    return {
      labelPosition: "top",
      // studyForm: [{ school: "", duration: "", degree: "" }]
    };
  },
  methods: {
    addExperience() {
      this.studyForm.push({
        school: "",
        duration: "",
        degree: ""
      });
    },
    delExperience(idx) {
      // console.log(idx)
      this.studyForm.splice(idx, 1);
    }
  },
  created() {}
};
</script>


<style lang='scss'>
.studyexperience {
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

