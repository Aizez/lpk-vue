import ApiService from "../../api.service";
const state = {
  mataKuliahList: [],
  mataKuliahData: {},
  kaprodiMkList: []
};
const mutations = {
  setMataKuliahList(state, payload) {
    state.mataKuliahList = payload;
  },
  setMataKuliahData(state, payload) {
    state.mataKuliahData = payload;
  },
  setKaprodiMkList(state, payload) {
    state.kaprodiMkList = payload;
  }
};
const actions = {
  async getMataKuliahList(context, { prodi_id } = { prodi_id: "" }) {
    try {
      let params = new URLSearchParams();
      if (prodi_id != "") {
        params.append("prodi_id", prodi_id);
      }
      let response = await ApiService.query("api/kota/mata-kuliah?" + params);
      context.commit("setMataKuliahList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createMataKuliah(context, { payload }) {
    try {
      await ApiService.post("api/kota/mata-kuliah/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getMataKuliah(context, { id }) {
    try {
      let response = await ApiService.query(`api/kota/mata-kuliah/get/${id}`);
      context.commit("setMataKuliahData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateMataKuliah(context, { id, payload }) {
    try {
      await ApiService.post(`api/kota/mata-kuliah/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },

  async kaprodiMk(context) {
    try {
      let response = await ApiService.post("api/kota/mata-kuliah/kaprodimk");
      context.commit("setKaprodiMkList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  async deleteMataKuliah(context, { id }) {
    try {
      await ApiService.delete(`api/kota/mata-kuliah/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const mataKuliah = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default mataKuliah;
