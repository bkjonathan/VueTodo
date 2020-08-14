<template>
  <div class="col-11 mt-3">
    <div class="card">
      <div class="row p-3 align-items-center">
        <div
          class="col-7"
          :class="{ taskCompleted: todo.done }"
          @dblclick="editToggle = !editToggle"
        >
          <input
            type="text"
            v-model="todo.task"
            class="form-control"
            v-if="editToggle"
            @keyup.enter="editTodo"
          />
          {{ todo.task }}
        </div>
        <div class="col text-right">
          <button class="btn btn-success mr-3">
            <i class="material-icons mt-1" @click="completeTodo(index)"
              >check</i
            >
          </button>
          <button class="btn btn-danger" @click="delTodo(index)">
            <i class="material-icons mt-1">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  data: () => ({
    editToggle: false
  }),
  methods: {
    completeTodo(index) {
      this.$emit("completeTodo", index);
    },
    delTodo(index) {
      this.$emit("delTodo", index);
    },
    editTodo(){
      this.$emit("editTodo",{todo:this.todo,index:this.index});
      this.editToggle = false;
    }
  }
};
</script>

<style scoped></style>
