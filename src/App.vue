<template>
  <div class="container mt-5">
    <notifications group="foo" class="mt-3" />
    <AddTask @addTask="addTask" />

    <transition-group
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutRight"
      class="row justify-content-center mt-3"
    >
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @completeTodo="completeTodo"
        @delTodo="delTodo"
        @editTodo="editTodo"
      />
    </transition-group>
  </div>
</template>

<script>
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem";
export default {
  name: "App",
  components: { TodoItem, AddTask },
  data: () => ({
    todos: []
  }),
  methods: {
    addTask(todo) {
      this.todos.push(todo);
      this.$notify({
        group: "foo",
        title: "Created!",
        text: "Your Tasks has been added to Todo list."
      });
    },
    delTodo(index) {
      if (confirm("You are Sure?")) {
        this.todos.splice(index, 1);
        this.$notify({
          group: "foo",
          title: "Deleted!",
          text: "Your Tasks has been removed from Todo.",
          type: "error"
        });
      }
    },
    completeTodo(index) {
      this.todos[index].done = true;
      this.$notify({
        group: "foo",
        title: "Completed!",
        text: "Your Tasks has been complete"
      });
    },
    editTodo({todo,index}){
      this.todos[index]=todo;
      this.$notify({
        group: "foo",
        title: "Edited!",
        text: "Your Tasks has been edit."
      });
    }
  }
};
</script>

<style lang="scss">
label {
  color: white;
}
.card {
  border-radius: 1rem !important;
}
</style>
