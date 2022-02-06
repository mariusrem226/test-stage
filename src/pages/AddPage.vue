<template>
  <div id="addPageContainer">
    <div class="add-form-container">
      <h1>Ajouter une voiture</h1>
      <StepBar v-bind:setStep="setStep" v-bind:stepNumber="step" />
      <div class="form">
        <input
          @keypress.enter="next"
          v-model="nameValue"
          v-if="step === 1"
          placeholder="Nom de la voiture"
          type="text"
          name="carName"
          id="inpt-name"
          ref="inptName"
        />
        <textarea
          v-else-if="step === 2"
          v-model="descValue"
          placeholder="Description de la voiture"
          type="text"
          name="carDescription"
          id="inpt-desc"
        >
        </textarea>
        <input
        @keypress.enter="valid"
          v-model="tagValue"
          v-else-if="step === 3"
          type="text"
          placeholder="tag1, tag2, ... (séparés par une virgule)"
          name="carTag"
          id="inpt-tag"
        />
          <p id="error-container">
            <span v-show="error" id="error-msg"
              >Veuillez renseigner un nom de voiture pour continuer</span
            >
          </p>
         <TagsContainer :tagsList="tagsList"/>
      
      </div>
      <button id="btn-suivant" v-if="step < 3" @click="next">suivant</button>
      <button @click="valid" v-else>Valider</button>
    </div>
  </div>
</template>

<script>
import StepBar from "../components/ajout/StepBar.vue";
import TagsContainer from "../components/tag/TagsContainer.vue";
import router from "../router/index.js";

export default {
  mounted() {
    //quand le composant est monté on "decore" le lien correspondant dans la navBar (ici "Ajout voiture")
    document.getElementById("link-add").classList.add("selected");
  },
  beforeDestroy() {
    //quand le composant est detruit on retire la "décoration" du lien correspondant dans la navBar (ici "Ajout voiture")
    document.getElementById("link-add").classList.remove("selected");
  },

  name: "AddPage",
  data() {
    return {
      nameValue: "",
      tagValue: "",
      descValue: "",
      step: 1,
      error: false,//boolean qui sert à l'affichage ou non du message d'erreur
    };
  },
  computed: {
    tagsList: function () {//la liste des tags qui se met a jour en direct
      var list = this.tagValue.trim().split(",");
      return list;
    },
   
  },
  methods: {
    next() {  
       this.setStep(this.step+1)
    },
    valid() {//fonction de validation du formulaire
      router.push({//on redirige vers la page d'affichage des infos à laquelle on y passe un objet "car" 
        name: "newCar",
        params: {
          car: {
            name: this.nameValue,
            description: this.descValue,
            tags: this.tagsList,
          },
        },
      });
      
    },
    setStep(nb) {
      if (this.nameValue.trim() !== "") {
        this.step = nb;
        this.error = false;
      } else {
        const inpt=this.$refs.inptName;//on recupere l'input du nom
        this.shake(inpt)//on applique l'effet de secousse sur l'input
        this.error = true;
      }
    },
    shake(elm){//fonction qui provoque l'effet de "secousse" 
      elm.classList.remove("error-effect");
      void elm.offsetWidth;
      elm.classList.add("error-effect");
    }
  },
  components: { StepBar, TagsContainer},
};
</script>

<style scoped>
.error-effect{
  animation: 0.3s shake;
}
 @keyframes shake {
   0%{
      transform: translateX(0px) ;

   }
   25%{
     transform: translateX(10px) ;
   }
   50%{
     transform: translateX(-10px) ;
   }
   75%{
     transform: translateX(10px) ;
   }

 }


h1 {
  border-radius: 50px;
  padding: 30px 20px 0px 20px;
}
#error-msg {
  width: 100%;
  color: red;
  text-align: center;
}
#error-container{
  min-height:20px;
}
#addPageContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.add-form-container {
  box-shadow: 3px 3px 3px rgb(231, 231, 231), -3px 3px 3px rgb(231, 231, 231);
  border-radius: 30px;

  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 400px;
  margin: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 190px;
}
button {
  border: solid 1px #ffa502;

  color: #ffa502;
  padding: 4px 12px 4px 12px;
  border-radius: 30px;
  background: transparent;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}
button:hover {
  background: #ffa502;
  color: white;
}

button:disabled:hover {
  border: solid 1px #ffa502;
  background: transparent;
  color: #ffa502;
}

input:focus,
textarea:focus {
  outline: none;
  border: solid 2px #ffa502;
}
input,
textarea {
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  width: 400px;
}
textarea {
  height: 130px;
}
</style>
