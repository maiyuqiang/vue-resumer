<template>
  <div class="workexperience">
    <h2>Work Experience</h2>
    <div class="actions">
      <el-button type="success" class="addBtn" size="mini" v-on:click="addExperience">Add</el-button>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" size="small">
      <!-- <div v-for="(work, idx) in workExperience" :key="idx">{{work}}+++++++++{{idx}}</div> -->
      <div v-for="(work, idx) in workExperience" :key="idx" class="experience">
        <el-form-item label="Temporal Interval">
          <el-date-picker
            v-model="work.timeInterval"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="Company">
          <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="Main Content">
          <el-input v-model="work.mainContent" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            class="delBtn"
            size="mini"
            v-on:click="delExperience(work)"
          >Delete</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['workExperience'],
  data() {
    return {
      labelPosition: "top",
      // workExperience: [{ company: "", timeInterval: "", mainContent: "" }]
    };
  },
  methods: {
    addExperience() {
      this.workExperience.push({
        company: "",
        timeInterval: "",
        mainContent: ""
      });
    },
    delExperience(idx) {
      // console.log(idx)
      this.workExperience.splice(idx, 1);
    }
  },
  created() {}
};
</script>


<style lang='scss'>
.workexperience {
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

