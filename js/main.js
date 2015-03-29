var FORM = FORM || {};

FORM.app = (function() {

	function doForm() {
		var $email = $('#email'),
			$form = $('.flipping-form').find('form');

		// Don't flip the form back when user is focused..
		$email.on('focus', function() {
			$form.addClass('ready');
		});

		// Flip the form back when user removes cursor focus..
		$email.on('blur', function() {
			$form.removeClass('ready');
		});
	}

	return {
		init: doForm
	}
}());

$(document).ready(function() {
	FORM.app.init();
});