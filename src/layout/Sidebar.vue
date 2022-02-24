<template>
  <div>
    <!-- <div
      v-if="
        auth.user.level != 'enduser' ||
          auth.user.level != 'user' ||
          auth.user.level != 'superuser'
      "
    >
      <h3>Username atau Password salah</h3>
    </div> -->
    <md-toolbar
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
      id="toolbar"
      md-elevation="0"
      class="md-absolute2 md-white"
      style="height: 0px; box-shadow: 5px 5px;"
    >
      <div
        class="md-collapse-lateral"
        style="
        width: 100%;background-color: #e6edff; position: absolute; padding: 20px 70px 3px 0px;"
      >
        <div class="md-toolbar-section-end" style="margin-right: 200px">
          <md-list>
            <li
              class="md-list-item"
              style="background-color: white; border-radius: 10px;"
            >
              <a
                href="javascript:void(0)"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down direction="down">
                    <md-button
                      slot="title"
                      class="md-button-link md-white md-simple dropdown-toggle"
                      data-toggle="dropdown"
                      style="box-shadow: 5px 5px #c5c5c5"
                    >
                      <p style="font-size: 12px; margin-right: 5px;">
                        {{ auth.user.name }}
                      </p>
                      <i class="fa fa-user-circle"></i>
                    </md-button>

                    <ul
                      class="dropdown-menu dropdown-menu-right"
                      style="padding:0px"
                    >
                      <div
                        class="main main-raised"
                        style="border-radius: 7px; float:right; top: 65px; right:-15px; height: 0px"
                      >
                        <p
                          class="md-list-item-router md-layout gradient3"
                          style="border-radius: 7px; box-shadow: 5px 5px #c5c5c5"
                        >
                          <md-button
                            @click="onLogout"
                            class="md-simple"
                            style="height: 40px; width: 100px;"
                          >
                            <!-- <p style="color: white; font-size: 20px; padding: 10px 7px 0px 0px">
              +
            </p> -->
                            <span
                              style="color: white; font-size: 15px; text-transform: capitalize"
                            >
                              Log Out
                            </span>
                          </md-button>
                        </p>
                      </div>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>
          </md-list>
        </div>
      </div>
    </md-toolbar>
    <div
      class="sidebar"
      style="width: 235px; background-color: #0f0f5f"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <div style="background: rgba(0, 0, 0, 0.5); height: 100%">
        <div class="container" style="padding: 0px">
          <img
            class="rounded"
            :src="logo"
            alt="logo-upj"
            style="height: 35px; margin: 20px 0px 0px 15px"
          />
          <p class="side-title">
            <strong> LPK Abipraya </strong>
          </p>
        </div>
        <div>
          <a
            href="#/dashboard"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button
              class="md-white md-simple"
              style="padding-left: 5px; height: 50px"
            >
              <md-icon style="padding-right: 15px">dashboard</md-icon>
              <p class="md-list-item-text side">
                Dashboard
              </p>
            </md-button>
          </a>
          <!-- <a
            href="#/dashboard"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'kaprodi'"
          >
            <md-button
              class="md-white md-simple"
              style="padding-left: 5px; height: 50px"
            >
              <md-icon style="padding-right: 15px">autorenew</md-icon>
              <p class="md-list-item-text side">
                Refresh
              </p>
            </md-button>
          </a> -->
          <a
            href="#/dashboard/users-management"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-user"
                aria-hidden="true"
                style="padding-right: 30px"
              ></i>
              <p class="md-list-item-text side">
                Users
              </p>
            </md-button>
          </a>
          <a
            href="#/dashboard/list-program-pelatihan"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i class="fa fa-list-ul" style="padding-right: 30px"></i>
              <p class="md-list-item-text side">
                List Program
              </p>
            </md-button>
          </a>
          <a
            href="#/dashboard/batch"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-paperclip"
                aria-hidden="true"
                style="padding-right: 30px"
              ></i>
              <p class="md-list-item-text side">
                Batch Program
              </p>
            </md-button>
          </a>
          <a
            href="#/dashboard/detail-program-pelatihan"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-info"
                aria-hidden="true"
                style="padding-right: 25px; padding-left: 5px"
              ></i>
              <p class="md-list-item-text side">
                Detail Program
              </p>
            </md-button>
          </a>
          <a
            href="#/dashboard/gallery"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-image"
                aria-hidden="true"
                style="padding-right: 30px"
              ></i>
              <p class="md-list-item-text side">
                Galeri Program
              </p>
            </md-button>
          </a>
          <a
            href="#/dashboard/peserta"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-users"
                aria-hidden="true"
                style="padding-right: 30px"
              ></i>
              <p class="md-list-item-text side">
                Daftar Peserta
              </p>
            </md-button>
          </a>
          <a
            href="#/dashboard/testimoni"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-thumbs-up"
                aria-hidden="true"
                style="padding-right: 30px"
              ></i>
              <p class="md-list-item-text side">
                Testimoni Peserta
              </p>
            </md-button>
          </a>
          <!-- <a
            href="#/dashboard/info"
            class="md-list-item-router md-list-item-container md-button-clean"
            style="height: 10px; padding: 0px 0px 60px 0px"
            v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
          >
            <md-button class="md-white md-simple" style="height: 50px">
              <i
                class="fa fa-address-book"
                aria-hidden="true"
                style="padding-right: 30px"
              ></i>
              <p class="md-list-item-text side">
                Info
              </p>
            </md-button>
          </a> -->
        </div>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { LOGOUT } from "@/services/store/auth.module";

export default {
  components: {},
  bodyClass: "login-page",
  data: () => ({
    search: null,
    searched: []
    // currentSort: "name",
    // currentSortOrder: "asc"
  }),
  props: {
    header: {
      type: String,
      default: require("@/assets/img/examples/abipraya-office.jpg")
    },
    image: {
      type: String,
      default: require("@/assets/img/bg-red-batik.png")
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo/lpkrounded-logo.png")
    }
  },
  computed: {
    ...mapState(["auth"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    headerColor1() {
      return {
        backgroundColor: `red`
      };
    }
  },
  methods: {
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  async mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css">
p.side {
  color: white;
  padding: 10px 50px 0px 0px;
  font-size: 12px;
}
</style>
