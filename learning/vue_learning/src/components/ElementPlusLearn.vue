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
                <p>button 按钮</p>
                <el-button type="danger">header</el-button>
                <el-button plain>header</el-button>
                <el-button :icon="Search" circle></el-button>
                <el-button v-for="button in buttons" :key="button.text" :type="button.type">
                  {{ button.text }}
                </el-button>
                <el-button-group>
                  <el-button type="primary" :icon="Edit"></el-button>
                  <el-button type="primary" :icon="Share"></el-button>
                  <el-button type="primary" :icon="Link"></el-button>
                </el-button-group>
                <el-button type="primary" loading>Loading</el-button>
              </div>
              <div>
                <p>border 边框</p>
                <el-row :gutter="12" class="vue-learn-radius">
                  <el-col v-for="(radius, i) in radiusGroup" :key="i" :span="6" :xs="{ span: 12 }">
                    <div class="title">{{ radius.name }}</div>
                    <div class="value">
                      <code>border-radius:{{ getValue(radius.type) || '0px' }}</code>
                    </div>
                    <div class="radius"
                      :style="{ borderRadius: radius.type ? `var(--el-border-radius-${radius.type})` : '' }">
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div>
                <p>form 表单</p>
                <el-form :model="form" label-width="auto" style="max-width: 600px">
                  <el-form-item label="Activity name">
                    <el-input v-model="form.name" />
                  </el-form-item>
                  <el-form-item label="Activity zone">
                    <el-select v-model="form.region" placeholder="please select your zone">
                      <el-option label="Zone one" value="shanghai" />
                      <el-option label="Zone two" value="beijing" />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Activity time">
                    <el-col :span="11">
                      <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                      <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                      <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                  </el-form-item>
                  <el-form-item label="Instant delivery">
                    <el-switch v-model="form.delivery" />
                  </el-form-item>
                  <el-form-item label="Activity type">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox value="Online activities" name="type">
                        Online activities
                      </el-checkbox>
                      <el-checkbox value="Promotion activities" name="type">
                        Promotion activities
                      </el-checkbox>
                      <el-checkbox value="Offline activities" name="type">
                        Offline activities
                      </el-checkbox>
                      <el-checkbox value="Simple brand exposure" name="type">
                        Simple brand exposure
                      </el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="Resources">
                    <el-radio-group v-model="form.resource">
                      <el-radio value="Sponsor">Sponsor</el-radio>
                      <el-radio value="Venue">Venue</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="Activity form">
                    <el-input v-model="form.desc" type="textarea" />
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div>
                <p></p>
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
import { ref, reactive } from "vue"

const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
]

const radiusGroup = ref([
  { name: 'No Radius', type: '' },
  { name: 'Small Radius', type: 'small' },
  { name: 'Large Radius', type: 'base' },
  { name: 'Round Radius', type: 'round' },
])

const getValue = (type) => {
  const getCssVarValue = (prefix, type) => {
    getComputedStyle(document.documentElement).getPropertyValue(`--el-${prefix}-${type}`)
  }
  return getCssVarValue('border-radius', type)
}

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
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
