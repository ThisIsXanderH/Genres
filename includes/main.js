// JavaScript Document
/*
Hey guys.
Right now this is... horrendously uncommented.

Also I tend to swear in the comments that are there.

TODO: Fix both those things?
*/
window.plugin.statusbarOverlay.hide(); //Documentation: https://github.com/katzer/cordova-plugin-hidden-statusbar-overlay/blob/aef5a90d2161dd9d363242523883757a51d0fad0/README.md


$('#titleButtonSetup').click(function() {
	location.href='#pageSetup'; //NOTE: Continue condensing all of these down with data-*
});
$('#titleButtonHow').click(function() {
	location.href='#pageHow';
});
$('#titleButtonCredits').click(function() {
	location.href='#pageCredits';
});
$('#titleButtonSupport').click(function() {
	location.href='#pageSupport';
});

$('#gameButtonPause').click(function() {
	location.href='#pagePause';
	clearTimeout(timeoutTimer);
	alertUserClear();
});

$('#pauseButtonResume').click(function() {
	location.href='#pageGame';
	timeoutTimer = setTimeout(countdownTimer,1000);
});

$('#gameButtonUnmute').hide();

$('#setupVibrate').hide();

$('.external-link').click(function() {
	//window.open($(this).attr('data-link'),'_system');
	navigator.app.loadUrl($(this).data('link'),{openExternal:true});
});



function msToTimer(ms) {
	var seconds = Math.floor(ms / 1000);
	var minutes = Math.floor(seconds / 60);
	var seconds = seconds - (minutes * 60);
	if(seconds < 10) {
		seconds = "0" + seconds;
	}
	var format = minutes + ':' + seconds
	return format;
}

