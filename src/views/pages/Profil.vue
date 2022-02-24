<template>
  <div class="wrapper" :style="wrapperStyle" style="padding-bottom: 70px;">
    <!-- <parallax class="page-header header-filter" :style="headerStyle"> -->
    <parallax class="page-header header-filter head-head" style="height: 55vw">
      <div class="md-layout">
        <div class="brand" style="padding-left: 150px;">
          <div class="parallax">
            <h1 class="left" style="text-shadow:none">
              <strong
                >Tentang
                <hr style="border: 0px; margin:5px" />
                LPK Abipraya</strong
              >
            </h1>
            <p class="left" style="font-size: 30px; margin-top: 30px">
              <strong
                >Kami adalah lembaga yang lahir untuk
                <hr style="border: 0px; margin:10px" />
                membentuk tenaga ahli</strong
              >
            </p>
          </div>
        </div>
        <div class="md-layout-item">
          <div class="brand">
            <div class="parallax">
              <img
                :src="profil"
                :class="{ 'responsive-image': responsive }"
                style="width: 70%"
              />
            </div>
          </div>
        </div>
      </div>
    </parallax>

    <div class="main main-raised" style="padding-bottom: 0px;">
      <img
        :src="vector"
        :class="{ 'responsive-image': responsive }"
        class="img-fluid"
        style="width: 100%; margin-top: -7px"
      />
      <div class="section section-basic" style="padding-bottom: 0px">
        <div class="container">
          <md-card style="box-shadow: none !important; margin-bottom: 100px">
            <div class="md-layout md-gutter md-alignment-center-center">
              <img
                :src="abipraya"
                :class="{ 'responsive-image': responsive }"
                class="img-fluid"
                style="width: 10%; margin-bottom: 50px"
              />
            </div>
            <div class="profil">
              <strong>PT Brantas Abipraya (Persero)</strong> yang disebut dengan
              Abipraya dan atau Perseroan, berdiri pada 12 November 1980 di
              Malang, Jawa Timur. Pendirian Abipraya dilatarbelakangi oleh
              ekspansi Proyek Pengembangan Wilayah Sungai Brantas atau dikenal
              dengan Proyek Brantas. Hal tersebut dikemukakan pertama kali oleh
              Menteri PU dan Kelistrikan saat itu, Ir. Sutami.
              <br /><br />Memenuhi tantangan bisnis, disrupsi regulasi: Setiap
              Tenaga Kerja Yang Bekerja Di Jasa Konstruksi Harus Tersertifikasi
              Baik SKA Maupun SKT (merefer ke UUJK), berubahnya peran dan fungsi
              Lembaga Pengembangan Jasa Konstruksi (LPJK), dengan diberlakukanya
              UU Jasa Konstruksi Tahun 2017 maka peran LPJK sebagai Lembaga
              sertifikasi berakhir. Adanya amanat Kementerian BUMN terkait
              Pendirian Indonesia Infrastructure Learning Institute (I2LI).
              <br /><br />
              Pendirian Perseroan tercatat dalam akta berikut ini: Akta
              Perseroan Terbatas Brantas Abipraya No.88 tanggal 12 November 1980
              yang dibuat di hadapan Kartini Muljadi, S.H., Notaris di Jakarta
              juncto akta Perubahan No. 36 tanggal 6 April 1981, yang kesemuanya
              telah memperoleh pengesahan Menteri Kehakiman Republik Indonesia
              sesuai dengan Surat Keputusannya No. Y.A.5/257/15 tanggal 11 April
              1981, dan telah didaftarkan di Kepaniteraan Pengadilan Negeri
              Malang di bawah No. 171/PP/IV/1981 tanggal 23 April 1981, serta
              telah diumumkan dalam Tambahan No. 306, Berita Negara Republik
              Indonesia No. 21 tanggal 12 Maret 1982.
              <br /><br />
              Sesuai dengan Akta No. 15/2008, kegiatan usaha Abipraya yaitu
              melakukan usaha di bidang industri konstruksi, industri pabrikasi,
              jasa penyewaan, jasa keagenan, investasi, agro industri,
              perdagangan, pengelolaan kawasan, jasa peningkatan kemampuan
              bidang konstruksi, teknologi informasi dan pengembang. Aktivitas
              Abipraya menghasilkan barang dan atau jasa yang bermutu tinggi dan
              berdaya saing kuat, serta mengejar keuntungan guna meningkatkan
              nilai Perseroan
            </div>
          </md-card>
          <md-card style="box-shadow: none !important; margin-bottom: 100px">
            <div class="md-layout md-gutter md-alignment-center-center">
              <img
                :src="lpk"
                :class="{ 'responsive-image': responsive }"
                class="img-fluid"
                style="width: 30%; margin-bottom: 12px"
              />
            </div>
            <div class="profil">
              Dilahirkan melalui Pendirian Perkumpulan Pengembangan Kompetensi
              Abipraya melalui akta Nomor: 484, dengan Notaris Nurlisa Uke Desy,
              Sarjana Hukum, Magister Kenotariatan, Notaris Di Kabupaten Bogor,
              Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia
              Nomor AHU0000971.Ah.01.07.Tahun 2022 Tentang Pengesahan Pendirian
              Perkumpulan dan Perizinan Berusaha Berbasis Risiko Nomor Induk
              Berusaha: 1302220020477.
              <br />Memenuhi tantangan bisnis, disrupsi regulasi: Setiap Tenaga
              Kerja Yang Bekerja di Jasa Konstruksi Harus Tersertifikasi Baik
              SKA Maupun SKT (merefer ke UUJK), berubahnya peran dan fungsi
              Lembaga Pengembangan Jasa Konstruksi (LPJK), dengan diberlakukanya
              UU Jasa Konstruksi Tahun 2017 maka peran LPJK sebagai Lembaga
              sertifikasi berakhir. Adanya amanat Kementerian BUMN terkait
              Pendirian Indonesia Infrastructure Learning Institute (I2LI).
              <ul class="prof">
                <li style="padding-top: 10px; padding-right: 30px">
                  Abipraya mendapat mandat dan bertanggung jawab pada Pendirian
                  Sekolah Sumber Daya Air dengan konsentrasi: DAM & Water
                  Resource. Target berikutnya adalah Sekolah Supply Chain
                  Management (SCM), Sekolah Jalan & Jembatan, Sekolah Gedung,
                  Sekolah Pelaksana, Sekolah Alat, Sekolah Manajer Proyek, dsb.
                </li>

                <li style="padding-top: 25px; padding-right: 30px">
                  Lembaga ini didirikan dengan tujuan untuk melestarikan dan
                  meningkatkan kemampuan perusahaan dalam menyediakan tenaga
                  ahli di bidang Konstruksi.
                </li>

                <li style="padding-top: 25px; padding-right: 30px">
                  Menjadi rujukan Kompetensi konstruksi oleh seluruh stake
                  holder Jasa Konstruksi.
                </li>
              </ul>
            </div>
          </md-card>
        </div>

        <div class="container" style="margin-top: 50px;">
          <div class="md-layout md-size-50">
            <md-card style="background-color: #0F0F5F; border-radius: 15px">
              <div class="md-layout">
                <div class="md-layout-item md-size-31 card-profil">
                  <h1>Visi</h1>
                  <p>
                    Mewujudkan LPK Abipraya sebagai sebuah Lembaga Pendidikan
                    dan Pelatihan yang peripurna berkualitas, dan mandiri dengan
                    lususan yang mampu bersaing dengan baik, lokal maupun
                    regional.
                  </p>
                </div>
                <div class="md-layout-item md-size-31 card-profil">
                  <h1>Misi</h1>
                  <ul style="margin-left: -25px; margin-top: 0px">
                    <li>
                      <p>
                        Melakukan kegiatan pendidikan dan pengajaran dalam
                        bidang Kursus dan Pelatihan sesuai dengan perkembangan
                        kebutuhan Abipraya.
                      </p>
                    </li>
                    <li>
                      <p>
                        Melakukan kegiatan pembelajaran yang kreatif dan
                        inovatif dalam rangka menghasilkan lulusan yang kompeten
                        dan berdaya saing tinggi dalam jasa konstruksi.
                      </p>
                    </li>
                    <li>
                      <p>
                        Menjalankan sistem dan tata kelola LKP yang profesional.
                      </p>
                    </li>
                    <li>
                      <p>
                        Membangun jaringan kemitraan dengan dunia konstruksi dan
                        asosiasi profesi.
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  class="md-layout-item md-size-31 card-profil"
                  style="padding-right: 60px"
                >
                  <h1>Tujuan</h1>
                  <p>
                    Menjadi rujukan pelatihan kerja untuk membekali,
                    meningkatkan, dan mengembangkan kompetensi SDM, meningkatkan
                    produktifitas, dan kesejahteraan, dengan memperhatikan Pasar
                    Kerja, berkembangnya potensi peserta agar menjadi manusia
                    berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri,
                    dan menjadi Insan Abipraya bertanggung jawab yang beriman
                    dan bertaqwa kepada Tuhan YME.
                  </p>
                </div>
              </div>
              <div style="margin-top: -200px; margin-bottom: -50px">
                <img
                  :src="plan"
                  :class="{ 'responsive-image': responsive }"
                  class="img-fluid"
                  style="width: 40%; margin-left: -95px"
                />
              </div>
            </md-card>
          </div>
        </div>

        <div
          class="main"
          style="margin-top: 200px; padding-bottom: 0px; margin-bottom: 50px"
        >
          <div class="md-layout md-size-50" style="margin-bottom: -20px">
            <img
              :src="vector1"
              :class="{ 'responsive-image': responsive }"
              class="img-fluid"
              style="width: 100%; margin-bottom: -40px;"
            />
            <md-card
              style="background-color: #0F0F5F; border-radius: 15px; box-shadow: none !important; padding-bottom: 200px; margin-bottom: 0px"
            >
              <div class="container">
                <h1
                  class="title"
                  style="color:white; font-size: 40px; margin: 100px 0px 50px 50px"
                >
                  Struktur Organisasi
                </h1>
                <img
                  :src="struktur"
                  :class="{ 'responsive-image': responsive }"
                  class="img-fluid mx-auto"
                  style="width: 90%;"
                />
              </div>
            </md-card>
          </div>
          <!-- <img
            :src="vector"
            :class="{ 'responsive-image': responsive }"
            class="img-fluid"
            style="width: 100%; margin-top: 10px;"
          />
          <img
            :src="vector1"
            :class="{ 'responsive-image': responsive }"
            class="img-fluid"
            style="width: 100%; margin-top: -165px; margin-bottom: -50px; height: 150px"
          /> -->
        </div>
      </div>
    </div>
    <go-top
      bg-color="#fae019"
      fg-color="#0f0f5f"
      box-shadow="0 0 0 transparent"
    >
    </go-top>
  </div>
