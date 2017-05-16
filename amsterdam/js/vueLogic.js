var vueMain = (function () {
  
  var initMainVue = function () {
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

    new Vue({
      el: '.main',
      data: {
        mode: {
          name: 'Home',
          title: 'Amsterdam',
          subtitle: 'May 8th - 14th',
        }
      }
    });
  };
  
  return {
    start: initMainVue
  };

})();

