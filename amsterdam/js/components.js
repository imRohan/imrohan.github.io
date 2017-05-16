Vue.component('hero-title', {
  props: ['mode'],
  computed: {
    getTitle: function() {
      _this = this;
      return _this.mode.title;
    },
    getSubtitle: function() {
      _this = this;
      return _this.mode.subtitle;
    },
  },
  template: `<div class='text-title'>
              <div class='text-superscript'>
                {{getSubtitle}}
              </div>
              <div class='text-bold'>
                {{getTitle}}
              </div>
            </div>`,
});

Vue.component('info-widget', {
  props: ['datasets'],
  computed: {
  },
  template: `<div class='info-widget'>
              <ul class='widget-list'>
                <li v-for="dataset in datasets">
                  <div class='list-number'>{{dataset.item}}</div>
                  <div class='list-description'>{{dataset.desc}}</div>
                </li>
              </ul>
            </div>`,
});

