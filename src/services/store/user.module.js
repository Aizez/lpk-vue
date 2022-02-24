import ApiService from "@/services/api.service";
const state = {
  usersList: [],
  usersData: {}
};
const mutations = {
  setUsersList(state, payload) {
    state.usersList = payload;
  },
  setUsersData(state, payload) {
    state.usersData = payload;
  }
};
const actions = {
  async getUsersList(context) {
    try {
      let response = await ApiService.query("api/auth/users");
      context.commit("setUsersList", response.data);
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },
  async createUsers(context, { payload }) {
    try {
      await ApiService.post("api/auth/register", payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async getUsers(context, { id }) {
    try {
      let response = await ApiService.query(`api/auth/users/get/${id}`);
      context.commit("setUsersData", response.data);
    } catch (error) {
      throw Error(error);
    }
  },

  async updateUsers(context, { id, payload }) {
    try {
      await ApiService.post(`api/auth/users/update/${id}`, payload);
    } catch (error) {
      throw Error(error);
    }
  },
  async deleteUsers(context, { id }) {
    try {
      await ApiService.delete(`api/auth/users/delete/${id}`);
    } catch (error) {
      throw Error(error);
    }
  }
};
const getters = {};

const users = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default users;
