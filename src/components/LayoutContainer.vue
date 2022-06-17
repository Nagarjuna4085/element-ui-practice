<template>
  <div>
    <p>Hello</p>

    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </div>
    <div>
        <el-button icon="el-icon-edit" @click="load" type="primary">Primary</el-button>
        <el-button size="medium" type="primary" plain>Primaty</el-button>
        <el-button type="primary" round>Primaty</el-button>
        <el-button type="primary" circle><i class="el-icon-search"></i></el-button>
        <el-button type="text" plain>Primaty</el-button>

<el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
  <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
<el-button  type="primary" :loading="flag">Loading</el-button>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false
        }
    },
    methods:{
        load(){
            this.flag = !this.flag
        }
    }
};
</script>

<style></style>
