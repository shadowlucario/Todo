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
                <q-input input-style="width: 350px;"  maxlength="30" outlined bg-color="white" color="grey-9" v-model="todo.title" label="Outlined" />
              </div>
              <q-btn color="black" label="adicionar" />
            </div>
            <q-card class="card-form" v-for="(item, index) in todos" v-bind:key="index" @click="descriptionDialog = true">
              <div>
                <q-avatar class="card-form__avatar">
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
              </div>
              
              <div class="card-form__description">
                {{item.title}}
              </div>
              <div class="card__form__indice">
                {{index +1}} 
              </div>
              <div class="card_form_botton">
                <q-btn round color="secondary">
                  <box-icon name="trash"></box-icon>
                </q-btn>
              </div>

              <q-dialog v-model="descriptionDialog">
                <q-card>
                  <q-card-section>
                    <div class="text-h4">{{item.title.toUpperCase()}}</div>
                  </q-card-section>

               <q-card-section class="q-pt-none">
                  <q-input v-model="item.description" filled autogrow/>
               </q-card-section>

                <q-card-actions align="right" class="text-primary">
                  <q-btn flat label="Close" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>

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
      todo: { checked: false },
      descriptionDialog: false,
      selectedItem: ''
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

<style lang="scss" scoped>
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
  cursor: pointer;
  &__avatar {
    margin:18%;
  }
  &__description {
    margin: 5%;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 700;
  }
  &:hover {
    background: red;
  }

  
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