/*jshint multistr: true */
/*--------------------------------------------------------------*/
/*
 ____       _
/ ___|  ___| |_ _   _ _ __
\___ \ / _ \ __| | | | '_ \
___) |  __/ |_| |_| | |_) |
|____/ \___|\__|\__,_| .__/
                    |_|
*/

// Type false to remove interface
var addDesignInterface = true;

// Which modules would you like to use?
// (change variables to false if modules aren't needed)
var addModPages = true;
var addModOptions = true;
var addModTools = true;
var addModReference = true;

// List page names and URLs
var pageLinks = [
  { pageName: 'Home Page', pageURL: 'index.html' },
  { pageName: 'Sample Page 1', pageURL: 'sample-page-1.html' },
  { pageName: 'Sample Page 2', pageURL: 'sample-page-2.html' },
  { pageName: 'Sample Page 3', pageURL: 'sample-page-3.html' }
];

// Would you like the pages in alphabetical order?
var alphabetical = false;

// Number of variations required on each page (min 3)
var numOfOptions = 3;

/*--------------------------------------------------------------*/

/*
 ____
|  _ \  _____   __
| | | |/ _ \ \ / /
| |_| |  __/\ V /
|____/ \___| \_/

*/
var body = $('body');


// Add CSS
var setupDiStyles = function(){
  $('head').append('<link rel="stylesheet" href="di/css/di-main.css">');
};

// Add initial container
var setupDiInterface = function() {
  body.prepend('<div id="di">\
                  <div id="di-interface" class="l-full-screen-wrapper di-interface-is-closed"></div>\
                </div>\
              ');
};

// See Setup above
if (addDesignInterface === true) {
  setupDiStyles();
  setupDiInterface();
}

var toggleDi = function() {
  $('#di-interface').toggleClass('di-interface-is-closed');
};


/*--------------------------------------------------------------*/
//  P A G E S   M O D U L E

// Sort page names alphabetically
if (alphabetical === true) {
  pageLinks.sort(function(a, b) {
    if (a.pageName > b.pageName) {
      return 1;
    }
    if (a.pageName < b.pageName) {
      return -1;
    }
    return 0;
  });
}

// Add a new page link for each item listed in Setup
var addPageLinks = function(){
  for (var i = 0; i < pageLinks.length; i++) {
    $('#pages-list').append('<li><a href="' + pageLinks[i].pageURL +
    '" class="link-btn link-btn--long"><span class="link-btn__underline">' +
    pageLinks[i].pageName + '</span></a></li>');
  }
};

// Add container for Pages module and add links
var setupModPages = function() {
  $.ajax({
    url: 'di/html/_di-pages.html',
    error: function() {
      //console.log("Error with di-pages.html");
    },
    dataType: 'html',
    success: function(data) {
      //console.log("di-pages.html loaded");
      $('#di-interface').prepend(data);
      addPageLinks();
    }
  });
};

// Only add this module if selected in Setup
if (addModPages === true) {
  setupModPages();
}



/*--------------------------------------------------------------*/
//   O P T I O N S   M O D U L E

// Get the number of options from above
// Create a button for each option
var addOptionsToList = function(){
  for (var i = 4; i < numOfOptions + 1; i++) {
    $('#opts-list').append('<li><button class="btn btn--long" id="opt' + i +
    '">Option ' + i + '<i class="btn__icon icon-circle"></i></button></li>');
  }
};

// Add the Options Module
var setupModOptions = function() {
  $.ajax({
    url: 'di/html/_di-options.html',
    error: function() {
      //console.log("Error with di-options.html");
    },
    dataType: 'html',
    success: function(data) {
      //console.log("di-options.html loaded");
      $('#di-interface').append(data);
      addOptionsToList();
    }
  });
};
// Only add this module if selected in Setup
if (addModOptions === true) {
  setupModOptions();
}

// Remove any classes on the body that start with opt
var removeOpts = function() {
  body.removeClass(function(index, classes) {
    var matches = classes.match(/\bopt\S+/ig);
    return (matches) ? matches.join(' ') : '';
  });
};

// Remove highlight from Option Module
var removeOptsHighlight = function() {
  $('#opts-list .btn').removeClass('btn--active');
};

