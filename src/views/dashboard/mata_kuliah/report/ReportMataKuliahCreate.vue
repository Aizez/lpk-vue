<template>
  <div
    style="max-width: 450px; max-height: 620px; background-color: white;margin: 20px"
  >
    <form ref="form" novalidate class="md-layout" @submit.prevent="onSubmit">
      <h2 style="letter-spacing: 2px;color: green;padding-left: 50px">
        <strong>Input Daftar Mata Kuliah KOTA</strong>
      </h2>
      <div style="padding: 0px 10px 10px 50px">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('periode_id')">
              <label for="periode_id">Tahun Akademik...</label>
              <md-select
                name="periode_id"
                id="periode_id"
                v-model="laporanData.periode_id"
                md-dense
                :disabled="sending"
              >
                <md-option
                  v-for="(periode, key) in periodeList"
                  :key="key"
                  :value="periode.id"
                  style="width:100%; left: 10px;"
                >
                  <div
                    v-if="periode.semester == '01' || periode.semester == '1'"
                  >
                    {{ periode.tahun }} (Ganjil)
                  </div>
                  <div
                    v-if="periode.semester == '02' || periode.semester == '2'"
                  >
                    {{ periode.tahun }} (Genap)
                  </div>
                </md-option>
              </md-select>
              <span class="md-error" v-if="!$v.laporanData.periode_id.required"
                >Tahun Akademik is required</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('mata_kuliah_id')">
              <label for="mata_kuliah_id">Mata Kuliah...</label>
              <md-select
                name="mata_kuliah_id"
                id="mata_kuliah_id"
                v-model="laporanData.mata_kuliah_id"
                md-dense
                :disabled="sending"
              >
                <md-option
                  v-for="(mata_kuliah, key) in mataKuliahList"
                  :key="key"
                  :value="mata_kuliah.id"
                  style="width:100%; left: 10px;"
                >
                  {{ mata_kuliah.nama_mk }}
                </md-option>
              </md-select>
              <span
                class="md-error"
                v-if="!$v.laporanData.mata_kuliah_id.required"
                >Mata Kuliah is required</span
              >
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('jadwal_id')">
              <label for="jadwal_id">Hari - Jam...</label>
              <md-select
                name="jadwal_id"
                id="jadwal_id"
                v-model="laporanData.jadwal_id"
                md-dense
                :disabled="sending"
              >
                <md-option
                  v-for="(jadwal, key) in jadwalList"
                  :key="key"
                  :value="jadwal.id"
                  style="width:100%; left: 10px;"
                >
                  {{ jadwal.hari }} ({{ jadwal.jam }})
                </md-option>
              </md-select>
              <span class="md-error" v-if="!$v.laporanData.jadwal_id.required"
                >Hari - Jam is required</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('ruangan')">
              <label for="ruangan">Ruangan...</label>
              <md-select
                name="ruangan"
                id="ruangan"
                v-model="laporanData.ruangan"
                md-dense
                :disabled="sending"
              >
                <md-option value="101" style="width:100%; left: 10px;">
                  101
                </md-option>
                <md-option value="102" style="width:100%; left: 10px;">
                  102
                </md-option>
                <md-option value="103" style="width:100%; left: 10px;">
                  103
                </md-option>
                <md-option value="104" style="width:100%; left: 10px;">
                  104
                </md-option>
                <md-option value="105" style="width:100%; left: 10px;">
                  105
                </md-option>
                <md-option value="106" style="width:100%; left: 10px;">
                  106
                </md-option>
                <md-option value="107" style="width:100%; left: 10px;">
                  107 </md-option
                ><md-option value="301" style="width:100%; left: 10px;">
                  301 </md-option
                ><md-option value="302" style="width:100%; left: 10px;">
                  302 </md-option
                ><md-option value="303" style="width:100%; left: 10px;">
                  303 </md-option
                ><md-option value="304" style="width:100%; left: 10px;">
                  304
                </md-option>
                <md-option value="305" style="width:100%; left: 10px;">
                  305
                </md-option>
                <md-option value="306" style="width:100%; left: 10px;">
                  306
                </md-option>
                <md-option value="307" style="width:100%; left: 10px;">
                  307
                </md-option>
                <md-option value="308" style="width:100%; left: 10px;">
                  308
                </md-option>
                <md-option value="309" style="width:100%; left: 10px;">
                  309
                </md-option>
                <md-option value="310" style="width:100%; left: 10px;">
                  310
                </md-option>
                <md-option value="LAB-403" style="width:100%; left: 10px;">
                  LAB-403
                </md-option>
                <md-option value="LAB-505" style="width:100%; left: 10px;">
                  LAB-505
                </md-option>
                <md-option value="LAB-506" style="width:100%; left: 10px;">
                  LAB-506
                </md-option>
                <md-option value="LAB-507" style="width:100%; left: 10px;">
                  LAB-507
                </md-option>
                <md-option value="LAB-508" style="width:100%; left: 10px;">
                  LAB-508
                </md-option>
                <md-option value="601" style="width:100%; left: 10px;">
                  601
                </md-option>
                <md-option value="602" style="width:100%; left: 10px;">
                  602
                </md-option>
                <md-option value="LAB-603" style="width:100%; left: 10px;">
                  LAB-603
                </md-option>
                <md-option value="LAB-604" style="width:100%; left: 10px;">
                  LAB-604
                </md-option>
                <md-option value="LAB-605" style="width:100%; left: 10px;">
                  LAB-605
                </md-option>
                <md-option value="606" style="width:100%; left: 10px;">
                  606
                </md-option>
                <md-option value="607" style="width:100%; left: 10px;">
                  607
                </md-option>
                <md-option value="608" style="width:100%; left: 10px;">
                  608
                </md-option>
                <md-option value="609" style="width:100%; left: 10px;">
                  609
                </md-option>
                <md-option value="610" style="width:100%; left: 10px;">
                  610
                </md-option>
                <md-option value="611" style="width:100%; left: 10px;">
                  611
                </md-option>
                <md-option value="701" style="width:100%; left: 10px;">
                  701
                </md-option>
                <md-option value="702" style="width:100%; left: 10px;">
                  702
                </md-option>
                <md-option value="703" style="width:100%; left: 10px;">
                  703
                </md-option>
                <md-option value="704" style="width:100%; left: 10px;">
                  704
                </md-option>
                <md-option value="705" style="width:100%; left: 10px;">
                  705
                </md-option>
                <md-option value="706" style="width:100%; left: 10px;">
                  706
                </md-option>
                <md-option value="707" style="width:100%; left: 10px;">
                  707
                </md-option>
                <md-option value="708" style="width:100%; left: 10px;">
                  708
                </md-option>
                <md-option value="709" style="width:100%; left: 10px;">
                  709
                </md-option>
                <md-option value="710" style="width:100%; left: 10px;">
                  710
                </md-option>
                <md-option value="711" style="width:100%; left: 10px;">
                  711
                </md-option>
              </md-select>
              <span class="md-error" v-if="!$v.laporanData.ruangan.required"
                >Ruangan is required</span
              >
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('dosen_id')">
              <label for="dosen_id">Dosen Pengampu...</label>
              <md-select
                name="dosen_id"
                id="dosen_id"
                v-model="laporanData.dosen_id"
                md-dense
                :disabled="sending"
              >
                <md-option
                  v-for="(dosen, key) in dosenList"
                  :key="key"
                  :value="dosen.id"
                  style="width:100%; left: 10px;"
                >
                  {{ dosen.nama }}
                </md-option>
              </md-select>
              <span class="md-error" v-if="!$v.laporanData.dosen_id.required"
                >Dosen Pengampu is required</span
              >
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field :class="getValidationClass('kuota_dibuka')">
              <label for="kuota_dibuka">Kuota Dibuka...</label>
              <md-input
                name="kuota_dibuka"
                id="kuota_dibuka"
                v-model="laporanData.kuota_dibuka"
                md-dense
                :disabled="sending"
              >
              </md-input>
              <span
                class="md-error"
                v-if="!$v.laporanData.kuota_dibuka.required"
                >Kuota Dibuka is required</span
              >
            </md-field>
          </div>
          <!-- <md-checkbox v-model="array" :value="mk1">Design Website</md-checkbox>
          <md-checkbox v-model="array" :value="mk2"
            >Pemograman Website</md-checkbox
          >
          <table>
            <tr>
              <th>Object</th>
            </tr>

            <tr>
              <td>{{ array }}</td>
            </tr>
          </table> -->
        </div>
      </div>

      <md-card-actions style="padding: 20px 0px 50px 50px">
        <md-button
          type="submit"
          class="md-login md-success md-lg md-round"
          :disabled="sending"
          style="height: 50px; width: 200px"
          ><span
            style="color: white; font-size: 17px; text-transform: capitalize;"
          >
            Submit
          </span>
        </md-button>
      </md-card-actions>
    </form>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />

    <md-snackbar :md-active.sync="userSaved"
      >The user was saved with success!</md-snackbar
    >
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
    // mk1: {
    //   periode_id: null,
    //   mata_kuliah_id: 1,
    //   jadwal_id: 1,
    //   dosen_id: 1,
    //   ruangan: 1,
    //   kuota_dibuka: 30,
    //   kuota_terisi: null,
    //   cadangan: null
    // },
    // mk2: {
    //   periode_id: null,
    //   mata_kuliah_id: 2,
    //   jadwal_id: 1,
    //   dosen_id: 1,
    //   ruangan: 1,
    //   kuota_dibuka: 30,
    //   kuota_terisi: null,
    //   cadangan: null
    // },
    // array: [],
    form: [
      {
        periode_id: null,
        mata_kuliah_id: null,
        jadwal_id: null,
        dosen_id: null,
        ruangan: null,
        kuota_dibuka: null,
        kuota_terisi: null,
        cadangan: null
      }
    ],
    userSaved: false,
    sending: false
  }),
  validations: {
    laporanData: {
      periode_id: {
        required
      },
      mata_kuliah_id: {
        required
      },
      jadwal_id: {
        required
      },
      dosen_id: {
        required
      },
      ruangan: {
        required
      },
      kuota_dibuka: {
        required
      },
      kuota_terisi: {
        required
      },
      cadangan: {
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
    ...mapState("laporan", ["laporanData", "laporanList"]),
    ...mapState("periode", ["periodeList"]),
    ...mapState("mataKuliah", ["mataKuliahList"]),
    ...mapState("jadwal", ["jadwalList"]),
    ...mapState("dosen", ["dosenList"]),
    ...mapState("prodi", ["prodiList"]),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions("laporan", ["createLaporan"]),
    ...mapActions("periode", ["getPeriodeList"]),
    ...mapActions("mataKuliah", ["getMataKuliahList"]),
    ...mapActions("jadwal", ["getJadwalList"]),
    ...mapActions("dosen", ["getDosenList"]),
    ...mapActions("prodi", ["getProdiList"]),
    async onFetchData() {
      await this.getPeriodeList();
      await this.getMataKuliahList();
      await this.getJadwalList();
      await this.getDosenList();
      await this.getProdiList();
    },
    async onSubmit() {
      this.$v.$touch();
      this.sending = true;
      if (!this.$v.invalid) {
        try {
          await this.createLaporan({
            id: this.$route.params.id,
            payload: this.laporanData
          });
          this.sending = false;
          this.laporanData = {};
          // this.$router.push({ name: "report-mata-kuliah-kaprodi" });
        } catch (error) {
          this.sending = false;
          throw Error(error);
        }
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.laporanData[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
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

<style lang="scss" scoped>
.md-checkbox {
  display: flex;
}

table {
  width: 100%;
  table-layout: fixed;

  th {
    text-align: left;
  }
}
</style>

<style lang="css">
.md-progress-bar {
  margin: 24px;
}
</style>
