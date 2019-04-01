<template>
  <div class="contactinformation ">
    <h2>Contact Information</h2>
    
    <el-form :label-position="labelPosition" label-width="80px" size="small">
      <el-form-item label="Phone">
          <el-input v-model="waysForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input v-model="waysForm.qq"></el-input>
        </el-form-item>
        <el-form-item label="WeChat">
          <el-input v-model="waysForm.wechat"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="waysForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Adress">
          <el-input v-model="waysForm.adress"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['waysForm'],
  data() {
    return {
      labelPosition: "right",
      // waysForm: [{ phone: "" ,email: "",adress: "" }]
    };
  },
  methods: {
  },
  created() {}
};
</script>


<style lang='scss'>

</style>

