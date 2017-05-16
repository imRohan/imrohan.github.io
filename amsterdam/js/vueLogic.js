var vueMain = (function () {
  
  var initMainVue = function () {
    new Vue({
      el: '.main',
      data: {
        mode: {
          index: 0,
          title: 'Amsterdam',
          subtitle: '8th - 14th',
        },
        travelData:[
          [
            {item: "5km", desc: "traveled"},
            {item: "6000", desc: "steps"},
            {item: "6000", desc: "steps"},
            {item: "6000", desc: "steps"},
          ],
          [
            {item: "4.3km", desc: "Distance Traveled"},
            {item: "6184", desc: "Steps"},
            {item: "12", desc: "Flights Climbed"},
          ],
          [
            {item: "4.9km", desc: "Distance Traveled"},
            {item: "7202", desc: "Steps"},
            {item: "10", desc: "Flights Climbed"},
          ],
          [
            {item: "17.1km", desc: "Distance Traveled"},
            {item: "23472", desc: "Steps"},
            {item: "7", desc: "Flights Climbed"},
          ],
          [
            {item: "12.1km", desc: "Distance Traveled"},
            {item: "23472", desc: "Steps"},
            {item: "16", desc: "Flights Climbed"},
          ],
          [
            {item: "8.9km", desc: "Distance Traveled"},
            {item: "11999", desc: "Steps"},
            {item: "9", desc: "Flights Climbed"},
          ],
          [
            {item: "12km", desc: "Distance Traveled"},
            {item: "16416", desc: "Steps"},
            {item: "7", desc: "Flights Climbed"},
          ],
          [
            {item: "5.8km", desc: "Distance Traveled"},
            {item: "8265", desc: "Steps"},
            {item: "5", desc: "Flights Climbed"},
          ],
        ],
      }
    });
  };
  
  return {
    start: initMainVue
  };

})();

