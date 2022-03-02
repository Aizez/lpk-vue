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
    <vue-confirm-dialog
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    ></vue-confirm-dialog>
    <h3
      class="h2"
      style="margin-top: 65px;"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <i
        class="fa fa-paper-plane"
        style="padding-right: 10px; font-size: 40px"
      ></i
      ><strong>Post Blog</strong>
    </h3>
    <div
      style="margin-top: 30px; min-height: 700px; padding-bottom: 30px"
      v-if="auth.user.level == 'superuser' || auth.user.level == 'admin'"
    >
      <div
        class="main main-raised"
        style="border-radius: 50px; float:right; top: 30px; right: -5px; height: 0px;"
      >
        <a
          href="#/dashboard/blog-create"
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 230px;"
          >
            <!-- <p style="color: white; font-size: 20px; padding: 10px 7px 0px 0px">
              +
            </p> -->
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah Post Baru
            </span>
          </md-button>
        </a>
      </div>
      <md-table
        v-model="searched"
        md-sort="name"
        md-sort-order="asc"
        style="padding: 40px 20px 20px 20px; border-radius: 20px;"
        md-fixed-header
      >
        <md-table-toolbar
          style="background-color: white !important; margin: 0px 0px 30px -15px;;"
        >
          <div class="md-toolbar-section-start"></div>
          <md-field
            md-clearable
            style="padding: 7px 0px 0px 10px; background-color: #f3f2f2; border-radius: 5px"
          >
            <label style="padding: 7px 10px 5px 7px"
              >Cari Berdasarkan Judul Post...</label
            >
            <md-input v-model="search" @input="searchOnTable" />
          </md-field>
        </md-table-toolbar>

        <md-table-empty-state> </md-table-empty-state>
        <md-table-row
          slot="md-table-row"
          v-for="(info, key) in infoList"
          :key="key"
          slot-scope="{ item }"
        >
          <md-table-cell
            md-label="Judul"
            md-sort-by="title"
            style="min-width: 200px"
          >
            {{ item.title }}
          </md-table-cell>
          <md-table-cell
            md-label="Konten"
            style="padding-right: 20px; text-align: justify"
          >
            <span
              v-html="item.text"
              style="width: 400px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
            ></span>
          </md-table-cell>
          <md-table-cell md-label="Image" md-sort-by="image">
            <img :src="item.image" style="width: 20%" />
          </md-table-cell>
          <md-table-cell style="padding-left: 30px">
            <router-link
              :to="{
                name: 'info-update',
                params: { id: item.id }
              }"
            >
              <i
                class="fa fa-edit"
                aria-hidden="true"
                style="
                color: #0b76e0;
                font-size: 18px;
              "
                ><md-tooltip md-direction="bottom">Update Post</md-tooltip></i
              >
            </router-link>
          </md-table-cell>
          <md-table-cell>
            <md-button
              type="submit"
              class="md-simple md-danger"
              style="height: 20px;"
              @click="onDelete(item.id)"
            >
              <i
                class="fa fa-times"
                aria-hidden="true"
                style="font-size: 20px !important"
                ><md-tooltip md-direction="bottom">Delete Post</md-tooltip></i
              >
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />

    <md-snackbar :md-active.sync="userSaved"
      >Proses menghapus berhasil</md-snackbar
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { LOGOUT } from "@/services/store/auth.module";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.title).includes(toLower(term)));
  }

  return items;
};

export default {
  components: {},
  bodyClass: "login-page",
  //   data() {},
  data: () => ({
    classicModal: false,
    search: "",
    searched: []
  }),
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
    ...mapState("info", ["infoList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("info", ["getInfoList", "deleteInfo"]),
    async onFetchData() {
      await this.getInfoList();
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus postingan?`,
        button: {
          no: "Batal",
          yes: "Ya"
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: confirm => {
          if (confirm) {
            try {
              this.deleteInfo({
                id: id
              });
              window.setTimeout((this.userSaved = true), 2000);
              this.sending = false;
              this.onFetchData();
              // this.$router.push({ name: "report-mata-kuliah-kaprodi" });
            } catch (error) {
              throw Error(error);
            }
            // ... do something
          }
        }
      });
    },
    onLogout() {
      this.$store.dispatch(LOGOUT).then(() =>
        this.$router.push({
          name: "login"
        })
      );
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    searchOnTable() {
      this.searched = searchByName(this.infoList, this.search);
    },
    classicModalHide() {
      this.classicModal = false;
    }
  },
  async mounted() {
    await this.onFetchData();
    // this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    this.searched = this.infoList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css"></style>
