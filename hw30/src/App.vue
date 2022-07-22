<template>
  <div id="app">
    <b-container class="wrapper">
      <b-row class="underlined">
        <b-col>
          <h1 class="title">Add task</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="task__add">
          <b-form-input
            class="task primary"
            v-model="tasks.name"
            placeholder="Enter your task for today"
            @keydown.enter="sendLocalData"
          >
          </b-form-input>
          <b-button variant="outline-primary" @click="sendLocalData"
            >Button</b-button
          >
        </b-col>
      </b-row>
      <b-row class="underlined">
        <b-col>
          <h1 class="title">Todo</h1>
        </b-col>
      </b-row>
      <div class="list__wrapper">
        <b-row>
          <b-col>
            <ul class="list">
              <li v-for="(task, index) in this.todoList" :key="index">
                <b-form-checkbox
                  v-if="task.value == false"
                  class="task__wrapper"
                  v-model="task.value"
                  size="lg"
                >
                  <b-form-input
                    class="task__name"
                    v-model="task.name"
                    :plaintext="!task.isEdit"
                  ></b-form-input>
                  <b-button
                    :id="index"
                    v-if="task.isEdit"
                    variant="outline-primary"
                    @click="taskEdit(index)"
                    >Save</b-button
                  >
                  <b-button
                    :id="index"
                    v-if="!task.isEdit"
                    variant="outline-primary"
                    @click="taskEdit(index)"
                    >Edit</b-button
                  >
                  <b-button
                    :id="index"
                    variant="outline-primary"
                    @click="taskDelete(index)"
                    >Delete</b-button
                  >
                </b-form-checkbox>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="underlined">
          <b-col>
            <h1 class="title">Completed</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <ul class="list">
              <li v-for="(task, index) in this.todoList" :key="index">
                <b-form-checkbox
                  class="task__wrapper"
                  v-if="task.value"
                  v-model="task.value"
                  size="lg"
                >
                  <b-form-input
                    class="task__name"
                    v-model="task.name"
                    :plaintext="!task.isEdit"
                    @click="taskEdit(index)"
                  ></b-form-input>
                  <b-button
                    :id="index"
                    v-if="task.isEdit"
                    variant="outline-primary"
                    @click="taskEdit(index)"
                    >Save</b-button
                  >
                  <b-button
                    :id="index"
                    v-if="!task.isEdit"
                    variant="outline-primary"
                    @click="taskEdit(index)"
                    >Edit</b-button
                  >
                  <b-button
                    :id="index"
                    variant="outline-primary"
                    @click="taskDelete(index)"
                    >Delete</b-button
                  >
                </b-form-checkbox>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tasks: {
        name: ``,
        value: false,
        isEdit: false,
      },
      todoList: [],
      empty: ``,
    };
  },
  methods: {
    sendLocalData() {
      let existing = localStorage.getItem("todo-list");
      existing = JSON.parse(existing) || [];
      existing.push(this.tasks);
      localStorage.setItem("todo-list", JSON.stringify(existing));
      existing = localStorage.getItem("todo-list");
      existing = JSON.parse(existing) || [];
      this.todoList = existing;
      this.tasks.name = "";
      return this.tasks.name;
    },

    taskDelete(index) {
      this.todoList.splice(index, 1);
    },
    taskEdit(index) {
      if (this.todoList[index].isEdit === false) {
        this.todoList[index].isEdit = true;
      } else {
        this.todoList[index].isEdit = false;
      }
    },
  },
  created() {
    let existing = localStorage.getItem("todo-list");
    existing = JSON.parse(existing) || [];
    this.todoList = existing;
  },
  watch: {
    todoList: {
      handler: function (newVal) {
        localStorage.setItem("todo-list", JSON.stringify(newVal));
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container.wrapper {
  max-width: 1000px;
}
.underlined {
  text-align: left;
  border-bottom: 4px solid black;
  margin-bottom: 30px;
}
.title {
  text-transform: uppercase;
  font-size: 1.17rem;
  font-weight: bold;
}
.task__add {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}
.task.primary:focus {
  border-color: #ce33e2;
  box-shadow: 0 0 0 0.25rem #ce33e240;
}
.task__wrapper {
  width: 100%;
  display: flex;
}
.custom-control-label {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 15px;
  width: 100%;
  text-align: left;
  align-items: center;
}
.custom-control-input {
  width: 20px;
}
.list {
  list-style: none;
}
</style>
