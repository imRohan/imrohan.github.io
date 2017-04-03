var Timer = (function () {

  var startTimer = function () {
    _timeLeftContainer = $('.js-timeleft-container')
    setInterval(function(){
      _countdown = countdown(new Date(2017,04,08)).toString()
      _timeLeftContainer.html(_countdown)
    },1000)
  };
  
  return {
    start: startTimer
  };

})();
