<template>
  <div class="wrapper">
    <div
      class="section page-header"
      style="background-color: #dce4f769; min-height: 1000px"
    >
      <div class="container">
        <div class="md-layout md-gutter md-alignment-center-center">
          <modal v-if="sending">
            <template slot="header"> </template>

            <template slot="body">
              <img
                class="md-title rounded"
                :src="logo"
                alt="logo-upj"
                style="height: 60px;"
              />
              <br />
              <md-progress-spinner
                :md-diameter="40"
                :md-stroke="4"
                md-mode="indeterminate"
              />
            </template>

            <template slot="footer"> </template>
          </modal>
          <form
            ref="form"
            novalidate
            class="md-layout"
            @submit.prevent="onSubmit"
          >
            <md-card
              class="md-layout-item md-size-45 md-small-size-100 mx-auto"
              style="padding-bottom: 50px; top: -50px; border-radius: 20px"
            >
              <md-card-header style="margin-bottom: 20px">
                <img
                  class="md-title rounded"
                  :src="logo"
                  alt="logo-upj"
                  style="height: 50px; width: 50px; margin: 30px -60px 0px 90px"
                />
                <div class="md-title">
                  <h2
                    style="letter-spacing: 2px;color: #0f0f5f;margin-top:30px; text-align: center"
                  >
                    <strong>LPK Abipraya</strong>
                  </h2>
                  <!-- <p
                    style="letter-spacing: 2px;font-size: 24px;color: #0f0f5f;margin-top:0px; padding: 0px 0px 20px 2px"
                  >
                    PT Brantas Abipraya
                  </p> -->
                </div>
              </md-card-header>

              <md-card-content>
                <div class="md-layout md-gutter">
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
                <br />
                <div class="md-layout md-gutter">
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
              </md-card-content>

              <md-card-actions style="margin-top:20px">
                <md-button
                  type="submit"
                  class="md-login md-info md-lg md-round"
                  :disabled="sending"
                  style="height: 50px; width: 100%;"
                  ><span
                    style="color: white; font-size: 17px; text-transform: capitalize; bottom: 5px"
                  >
                    Login
                  </span></md-button
                >
              </md-card-actions>

              <!-- <div class="container mx-auto" style="padding-top: 15px">
                <p class="mx-auto" style="font-size: 15px">
                  Belum memiliki akun?
                  <router-link
                    style="color: green; font-size: 17px; padding-left: 2px"
                    :to="{
                      name: 'register'
                    }"
                  >
                    Buat Akun
                  </router-link>
                </p>
              </div> -->

              <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" /> -->
            </md-card>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { Modal } from "@/components";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  components: { Modal },
  bodyClass: "login-page",
  data: () => ({
    classicModal: false,
    showSnackbar: false,
    position: "center",
    duration: 4000,
    isInfinity: false,
    form: {
      username: null,
      password: null
    },
    userSaved: false,
    sending: false
  }),
  validations: {
    usersData: {
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/examples/abipraya-office.jpg")
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo/lpk-logo.png")
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      this.sending = true;
      this.classicModal = true;
      if (!this.$v.invalid) {
        // if (this.$refs.form.submit()) {
        try {
          await this.$store.dispatch("login", this.usersData);
          this.sending = false;
          this.$router.push("/dashboard");
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
      this.form.username = null;
      this.form.password = null;
    }
    // saveUser() {
    //   this.sending = true;
    //   window.setTimeout(() => {
    //     this.userSaved = true;
    //     this.sending = false;
    //     this.clearForm();
    //   }, 1500);
    // },
    // validateUser() {
    //   this.$v.$touch();

    //   if (!this.$v.$invalid) {
    //     this.saveUser();
    //   }
    // }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapState("user", ["usersData"]),
    ...mapState(["auth"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    messageClass() {
      return {
        "md-invalid": this.hasMessages
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  margin: 24px;
}

.md-progress-spinner {
  margin: 24px;
}
</style>
