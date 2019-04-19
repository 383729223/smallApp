import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        weatherClass: [],
        weatherIcon: 'iconfont iconqingtian',
        latitude: '',
        longitude: '',
        weatherBoxBg: 'weatherBox',
        airBoxBg: 'air',
        weatherBg: "duoyun-bg",
        airBg: "airGreen-bg",
        airQ: "优",
        city: "上海",
        future: [{
                "date": "2019-03-18",
                "direct": "东南风",
                "temperature": "9/14℃",
                "weather": "小雨转多云",
                "wid": { "day": "07", "night": "01" }
            },
            {
                "date": "2019-03-19",
                "direct": "东南风",
                "temperature": "99/100℃",
                "weather": "小雨转多云",
                "wid": { "day": "07", "night": "01" }
            },
            {
                "date": "2019-03-20",
                "direct": "东南风",
                "temperature": "99/100℃",
                "weather": "小雨转多云",
                "wid": { "day": "07", "night": "01" }
            },
            {
                "date": "2019-03-21",
                "direct": "东南风",
                "temperature": "99/100℃",
                "weather": "小雨转多云",
                "wid": { "day": "07", "night": "01" }
            },
            {
                "date": "2019-03-22",
                "direct": "东南风",
                "temperature": "99/100℃",
                "weather": "小雨转多云",
                "wid": { "day": "07", "night": "01" }
            },
        ],
        // realtime: {
        //     "aqi": "33",
        //     "direct": "东北风",
        //     "humidity": "78",
        //     "info": "阴",
        //     "power": "2级",
        //     "temperature": "11℃",
        //     "wid": "02"
        // }
        realtime: {
            "aqi": "",
            "direct": "",
            "humidity": "",
            "info": "",
            "power": "",
            "temperature": "",
            "wid": ""
        }
    },
    mutations: {
        changeLatitude: (state, data) => {
            state.latitude = data;
        },
        changeLongitude: (state, data) => {
            state.longitude = data;
        },
        changeWeatherBoxBg: (state, data) => {
            state.weatherBoxBg = data;
        },
        changeAirBoxBg: (state, data) => {
            state.airBoxBg = data;
        },
        changeWeatherBg: (state, data) => {
            state.weatherBg = data;
        },
        changeAirBg: (state, data) => {
            state.airBg = data;
        },
        changeAirQ: (state, data) => {
            state.airQ = data;
        },
        changeCity: (state, data) => {
            state.city = data;
        },
        changeRealtime: (state, data) => {
            state.realtime = data;
        },
        changeFuture: (state, data) => {
            state.future = data;
        },
        changeWeatherIcon: (state, data) => {
            state.weatherIcon = data;
        },
        changeWeatherClass: (state, data) => {
            state.weatherClass = data;
        }
    }
})

export default store