// On click, add option to body, and highlight current option
var clickOptBtn = function() {
  body.on('click', '#opts-list .btn', function() {
    var btnIndex = $(this).parent().index();
    // For Options above 1
    if (btnIndex <= numOfOptions && btnIndex > 0) {
      removeOptsHighlight();
      $(this).toggleClass('btn--active');
      removeOpts();
      body.addClass('opt' + btnIndex);
    }
    // Default state has no opt class on body
    if (btnIndex < 1) {
      removeOptsHighlight();
      $(this).toggleClass('btn--active');
      removeOpts();
    }
  });
};
clickOptBtn();



// On keydown, add option to body and highlight current option
var keyDownOptBtn = function() {
  body.on('keydown', function() {
    var keyNum = String.fromCharCode(event.keyCode);
    var optNum = 'opt' + keyNum;
    if (keyNum <= numOfOptions && keyNum > 0) {
      removeOpts();
      body.addClass(optNum);
      removeOptsHighlight();
      $('#' + optNum).addClass('btn--active');
    }
    // Default state has no opt class on body
    if (keyNum < 1) {
      removeOpts();
      removeOptsHighlight();
      $('#opt0').addClass('btn--active');
    }
  });
};

keyDownOptBtn();


/*--------------------------------------------------------------*/
//   T O O L S   M O D U L E


var setupModTools = function() {
  $.ajax({
    url: 'di/html/_di-tools.html',
    error: function() {
      //console.log("Error with di-tools.html");
    },
    dataType: 'html',
    success: function(data) {
      //console.log("di-tools.html loaded");
      $('#di-interface').append(data);
    }
  });
};
// Only add this module if selected in Setup
if (addModTools === true) {
  setupModTools();
}


// OUTLINE

var outlineAll = function() {
  body.removeClass('di-outline-hover');
  body.toggleClass('di-outline');
};

var outlineHover = function() {
  body.removeClass('di-outline');
  body.toggleClass('di-outline-hover');
};

body.on('click', '#btn-outline-all', function() {
  outlineAll();
  $(this).toggleClass('btn--active');
  $('btn-outline-hover').removeClass('btn--active');
});

body.on('click', '#btn-outline-hover', function() {
  outlineHover();
   $(this).toggleClass('btn--active');
    $('btn-outline-all').removeClass('btn--active');
});


var expandDown = function(){
  body.on('click', '.l-expand-down .btn', function(){
    $(this).next('.l-expand-down__content').slideToggle(200);
    $(this).parent('.l-expand-down').toggleClass('l-expand-down__is-open');
    $(this).toggleClass('btn--active');
  });
};

expandDown();

var showKeyPress = function() {
  $(document).on('keypress', function(e) {
    var keyNum = String.fromCharCode(event.keyCode);
    $('.jsKeyPress .key-number__message').html('Key ' +
    '<span class="key-number__message__result">' + keyNum +
    '</span><span class="key-number__message__result">' + e.which + '</span> Keypress code');
  });
};

var showKeyDown = function() {
  $(document).on('keydown', function(e) {
    var keyNum = String.fromCharCode(event.keyCode);
    $('.jsKeyDown .key-number__message').html('Key ' +
    '<span class="key-number__message__result">' + keyNum +
    '</span><span class="key-number__message__result">' + e.which + '</span> Keydown code');
  });
};


  body.on('keydown', function(e) {
    if ($('.jsKeyPress').hasClass('l-expand-down__is-open')) {
      showKeyPress();
    }

    if ($('.jsKeyDown').hasClass('l-expand-down__is-open')) {
      showKeyDown();
    } else

    // 'n'
    if (e.which === 78) {
      toggleDi();
    } else
    // 'a'
    if (e.which === 65) {
      toggleDi();
    } else
    // 'v'
    if (e.which === 86) {
      toggleDi();
    } else

    // 'h'
    if (e.which === 72) {
      outlineHover();
    } else

    // 'o'
    if (e.which === 79) {
      outlineAll();
    }

    });

/*--------------------------------------------------------------*/
//   R E F E R E N C E   M O D U L E


var setupModReference = function() {
  $.ajax({
    url: 'di/html/_di-reference.html',
    error: function() {
      //console.log("Error with di-reference.html");
    },
    dataType: 'html',
    success: function(data) {
      //console.log("di-reference.html loaded");
      $('#di-interface').append(data);

    }
  });
};


// Only add this module if selected in Setup
if (addModReference === true) {
  setupModReference();
}
