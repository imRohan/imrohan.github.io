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
                <span class='subtitle'>{{getSubtitle}}</span>
                <span class='date-picker animated bounceInUp'>
                  <ul>
                    <li v-bind:class='{ active: isActive(0) }' v-on:click="changeData($event, '8th - 14th')">All</li>
                    <li v-bind:class='{ active: isActive(1) }' v-on:click="changeData($event, '8th')">8</li>
                    <li v-bind:class='{ active: isActive(2) }' v-on:click="changeData($event, '9th')">9</li>
                    <li v-bind:class='{ active: isActive(3) }' v-on:click="changeData($event, '10th')">10</li>
                    <li v-bind:class='{ active: isActive(4) }' v-on:click="changeData($event, '11th')">11</li>
                    <li v-bind:class='{ active: isActive(5) }' v-on:click="changeData($event, '12th')">12</li>
                    <li v-bind:class='{ active: isActive(6) }' v-on:click="changeData($event, '13th')">13</li>
                    <li v-bind:class='{ active: isActive(7) }' v-on:click="changeData($event, '14th')">14</li>
                  </ul>
                </span>
              </div>
              <div class='text-bold'>
                {{getTitle}}
              </div>
            </div>`,
  methods: {
    changeData: function(event, subtitle) {
      _this = this;
      _parent = _this.$parent;
      _element = event.target;
      _elementIndex = $(_element).index();
      _parent.index = _elementIndex;
      _parent.subtitle = `May ${subtitle}`;
    },
    isActive: function(date) {
      _this = this;
      _parent = _this.$parent;
      _index = _parent.index;
      if (_index == date){
        return true;
      } else {
        return false;
      }
    },
  }
});

Vue.component('info-widget', {
  props: ['dataset'],
  template: `<div class='info-widget animated slideInLeft'>
              <ul class='widget-list'>
                <li v-for="set in dataset">
                  <div class='js-animate-number list-number'>{{ set.item }}</div>
                  <div class='list-description'>{{set.desc}}</div>
                </li>
              </ul>
            </div>`,
});