var genreList = ['Action','Drama','Science Fiction','Comedy','Horror', 'Fairy Tale', 'Fantasy', 'Mystery',
						'Western', '(Auto) Biography','Kids Book', 'Romantic Comedy', 'Erotic Fiction', 'Military',
						'College', 'Urban Fantasy', 'Spy Fiction', 'Legal Drama', 'Medical Drama', 'Religious Text',
						'Paranormal','Ghost Story'],
	promptJSON =/*OLD JSON [{"title":"Limbo"},{"title":"'Damn. I thought I could trust you.'"},{"title":"Red"},{"title":"The stacks at a college library. 2:30 AM."},{"title":"Some dark history clouds character's 'happily ever after'"},{"title":"'Looking back, no one would have suspected she was one of them.'"},{"title":"'It was a pretty good idea,' he said. 'Only thing is, it didn't work.'"},{"title":"You receive a text message from a number you do not know. 'Good night sweetie,' it reads."},{"title":"'All I'm saying is that you can't do this alone. You NEED me.'"},{"title":"You've finished a meal you've no money for."},{"title":"Waking up to realize it will never be the same."},{"title":"Description is unimportant: Write only using dialogue"},{"title":"'Is this really the surprise you were talking about?'"},{"title":"A man bumped into a woman"},{"title":"She's the opposite of a muse."},{"title":"A woman with a gift."},{"title":"A staring contest."},{"title":"The Night Shift."},{"title":"'Just give it to me straight.'"},{"title":"The killer was the only one at the funeral."},{"title":"Liar."},{"title":"Her hand trembled as the blood ran down..."},{"title":"I should not have fed that duck yesterday."},{"title":"'Let's not do that again.'"},{"title":"A hidden message"},{"title":"This isn't a clock!"},{"title":"The Man From Neptune"},{"title":"When we look up"},{"title":"The nomads are settling down"},{"title":"'...in this future, or the next.'"},{"title":"'You owe me a bullet.'"},{"title":"When there's nothing left to burn, you must set yourselves on fire."},{"title":"Just because I'm losing doesn't mean I'm lost"},{"title":"The glass that saved a life."},{"title":"I love working in the morgue"},{"title":"'It's not funny!' they laughed."},{"title":"Lightning"},{"title":"A room that is never used."},{"title":"Something they have never seen before."},{"title":"'A single tear rolled down from behind her dark sunglasses...'"},{"title":"'I can give you the answer if you can give me the question'"},{"title":"Convince them that you are not obsolete..."},{"title":"'I honestly had convinced myself we'd never come back here.'"},{"title":"I quickly learned they were cannibals"},{"title":"'Congratulations, you've finally succeeded where so many have failed.'"},{"title":"He pressed the button and walked away."},{"title":"'Those weren't my footsteps...'"},{"title":"'Tell me, what will you do now?'"},{"title":"'It's your call, doctor.'"},{"title":"'Tell me, what do you see inside that cell?'"},{"title":"Something peculiar has happened to music."},{"title":"'Leave them, we can't take them with us.'"},{"title":"'The rain washes us free from all guilt.'"},{"title":"“ATTENTION. Code Trauma - Surgical. Code One. One Patient. By Air. Ten Minutes. ... ATTENTION. Code Trauma - Surgical. Code One. One Patient. By Air. Ten Minutes.”"},{"title":"'Not sure, really. He's always been like that.'"},{"title":"The Singularity happened, but not to us."},{"title":"They looked at the message scrawled on the wall of the prisoner's empty cell."},{"title":"*BOOM* *ZAP* It began with a spark"},{"title":"'He's only five minutes late. He promised he'd be here.'"},{"title":"A disorder called 'empathy'"},{"title":"Authorization Denied."},{"title":"The dancer limped out onto the stage."},{"title":"'She was the kind of girl no one would go looking for...'"},{"title":"'Hold on. Please.'"},{"title":"She used to love the color white."},{"title":"One is blind while the other deaf."},{"title":"'He goes here to pray every sunrise. '"},{"title":"The phone had never made that sound before."},{"title":"'Shhh!' They said, 'We mustn't talk here; it's forbidden!'"},{"title":"Turns out it does matter what happens to your body after death..."},{"title":"She spoke only in dark portents and sour mysteries."},{"title":"A death on live TV"},{"title":"'It was you! You're the one who started it!' or 'It's you! You're the one who starts it!'"},{"title":"They say hearing voices is bad, but I like them."},{"title":"You awake one morning to find a 30-foot whale shark on your front lawn."},{"title":"There was somebody outside the window"},{"title":"This was the one, they knew it"},{"title":"Yep, he's funny that way"},{"title":"'I died and here I stand.'"},{"title":"'There are no words'"},{"title":"'I guess you learn something new every day.'"},{"title":"A child is a child but infidelity is infidelity."},{"title":"She looked back at me, with warm metallic eyes"},{"title":"'There were murders that took place in that house.'"},{"title":"'No one ever goes there because it's forbidden. You shouldn't either.'"},{"title":"I am the vessel"},{"title":"'It's simple, either the mayor dies or the bomb goes off.'"},{"title":"'She sat down at the table, it would be for the last time.'"},{"title":"There's a place in the distance know as 'The City'"},{"title":"Mother did have a favorite..."},{"title":"'Two kinds.'"},{"title":"Quantum particles don't like to be looked at because. .."},{"title":"One more second."},{"title":"I thought you'd never ask"}]*/
	
	 [ { "url":"http://www.reddit.com/r/SimplePrompts/comments/3g30gj/dp_we_must_make_it/", "title":"'We must make it.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fujwz/mp_not_quite_human_after_all/", "title":"Not quite human after all." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fq3vc/sp_you_enter_a_room_through_one_door_and_leave_it/", "title":"You enter a room through one door and leave it through another." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fo3in/the_color_of_life/", "title":"The color of Life." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fl4sc/two_brothers_realize_its_time_to_grow_up/", "title":"Two brothers realize it's time to grow up." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fm1rj/bp_it_was_a_dark_and_stormy_night_write_a_story/", "title":"'It was a dark and stormy night' Write a story where this starting sentence makes sense" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fj9gm/the_end_of_a_friendship/", "title":"The end of a friendship" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fl0os/i_woke_up_and_i_had_scales_where_there_had_never/", "title":"I woke up and I had scales where there had never been scales before." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3ferj5/but_there_wasnt_a_way_back_in/", "title":"but there wasn't a way back in" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3fbpac/limbo/", "title":"Limbo" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3f4is2/dp_damn_i_thought_i_could_trust_you/", "title":"'Damn. I thought I could trust you.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3f1kgn/red/", "title":"Red" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3f2dh8/sp_the_stacks_at_a_college_library_230_am/", "title":"The stacks at a college library. 2:30 AM." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3f21q5/some_dark_history_clouds_characters_happily_ever/", "title":"Some dark history clouds character's 'happily ever after'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3eyk2p/dp_looking_back_no_one_would_have_suspected_she/", "title":"'Looking back, no one would have suspected she was one of them.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3es7qj/it_was_a_pretty_good_idea_he_said_only_thing_is/", "title":"'It was a pretty good idea,' he said. 'Only thing is, it didn't work.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3ertf1/you_receive_a_text_message_from_a_number_you_do/", "title":"You receive a text message from a number you do not know. 'Good night sweetie,' it reads." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3eo0nd/dp_all_im_saying_is_that_you_cant_do_this_alone/", "title":"'All I'm saying is that you can't do this alone. You NEED me.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3enrez/youve_finished_a_meal_youve_no_money_for/", "title":"You've finished a meal you've no money for." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3elllm/waking_up_to_realize_it_will_never_be_the_same/", "title":"Waking up to realize it will never be the same." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3efzjb/dp_is_this_really_the_surprise_you_were_talking/", "title":"'Is this really the surprise you were talking about?'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3ee11l/a_man_bumped_into_a_woman/", "title":"A man bumped into a woman" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e8mc4/shes_the_opposite_of_a_muse/", "title":"She's the opposite of a muse." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e9osu/cp_a_woman_with_a_gift/", "title":"A woman with a gift." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e84at/a_staring_contest/", "title":"A staring contest." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e7m12/the_night_shift/", "title":"The Night Shift." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e6kfg/adjectives_are_overrated_write_without_them/", "title":"Adjectives are overrated: Write without them" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e64z3/just_give_it_to_me_straight/", "title":"'Just give it to me straight.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e55ta/the_killer_was_the_only_one_at_the_funeral/", "title":"The killer was the only one at the funeral." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e6157/liar/", "title":"Liar." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e44b2/her_hand_trembled_as_the_blood_ran_down/", "title":"Her hand trembled as the blood ran down..." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e5e96/i_should_not_have_fed_that_duck_yesterday/", "title":"I should not have fed that duck yesterday." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e285t/lets_not_do_that_again/", "title":"'Let's not do that again.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3e55a2/a_hidden_message/", "title":"A hidden message" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dycm6/this_isnt_a_clock/", "title":"This isn't a clock!" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dzs3z/the_man_from_neptune/", "title":"The Man From Neptune" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3duotq/when_we_look_up/", "title":"When we look up" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dttjg/the_nomads_are_settling_down/", "title":"The nomads are settling down" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3drzzm/in_this_future_or_the_next/", "title":"'...in this future, or the next.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dlnhx/you_owe_me_a_bullet/", "title":"'You owe me a bullet.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dknz7/when_theres_nothing_left_to_burn_you_must_set/", "title":"When there's nothing left to burn, you must set yourselves on fire." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dgy92/just_because_im_losing_doesnt_mean_im_lost/", "title":"Just because I'm losing doesn't mean I'm lost" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dgg6l/the_glass_that_saved_a_life/", "title":"The glass that saved a life." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dfc29/i_love_working_in_the_morgue/", "title":"I love working in the morgue" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dg9y9/its_not_funny_she_laughed/", "title":"'It's not funny!' they laughed." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dfi9u/lightning/", "title":"Lightning" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3dbi6v/a_room_that_is_never_used/", "title":"A room that is never used." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3db74z/your_character_is_seeing_something_they_have/", "title":"Your character is seeing something they have never seen before." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d93lx/a_single_tear_rolled_down_from_behind_her_dark/", "title":"'A single tear rolled down from behind her dark sunglasses...'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d9573/i_can_give_you_the_answer_if_you_can_give_me_the/", "title":"'I can give you the answer if you can give me the question'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d6vi0/convince_them_that_you_are_not_obsolete/", "title":"Convince them that you are not obsolete..." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d52e7/i_honestly_had_convinced_myself_wed_never_come/", "title":"'I honestly had convinced myself we'd never come back here.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d5pz8/i_quickly_learned_they_were_cannibals/", "title":"I quickly learned they were cannibals" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d4qaz/congratulations_youve_finally_succeeded_where_so/", "title":"'Congratulations, you've finally succeeded where so many have failed.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d3glc/he_pressed_the_button_and_walked_away/", "title":"He pressed the button and walked away." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d3ite/those_werent_my_footsteps/", "title":"'Those weren't my footsteps...'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3d0l7q/tell_me_what_will_you_do_now/", "title":"'Tell me, what will you do now?'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3czkxj/its_your_call_doctor/", "title":"'It's your call, doctor.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cygex/tell_me_what_do_you_see_inside_that_cell/", "title":"'Tell me, what do you see inside that cell?'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cy3vp/something_peculiar_has_happened_to_music/", "title":"Something peculiar has happened to music." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cx5w0/leave_them_we_cant_take_them_with_us/", "title":"'Leave them, we can't take them with us.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cxp9x/the_rain_washes_us_free_from_all_guilt/", "title":"'The rain washes us free from all guilt.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cw2f6/not_sure_really_hes_always_been_like_that/", "title":"'Not sure, really. He's always been like that.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cw0if/the_singularity_happened_but_not_to_us/", "title":"The Singularity happened, but not to us." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cuan2/they_looked_at_the_message_scrawled_on_the_wall/", "title":"They looked at the message scrawled on the wall of the prisoner's empty cell." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cvvma/boom_zap_it_began_with_a_spark/", "title":"*BOOM* *ZAP* It began with a spark" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3csnel/hes_only_five_minutes_late_he_promised_hed_be_here/", "title":"'He's only five minutes late. He promised he'd be here.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cqzqz/a_disorder_called_empathy/", "title":"A disorder called 'empathy'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cqjqd/authorization_denied/", "title":"Authorization Denied." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cp9dk/the_dancer_limped_out_onto_the_stage/", "title":"The dancer limped out onto the stage." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cpgv6/she_was_the_kind_of_girl_no_one_would_go_looking/", "title":"'She was the kind of girl no one would go looking for...'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3comk5/hold_on_please/", "title":"'Hold on. Please.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cncxx/she_used_to_love_the_color_white/", "title":"She used to love the color white." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cnwgz/one_is_blind_while_the_other_deaf/", "title":"One is blind while the other deaf." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cncie/he_goes_here_to_pray_every_sunrise/", "title":"'He goes here to pray every sunrise. '" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cmeq2/the_phone_had_never_made_that_sound_before/", "title":"The phone had never made that sound before." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cno3t/shhh_they_said_we_mustnt_talk_here_its_forbidden/", "title":"'Shhh!' They said, 'We mustn't talk here; it's forbidden!'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cnbfu/turns_out_it_does_matter_what_happens_to_your/", "title":"Turns out it does matter what happens to your body after death..." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3coxxg/she_spoke_only_in_dark_portents_and_sour_mysteries/", "title":"She spoke only in dark portents and sour mysteries." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cjrnz/a_death_on_live_tv/", "title":"A death on live TV" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cjuvw/it_was_you_youre_the_one_who_started_it_or_its/", "title":"'It was you! You're the one who started it!'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cjuvw/it_was_you_youre_the_one_who_started_it_or_its/", "title":"'It's you! You're the one who starts it!'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3ciihu/they_say_hearing_voices_is_bad_but_i_like_them/", "title":"They say hearing voices is bad, but I like them." }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cieeq/there_was_somebody_outside_the_window/", "title":"There was somebody outside the window" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cj5bx/this_was_the_one_she_knew_it/", "title":"This was the one, they knew it" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3ci1rd/yep_hes_funny_that_way/", "title":"Yep, he's funny that way" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3ci8t5/i_died_and_here_i_stand/", "title":"'I died and here I stand.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cflnt/there_are_no_words/", "title":"'There are no words'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cdhnp/i_guess_you_learn_something_new_every_day/", "title":"'I guess you learn something new every day.'" }, { "url":"http://www.reddit.com/r/SimplePrompts/comments/3cefk6/a_child_is_a_child_but_infidelity_is_infidelity/", "title":"A child is a child but infidelity is infidelity." } ],
	vibrate;
