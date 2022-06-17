<template>
  <div>
    <p>{{ checked }}</p>
    <p>{{ radio }}</p>
    <p>{{website}}</p>
    <p>{{value}}</p>
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
    <el-select     allow-create
 filterable clearable multiple="" v-model="value" placeholder="select">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
       ></el-option>
    </el-select>
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
      num:1,
        options: [{
          value: 'nagarjuna',
          label: 'sanam'
        }, {
          value: 'suresh',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      
    };
  },
};
</script>

<style></style>
