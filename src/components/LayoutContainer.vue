<template>
  <div>
    <p>Hello</p>
     <p>{{date1}}</p>
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </div>
    <div>
      <el-button icon="el-icon-edit" @click="load" type="primary"
        >Primary</el-button
      >
      <el-button size="medium" type="primary" plain>Primaty</el-button>
      <el-button type="primary" round>Primaty</el-button>
      <el-button type="primary" circle
        ><i class="el-icon-search"></i
      ></el-button>
      <el-button type="text" plain>Primaty</el-button>

      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left"
          >Previous Page</el-button
        >
        <el-button type="primary"
          >Next Page<i class="el-icon-arrow-right el-icon-right"></i
        ></el-button>
      </el-button-group>
      <el-button type="primary" :loading="flag">Loading</el-button>
    </div>
    <div>
      <el-switch
        v-model="value1"
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></el-switch>
    </div>
    <div>
      <el-slider v-model="value2"></el-slider>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div>
      <el-time-picker
        v-model="time"
     
        placeholder="Select time"
        >>
      </el-time-picker>
    </div>
    <div>
      <el-date-picker
      v-model="date1"
      type="date"
      placeholder="Pick a day"
      >
      </el-date-picker>
    </div>
    <div>
       <span class="demonstration">Picker with quick options</span>
       <el-date-picker
       v-model="date2"
       type="date"
       placeholder="Pick a day"
       :picker-options="pickerOptions"
       ></el-date-picker>
    </div>
      <div class="block">
    <span class="demonstration">Week</span>
    <el-date-picker
      v-model="Week"
      type="week"
      format="Week WW"
      placeholder="Pick a week">
    </el-date-picker>
  </div>
    <div class="block">
    <span class="demonstration">Month</span>
    <el-date-picker
      v-model="Month"
      type="month"
      placeholder="Pick a month">
    </el-date-picker>
  </div>
    <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div>
     <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time">
    </el-date-picker>
  </div>
  <div>
    <el-upload 
    action="https://drive.google.com/drive/u/0/folders/1WZFuU6rgwPIeTsQ9Tcu4NDElCw0et0sK"
>
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
</el-upload>
  </div>
  <el-rate v-model="rate1"></el-rate>
  <div>
  <el-color-picker v-model="color"></el-color-picker>
  </div>

<!-- form -->
  <div>
    
        <el-table
        stripe
        border
      :data="tableData"
      style="width: 100%">
      <el-table-column
      sortable
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
      sortable
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
      sortable
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </div>
  <div>
    <el-tag closable="">Tag 1</el-tag>
<el-tag type="success">Tag 2</el-tag>
<el-tag type="info">Tag 3</el-tag>
<el-tag type="warning">Tag 4</el-tag>
<el-tag type="danger">Tag 5</el-tag>
  </div>
  <div>
    <el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
  </div>

  <div>
      <span class="demonstration">When you have few pages</span>
  <el-pagination
  background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
  </div>

  <div>
    <span class="demonstartion">Total item count</span>
   <div class="block">
    <span class="demonstration">Total item count</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Change page size</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump to</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">All combined</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      time: "",
      currentPage1: 5,
      value1: true,
      value0: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      date1:"",
      Week:"",
      Month:"",
      Year:'',
      rate1:2,
      color:'#406fff',
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
    };
  },
  methods: {
    load() {
      this.flag = !this.flag;
    },
    formatTooltip(val) {
      return val / 100;
    },
    handleSizeChange(val) {
        console.log(`${val} items per page`);
    },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
  },
};
</script>

<style></style>
