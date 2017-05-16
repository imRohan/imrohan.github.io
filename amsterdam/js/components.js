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
                <span class='subtitle'>{{getSubtitle}}</span>
                <span class='date-picker'>
                  <ul>
                    <li v-on:click='changeData(1)'>8</li>
                    <li v-on:click='changeData(2)'>9</li>
                    <li v-on:click='changeData(3)'>10</li>
                    <li v-on:click='changeData(4)'>11</li>
                    <li v-on:click='changeData(5)'>12</li>
                    <li v-on:click='changeData(6)'>13</li>
                    <li v-on:click='changeData(0)'>All</li>
                  </ul>
                </span>
              </div>
              <div class='text-bold'>
                {{getTitle}}
              </div>
            </div>`,
  methods: {
    changeData: function(index) {
      _this = this;
      _this.mode.index = index;
    }
  }
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

