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
        ><a href="#/dashboard/batch" style="color: grey"
          >Batch Program Pelatihan
        </a></span
      >
      <span style="font-size: 17px; padding: 0px 5px"> > </span>
      <span style="font-size: 18px">Tambah Batch Pelatihan</span>
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
        style="padding: 0px 20px 30px 20px; margin-left: 30px"
      >
        <md-card-header>
          <div class="md-title">
            <h2 style="letter-spacing: 2px;color: green;margin-top:30px;">
              <strong>Input Detail Batch Pelatihan</strong>
            </h2>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('program_id')">
                <label for="program_id">Program Pelatihan...</label>
                <md-select
                  name="program_id"
                  id="program_id"
                  v-model="batchData.program_id"
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
                <span class="md-error" v-if="!$v.batchData.program_id.required"
                  >Program Pelatihan is required</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('nama')">
                <label for="nama">Nama...</label>
                <md-input
                  name="nama"
                  id="nama"
                  v-model="batchData.nama"
                  md-dense
                  :disabled="sending"
                >
                </md-input>
                <span class="md-error" v-if="!$v.batchData.nama.required"
                  >Nama is required</span
                >
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('tahun')">
                <label for="tahun">Tahun...</label>
                <md-input
                  name="tahun"
                  id="tahun"
                  v-model="batchData.tahun"
                  md-dense
                  :disabled="sending"
                >
                </md-input>
                <span class="md-error" v-if="!$v.batchData.tahun.required"
                  >Tahun is required</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('info')">
                <label for="info">Ketrangan...</label>
                <md-input
                  name="info"
                  id="info"
                  v-model="batchData.info"
                  md-dense
                  :disabled="sending"
                >
                </md-input>
                <span class="md-error" v-if="!$v.batchData.info.required"
                  >Keterangan is required</span
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

import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    editorOption: {},
    form: {
      program_id: null,
      nama: null,
      tahun: null,
      info: null
    },
    userSaved: false,
    sending: false
  }),
  validations: {
    batchData: {
      program_id: {
        required
      },
      nama: {
        required
      },
      tahun: {
        required
      },
      info: {
        required
      }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/gedung-upj.jpg")
    },
    image: {
      type: String,
      default: require("@/assets/img/bg-red-batik.png")
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo/upj-logo.png")
    }
  },
  computed: {
    ...mapState(["auth"]),
    ...mapState("batch", ["batchData", "batchList"]),
    ...mapState("program", ["programList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions("batch", ["getBatch", "updateBatch"]),
    ...mapActions("program", ["getProgramList"]),
    async onFetchData() {
      await this.getProgramList();
      await this.getBatch({ id: this.$route.params.id });
    },
    async onSubmit() {
      this.$v.$touch();
      this.sending = true;
      if (!this.$v.invalid) {
        try {
          await this.updateBatch({
            id: this.$route.params.id,
            payload: this.batchData
          });
          this.sending = false;
          this.dosenData = {};
          this.$router.push({ name: "batch" });
        } catch (error) {
          this.sending = false;
          throw Error(error);
        }
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.batchData[fieldName];

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
