var App = (function () {
  'use strict';
  
  App.pageCalendar = function( ){

   	$('#external-events div.external-event').each(function() {
    
      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      };
      
      // store the Event Object in the DOM element so we can get to it later
      $(this).data('eventObject', eventObject);
      
      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });
      
    });

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    //Full Calendar
    $('#calendar').fullCalendar({
      header: {
        left: 'title',
        center: '',
        right: 'month,agendaWeek,agendaDay, today, prev,next',
      },
      titleFormat: {
        month: 'MMMM yyyy',
        week: "d[ yyyy]{ '-' d MMMM yyyy}",
        day: 'dddd d MMMM yyyy'
	  },
      columnFormat: {
        month: 'dddd',
        week: 'ddd dd/MM',
        day: 'dddd dd MMMM'
      },
      allDayDefault: false,
      defaultView: 'agendaWeek',
      durationEditable: true,
      slotMinutes: 15,
      firstDay: 1,
      axisFormat: 'H:mm',
      editable: true,
      selectable: true,
      select: function( startDate, endDate, allDay, jsEvent, view ){
        console.log(Date.parse(startDate)+'---->'+endDate);
		  $('#calendar').fullCalendar('addEventSource',[{
			  title: '1p.',
			  start: startDate,
              end:  endDate,
              backgroundColor: '#77aaaa',
              allDay: false,
              other: 'TESTESTI'
		  }]);
      },
      eventClick: function(calEvent, jsEvent, view) {
        console.log('jjj--> '+calEvent.other);
	  },
      droppable: true, // this allows things to be dropped onto the calendar !!!
      drop: function(date, allDay) { // this function is called when something is dropped
      
        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');
        
        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);
        
        // assign it the date that was reported
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;
        
        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
        
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
        
      }
      
    });

    //Skycons
    function widget_weather(){
      var widgetEl = $(".widget-weather");
      var skycons = new Skycons({"color": "#555555"});
      skycons.add($(".icon1", widgetEl)[0], Skycons.CLEAR_DAY);
      skycons.add($(".icon2", widgetEl)[0], Skycons.PARTLY_CLOUDY_DAY);
      skycons.add($(".icon3", widgetEl)[0], Skycons.RAIN);
      skycons.play();
    }

    widget_weather();
    
  };

  return App;
})(App || {});
