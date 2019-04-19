import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        dateDay: "",
        dataD: {
            // yangli: "2019-03-19",
            // yinli: "阴历",
            // yi: "宜宜宜宜宜宜宜",
            // ji: "忌忌忌忌忌忌忌",
            // baiji: "拜祭拜祭拜祭",
            // chongsha: "冲煞冲煞冲煞",
            // jishen: "吉神",
            // xiongshen: "凶神",
            // wuxing: "五行"
            yangli: "",
            yinli: "",
            yi: "",
            ji: "",
            baiji: "",
            chongsha: "",
            jishen: "",
            xiongshen: "",
            wuxing: ""
        },
        // dataHours: [{ hours: "123", des: "dafadfadsf", yi: "555555", ji: "77777777777" }, { hours: "123", des: "dafadfadsf", yi: "555555", ji: "77777777777" }]
        dataHours: []
    },
    mutations: {
        changeData: (state, data) => {
            state.dataD = data;
        },
        changeDataHours: (state, data) => {
            state.dataHours = data;
        }
    }
})

export default store