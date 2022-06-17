<template>
  <div>
    <p>{{ checked }}</p>
    <p>{{ radio }}</p>
    <p>{{website}}</p>
    <el-radio v-model="radio" label="1">Option A</el-radio>
    <el-radio v-model="radio" label="2" border></el-radio>
    <div>
      <el-checkbox v-model="checked">Option1</el-checkbox>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="Option A"></el-checkbox>
        <el-checkbox label="Option B"></el-checkbox>
        <el-checkbox label="Option C"></el-checkbox>
        <el-checkbox label="selected and disabled" disabled></el-checkbox>
        <el-checkbox label="selected and disabled" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <el-input
        v-model="name"
        placeholder="Please input"
        clearable=""
        show-password
      ></el-input>
    </div>
    <div>
      <el-input placeholder="Please input" v-model="website">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div>
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>

    </div>
    <div>
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      checked: true,
      checkList: ["selected and disabled", "Option A"],
      name: "sanam",
      website:"",
      num:1
    };
  },
};
</script>

<style></style>