</template>

<script>
// import BasicElements from "./components/BasicElementsSection";
import { mapState, mapActions } from "vuex";
import GoTop from "@inotom/vue-go-top";

export default {
  components: {
    GoTop
  },
  name: "profil",
  bodyClass: "index-page",
  props: {
    profil: {
      type: String,
      default: require("@/assets/img/examples/pixeltrue-success.png")
    },
    abipraya: {
      type: String,
      default: require("@/assets/img/logo/abipraya-logo.png")
    },
    lpk: {
      type: String,
      default: require("@/assets/img/logo/lpklong-logo.png")
    },
    info: {
      type: String,
      default: require("@/assets/img/examples/image1.jpeg")
    },
    vector: {
      type: String,
      default: require("@/assets/img/examples/vector.png")
    },
    vector1: {
      type: String,
      default: require("@/assets/img/examples/vector1.png")
    },
    plan: {
      type: String,
      default: require("@/assets/img/examples/pixeltrue-plan.png")
    },
    struktur: {
      type: String,
      default: require("@/assets/img/examples/struktur.png")
    }
  },
  data() {
    return {
      leafShow: false,
      scTimer: 0,
      scY: 0
    };
  },
  methods: {
    ...mapActions("homeGallery", ["getHomeGallery", "getHomeGalleryList"]),
    ...mapActions("tema", ["getTema", "getTemaList"]),
    async onFetchData() {
      await this.getTemaList();
      await this.getTema({ id: "1" });
      await this.getHomeGalleryList();
      await this.getHomeGallery({ id: "1" });
    },
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    classicModalHide() {
      this.classicModal = false;
    },
    handleScroll: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  computed: {
    ...mapState("homeGallery", ["homeGalleryData", "homeGalleryList"]),
    ...mapState("tema", ["temaData", "temaList"]),
    headerStyle() {
      return {
        // backgroundImage: `url(${this.homeGalleryData.sampul_image})`
      };
    },
    wrapperStyle() {
      return {
        // backgroundImage: `url(${this.temaData.tema_image})`
      };
    }
  },
  async mounted() {
    await this.onResponsiveInverted();
    await this.onFetchData();
    // console.log(process.env.VUE_APP_BASE_URL);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

<style lang="css">
div.parallax p.h1 {
  font-size: 80px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

div.parallax p.p1 {
  font-size: 35px;
  padding: 20px;
}

div.parallax p.p2 {
  font-size: 27px;
}

@media screen and (max-width: 700px) {
  div.parallax p.h1 {
    font-size: 45px;
  }
  div.parallax p.p1 {
    font-size: 25px;
    padding: 5px;
    line-height: 27px;
  }

  div.parallax p.p2 {
    font-size: 17px;
    line-height: 15px;
  }
}
</style>
