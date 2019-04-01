<template>
  <div class="awardsexperience">
    <h2>Awards</h2>
    <div class="actions">
      <el-button type="success" class="addBtn" size="mini" v-on:click="addExperience">Add</el-button>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" size="small">
      <!-- <div v-for="(work, idx) in experienceForm" :key="idx">{{work}}+++++++++{{idx}}</div> -->
      <div v-for="(award, idx) in awardsForm" :key="idx" class="experience">
        <el-form-item label="Awards">
          <el-input v-model="award.awards"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            class="delBtn"
            size="mini"
            v-on:click="delExperience(award)"
          >Delete</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['awardsForm'],
  data() {
    return {
      labelPosition: "top",
      // awardsForm: [{ awards: ""}]
    };
  },
  methods: {
    addExperience() {
      this.awardsForm.push({
        awards: "",
      });
    },
    delExperience(idx) {
      // console.log(idx)
      this.awardsForm.splice(idx, 1);
    }
  },
  created() {}
};
</script>


<style lang='scss'>
.awardsexperience {
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

