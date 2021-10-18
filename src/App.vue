<template>
  <div class="home">
    <div class="container_form">
      <div class="container grid-xs py-2">
        <img class= "img-responsive img-logo" src="@/assets/shisui.png" alt="imagem de logo">
        <form @submit.prevent="addtodo(todo)">
          <div class="input-group">
            <input type="text" v-model="todo.description" class="form-input" placeholder="novo todo">
            <button class="btn btn-primary input-group-btn">Adicionar</button>
          </div>
          {{ todos }}
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { 
      todos: [],
      todo: {checked: false } 
    };
  },
  methods: {
    addtodo(todo) {
       todo.id = Date.now();
       this.todos.push(todo);
    }
  }
  
}


</script>

<style scoped>
.img-logo {
  max-width: 100px;
  margin: 10% auto;
}
.home {
  width: 100vw;
  height: 100vh;
}
.container_form {
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
