<template>
  <div id="addPageContainer">
    <div class="add-form-container">
      <h1>Ajouter une voiture</h1>
      <StepBar v-bind:setStep="setStep" v-bind:stepNumber="step" />
      <div class="form">
        <input
          v-model="nameValue"
          v-if="step === 1"
          placeholder="Nom de la voiture"
          type="text"
          name="carName"
          id="inpt-name"
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
          v-model="tagValue"
          v-else-if="step === 3"
          type="text"
          placeholder="tag1, tag2, ..."
          name="carTag"
          id="inpt-tag"
        />
          <p>
            <span v-show="error" id="error-msg"
              >Veuillez renseigner un nom de voiture pour continuer</span
            >
          </p>
          <div id="tags-container" v-show="step === 3">
            <TagItem
              v-for="tag in tagsList"
              v-bind:key="tag"
              v-bind:name="tag"
            />
          </div>
      
      </div>
      <button id="btn-suivant" v-if="step < 3" @click="next">suivant</button>
      <button @click="valid" v-else>Valider</button>
    </div>
  </div>
</template>

<script>
import StepBar from "../components/ajout/StepBar.vue";
import TagItem from "../components/TagItem.vue";
import router from "../router/index.js";

export default {
  mounted() {
    //quand le composant est monté on "decore" le lien correspondant dans la navBar (ici "les pièces")
    document.getElementById("link-add").classList.add("selected");
  },
  beforeDestroy() {
    //quand le composant est detruit on retire la "décoration" du lien correspondant dans la navBar (ici "les pièces")
    document.getElementById("link-add").classList.remove("selected");
  },

  name: "AddPage",
  data() {
    return {
      nameValue: "",
      tagValue: "",
      descValue: "",
      step: 1,
      error: false,
    };
  },
  computed: {
    tagsList: function () {
      var list = this.tagValue.split(",");
      return list;
    },
  },
  methods: {
    next() {
      if (this.nameValue !== "") {
        this.step++;
        this.error = false;
      } else {
        this.error = true;
        console.log(this.error);
      }
    },
    valid() {
      router.push({
        name: "newCar",
        params: {
          car: {
            name: this.nameValue,
            description: this.descValue,
            tags: this.tagsList,
          },
        },
      });
      console.log(this.nameValue, this.descValue, this.tagsList);
    },
    setStep(nb) {
      if (this.nameValue !== "") {
        this.step = nb;
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
  components: { StepBar, TagItem },
};
</script>

<style scoped>
h1 {
  border-radius: 50px;
  padding: 30px 20px 0px 20px;
}
#error-msg {
  width: 100%;
  color: red;
  text-align: center;
}
#addPageContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.add-form-container {
  box-shadow: 3px 3px 3px rgb(231, 231, 231), -3px 3px 3px rgb(231, 231, 231);
  border-radius: 5px;

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
  background: transparent;
  color: #ffa502;
  padding: 4px 12px 4px 12px;
  border-radius: 30px;
}
button:hover {
  background: #ffa502;
  color: white;
}
button:disabled {
}
button:disabled:hover {
  border: solid 1px #ffa502;
  background: transparent;
  color: #ffa502;
}
#tags-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
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
