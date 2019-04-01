<template>
  <div class="intro">
    <h2>Personal information</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="introForm" size="small">
      <el-form-item label="Name">
        <el-input v-model="introForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Gender">
        <el-input v-model="introForm.gender"></el-input>
      </el-form-item>
      <el-form-item label="BirthDate">
        <el-input v-model="introForm.birthDate"></el-input>
      </el-form-item>
      <el-form-item label="Education">
        <el-input v-model="introForm.education"></el-input>
      </el-form-item>
      <el-form-item label="City">
        <el-input v-model="introForm.city"></el-input>
      </el-form-item>
      <el-form-item label="Introduce">
        <el-input type="textarea" :rows="4" v-model="introForm.introduce"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["introForm"],
  data() {
    return {
      sendData: [],
      labelPosition: "right"
      // introForm: {
      //   name: "",
      //   gender: "",
      //   education: "",
      //   birthDate: ""
      // }
    };
  },
  methods: {},
}
</script>

<style lang='scss'>
</style>