//promptJSON take from https://api.reddit.com/r/simpleprompts.json?limit=100 and lightly curated (Scraped 8/8/2015. Boy that makes it easy for date formatting.)

var timer = [];
$('#setupButtonStart').click(function() {
	/*Set Up Game Area*/
	var i,
	numGenres = parseInt($('#setupNumGenres').val()),
	timerLength = parseInt($('#setupTimerLength').val()) * 60 * 1000,
	startPrompt = $('#setupStartPrompt').is(':checked'),
	count,
	div = [],
	randGenre,
	promptNum,
	promptText,
	promptLink;
				$('#gameButtonPause').attr('disabled',true);
	
	//timerLength = 10000; ///TODO: Don't forget to remove this. It's just for testing.
	
	timer = [];
	vibrate = $('#setupVibrate').is(':checked');
	$('#gameGenresSlot').html('');
	
	if(startPrompt) {
		count = numGenres;
		promptNum = (Math.floor(Math.random() * promptJSON.length));
		promptText = promptJSON[promptNum].title;
		promptLink = promptJSON[promptNum].url;
	} else {
		count = numGenres;
		promptText = '';
	}
	
	//$('#gameButtonSlotStart').find('.hidden').html(promptText);
	$('#gamePromptLink').text(promptText);
	console.log($('#gamePromptLink').data('dest'));
	console.log(promptLink);
	$('#gamePromptLink').data('dest',promptLink);
	console.log($('#gamePromptLink').data('dest'));
	
	
	
	timer[0] = 0;
	div[0] = genreList[(Math.floor(Math.random() * genreList.length))];
	
	$('#gameSlots').html('');
	
	for (i=0;i<count;i++) {
		if(i>0) {
			timer[i] = timer[i-1] + timerLength;
		}
		randGenre = Math.floor(Math.random() * genreList.length);
		while($.inArray(genreList[randGenre],div) != -1) {
			randGenre = Math.floor(Math.random() * genreList.length);
		}
		div[i] = genreList[randGenre];
		$('#gameSlots').append('<div id="gameSlot'.concat(i,'"><div class="hidden">',div[i],'</div><div class="shown">',msToTimer(timer[i]),'</div></div>'));
	}
	timer[count] = timer[count-1] + timerLength;
	//$('#gameSlots').append('<div id="gameSlot'.concat(count,'"><div class="hidden">Time\'s Up!</div><div class="shown">',msToTimer(timer[count]),'</div></div>'));
	$('#gameSlots').append('<div id="gameSlot'.concat(count,'"><div class="hidden">&nbsp</div><div class="shown">&nbsp</div></div>'));
	$('#gameSlot'.concat(count)).find('.shown').html(msToTimer(timer[count]));
	
	/*
	FOR REALSIES*/
	
	$('#gameSlots').find('.shown').show();
	$('#gameSlots').find('.hidden').hide();
	$('#gameButtonSlotRestart').find('.hidden').hide();
	$('#gameButtonSlotStart').find('.hidden').hide();
	$('#gameButtonSlotStart').find('.shown').show();
	
	/*
	FOR TESTING
	$('#gameSlots').find('.shown').hide();
	$('#gameSlots').find('.hidden').show();
	$('#gameButtonSlotRestart').find('.hidden').show();
	$('#gameButtonSlotStart').find('.hidden').show();
	$('#gameButtonSlotStart').find('.shown').hide();*/
	
	
	/*Dear future me: Fuck you, that's why there's no comments */
	location.href='#pageGame';
	
	
});

