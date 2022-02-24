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
        ><a href="#/dashboard/testimoni" style="color: grey">
          Testimoni Program Pelatihan
        </a></span
      >
      <span style="font-size: 17px; padding: 0px 5px"> > </span>
      <span style="font-size: 18px"
        >Tambah Testimoni Program Pelatihan LPK</span
      >
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
              <strong>Input Data Testimoni Program Pelatihan LPK</strong>
            </h2>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('program_id')">
                <label for="program_id">Nama Program Pelatihan...</label>
                <md-select
                  name="program_id"
                  id="program_id"
                  v-model="testimoniData.program_id"
                  md-dense
                  :disabled="sending"
                >
                  <md-option
                    v-for="(program, key) in programList"
                    :key="key"
                    :value="program.id"
                    style="width:100%; left: 10px;"
                  >
                    {{ program.nama_program }}
                  </md-option>
                </md-select>
                <span
                  class="md-error"
                  v-if="!$v.testimoniData.program_id.required"
                  >Program is required</span
                >
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('title')">
                <label for="title">Judul...</label>
                <md-input
                  name="title"
                  id="title"
                  v-model="testimoniData.title"
                  md-dense
                  :disabled="sending"
                >
                </md-input>
                <span class="md-error" v-if="!$v.testimoniData.title.required"
                  >Title is required</span
                >
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('nama_peserta')">
                <label for="nama_peserta">Nama Peserta...</label>
                <md-input
                  name="nama_peserta"
                  id="nama_peserta"
                  v-model="testimoniData.nama_peserta"
                  md-dense
                  :disabled="sending"
                >
                </md-input>
                <span
                  class="md-error"
                  v-if="!$v.testimoniData.nama_peserta.required"
                  >Nama Peserta is required</span
                >
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter" style="margin-top: 20px">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('image')">
                <label for="image">Foto Peserta...</label>
                <md-file
                  ref="image"
                  name="image"
                  id="image"
                  v-model="testimoniData.image"
                  @md-change="onFileUpload($event)"
                  placeholder="Upload Foto Peserta"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.testimoniData.image.required"
                  >Foto Peserta is required</span
                >
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('testimoni')">
                <label for="testimoni">Testimoni...</label>
                <md-textarea
                  name="testimoni"
                  id="testimoni"
                  v-model="testimoniData.testimoni"
                  md-dense
                  :disabled="sending"
                >
                </md-textarea>
                <span
                  class="md-error"
                  v-if="!$v.testimoniData.testimoni.required"
                  >Testimoni is required</span
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
        >Testimoni berhasil dibuat!</md-snackbar
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
    search: "x",
    searched: [],
    selectedPeserta: "",
    form: {
      program_id: null,
      nama_peserta: null,
      title: null,
      testimoni: null,
      image: null
    },
    userSaved: false,
    sending: false
  }),
  validations: {
    testimoniData: {
      program_id: {
        required
      },
      nama_peserta: {
        required
      },
      title: {
        required
      },
      testimoni: {
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
    ...mapState("program", ["programList"]),
    ...mapState("testimoni", ["testimoniData", "testimoniList"]),

    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions("program", ["getProgramList"]),
    ...mapActions("testimoni", ["getTestimoni", "updateTestimoni"]),

    async onFetchData() {
      await this.getTestimoni({ id: this.$route.params.id });
      await this.getProgramList();
    },
    onFileUpload(event) {
      this.image = event[0];
      this.testimoniData.image = event[0];
    },
    async onSubmit() {
      this.$v.$touch();
      this.sending = true;
      if (!this.$v.invalid) {
        try {
          let formData = new FormData();
          for (const property in this.testimoniData) {
            // console.log(property, this.testimoniData[property]);
            formData.append(property, this.testimoniData[property]);
          }
          // let image = this.$refs.image.files[0];
          formData.append("image", this.image);
          await this.updateTestimoni({
            id: this.$route.params.id,
            payload: formData
          });

          // console.log(formData);
          this.sending = false;
          this.testimoniData = {};
          this.$router.push({ name: "testimoni" });
        } catch (error) {
          this.sending = false;
          throw Error(error);
        }
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.testimoniData[fieldName];

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
