$('nav li').on('click', function(){
		$('nav li').removeClass('active');
		$(this).addClass('active');
	});

	// make selected brewery active
	$('.listView.breweries .item').on('click', function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	});
	

	// typeahead jQuery plugin
	var substringMatcher = function(strs) {
	  return function findMatches(q, cb) {
	    var matches, substringRegex;

	    // an array that will be populated with substring matches
	    matches = [];

	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');

	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      if (substrRegex.test(str)) {
	        matches.push(str);
	      }
	    });

	    cb(matches);
	  };
	};

	var styles = ['Amber Ale', 'Barley Wine', 'Belgian', 'Belgian Dubbel', 'Belgian Golden Strong', 'Belgian Tripel',
	  'Bière de Garde', 'Bitter', 'Black Ale', 'Black IPA', 'Blonde Ale', 'Bock',
	  'Brown Ale', 'Chile Beer', 'Cream Ale', 'Doppelbock', 'Dunkel', 'Dunkelweizen', 'Eisbock',
	  'Flanders Red Ale', 'Fruit Beer', 'Golden Ale', 'Golden Strong Ale', 'Gose',
	  'Gueze', 'Hefeweizen', 'Helles', 'Imperial IPA', 'IPA', 'Irish Red Ale',
	  'Kölsch', 'Lambic', 'Maibock', 'Marzen', 'Oktoberfestbier',
	  'Oud Bruin', 'Pale Ale', 'Pilsner', 'Porter', 'Pumpkin Ale',
	  'Quadrupel', 'Red Ale', 'Rye Beer', 'Saison/Farmhouse Ale', 'Schwarzbier', 'Scotch Ale',
	  'Smoked Beer', 'Stout', 'Table Beer', 'Trappist', 'Wheat', 'White Beer', 'Wild Ale', 'Witbier'
	];

	$('#the-basics .typeahead').typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'styles',
	  source: substringMatcher(styles)
	});

