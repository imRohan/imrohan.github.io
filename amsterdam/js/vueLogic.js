var vueMain = (function () {
  
  var initMainVue = function () {
    new Vue({
      el: '.main',
      data: {
        mode: {
          index: 0,
          title: 'Amsterdam',
          subtitle: 'May 8th - 14th',
        },
        travelData:[
          [
            {item: "5km", desc: "traveled"},
            {item: "6000", desc: "steps"},
            {item: "6000", desc: "steps"},
            {item: "6000", desc: "steps"},
          ],
          [
            {item: "2km", desc: "traveled"},
          ],
        ],
      }
    });
  };
  
  return {
    start: initMainVue
  };

})();

