import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth.module";
import user from "./user.module";

import urban from "./tentang_upj/urban.module";
import prodi from "./tentang_upj/prodi.module";

import periode from "./kota/periode.module";
import jadwal from "./kota/jadwal.module";
import mataKuliah from "./kota/mata_kuliah.module";
import laporan from "./kota/laporan.module";
import statistik from "./kota/statistik.module";
import bookingPriority from "./kota/booking_priority.module";

import program from "./lpk/program.module";
import detailProgram from "./lpk/detail_program.module";
import gallery from "./lpk/gallery.module";
import testimoni from "./lpk/testimoni.module";
import info from "./lpk/info.module";
import peserta from "./lpk/peserta.module";
import batch from "./lpk/batch.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    periode,
    jadwal,
    mataKuliah,
    laporan,
    statistik,
    urban,
    prodi,
    bookingPriority,
    program,
    detailProgram,
    gallery,
    testimoni,
    info,
    peserta,
    batch
  }
});
