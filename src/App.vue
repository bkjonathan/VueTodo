<template>
  <div class="container mt-5">
    <notifications group="foo" />
    <div class="row justify-content-center">
      <div class="col-11">
        <img src="./assets/logo-w.png" class="d-block mx-auto">
        <label>New Task</label>
        <input type="text" class="form-control" v-model="task">
        <button class="btn btn-dark mt-3" @click="addTodo">Add New Task</button>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-11 mt-3" v-for="(todo,index) in todos" :key="index">
        <div class="card">
          <div class="row p-3 align-items-center">
            <div class="col-7" :class="{'taskCompleted':todo.done}">{{todo.task}}</div>
            <div class="col text-right">
              <button class="btn btn-success mr-3">
                <i class="material-icons mt-1" @click="completeTodo(index)">check</i>
              </button>
              <button class="btn btn-danger" @click="delTodo(index)">
                <i class="material-icons mt-1">delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data:()=>({
    task:'',
    todos:[]
  }),
  methods:{
    addTodo(){
      if (this.task == ''){
        return alert('Task Filed is required.');
      }
      this.todos.push({task:this.task,done:false});
      this.task = '';
    },
    delTodo(index){
      if (confirm('You are Sure?')){
        this.todos.splice(index,1);
        this.$notify({
          group: 'foo',
          title: 'Deleted!',
          text: 'Your Tasks has been removed from Todo.',
          type:'error'
        });
      }
    },
    completeTodo(index){
      this.todos[index].done = true;
      this.$notify({
        group: 'foo',
        title: 'Completed!',
        text: 'Your Tasks has been complete',
      });
    }
  }
};
</script>

<style lang="scss">
label{
  color: white;
}
  .card{
    border-radius: 1rem !important;
  }
</style>