$('#gamePromptLink').click(function() {
	window.open($(this).data('dest'),'_system');
	
});

var timeoutTimer;

function countdownTimer() {
	var i,div,
	cont = true;
	for (i=0;i<timer.length;i++) {
		timer[i] -= 1000;
		if(timer[i] == 0) {
			//console.log("i:".concat(i.toString(),' - timer.length:',(timer.length-1).toString(),' - timer value:',timer[i].toString()));
			timer[i] = -1;
			$('#gameSlot'.concat(i)).find('.shown').hide();
			$('#gameSlot'.concat(i)).find('.hidden').show();
			if(i==(timer.length - 1)) {
				
				$('#gameButtonPause').attr('disabled',true);
				$('#gameButtonSlotRestart').find('.hidden').show();
				cont = false;
			}
			alertUser(vibrate);
		} else {
			div = '#gameSlot'.concat(i);
			$(div).find(".shown").text(msToTimer(timer[i]));
		}
	}
	if(cont) {
		timeoutTimer = setTimeout(countdownTimer,1000);
	}
}

$('#gameButtonStart').click(function() {
	timeoutTimer = setTimeout(countdownTimer,1000);
	$('#gameButtonSlotStart').find('.shown').hide();
	$('#gameButtonSlotStart').find('.hidden').show();
	$('#gameSlot0').find('.shown').hide();
	$('#gameSlot0').find('.hidden').show();
	timer[0] = -1;
	
	$('#gameButtonPause').attr('disabled',false);
});

