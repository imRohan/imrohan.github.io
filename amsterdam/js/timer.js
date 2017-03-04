var Timer = (function () {

  var startTimer = function () {
    _timeLeftContainer = $('.js-timeleft-container')
    _tripStartDate = moment("2017-05-08 19:20:00");
    _todaysDate = moment();
    _difference = _todaysDate.to(_tripStartDate, true);
    _timeLeftContainer.html(_difference)
  };
  
  return {
    start: startTimer
  };

})();
