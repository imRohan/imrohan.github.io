var vueMain = (function () {

  var initMainVue = function () {
    new Vue({
      el: '.main',
      data: {
        mode: {
          name: 'Home',
          title: 'Amsterdam',
          subtitle: 'May 8th - 14th',
        }
      }
    })
  };
  
  return {
    start: initMainVue
  };

})();
