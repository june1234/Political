	$(function() {

		$(".demo1").bootstrapNews({

			newsPerPage: 8,

			autoplay: true,

			pauseOnHover: true,

			direction: 'up',

			newsTickerInterval: 2000,
			
			navigation: false,

			onToDo: function() {

				//console.log(this);

			}

		});

		$(".demo2").bootstrapNews({

			newsPerPage: 6,

			autoplay: true,

			pauseOnHover: true,

			navigation: false,

			direction: 'down',

			newsTickerInterval: 2500,

			onToDo: function() {

				//console.log(this);

			}

		});

		$("#demo3").bootstrapNews({

			newsPerPage: 10,

			autoplay: false,

			onToDo: function() {

				//console.log(this);

			}

		});

	});