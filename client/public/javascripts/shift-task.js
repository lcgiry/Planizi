$(document).ready(function () {


	/*$(".task-need-date-input").change(function () {
		var task_need_date_start = moment( $("#task-need-date-start").val(), "DD-MM-YYYY - HH:mm");
		var task_need_date_end = moment( $("#task-need-date-end").val(), "DD-MM-YYYY - HH:mm");

		if(task_need_date_end>task_need_date_start && task_need_date_end.isValid() && task_need_date_start.isValid()){
			$('#date-end-invalid').addClass('hidden');
			$('#valid-edit-task').prop('disabled', false);
		}else if(task_need_date_end.isValid() && task_need_date_start.isValid()){
			$('#date-end-invalid').removeClass('hidden');
			$('#valid-edit-task').prop('disabled', true);
		}
	});

	$("#task-need-people-body-generic-button-add").click(function () {

		for (i = 1; i < 4; i++){
			if($('#task-need-people-generic-'+i).hasClass('hidden')){
				$('#task-need-people-generic-'+i).removeClass('hidden');
				break;
			}
		}

	});

	$("#task-need-people-body-specific-button-add").click(function () {

		for (i = 1; i < 4; i++){
			if($('#task-need-people-specific-'+i).hasClass('hidden')){
				$('#task-need-people-specific-'+i).removeClass('hidden');
				break;
			}
		}

	});

	$("#task-need-equipment-button-add").click(function () {

		for (i = 1; i < 7; i++){
			if($('#task-need-equipment-'+i).hasClass('hidden')){
				$('#task-need-equipment-'+i).removeClass('hidden');
				break;
			}
		}

	});

	$(document).on("click", ".delete-people-need-panel", function () {
		$(this).parents(".task-need-people-generic-panel").addClass('hidden');
	});

	$(document).on("click", ".delete-people-need-panel2", function () {
		$(this).parents(".task-need-people-specific-panel").addClass('hidden');
	});

	$(document).on("click", ".delete-equipment-need-panel", function () {
		$(this).parents(".task-need-equipment-panel").addClass('hidden');
	});

	$("#valid-edit-task").click(function () {

		var task_need_date_start = moment( $("#task-need-date-start").val(), "DD-MM-YYYY - HH:mm");
		var task_need_date_end = moment( $("#task-need-date-end").val(), "DD-MM-YYYY - HH:mm");
		var task_need_people = [
			{
				user_need_skill_1: null,
				user_need_skill_2: null,
				user_need_skill_3: null,
				user_need_skill_4: null,
				user_trust_point: 0,
				user_need_team: null,
				user_need_role: null,
				user_need_number: 0
			},
			{
				user_need_skill_1: null,
				user_need_skill_2: null,
				user_need_skill_3: null,
				user_need_skill_4: null,
				user_trust_point: 0,
				user_need_team: null,
				user_need_role: null,
				user_need_number: 0
			},
			{
				user_need_skill_1: null,
				user_need_skill_2: null,
				user_need_skill_3: null,
				user_need_skill_4: null,
				user_trust_point: 0,
				user_need_team: null,
				user_need_role: null,
				user_need_number: 0
			}
			];

		for (i = 1; i < 4; i++){
			if(!$('#task-need-people-genereic-'+i).hasClass('hidden')){


				console.log($('#check-skill-1').hasClass('selected'));
				if($('#check-skill-1').is(':selected')){
					//task_need_people[i-1].user_need_skill_1 = $('[name=');

				}


			}
		}

	}); */

	$(".task-need-date-input").change(function () {
		var task_need_date_start = moment( $("#task-need-date-start").val(), "DD-MM-YYYY - HH:mm");
		var task_need_date_end = moment( $("#task-need-date-end").val(), "DD-MM-YYYY - HH:mm");

		if(task_need_date_end>task_need_date_start && task_need_date_end.isValid() && task_need_date_start.isValid()){
			$('#date-end-invalid').addClass('hidden');
			$('#valid-edit-date').prop('disabled', false);
		}else if(task_need_date_end.isValid() && task_need_date_start.isValid()){
			$('#date-end-invalid').removeClass('hidden');
			$('#valid-edit-date').prop('disabled', true);
		}
	});
	
	$('#form-people-specific-need').submit(function (e) {
		e.preventDefault();

		var form = $(this).serializeArray();
		var people_need = form[0].value;

		var people_need_json = {
			id: '0',
			people: people_need
		};

		$.ajax({
			type: "POST",
			url: "/tasks/shift-edit/add-need-people-specific",
			data: people_need_json,
			success: function(data)
			{
				$('#panel-sumup-shift').append(data);
			}
		});

	});

	$('#form-people-generic-need').submit(function (e) {
		e.preventDefault();

		var form = $(this).serializeArray();
		var number_need = 1;
		var trust_need = 1;
		var skill_need = [null, null, null, null];
		var role_need = null;
		var team_need = null;
		var indexskill = 0;

		for(var i=0; i<form.length; i++){
			switch (form[i].name){
				case 'number-need':
					number_need = form[i].value;
					break;
				case 'role-need':
					role_need = form[i].value;
					break;
				case 'team-need':
					team_need = form[i].value;
					break;
				case 'trust-need':
					trust_need = form[i].value;
					break;
				case 'skill-need':
					skill_need[indexskill] = form[i].value;
					indexskill++;
					break;
			}
		}

		var people_need_json = {
			id: '0',
			skill_need: skill_need,
			team_need: team_need,
			trust_need: trust_need,
			role_need: role_need,
			number_people_need: number_need
		};

		$.ajax({
			type: "POST",
			url: "/tasks/shift-edit/add-need-people-generic",
			data: people_need_json,
			success: function(data)
			{
				$('#panel-sumup-shift').append(data);
			}
		});

	});




});
