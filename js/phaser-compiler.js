$(document).ready(function(){
    
	var dir = 'js';
	var file = 'railshooter.js';
    var title = 'rail shooter';
    
	document.title = 'phaser - ' + title;
	$("#title").append(title);

	// Gets a list of git tags, i.e Phaser.js versions and creates a dropdown for them. 
	// on selecting the page will reload and load the select version of github.
	var phaser_version = $.url().param('phaser_version');
	var local_copy_of_phaser = "js/phaser.min.js"
	var local_copy_of_phaser_version = "2.1.0"
	var phaser_version_update = function (phaser_version) {
		$(".phaser-version span").html("Phaser version: " + phaser_version)
	};

    $.getScript(local_copy_of_phaser).done(function( script, textStatus ) {
        console.log("Failed to load Phaser.js from github, falling back to local copy")
        load_example_code();
        phaser_version_update(local_copy_of_phaser_version);
    });

	var load_example_code = function () {		
		$.getScript(dir + '/' + file).done(function(script, textStatus) {
			$.ajax({ url: dir + '/' + file, dataType: "text" }).done(function(data) {
				$("#sourcecode").text(data);
				$.getScript("js/run_prettify.js");
			});

			//	Hook up the control panel
			$(".pause-button").click(function() {
				if (game.paused)
				{
					game.paused = false;
				}
				else
				{
					game.paused = true;
				}
			});

			$(".mute-button").click(function() {
				if (game.sound.mute)
				{
					game.sound.mute = false;
				}
				else
				{
					game.sound.mute = true;
				}
			});

			$(".reset-button").click(function() {
				document.location.reload(true);
			});

		}).fail(function(jqxhr, settings, exception) {
			$("#title").text("Error");
			var node = '<p>Unable to load <u>' + title + '</u></p>';
			$('#phaser-example').append(node);
		});
	}

});
