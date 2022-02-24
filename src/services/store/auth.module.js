import ApiService from "../api.service";
import JwtService from "../jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_USER = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {},
  token: "",
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  async [LOGIN](context, credentials) {
    try {
      let response = await ApiService.post("api/auth/login", credentials);
      // console.log(response.data);
      context.commit(SET_AUTH, response.data);
    } catch (error) {
      // console.error(error);
    }
    // return new Promise(resolve => {
    //   ApiService.post("api/auth/login", credentials)
    //     .then(({ data }) => {
    //       context.commit(SET_AUTH, data);
    //       resolve(data);
    //     })
    //     .catch(({ response }) => {
    //       context.commit(SET_ERROR, response.data.errors);
    //     });
    // });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [VERIFY_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.query("api/auth")
        .then(({ data }) => {
          context.commit("checkAuth", data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = { email, username, bio, image };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, data) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.token = data.token;
    state.errors = {};
    JwtService.saveToken(data.token);
  },
  checkAuth(state, data) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.errors = {};
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
