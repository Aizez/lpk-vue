<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <form
            ref="form"
            novalidate
            class="md-layout"
            @submit.prevent="onSubmit"
          >
            <md-card
              class="md-layout-item md-size-60 md-small-size-100 mx-auto"
              style="padding-bottom: 20px"
            >
              <md-card-header>
                <div class="md-title">
                  <h2
                    style="letter-spacing: 2px;color: green;margin-top:30px; text-align: center"
                  >
                    <strong>Buku Wisuda Online</strong>
                    <br />Universitas Pembangunan Jaya
                  </h2>
                </div>
              </md-card-header>

              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('name')">
                      <md-icon>account_circle</md-icon>

                      <label for="name">Fullname</label>
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
                      <span
                        class="md-error"
                        v-else-if="!$v.usersData.name.minlength"
                        >Invalid fullname</span
                      >
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('username')">
                      <md-icon>person</md-icon>
                      <label for="username">Username</label>
                      <md-input
                        name="username"
                        id="username"
                        autocomplete="username"
                        v-model="usersData.username"
                        :disabled="sending"
                      />
                      <span
                        class="md-error"
                        v-if="!$v.usersData.username.required"
                        >The username is required</span
                      >
                      <span
                        class="md-error"
                        v-else-if="!$v.usersData.username.minlength"
                        >Invalid username</span
                      >
                    </md-field>
                  </div>
                </div>
                <br />

                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('email')">
                      <md-icon>alternate_email</md-icon>
                      <label for="email">Email</label>
                      <md-input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        v-model="usersData.email"
                        :disabled="sending"
                      />
                      <span class="md-error" v-if="!$v.usersData.email.required"
                        >The email is required</span
                      >
                      <span
                        class="md-error"
                        v-else-if="!$v.usersData.email.email"
                        >Invalid email</span
                      >
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('password')">
                      <md-icon>lock_outline</md-icon>

                      <label for="password">Password</label>
                      <md-input
                        type="password"
                        name="password"
                        id="password"
                        autocomplete="password"
                        v-model="usersData.password"
                        :disabled="sending"
                      />
                      <span
                        class="md-error"
                        v-if="!$v.usersData.password.required"
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

                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-50">
                    <md-field :class="getValidationClass('level')">
                      <label for="level">Level</label>
                      <md-select
                        name="level"
                        id="level"
                        v-model="usersData.level"
                        md-dense
                        :disabled="sending"
                      >
                        <md-option value="sambutan" style="left: 20px;">
                          Sambutan
                        </md-option>
                        <!-- <md-option
                          value="admin buku wisuda"
                          style="left: 20px;"
                        >
                          Admin
                        </md-option> -->
                      </md-select>
                      <span class="md-error" v-if="!$v.usersData.level.required"
                        >The password is required</span
                      >
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-50"></div>
                </div>
              </md-card-content>

              <md-card-actions style="padding-top: 50px">
                <md-button
                  type="submit"
                  class="md-success md-lg md-round"
                  :disabled="sending"
                  style="height: 50px; width: 100%;"
                  >Create user</md-button
                >
              </md-card-actions>
              <md-progress-bar md-mode="indeterminate" v-if="sending" />
            </md-card>

            <md-snackbar :md-active.sync="userSaved"
              >The user was saved with success!</md-snackbar
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: null,
      username: null,
      email: null,
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
      email: {
        required,
        email
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
          this.sending = false;
          this.usersData = {};
          this.$router.push({ name: "login" });
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
      this.form.email = null;
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
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  margin: 24px;
}
</style>
