<template>
  <div class="content">
    <div
      class="alert alert-danger alert-with-icon"
      data-notify="container"
      v-if="auth.user.level != 'admin' && auth.user.level != 'superuser'"
    >
      <button
        type="button"
        aria-hidden="true"
        @click="onLogout"
        class="close"
        style="padding: 0px 30px 15px 0px"
      >
        <h3>×</h3>
      </button>
      <i data-notify="icon" class="material-icons">add_alert</i>
      <h4 data-notify="message">
        Maaf! Silahkan lakukan login terlebih dahulu untuk dapat mengakses
        halaman ini
      </h4>
    </div>
    <div
      style="margin-top: 50px;"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <span style="font-size: 18px;"
        ><a href="#/dashboard/info" style="color: grey">Info </a></span
      >
      <span style="font-size: 17px; padding: 0px 5px"> > </span>
      <span style="font-size: 18px">Tambah Info</span>
    </div>
    <form
      ref="form"
      novalidate
      class="md-layout"
      @submit.prevent="onSubmit"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <md-card
        class="md-layout-item md-size-95 md-small-size-100"
        style="padding: 0px 20px 30px 20px; margin-left: 30px;"
      >
        <md-card-header>
          <div class="md-title">
            <h2 style="letter-spacing: 2px;color: green;margin-top:30px;">
              <strong>Input Info</strong>
            </h2>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('title')">
                <label for="title">Title...</label>
                <md-input
                  name="title"
                  id="title"
                  v-model="infoData.title"
                  md-dense
                  :disabled="sending"
                >
                </md-input>
                <span class="md-error" v-if="!$v.infoData.title.required"
                  >Title is required</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('date')">
                <md-input
                  name="date"
                  id="date"
                  autocomplete="date"
                  v-model="infoData.date"
                  :disabled="sending"
                  type="date"
                />
                <span class="md-error" v-if="!$v.infoData.date.required"
                  >Tanggal is required</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('image')">
                <label for="image">Image Program Pelatihan...</label>
                <md-file
                  ref="image"
                  name="image"
                  id="image"
                  v-model="infoData.image"
                  @md-change="onFileUpload($event)"
                  placeholder="Upload Image "
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.infoData.image.required"
                  >Image is required</span
                >
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter" style="margin-top: 20px">
            <div class="md-layout-item md-small-size-100">
              <label for="text">Text...</label>
              <md-field :class="getValidationClass('text')">
                <quill-editor
                  ref="myQuillEditor"
                  v-model="infoData.text"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                  name="text"
                  id="text"
                  autocomplete="text"
                  :disabled="sending"
                  style="min-height: 200px; max-height: 500px"
                />
                <span class="md-error" v-if="!$v.infoData.text.required"
                  >The welcome speech is required</span
                >
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions style="padding-top: 50px">
          <md-button
            type="submit"
            class="md-login md-success md-lg md-round"
            :disabled="sending"
            style="height: 50px; width: 140px"
            ><span
              style="color: white; font-size: 17px; text-transform: capitalize; bottom: 5px"
            >
              Submit
            </span>
          </md-button>
        </md-card-actions>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />
      </md-card>

      <md-snackbar :md-active.sync="userSaved"
        >The user was saved with success!</md-snackbar
      >
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { LOGOUT } from "@/services/store/auth.module";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    editorOption: {},
    form: {
      title: null,
      text: null,
      date: null,
      image: null
    },
    userSaved: false,
    sending: false
  }),
  validations: {
    infoData: {
      title: {
        required
      },
      text: {
        required
      },
      date: {
        required
      },
      image: {
        required
      }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/gedung-upj.jpg")
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo/upj-logo.png")
    }
  },
  computed: {
    ...mapState(["auth"]),
    ...mapState("info", ["infoData"]),
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions("info", ["createInfo"]),
    async onFetchData() {},
    onFileUpload(event) {
      this.image = event[0];
      this.infoData.image = event[0];
    },
    async onSubmit() {
      this.$v.$touch();
      this.sending = true;
      if (!this.$v.invalid) {
        try {
          let formData = new FormData();
          for (const property in this.infoData) {
            // console.log(property, this.infoData[property]);
            formData.append(property, this.infoData[property]);
          }
          // let image = this.$refs.image.files[0];
          formData.append("image", this.image);
          await this.createInfo({
            id: this.$route.params.id,
            payload: formData
          });

          // console.log(formData);
          this.sending = false;
          this.infoData = {};
          this.$router.push({ name: "info" });
        } catch (error) {
          this.sending = false;
          throw Error(error);
        }
      }
    },
    // async onSubmit() {
    //   this.$v.$touch();
    //   this.sending = true;
    //   if (!this.$v.invalid) {
    //     try {
    //       await this.createInfo({
    //         id: this.$route.params.id,
    //         payload: this.infoData
    //       });
    //       this.sending = false;
    //       this.infoData = {};
    //       this.$router.push({ name: "list-info-pelatihan" });
    //     } catch (error) {
    //       this.sending = false;
    //       throw Error(error);
    //     }
    //   }
    // },
    onEditorBlur(quill) {
      // console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      // console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      // console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      // console.log("editor change!", quill, html, text);
      this.content = html;
    },
    getValidationClass(fieldName) {
      const field = this.$v.infoData[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    onLogout() {
      this.$store.dispatch(LOGOUT).then(() =>
        this.$router.push({
          name: "login"
        })
      );
    },
    saveUser() {
      this.sending = true;
      window.setTimeout(() => {
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  },
  async mounted() {
    await this.onFetchData();
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css">
.md-progress-bar {
  margin: 24px;
}
</style>
