import {createStore} from "vuex";
import axiosClient from "../axios";

// const tmpSurveys = [
//   {
//     id: 100,
//     title: "Virgis YouTube channel content",
//     slug: "virgis-youtube-channel-content",
//     status: 'draft',
//     image: 
//       "https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     description:
//       "Hallo people out there",
//     created_at: "2021-12-20 18:00:00",
//     updated_at: "2021-12-20 18:00:00",
//     expire_date: "2021-12-31 18:00:00",
//     questions: [
//       {
//         id: 1,
//         type: "select",
//         question: "From which country are you?",
//         description: null,
//         data: {
//           options: [
//             {uuid: "f8af96-uggyu87-78yf7-h", text: "USA"},
//             {uuid: "8776yjhhg7-kj7dr7ggr-9", text: "Georgia"},
//             {uuid: "dfa88afaf-af7af9-af-9a", text: "Germany"},
//             {uuid: "afad8-adf-afd-er7af-sd", text: "India"},
//           ],
//         },
//       },
//       {
//         id: 2,
//         type: 'checkbox',
//         question: "This is a second question and there is nothing i want to ask.",
//         description: "Lorem ipsum dolor sit amet, consectetur adispisicing elit.",
//         data: {
//           options: [
//             {uuid: "af9d8fa-afadf8-af8af-fa", text: "PHP"},
//             {uuid: "asdf8a-afdf-af-a33-fdaf", text: "JavaScript"},
//             {uuid: "33wr-asf-afafeiu87-dfa7", text: "HTML + CSS"},
//           ],
//         },
//       },
//       {
//         id: 3,
//         type: "checkbox",
//         question: "Which PHP framework videos do you want to see on my channel?",
//         description: "Bla bla bla another test description of useles test question",
//         data: {
//           options: [
//             {uuid: "49ff9-afa8af-afdf8-af", text: "Laravel"},
//             {uuid: "9af9-afda8f-af88af-fa", text: "Yii2"},
//             {uuid: "dfa0a-afdf8adf0-afdaf", text: "Codeigniter"},
//           ],
//         },
//       },
//       {
//         id: 4,
//         type: "radio",
//         question: "Which Laravel Framework do you love most?",
//         description: "Lorem ipsum bla bla bla ir dar siek tiek aprasymo",
//         data: {
//           options: [
//             {uuid: "f-a32af-32rfsa-32f-efafa", text: "Laravel 5"},
//             {uuid: "daf9a-afadf-4ewrwe3-ef3d", text: "Laraval 6"},
//             {uuid: "dad94-afaf-3dafar322-dte", text: "Laravel 7"}
//           ],
//         },
//       },
//       {
//         id: 5,
//         type: "checkbox",
//         question: "What type of projects do you want to see on my channel built with Laravel?",
//         description: "Another description, this time for question Nr. 5",
//         data: {
//           options: [
//             {uuid: "f39a3-32rwadf-324fsadf-3sf", text: "REST API"},
//             {uuid: "asf8af-afaf3-aft5-fasd-5da", text: "E-commerce"},
//             {uuid: "af8-af3-3afa-sadfazv-ew3fa", text: "Real Estate"}
//           ],
//         },
//       },
//       {
//         id: 6,
//         type: "text",
//         question: "What is your favorite YouTube Channel?",
//         description: null,
//         data: {},
//       },
//       {
//         id: 7,
//         type: "textarea",
//         question: "What do you think about TheCodeholic channel?",
//         description: "Write your honest opinion. Everything is anonymous.",
//         data: {},
//       },
//     ],
//   },
//   {
//     id: 200,
//     title: "Virgis YouTube channel content",
//     slug: "this-slug-for-survey-200-just-copy",
//     status: 'draft',
//     image: 
//       "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//     description:
//       "Hallo people out there",
//     created_at: "2021-12-20 18:00:00",
//     updated_at: "2021-12-20 18:00:00",
//     expire_date: "2021-12-31 18:00:00",
//     questions: [
//       {
//         id: 1,
//         type: "select",
//         question: "From which country are you?",
//         description: null,
//         data: {
//           options: [
//             {uuid: "f8af96-uggyu87-78yf7-h", text: "USA"},
//             {uuid: "8776yjhhg7-kj7dr7ggr-9", text: "Georgia"},
//             {uuid: "dfa88afaf-af7af9-af-9a", text: "Germany"},
//             {uuid: "afad8-adf-afd-er7af-sd", text: "India"},
//           ],
//         },
//       },
//       {
//         id: 2,
//         type: 'checkbox',
//         question: "This is a second question and there is nothing i want to ask.",
//         description: "Lorem ipsum dolor sit amet, consectetur adispisicing elit.",
//         data: {
//           options: [
//             {uuid: "af9d8fa-afadf8-af8af-fa", text: "PHP"},
//             {uuid: "asdf8a-afdf-af-a33-fdaf", text: "JavaScript"},
//             {uuid: "33wr-asf-afafeiu87-dfa7", text: "HTML + CSS"},
//           ],
//         },
//       },
//       {
//         id: 3,
//         type: "checkbox",
//         question: "Which PHP framework videos do you want to see on my channel?",
//         description: "Bla bla bla another test description of useles test question",
//         data: {
//           options: [
//             {uuid: "49ff9-afa8af-afdf8-af", text: "Laravel"},
//             {uuid: "9af9-afda8f-af88af-fa", text: "Yii2"},
//             {uuid: "dfa0a-afdf8adf0-afdaf", text: "Codeigniter"},
//           ],
//         },
//       },
//       {
//         id: 4,
//         type: "radio",
//         question: "Which Laravel Framework do you love most?",
//         description: "Lorem ipsum bla bla bla ir dar siek tiek aprasymo",
//         data: {
//           options: [
//             {uuid: "f-a32af-32rfsa-32f-efafa", text: "Laravel 5"},
//             {uuid: "daf9a-afadf-4ewrwe3-ef3d", text: "Laraval 6"},
//             {uuid: "dad94-afaf-3dafar322-dte", text: "Laravel 7"}
//           ],
//         },
//       },
//       {
//         id: 5,
//         type: "checkbox",
//         question: "What type of projects do you want to see on my channel built with Laravel?",
//         description: "Another description, this time for question Nr. 5",
//         data: {
//           options: [
//             {uuid: "f39a3-32rwadf-324fsadf-3sf", text: "REST API"},
//             {uuid: "asf8af-afaf3-aft5-fasd-5da", text: "E-commerce"},
//             {uuid: "af8-af3-3afa-sadfazv-ew3fa", text: "Real Estate"}
//           ],
//         },
//       },
//       {
//         id: 6,
//         type: "text",
//         question: "What is your favorite YouTube Channel?",
//         description: null,
//         data: {},
//       },
//       {
//         id: 7,
//         type: "textarea",
//         question: "What do you think about TheCodeholic channel?",
//         description: "Write your honest opinion. Everything is anonymous.",
//         data: {},
//       },
//     ],
//   },
//   {
//     id: 300,
//     title: "Virgis YouTube channel content",
//     slug: "this-is-a-slug-for-survey-300",
//     status: 'draft',
//     image: 
//       "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     description:
//       "Hallo people out there",
//     created_at: "2021-12-20 18:00:00",
//     updated_at: "2021-12-20 18:00:00",
//     expire_date: "2021-12-31 18:00:00",
//     questions: [
//       {
//         id: 1,
//         type: "select",
//         question: "From which country are you?",
//         description: null,
//         data: {
//           options: [
//             {uuid: "f8af96-uggyu87-78yf7-h", text: "USA"},
//             {uuid: "8776yjhhg7-kj7dr7ggr-9", text: "Georgia"},
//             {uuid: "dfa88afaf-af7af9-af-9a", text: "Germany"},
//             {uuid: "afad8-adf-afd-er7af-sd", text: "India"},
//           ],
//         },
//       },
//       {
//         id: 2,
//         type: 'checkbox',
//         question: "This is a second question and there is nothing i want to ask.",
//         description: "Lorem ipsum dolor sit amet, consectetur adispisicing elit.",
//         data: {
//           options: [
//             {uuid: "af9d8fa-afadf8-af8af-fa", text: "PHP"},
//             {uuid: "asdf8a-afdf-af-a33-fdaf", text: "JavaScript"},
//             {uuid: "33wr-asf-afafeiu87-dfa7", text: "HTML + CSS"},
//           ],
//         },
//       },
//       {
//         id: 3,
//         type: "checkbox",
//         question: "Which PHP framework videos do you want to see on my channel?",
//         description: "Bla bla bla another test description of useles test question",
//         data: {
//           options: [
//             {uuid: "49ff9-afa8af-afdf8-af", text: "Laravel"},
//             {uuid: "9af9-afda8f-af88af-fa", text: "Yii2"},
//             {uuid: "dfa0a-afdf8adf0-afdaf", text: "Codeigniter"},
//           ],
//         },
//       },
//       {
//         id: 4,
//         type: "radio",
//         question: "Which Laravel Framework do you love most?",
//         description: "Lorem ipsum bla bla bla ir dar siek tiek aprasymo",
//         data: {
//           options: [
//             {uuid: "f-a32af-32rfsa-32f-efafa", text: "Laravel 5"},
//             {uuid: "daf9a-afadf-4ewrwe3-ef3d", text: "Laraval 6"},
//             {uuid: "dad94-afaf-3dafar322-dte", text: "Laravel 7"}
//           ],
//         },
//       },
//       {
//         id: 5,
//         type: "checkbox",
//         question: "What type of projects do you want to see on my channel built with Laravel?",
//         description: "Another description, this time for question Nr. 5",
//         data: {
//           options: [
//             {uuid: "f39a3-32rwadf-324fsadf-3sf", text: "REST API"},
//             {uuid: "asf8af-afaf3-aft5-fasd-5da", text: "E-commerce"},
//             {uuid: "af8-af3-3afa-sadfazv-ew3fa", text: "Real Estate"}
//           ],
//         },
//       },
//       {
//         id: 6,
//         type: "text",
//         question: "What is your favorite YouTube Channel?",
//         description: null,
//         data: {},
//       },
//       {
//         id: 7,
//         type: "textarea",
//         question: "What do you think about TheCodeholic channel?",
//         description: "Write your honest opinion. Everything is anonymous.",
//         data: {},
//       },
//     ],
//   },
//   {
//     id: 400,
//     title: "Vue 3",
//     slug: "vue-3",
//     status: "active",
//     image: "https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     description: "Vue is a new framework, interestin thing to test",
//     created_at: "2021-12-21 14:00:00",
//     updated_at: "2021-12-21 14:00:00", 
//     expire_date: "2021-12-21 14:00:00",
//     questions: [],
//   },
//   {
//     id: 500,
//     title: "Tailwind 3",
//     slug: "tailwind-3",
//     status: "active",
//     image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//     description: "An interesting picture of computer's insides",
//     created_at: "2021-12-21 15:00:00",
//     updated_at: "2021-12-21 15:00:00",
//     expire_date: "2021-12-31 15:00:00",
//     questions: [],
//   },
// ];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    currentSurvey: {
      loading: false,
      data: {},
    },
    //surveys: [],
    surveys: {
      loading: false,
      links: [],
      data: [],
    },
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    notification: {
      show: false,
      type: null,
      message: null
    }
  },
  getters: {},
  actions: {
    getSurveys({commit}, {url = null} = {}) {
      url = url || '/survey'
      commit('setSurveysLoading', true);
      return axiosClient.get(url).then((res) => {
        commit('setSurveysLoading', false);
        commit('setSurveys', res.data);
        return res;
      });
    },
    getSurvey({commit}, id) {
      commit('setCurrentSurveyLoading', true);
      return axiosClient
      .get(`/survey/${id}`)
      .then((res) => {
        commit('setCurrentSurvey', res.data);
        commit('setCurrentSurveyLoading', false);
        return res;
      })
      .catch((err) => {
        commit('setCurrentSurveyLoading', false);
        throw err;
      });
    },
    saveSurvey({commit}, survey) {
      delete survey.image_url;
      let response;
      if (survey.id) {
        response = axiosClient
        .put(`/survey/${survey.id}`, survey)
        .then((res) => {
          commit("setCurrentSurvey", res.data);
          return res;
        });
      } else {
        response = axiosClient.post("/survey", survey).then((res) => {
          commit("setCurrentSurvey", res.data);
          return res;
        });
      }
      return response;
    },
    deleteSurvey({}, id) {
      return axiosClient.delete(`/survey/${id}`);
    },
    register({commit}, user) {
      return axiosClient.post('/register', user)
      .then(({data}) => {
        commit('setUser', data);
        return data;
      })
    },
    login({commit}, user) {
      return axiosClient.post('/login', user)
      .then(({data}) => {
        commit('setUser', data);
        return data;
      })
    },
    logout({commit}) {
      return axiosClient.post('/logout')
      .then(response => {
        commit('logout')
        return response;
      })
    }
  },
  mutations: {
    setSurveysLoading: (state, loading) => {
      state.surveys.loading = loading;
    },
    setSurveys: (state, surveys) => {
      state.surveys.links = surveys.meta.links;
      state.surveys.data = surveys.data;
    },
    setCurrentSurveyLoading: (state, loading) => {
      state.currentSurvey.loading = loading;
    },
    setCurrentSurvey: (state, survey) => {
      state.currentSurvey.data = survey.data;
    },
    // saveSurvey: (state, survey) => {
    //   state.surveys = [...state.surveys, survey.data];
    // },
    // updateSurvey: (state, survey) => {
    //   state.surveys = state.surveys.map((s) => {
    //     if (s.id == survey.data.id) {
    //       return survey.data;
    //     }
    //     return s;
    //   });
    // },
    logout: state => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },
    notify: (state, {message, type}) => {
      state.notification.show = true;
      state.notification.type = type;
      state.notification.message = message;
      setTimeout(() => {
        state.notification.show = false;
      }, 3000)
    }
  },
  modules: {}
});

export default store;
