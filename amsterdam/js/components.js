Vue.component('hero-title', {
  props: ['title', 'subtitle'],
  computed: {
    getTitle: function() {
      _this = this;
      return _this.title;
    },
    getSubtitle: function() {
      _this = this;
      return _this.subtitle;
    },
  },
  template: `<div class='text-title'>
              <div class='text-superscript'>
                <span class='subtitle'>May {{getSubtitle}}</span>
                <span class='date-picker animated bounceInUp'>
                  <ul>
                    <li v-on:click="changeData(1, '8th')">8</li>
                    <li v-on:click="changeData(2, '9th')">9</li>
                    <li v-on:click="changeData(3, '10th')">10</li>
                    <li v-on:click="changeData(4, '11th')">11</li>
                    <li v-on:click="changeData(5, '12th')">12</li>
                    <li v-on:click="changeData(6, '13th')">13</li>
                    <li v-on:click="changeData(7, '14th')">14</li>
                    <li v-on:click="changeData(0, '8th - 14th')">All</li>
                  </ul>
                </span>
              </div>
              <div class='text-bold'>
                {{getTitle}}
              </div>
            </div>`,
  methods: {
    changeData: function(index, subtitle) {
      _this = this;
      _parent = _this.$parent;
      _parent.index = index;
      _parent.subtitle = subtitle;
    }
  }
});

Vue.component('info-widget', {
  props: ['dataset'],
  template: `<div class='info-widget animated slideInLeft'>
              <ul class='widget-list'>
                <li v-for="set in dataset">
                  <div class='list-number'>{{set.item}}</div>
                  <div class='list-description'>{{set.desc}}</div>
                </li>
              </ul>
            </div>`,
});

