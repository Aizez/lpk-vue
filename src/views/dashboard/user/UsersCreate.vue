<template>
  <div class="content">
    <div style="margin-top: 50px;">
      <span style="font-size: 18px;"
        ><a href="#/dashboard/users-management" style="color: grey"
          >User
        </a></span
      >
      <span style="font-size: 17px; padding: 0px 5px"> > </span>
      <span style="font-size: 18px">Tambah User</span>
    </div>
    <form ref="form" novalidate class="md-layout" @submit.prevent="onSubmit">
      <md-card
        class="md-layout-item md-size-95 md-small-size-100"
        style="padding: 0px 30px 20px 30px; margin-left: 30px"
      >
        <md-card-header>
          <div class="md-title">
            <h2 style="letter-spacing: 2px;color: green;margin-top:30px;">
              <strong>Tambah User</strong>
            </h2>
          </div>
        </md-card-header>

        <md-card-content style="padding: 30px 50px 10px 50px;">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <md-icon>account_circle</md-icon>
                <label for="name">Nama Lengkap...</label>
                <md-input
                  name="name"
                  id="name"
                  autocomplete="name"
                  v-model="usersData.name"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.usersData.name.required"
                  >The fullname is required</span
                >
                <span class="md-error" v-else-if="!$v.usersData.name.minlength"
                  >Invalid fullname</span
                >
              </md-field>
            </div>
            <!-- <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="prodi_id">Program Studi...</label>
                <md-select
                  name="prodi_id"
                  id="prodi_id"
                  v-model="usersData.prodi_id"
                  md-dense
                  :disabled="sending"
                >
                  <md-option
                    v-for="(prodi, key) in prodiList"
                    :key="key"
                    :value="prodi.id"
                    style="width:100%; left: 10px;"
                  >
                    {{ prodi.singkatan_prodi }} - {{ prodi.nama_prodi }}
                  </md-option>
                </md-select>
              </md-field>
            </div> -->
            <div class="md-layout-item md-small-size-50">
              <md-field :class="getValidationClass('level')">
                <label for="level">Level...</label>
                <md-select
                  name="level"
                  id="level"
                  v-model="usersData.level"
                  md-dense
                  :disabled="sending"
                >
                  <md-option value="admin" style="left: 20px;">
                    Admin
                  </md-option>
                </md-select>
                <span class="md-error" v-if="!$v.usersData.level.required"
                  >The Level is required</span
                >
              </md-field>
            </div>
          </div>
          <br />
          <br />

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('username')">
                <md-icon>person</md-icon>
                <label for="username">Username...</label>
                <md-input
                  name="username"
                  id="username"
                  autocomplete="username"
                  v-model="usersData.username"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.usersData.username.required"
                  >The username is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.usersData.username.minlength"
                  >Invalid username</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('password')">
                <md-icon>lock_outline</md-icon>

                <label for="password">Password...</label>
                <md-input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="password"
                  v-model="usersData.password"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.usersData.password.required"
                  >The password is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.usersData.password.password"
                  >Invalid password</span
                >
              </md-field>
            </div>
          </div>
          <br />
        </md-card-content>

        <md-card-actions style="padding-top: 50px">
          <md-button
            type="submit"
            class="md-login md-success md-lg md-round"
            :disabled="sending"
            style="height: 50px; width: 140px;"
            ><span
              style="color: white; font-size: 17px; text-transform: capitalize; bottom: 5px"
              >Submit</span
            ></md-button
          >
        </md-card-actions>
      </md-card>

      <md-progress-bar md-mode="indeterminate" v-if="sending" />

      <md-snackbar :md-active.sync="userSaved"
        >User Baru Berhasil Dibuat!</md-snackbar
      >
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: null,
      username: null,
      password: null,
      level: null
    },
    userSaved: false,
    sending: false
  }),
  validations: {
    usersData: {
      name: {
        required,
        maxLength: maxLength(30)
      },
      username: {
        required,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(8)
      },
      level: {
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
    ...mapState("user", ["usersData"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions("user", ["createUsers"]),
    async onSubmit() {
      this.$v.$touch();
      this.sending = true;
      if (!this.$v.invalid) {
        try {
          await this.createUsers({
            id: this.$route.params.id,
            payload: this.usersData
          });
          this.sending = true;
          window.setTimeout((this.userSaved = true), 2000);
          this.sending = false;
          this.usersData = {};
          this.$router.push({ name: "users-management" });
        } catch (error) {
          this.sending = false;
          throw Error(error);
        }
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.usersData[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.name = null;
      this.form.username = null;
      this.form.password = null;
      this.form.level = null;
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
    },
    async mounted() {
      await this.onFetchData();
      this.onResponsiveInverted();
      window.addEventListener("resize", this.onResponsiveInverted);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  margin: 24px;
}
</style>
