import ApiService from "../../api.service";
const state = {
  jadwalList: [],
  jadwalData: {}
};
const mutations = {
  setJadwalList(state, payload) {
    state.jadwalList = payload;
  },
  setJadwalData(state, payload) {
    state.jadwalData = payload;
  }
};
const actions = {
  async getJadwalList(context) {
    try {
      let response = await ApiService.query("api/kota/jadwal");
      context.commit("setJadwalList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createJadwal(context, { payload }) {
    try {
      await ApiService.post("api/kota/jadwal/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getJadwal(context, { id }) {
    try {
      let response = await ApiService.query(`api/kota/jadwal/get/${id}`);
      context.commit("setJadwalData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateJadwal(context, { id, payload }) {
    try {
      await ApiService.post(`api/kota/jadwal/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  }
  // async deleteJadwal(context, { id }) {
  //   try {
  //     await ApiService.delete(api/scholarship/Jadwals/delete/${id});
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const jadwal = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default jadwal;
