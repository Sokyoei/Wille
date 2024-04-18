<template>
  <div class="ElementPlusLearn">
    <el-container>
      <el-header>
        vue_learn
      </el-header>

      <el-container>
        <el-aside>aside</el-aside>

        <el-container>
          <el-main>
            <el-scrollbar>
              <div>
                <!-- button 按钮 -->
                <el-button type="danger">header</el-button>
                <el-button plain>header</el-button>
                <el-button :icon="Search" circle></el-button>
                <el-button v-for="button in buttons" :key="button.text" :type="button.type">{{
                    button.text
                  }}
                </el-button>
                <el-button-group>
                  <el-button type="primary" :icon="Edit"></el-button>
                  <el-button type="primary" :icon="Share"></el-button>
                  <el-button type="primary" :icon="Link"></el-button>
                </el-button-group>
                <el-button type="primary" loading>Loading</el-button>
              </div>
              <div>
                <!-- border 边框 -->
                <el-row :gutter="12" class="vue-learn-radius">
                  <el-col v-for="(radius, i) in radiusGroup" :key="i" :span="6" :xs="{span:12}">
                    <div class="title">{{ radius.name }}</div>
                    <div class="value">
                      <code>border-radius:{{ getValue(radius.type) || '0px' }}</code>
                    </div>
                    <div class="radius"
                         :style="{borderRadius:radius.type?`var(--el-border-radius-${radius.type})`:''}"></div>
                  </el-col>
                </el-row>
              </div>

              <h1>hello world</h1>
            </el-scrollbar>
          </el-main>

          <el-footer>
            copyright © Sokyoei 2024
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="js" setup>
import { Search, Edit, Share, Link } from "@element-plus/icons-vue";
import { ref } from "vue";

const buttons = [
  {type: '', text: 'plain'},
  {type: 'primary', text: 'primary'},
  {type: 'success', text: 'success'},
  {type: 'info', text: 'info'},
  {type: 'warning', text: 'warning'},
  {type: 'danger', text: 'danger'},
]

const radiusGroup = ref([
  {name: 'No Radius', type: ''},
  {name: 'Small Radius', type: 'small'},
  {name: 'Large Radius', type: 'base'},
  {name: 'Round Radius', type: 'round'},
])

const getValue = (type) => {
  const getCssVarValue = (prefix, type) => {
    getComputedStyle(document.documentElement).getPropertyValue(`--el-${prefix}-${type}`)
  }
  return getCssVarValue('border-radius', type)
}
</script>

<style scoped>
.ElementPlusLearn {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #42b983;
}

.el-main {
  background-color: antiquewhite;
  line-height: 160px;
}

.el-aside {
  width: 10%;
  background-color: hotpink;
  line-height: 200px;
}

.el-footer {
  background-color: gold;
  line-height: 60px;
}

.vue-learn-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}

.vue-learn-radius .value {
  color: var(--el-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
}

.vue-learn-radius .radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
}
</style>