var muted = false;

$('#gameButtonMute').click(function() {
	$('#gameButtonMute').hide();
	$('#gameButtonUnmute').show();
	alarmSound.pause();
	alarmSound.currentTime = 0;
	muted = true;
});
$('#gameButtonUnmute').click(function() {
	$('#gameButtonMute').show();
	$('#gameButtonUnmute').hide();
	muted = false;
});

$('#gameButtonRestart').click(function() {
	location.href='#pageSetup';
	/*NOTE: You'll probably need to reset the setup page for this to work. Defs do a function. */
	/*NOTE: In retrospect, keeping the same setting between subsequent games isn't a bad idea*/
});

$('#gameButtonBack').click(function() {
	alertUserClear();
	clearTimeout(timeoutTimer);//Though you'd maybe need a special case for this, clearing every time isn't a good idea
	location.href='#pageSetup'; //Using data-*, all back buttons could be condensed to one
});


$('.setupTimerChange').on("change", function() {setupCalculateTotalTime()});


var invertTimer = [],
	revertTimer = [],
	globVibrate,
	alarmSound = new Media('sounds/alarm.wav');
	
	//document.createElement('audio');
				
	//alarmSound.setAttribute('src','sounds/alarm1.wav'); //CURRENT: http://soundbible.com/529-Pager-Beeps.html (Credit Mike Koenig)
