import ApiService from "../../api.service";
const state = {
  homeGalleryList: [],
  homeGalleryData: {}
};
const mutations = {
  setHomeGalleryList(state, payload) {
    state.homeGalleryList = payload;
  },
  setHomeGalleryData(state, payload) {
    state.homeGalleryData = payload;
  }
};
const actions = {
  async getHomeGalleryList(context) {
    try {
      let response = await ApiService.query("api/graduation/home-gallery");
      context.commit("setHomeGalleryList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createHomeGallery(context, { payload }) {
    try {
      await ApiService.post("api/graduation/home-gallery/create", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getHomeGallery(context, { id }) {
    try {
      let response = await ApiService.query(
        `api/graduation/home-gallery/get/${id}`
      );
      context.commit("setHomeGalleryData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateHomeGallery(context, { id, payload }) {
    try {
      await ApiService.post(
        `api/graduation/home-gallery/update/${id}`,
        payload
      );
    } catch (error) {
      throw Error(error);
    }
  }
  // async deleteHomeGallery(context, { id }) {
  //   try {
  //     await ApiService.delete(`api/graduation/home-gallery/delete/${id}`);
  //   } catch (error) {
  //     throw Error(error);
  //   }
  // }
};
const getters = {};

const homegallery = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default homegallery;
