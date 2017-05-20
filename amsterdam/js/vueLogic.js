var vueMain = (function () {
  
  var initMainVue = function () {
    new Vue({
      el: '.main',
      data: {
        index: 0,
        title: 'Amsterdam',
        subtitle: 'Hover Over Me',
        dataset: [
                  {item: "65.1km", desc: "Distance Traveled"},
                  {item: "90265", desc: "Steps"},
                  {item: "66", desc: "Flights Climbed"},
                  {item: "210", desc: "Pictures Taken"}
                 ],
        travelData:[
          [
            {item: "65.1km", desc: "Distance Traveled"},
            {item: "90265", desc: "Steps"},
            {item: "66", desc: "Flights Climbed"},
            {item: "210", desc: "Pictures Taken"}
          ],
          [
            {item: "4.3", unit: "km", desc: "Distance Traveled"},
            {item: "6184", desc: "Steps"},
            {item: "12", desc: "Flights Climbed"},
            {item: "14", desc: "Pictures Taken"}
          ],
          [
            {item: "4.9km", desc: "Distance Traveled"},
            {item: "7202", desc: "Steps"},
            {item: "10", desc: "Flights Climbed"},
            {item: "25", desc: "Pictures Taken"}
          ],
          [
            {item: "17.1km", desc: "Distance Traveled"},
            {item: "23472", desc: "Steps"},
            {item: "7", desc: "Flights Climbed"},
            {item: "43", desc: "Pictures Taken"}
          ],
          [
            {item: "12.1km", desc: "Distance Traveled"},
            {item: "16727", desc: "Steps"},
            {item: "16", desc: "Flights Climbed"},
            {item: "76", desc: "Pictures Taken"}
          ],
          [
            {item: "8.9km", desc: "Distance Traveled"},
            {item: "11999", desc: "Steps"},
            {item: "9", desc: "Flights Climbed"},
            {item: "28", desc: "Pictures Taken"}
          ],
          [
            {item: "12km", desc: "Distance Traveled"},
            {item: "16416", desc: "Steps"},
            {item: "7", desc: "Flights Climbed"},
            {item: "15", desc: "Pictures Taken"}
          ],
          [
            {item: "5.8km", desc: "Distance Traveled"},
            {item: "8265", desc: "Steps"},
            {item: "5", desc: "Flights Climbed"},
            {item: "15", desc: "Pictures Taken"}
          ],
        ],
      },
      updated: function() {
        _this = this;
        _numberContainers = $('.js-animate-number');
        $.each(_numberContainers, function(index, container){
          _element = $(container);
          console.log(_element)
        });
      },
      watch: {
        index: function() {
          _this = this;
          _this.dataset = _this.travelData[_this.index];
        }
      },
      methods: {
        animateNumber: function(element){
          setInterval(function(){ 
            _number = element.data('number');
            _unit = element.data('unit');
            _base = parseFloat(element.html()).toFixed(1);
            console.log(_base);
            debugger;
          }, 300);
        }, 
      },
    });
  };
  
  return {
    start: initMainVue
  };

})();