function alertInvert() {
	//What the fuck even are these functions at this stage?
}
function alertRevert() {
	
}

function toggleInvert() {
	$('#gameContent').toggleClass('inverted');
};

function alertUserClear() {
	var i;
	for(i=0;i<3;i++) {
		clearTimeout(invertTimer[i]);
		clearTimeout(revertTimer[i]);
	}
	$('#gameContent').removeClass('inverted');
	alarmSound.pause();
	alarmSound.seekTo(0);
	//alarmSound.currentTime = 0;
	
}


function alertUser(vibrate) {
	var i;
	if(!muted) {
		alarmSound.play();
	}
	navigator.vibrate(500);
	if(vibrate) {
		
	} else {
		
	}
	for(i=0;i<3;i++) {
		invertTimer[i] = setTimeout(function() {toggleInvert()},(2 * i) * 1000);
		revertTimer[i] = setTimeout(function() {toggleInvert()},(2 * i + 1) * 1000);
	}
}




function setupCalculateTotalTime() {
	var numGenres = $('#setupNumGenres').val(),
	timerLength = $('#setupTimerLength').val(),
	totalTime = numGenres * timerLength;
	
	$('#setupTotalTime').text('Total Writing Time: '.concat(totalTime,' Minutes'))
}

setupCalculateTotalTime();


