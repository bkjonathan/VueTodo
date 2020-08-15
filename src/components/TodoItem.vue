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
          <span v-else>{{ todo.task }}</span>
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
      this.$store.commit("completeTodo",index);
      this.$notify({
        group: "foo",
        title: "Completed!",
        text: "Your Tasks has been complete"
      });
    },
    delTodo(index) {
      this.$store.commit('delTodo',index);
      this.$notify({
        group: "foo",
        title: "Deleted!",
        text: "Your Tasks has been removed from Todo.",
        type: "error"
      });
      // this.$emit("delTodo", index);
    },
    editTodo() {
      this.$store.commit("editTodo",{ todo: this.todo, index: this.index });
      this.editToggle = false;
      this.$notify({
        group: "foo",
        title: "Edited!",
        text: "Your Tasks has been edit."
      });
    }
  }
};
</script>

<style scoped></style>
