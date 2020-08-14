<template>
  <div class="row justify-content-center">
    <div class="col-11">
      <img src="./../assets/logo-w.png" class="d-block mx-auto" />
      <label>New Task</label>
      <input type="text" class="form-control" v-model="task" />
      <button class="btn btn-dark mt-3" @click="addTodo">Add New Task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data: () => ({
    task: ""
  }),
  methods: {
    addTodo() {
      if (this.task == "") {
        return alert("Task Filed is required.");
      }
      this.$emit("addTask",{task:this.task,done:false});
      this.task = "";
    }
  }
};
</script>

<style scoped></style>
