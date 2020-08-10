import Vue from 'vue';

import moment from 'moment';
import numeral from 'numeral';

export default (app, inject) => {
  inject('utils', {
    // date utils
    dateFormat(strDate) {
      return moment(strDate).format('L');
    },

    // currency utils
    currency(price) {
      return numeral(price).format('0,0');
    }
  })
}