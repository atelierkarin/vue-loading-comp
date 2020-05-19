import Vue from 'vue'
import VueLoading from './components/VueLoading.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-loading', VueLoading);
  }
};