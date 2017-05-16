var vueMain = (function () {
  
  var initMainVue = function () {
    new Vue({
      el: '.main',
      data: {
        mode: {
          name: 'Home',
          title: 'Amsterdam',
          subtitle: 'May 8th - 14th',
          data:[
            {item: "6000", desc: "steps"},
            {item: "2km", desc: "traveled"},
            {item: "6000", desc: "steps"},
            {item: "6000", desc: "steps"},
            {item: "6000", desc: "steps"},
          ],
        }
      }
    });
  };
  
  return {
    start: initMainVue
  };

})();

