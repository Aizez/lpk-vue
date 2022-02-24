<template>
  <div class="content">
    <vue-confirm-dialog></vue-confirm-dialog>
    <h3 class="h2" style="margin-top: 65px;">
      <i class="fa fa-user" style="padding-right: 10px; font-size: 40px"></i
      ><strong>Manajemen User</strong>
    </h3>
    <div class="main card-dashboard">
      <div
        class="main main-raised"
        style="border-radius: 50px; float:right; top: 45px; right: 20px; height: 0px"
      >
        <a
          href="#/dashboard/users-create"
          class="md-list-item-router md-layout gradient2"
          style="border-radius: 50px; box-shadow: 5px 5px #c5c5c5"
        >
          <md-button
            class="md-button1 md-simple"
            style="height: 40px; width: 150px;"
          >
            <!-- <p style="color: white; font-size: 20px; padding: 10px 7px 0px 0px">
              +
            </p> -->
            <span
              style="color: white; font-size: 14px; text-transform: capitalize"
            >
              Tambah User
            </span>
          </md-button>
        </a>
      </div>
      <md-table
        :value="usersList"
        md-sort="name"
        md-sort-order="asc"
        style="padding: 50px 30px 10px 50px; border-radius: 20px;"
        md-fixed-header
      >
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <!-- <md-table-cell md-label="ID" md-sort-by="id">
          {{ item.id }}
        </md-table-cell> -->
          <md-table-cell md-label="Nama Lengkap" md-sort-by="name">
            {{ item.name }}
          </md-table-cell>
          <md-table-cell md-label="Username" md-sort-by="username">
            {{ item.username }}
          </md-table-cell>
          <md-table-cell md-label="Level">
            {{ item.level }}
          </md-table-cell>
          <md-table-cell>
            <router-link
              :to="{
                name: 'users-update',
                params: { id: item.id }
              }"
            >
              <i
                class="fa fa-edit"
                aria-hidden="true"
                style="color: #0b76e0; font-size: 18px; padding-right: 20px"
              >
                <md-tooltip md-direction="bottom">Update User</md-tooltip></i
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
                ><md-tooltip md-direction="bottom">Delete User</md-tooltip></i
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
// import moment from "moment";

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item =>
      toLower(item.nama_lengkap).includes(toLower(term))
    );
  }

  return items;
};

export default {
  components: {},
  bodyClass: "login-page",
  data() {},
  // data: () => ({}),
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
    ...mapState("user", ["usersList", "usersData"]),
    ...mapState("prodi", ["prodiList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  methods: {
    ...mapActions("user", ["getUsersList", "deleteUsers"]),
    ...mapActions("prodi", ["getProdiList"]),
    async onFetchData() {
      await this.getUsersList();
      await this.getProdiList();
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    onDelete(id) {
      this.$confirm({
        message: `Yakin ingin menghapus data User?`,
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
              this.deleteUsers({
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
    searchOnTable() {
      this.searched = searchByName(this.wisudawanList, this.search);
    }
  },
  async mounted() {
    this.onResponsiveInverted();
    await this.onFetchData();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    this.searched = this.wisudawanList;
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="css"></style>
