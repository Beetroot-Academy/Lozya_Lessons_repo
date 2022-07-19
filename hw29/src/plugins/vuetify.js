import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

let vuetify = new Vuetify({
    theme: {
      dark:true,
      themes: {
        dark: {
          primary: '#ffc600',
          secondary: '#ffc600',
          anchor: '#8c9eff',
        },
      },
    },
  })
  
  export default vuetify