<!-- Vue Learn -->
<template>
  <div class="VueLearn">
    <h1>{{ message }}</h1>
  </div>
  <!-- v-bind 属性绑定 -->
  <div v-bind:class="message">
    <h1>
      {{ message }}
    </h1>
  </div>
  <div :class="message">
    <h1>
      {{ message }}
    </h1>
  </div>
  <!-- v-on 事件监听 -->
  <div>
    <button v-on:click="increment">{{ count }}</button>
    <button @click="increment">{{ count }}</button>
  </div>
  <!-- v-model 表单绑定 -->
  <div>
    <input :value="text" @input="onInput" placeholder="请输入">
    <input v-model="text" placeholder="请输入">
    <p>{{ text }}</p>
  </div>
  <!-- v-if 条件渲染 -->
  <div>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">awesome is true</h1>
    <h1 v-else>awesome is false</h1>
  </div>
  <!-- v-for 列表渲染 -->
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="new todo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "show all" : "hide completed" }}
    </button>
  </div>
  <!-- 生命周期和模板引用 -->
  <div>
    <p ref="pElementRef">hello</p>
  </div>
  <!-- 侦听器 -->
  <div>
    <p>Todo id:{{ todoId }}</p>
    <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
  <!-- 组件 -->
  <div>
    <HelloWorld :msg="count"/>
  </div>
  <!-- Emits -->
  <div>
    <HelloWorld @response="(msg) => childMsg = msg"/>
    <p>{{ childMsg }}</p>
  </div>
  <!-- 插槽 -->
  <div>
    <HelloWorld>message: {{ message }}</HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

let id = 0

export default {
  data() {
    return {
      message: "hello",
      count: 0,
      text: '',
      awesome: true,
      newTodo: '',
      hideCompleted: false,
      todos: [
        {id: id++, text: 'Ahri', done: true},
        {id: id++, text: 'Sokyoei', done: true},
        {id: id++, text: 'Nono', done: false}
      ],
      todoId: 1,
      todoData: null,
      childMsg: "no childMsg"
    }
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos
    }
  },
  methods: {
    increment() {
      this.count++
    },
    onInput(e) {
      this.text = e.target.value
    },
    toggle() {
      this.awesome = !this.awesome
    },
    addTodo() {
      this.todos.push({id: id++, text: this.newTodo, done: false})
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
    async fetchData() {
      this.todoData = null
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
      this.todoData = await res.json()
    }
  },
  mounted() {
    this.$refs.pElementRef.textContent = 'mounted!'
    this.fetchData()
  },
  watch: {
    todoId() {
      this.fetchData()
    }
  },
  components: {
    HelloWorld
  },
  name: 'VueTutorials',
  props: {
    msg: String
  }
}
</script>

<style>
.hello {
  color: red
}

.done {
  text-decoration: line-through;
}
</style>
