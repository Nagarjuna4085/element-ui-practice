<template>
  <div class="hello">
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">1</div></el-col>
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple" span="6">1</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">2</div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">2</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">3</div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">2</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">4</div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple">1</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">6</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">5</div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<br/>
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="12" :offset="20"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<br />

  <el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
