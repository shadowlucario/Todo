<template>
  <q-page class="flex flex-center">
    <div class="home">
      <div class="container_form">
        <div class="fixed-center" style="width: 500px;">
          <div class="items-center text-center">
            <img class= "img-responsive img-logo" src="@/assets/shisui.png" alt="imagem de logo">
          </div>
          <form @submit.prevent="addtodo">
            <div class="row input__group">
              <div>
                <q-input input-style="width: 350px;" outlined bg-color="white" color="grey-9" v-model="todo.description" label="Outlined" />
              </div>
              <q-btn color="black" label="adicionar" />
            </div>
            <q-card class="card-form" v-for="(item, index) in todos" v-bind:key="index">
              <div>
                <q-avatar class="card_form_avatar">
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
              </div>
              
              <div class="card__form__description text-bold">
                {{item.description}}
              </div>
              <div class="card__form__indice">
                {{index +1}} 
              </div>
              <div class="card_form_botton">
                <q-btn round color="secondary">
                  <box-icon name="trash"></box-icon>
                </q-btn>
              </div>
            </q-card>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'List',
  data() {
    return { 
      todos: [],
      todo: { checked: false } 
    };
  },
  methods: {
    addtodo() {
      this.todos.push(this.todo);
      this.todo = {
        checked: false 
      };
    },
    thema(val) {
      return val ? 'thema-dark' : 'thema-light'
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
  background: grey;
}
.card-form {
  display: flex;
  margin: 3%;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: black;
  color: white;
  border-radius: 2%; 
  box-shadow: 3px 2px 2px 1px rgba(0, 0, 0, 0.2); 
}
.card_form_avatar {
  margin:18%;
}

.card__form__description {
  margin: 5%;
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-wrap: wrap;
}
.card__form__indice {
  margin: 5%;
}
.card_form_botton {
  margin: 8% 5% 5% 5%;
}
.input__group {
  justify-content: center
}

</style>