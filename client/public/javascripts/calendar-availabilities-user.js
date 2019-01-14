var App = (function () {
  'use strict';
  
  App.pageCalendar = function( ){

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
        day: 'dddd d MMMM yyyy',
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
      selectable: true,
      axisFormat: 'H:mm',
      select: function( startDate, endDate, allDay, jsEvent, view ){
		  var events = $('#calendar').fullCalendar('clientEvents');
		  events.forEach(function (calEvent){
            if(Date.parse(calEvent.start)>=startDate && Date.parse(calEvent.end)<=endDate){
                if(calEvent.available == 1){
					if(calEvent.assigned == 0){
						calEvent.className = "calendar-availability-no";
						calEvent.available = 0;
						$('#calendar').fullCalendar('updateEvent', calEvent);
					}
				}else if(calEvent.available == 0){
					calEvent.className = "calendar-availability-yes";
					calEvent.available = 1;
					$('#calendar').fullCalendar('updateEvent', calEvent);
				}
				$.ajax({
					type: "POST",
					url: "/availabilities/my-availabilities/ajax",
					data: {id:calEvent.id, available: calEvent.available},
					success: function(data){}
				});
            }
		  });
      },
      eventClick: function(calEvent, jsEvent, view) {
        if(calEvent.available == 1){
          if(calEvent.assigned == 0){
			  calEvent.className = "calendar-availability-no";
			  calEvent.available = 0;
			  $('#calendar').fullCalendar('updateEvent', calEvent);
          }
        }else if(calEvent.available == 0){
			calEvent.className = "calendar-availability-yes";
			calEvent.available = 1;
			$('#calendar').fullCalendar('updateEvent', calEvent);
        }
		  $.ajax({
			  type: "POST",
			  url: "/availabilities/my-availabilities/ajax",
			  data: {id:calEvent.id, available: calEvent.available},
			  success: function(data){}
		  });
	  },
      timeFormat: {
          agenda: 'H:mm{-H:mm}',
		  agendaDay: 'H:mm{-H:mm}',
		  agendaWeek: 'H:mm{-H:mm}'
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

    function initAvailabilities(){
			$.ajax({
				type: "GET",
				url: "/availabilities/my-availabilities/ajax",
				success: function(data)
				{
					$('#calendar').fullCalendar('addEventSource',data);
				}
			});
    };



    initAvailabilities();

  };

  return App;
})(App || {});
