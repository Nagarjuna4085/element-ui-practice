<template>
  <div>
    
    <p>{{ checked }}</p>
    <p>{{ radio }}</p>
    <p>{{ website }}</p>
    <p>{{ value }}</p>
    <p>{{newDate}}</p>
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
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="10"
      ></el-input-number>
    </div>
    <div>
      <el-select
        allow-create
        filterable
        clearable
        multiple=""
        v-model="value"
        placeholder="select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div>
      <el-badge :value="12" class="item">
        <el-button size="small">comments</el-button>
      </el-badge>

      <el-badge :value="3" class="item">
        <el-button size="small">replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">replies</el-button>
      </el-badge>
    </div>
    <h1>el-skeleton</h1>
    <div>
      <el-skeleton />
      <el-skeleton :rows="6" animated />
      <template>
  <div style="width: 240px">
    <p>
      <label style="margin-right: 16px;">Switch Loading</label>
      <el-switch v-model="loading" />
    </p>
    <el-skeleton style="width: 240px" :loading="loading" animated>
      <template slot="template">
        <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px;"
        />
        <div style="padding: 14px;">
          <el-skeleton-item variant="h3" style="width: 50%;" />
          <div
            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
          >
            <el-skeleton-item variant="text" style="margin-right: 16px;" />
            <el-skeleton-item variant="text" style="width: 30%;" />
          </div>
        </div>
      </template>
      <template>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>Delicious hamberger</span>
            <div class="bottom card-header">
              <span class="time">{{ currentDate }}</span>
              <el-button type="text" class="button">Operation button</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </div>
</template>
    </div>
    <h1>Description</h1>
    <div>
     <el-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" description="description"></el-empty>
    </div>

    <div>
      <el-row>
        <el-col>
          <el-result icon="warning" title="Success Tip" subTitle="please follow the instructions">
            <template>
              <el-button type="primary" >Back</el-button>
            </template>
          </el-result>
        </el-col>
      </el-row>
    </div>
    <h1>Alert</h1>
    <div>
      <el-alert
    title="success alert"
    type="success">
  </el-alert>
    </div>
    <h1>Loading</h1>
    <div>
       <el-table>
        <v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
    </div>
    <div>
      <el-button type="text" @click="open">Click to open the Message Box</el-button>
    </div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  </el-menu>
    </div>
    <div>
      <el-tabs @tab-click="handleClick" v-model="activename">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>
    </div>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item disabled>Action 4</el-dropdown-item>
    <el-dropdown-item divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div>
  <el-steps :active="active" finish-status="success">
  <el-step title="Step 1"></el-step>
  <el-step title="Step 2"></el-step>
  <el-step title="Step 3"></el-step>
</el-steps>
<el-button @click="next">Next Step</el-button>
    </div>
    <div>
      <el-popover
    placement="top-start"
    title="Title"
    width="200"
    trigger="hover"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Hover to activate</el-button>
  </el-popover>
    </div>
    <div>
      <el-radio-group v-model="direction">
      <el-radio label="ltr">left to right</el-radio>
       <el-radio label="rtl">right to left</el-radio>
  <el-radio label="ttb">top to bottom</el-radio>
  <el-radio label="btt">bottom to top</el-radio>
      </el-radio-group>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>
<el-drawer
  title="I am the title"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <span>Hi, there!</span>
</el-drawer>
    </div>
    
    <div>
      <el-calendar v-model="value">
</el-calendar>
    </div>
    <div>
      <ul v-infinite-scroll="load" style="overflow:auto">
     <li v-for=" i in count" :key="i">{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
        open() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
          handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab,event){
         console.log(tab,event)
      },
      next(){
        if(this.active++ >2) {
          this.active =0 
        }
      },
         handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
          .then(() => {
            done();
          })
          .catch(() => {});
      },
        load () {
        this.count += 2
      }

  },
  data() {
    return {
      count:0,
      active:0,
      newDate:new Date(),
      drawer: false,
      direction: 'rtl',
      radio: "1",
      activeIndex: '1',
      checked: true,
      activeName: 'first',
      checkList: ["selected and disabled", "Option A"],
      name: "sanam",
      website: "",
      num: 1,
      loading: true,
      currentDate: '2021-06-01',
          tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
      options: [
        {
          value: "nagarjuna",
          label: "sanam",
        },
        {
          value: "suresh",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
    };
  },
};
</script>

<style></style>
