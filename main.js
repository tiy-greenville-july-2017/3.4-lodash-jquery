(function($){
  'use strict';

  let $appContainer = $('.app');

  // $appContainer.html('<div class="well"><h1>Cool!</h1><h2>Hide Me</h2></div>');

  var items = [
    {
      'image': 'http://unsplash.it/200/200',
      'title': 'Random Thing',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      'image': 'http://unsplash.it/200/201',
      'title': 'Random Thing',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      'image': 'http://unsplash.it/200/202',
      'title': 'Random Thing',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  let template = '<h1>Cool</h1>';

  let tileHtml = items.map(function(item, i){
    let name = 'Dan';
    let template = `
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="${item.image}" alt="${name}">
          <div class="caption">
            <h3>${item.title} ${i + 1}</h3>
            <p>${item.description}</p>
            <p><a href="#" class="btn btn-primary" role="button">Show Picture</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    `;

    let somethingHere = 'yay!';

    //appContainer.innerHTML += template;

    return template;
  });

  // Print the whole thing to the screen
  $appContainer.html(tileHtml.join(''));

  // Hide all the images
  let $image = $appContainer.find('img');
  $image.hide();

  // Hook up an event listener on the button
  let $button = $appContainer.find('.btn-primary');

  $button.click(function(e){
    let $thisButton = $(this);
    $thisButton.parents('.thumbnail').find('img').toggle();
  });




  var veggies = ['beans', 'carrots', 'sprouts'];

  var groceries = ['beans', 'peppers', 'potatoes', 'sprouts', 'chicken'];

  var veggieGroceries = _.intersection(veggies, groceries);
  console.log(veggieGroceries);

  // JavaScript Object Notation: JSON
  // var stooges = [
  //   {name: 'larry'},
  //   {name: 'curly'},
  //   {name: 'moe'}
  // ];
  //
  // //['larry', 'curly', 'moe'];
  //
  // var names = pluck(stooges, 'name');




}(jQuery));











//
