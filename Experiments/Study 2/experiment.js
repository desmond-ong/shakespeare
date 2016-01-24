
var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent)
      || this.searchVersion(navigator.appVersion)
      || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i=0;i<data.length;i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
      else if (dataProp)
        return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
    {   string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    },
    {   // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },
    {     // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],
  dataOS : [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    },
    {
         string: navigator.userAgent,
         subString: "iPhone",
         identity: "iPhone/iPod"
      },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }
  ]

};
BrowserDetect.init();

/*
showSlide(id)
Displays each slide
*/

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

/* 
random(a,b)
Returns random number between a and b, inclusive
*/

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}


/* 
Array.prototype.random
Randomly shuffles elements in an array. Useful for condition randomization.
*/

Array.prototype.random = function() {
  return this[random(this.length)];
}

/* 
Produces an array with numbers 0~arrLength
in random order. Kind of spurious--use 
Array.prototype.random instead
*/

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/* 
Gets the value of the checked radio button
*/

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}

function setQuestion(array) {
    var i = random(0, array.length - 1);
    var q = array[i];
    return q;
}


/* 
Clears value from form
*/

function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
	field_type = elements[i].type.toLowerCase();
	
	switch(field_type) {
	
		case "text": 
		case "password": 
		case "textarea":
	        case "hidden":	
			
			elements[i].value = ""; 
			break;
        
		case "radio":
		case "checkbox":
  			if (elements[i].checked) {
   				elements[i].checked = false; 
			}
			break;

		case "select-one":
		case "select-multi":
            		elements[i].selectedIndex = -1;
			break;

		default: 
			break;
	}
    }
}


function resetSlider(sliderName) {
  sliderString = "#" + sliderName
  $(sliderString).css({"background":"#FFFFFF"});
  $(sliderString + " .ui-slider-handle").css({
        "background":"#FAFAFA",
        "border-color": "#CCCCCC" });
  $(sliderString + " .ui-slider-handle").hide();
}




// Input Data

var allConditions = [
// 1: positive, 0: negative, 2: neutral
[
{"Version":"1", "behaviorType":"intentional", "behaviorID":1, "behavior":"read a book"},
{"Version":"1", "behaviorType":"intentional", "behaviorID":2, "behavior":"bought a drink"},
{"Version":"1", "behaviorType":"intentional", "behaviorID":3, "behavior":"bought a round of drinks for everyone"},
{"Version":"1", "behaviorType":"intentional", "behaviorID":4, "behavior":"stole a pound of peaches"},
{"Version":"1", "behaviorType":"intentional", "behaviorID":5, "behavior":"invited Sue to have lunch"},
{"Version":"1", "behaviorType":"intentional", "behaviorID":6, "behavior":"watered his new plants"},

{"Version":"1", "behaviorType":"expressions", "behaviorID":7, "behavior":"smiled"},
{"Version":"1", "behaviorType":"expressions", "behaviorID":8, "behavior":"cried"},
{"Version":"1", "behaviorType":"expressions", "behaviorID":9, "behavior":"yelled loudly"},
{"Version":"1", "behaviorType":"expressions", "behaviorID":10, "behavior":"jumped up and down"},
{"Version":"1", "behaviorType":"expressions", "behaviorID":11, "behavior":"laughed"},
{"Version":"1", "behaviorType":"expressions", "behaviorID":12, "behavior":"danced"},

{"Version":"1", "behaviorType":"unintentional", "behaviorID":13, "behavior":"fell down"},
{"Version":"1", "behaviorType":"unintentional", "behaviorID":14, "behavior":"won the lottery"},
{"Version":"1", "behaviorType":"unintentional", "behaviorID":15, "behavior":"yawned during a lecture"},
{"Version":"1", "behaviorType":"unintentional", "behaviorID":16, "behavior":"snored in his sleep"},
{"Version":"1", "behaviorType":"unintentional", "behaviorID":17, "behavior":"stubbed his toe"},

{"Version":"1", "behaviorType":"ambiguous", "behaviorID":18, "behavior":"drove above the speed limit"},
{"Version":"1", "behaviorType":"ambiguous", "behaviorID":19, "behavior":"ignored Greg's arguments"},
{"Version":"1", "behaviorType":"ambiguous", "behaviorID":20, "behavior":"interrupted his mother"}
],
[
{"Version":"1", "storyID":1, "storyType":2, "emotion":0, "story": "shopped for groceries", "condition":2}
]
];



// *** intentional behavior
// bought a book
// bought a drink
// bought a round of drinks for everyone
// stole a pound of peaches
// invited Sue to have lunch
// watered his new plants

// *** emotional expressions
// smiled
// cried
// yelled loudly
// jumped up and down
// laughed
// danced

// *** unintentional behavior
// fell down
// won the lottery
// yawned during a lecture
// snored in his sleep
// stubbed his toe

// *** more ambiguous
// drove above the speed limit
// ignored Greg's arguments
// interrupted his mother



var charNameList = ["Alex", "Bob", "Charlie", "Chris", 
    "David", "Eric", "Frank", "George", "Jacob", "Jake", 
    "James", "John", "Josh", "Mike", "Scott", "Steve", "Tom"];
var charNameOrder = shuffledArray(charNameList.length);

/* Experimental Variables */
// Number of conditions in experiment
var numConditions = allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = 0; //random(0, numConditions-1);

// Based on condition number, choose set of input (trials)
var allTrialOrders = allConditions[chooseCondition];

// Number of trials in each condition
var numTrials = allTrialOrders.length; //allTrialOrders.length;

// Produce random order in which the trials will occur
var shuffledOrder = shuffledArray(allTrialOrders.length);

// Keep track of current trial 
var currentTrialNum = 0;

var trial;

// Keep track of how many trials have been completed
var numComplete = 0;
var numCounterfactualComplete = 0;



/*
Show the instructions slide — this is what we want subjects to see first.
*/

$("#progressBar").hide();
showSlide("instructions");


// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);

/*
The actual variable that will be returned to MTurk. The experiment object with various variables that you want to keep track of and return as results.

More practically, you should stick everything in an object and submit that whole object so that you don’t lose data (e.g. randomization parameters, what condition the subject is in, etc). Don’t worry about the fact that some of the object properties are functions — mmturkey (the Turk submission library) will strip these out.
*/

var experiment = {

/*
Parameters for this sequence.
*/
  //condition: 1,

  // An array of subjects' responses to each trial (NOTE: in the order in which
  // you initially listed the trials, not in the order in which they appeared)
  //results: new Array(numTrials),

  // The order in which each trial appeared
  //orders: new Array(numTrials),

  // The order in which each trial is presented. i.e. 
  // presentationOrder[i] = j means the i-th trial is the j-th one in the trial sequence.
  // Note that presentationOrder is now obsolete with spinnerIDArray
  // presentationOrder: new Array(numTrials),


  behaviorIDArray: new Array(numTrials),
  behaviorTypeArray: new Array(numTrials),
  behaviorArray: new Array(numTrials),
  orderArray: new Array(numTrials),
  condition: chooseCondition + 1,

  // My Results:
  // freeResponses: new Array(numTrials),

  // freeResponsesHappy: new Array(numTrials),
  // freeResponsesCalm: new Array(numTrials),
  // freeResponsesSad: new Array(numTrials),
  // freeResponsesAngry: new Array(numTrials),
  // freeResponsesSurprised: new Array(numTrials),

  likelihoodRatingsDesireRawArray: new Array(numTrials),
  likelihoodRatingsBeliefRawArray: new Array(numTrials),
  likelihoodRatingsEmotionRawArray: new Array(numTrials),
  likelihoodRatingsSituationRawArray: new Array(numTrials),

  likelihoodRatingsDesireOrderedArray: new Array(numTrials),
  likelihoodRatingsBeliefOrderedArray: new Array(numTrials),
  likelihoodRatingsEmotionOrderedArray: new Array(numTrials),
  likelihoodRatingsSituationOrderedArray: new Array(numTrials),


  characterNames: new Array(numTrials),
  reactionTimeArray: new Array(numTrials),
  
  // Demographics
  gender: "",
  age:"",
  nativeLanguage:"",
  comments:"",
  browser: BrowserDetect.browser,
  browserVersion: BrowserDetect.version,
  browserOS: BrowserDetect.OS,
  
  startTime: 0,
  endTime: 0,

// Goes to description slide
  description: function() {
    $("#progressBar").show();
    showSlide("description");
    $("#tot-num").html(numTrials);

    if (turk.previewMode) {
      alert ( "Please accept the HIT before continuing." );
    }   

      // setting up sliders
      $("#slider1").slider({
        // animate: true,
        max: 100 , min: 0, step: 1, value: 50,
        create: function( event, ui ) {
          $("#slider1 .ui-slider-handle").hide();
        },
        slide: function( event, ui ) {
          $("#slider1 .ui-slider-handle").show();
          $("#slider1 .ui-slider-handle").css({
            "background":"#E0F5FF",
            "border-color": "#001F29"
          });
        },
        change: function( event, ui ) {
          $('#hiddenSliderValue1').attr('value', ui.value);
          $("#slider1").css({"background":"#99D6EB"});
          $("#slider1 .ui-slider-handle").css({
            "background":"#667D94",
            "border-color": "#001F29" });
        }
      });
      $("#slider2").slider({
        // animate: true,
        max: 100 , min: 0, step: 1, value: 50,
        create: function( event, ui ) {
          $("#slider2 .ui-slider-handle").hide();
        },
        slide: function( event, ui ) {
          $("#slider2 .ui-slider-handle").show();
          $("#slider2 .ui-slider-handle").css({
            "background":"#E0F5FF",
            "border-color": "#001F29"
          });
        },
        change: function( event, ui ) {
          $('#hiddenSliderValue2').attr('value', ui.value);
          $("#slider2").css({"background":"#99D6EB"});
          $("#slider2 .ui-slider-handle").css({
            "background":"#667D94",
            "border-color": "#001F29" });
        }
      });
      $("#slider3").slider({
        // animate: true,
        max: 100 , min: 0, step: 1, value: 50,
        create: function( event, ui ) {
          $("#slider3 .ui-slider-handle").hide();
        },
        slide: function( event, ui ) {
          $("#slider3 .ui-slider-handle").show();
          $("#slider3 .ui-slider-handle").css({
            "background":"#E0F5FF",
            "border-color": "#001F29"
          });
        },
        change: function( event, ui ) {
          $('#hiddenSliderValue3').attr('value', ui.value);
          $("#slider3").css({"background":"#99D6EB"});
          $("#slider3 .ui-slider-handle").css({
            "background":"#667D94",
            "border-color": "#001F29" });
        }
      });
      $("#slider4").slider({
        // animate: true,
        max: 100 , min: 0, step: 1, value: 50,
        create: function( event, ui ) {
          $("#slider4 .ui-slider-handle").hide();
        },
        slide: function( event, ui ) {
          $("#slider4 .ui-slider-handle").show();
          $("#slider4 .ui-slider-handle").css({
            "background":"#E0F5FF",
            "border-color": "#001F29"
          });
        },
        change: function( event, ui ) {
          $('#hiddenSliderValue4').attr('value', ui.value);
          $("#slider4").css({"background":"#99D6EB"});
          $("#slider4 .ui-slider-handle").css({
            "background":"#667D94",
            "border-color": "#001F29" });
        }
      });



  },

/*
The function that gets called when the sequence is finished.
*/

  end: function() {
  	// Records demographics
    experiment.gender = $('input[name="genderButton"]:checked').val();
    experiment.age = $('select[name="ageRange"]').val();
    experiment.nativeLanguage = $('input[name="nativeLanguage"]').val();
    experiment.comments = $('textarea[name="commentsTextArea"]').val();
    
    // Show the finish slide.
    showSlide("finished");

    /*
    Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we’re just submitting properties [i.e. data])
    */
    setTimeout(function() { turk.submit(experiment);}, 1500);
  },


  askInfo: function() {
  	showSlide("askInfo");
  },
  
  next: function() {  
  showSlide("stage");
  $('body').scrollTop(0);
  //$("#response").hide();
  
    // If this is not the first trial, record variables
    if (numComplete > 0) {
        experiment.likelihoodRatingsBeliefRawArray[numComplete-1] = parseInt($('#hiddenSliderValue1').val());
        experiment.likelihoodRatingsEmotionRawArray[numComplete-1] = parseInt($('#hiddenSliderValue2').val());
        experiment.likelihoodRatingsDesireRawArray[numComplete-1] = parseInt($('#hiddenSliderValue3').val());
        experiment.likelihoodRatingsSituationRawArray[numComplete-1] = parseInt($('#hiddenSliderValue4').val());

        experiment.likelihoodRatingsBeliefOrderedArray[trial.behaviorID-1] = parseInt($('#hiddenSliderValue1').val());
        experiment.likelihoodRatingsEmotionOrderedArray[trial.behaviorID-1] = parseInt($('#hiddenSliderValue2').val());
        experiment.likelihoodRatingsDesireOrderedArray[trial.behaviorID-1] = parseInt($('#hiddenSliderValue3').val());
        experiment.likelihoodRatingsSituationOrderedArray[trial.behaviorID-1] = parseInt($('#hiddenSliderValue4').val());

        resetSlider('slider1');
        $('#hiddenSliderValue1').val(undefined);
        resetSlider('slider2');
        $('#hiddenSliderValue2').val(undefined);
        resetSlider('slider3');
        $('#hiddenSliderValue3').val(undefined);
        resetSlider('slider4');
        $('#hiddenSliderValue4').val(undefined);
        
        experiment.endTime = (new Date()).getTime();
        experiment.reactionTimeArray[numComplete-1] = experiment.endTime - experiment.startTime;
      }
     
    // If subject has completed all trials, update progress bar and
    // show slide to ask for demographic info
    if (numComplete >= numTrials) {
      $('.bar').css('width', (200.0 * numComplete/(numTrials)) + 'px');
      $("#trial-num").html(numComplete);
      $("#total-num").html(numTrials);
      experiment.askInfo();
      
    // Otherwise, if trials not completed yet, update progress bar
    // and go to next trial based on the order in which trials are supposed
    // to occur
    } else {
      $('.bar').css('width', (200.0 * numComplete/(numTrials)) + 'px');
      $("#trial-num").html(numComplete);
      $("#total-num").html(numTrials);


      // function refreshCharName() {
      //    return(charNameList[Math.floor(Math.random()*17)]);
      // };
      // var charName = refreshCharName();

      // currentTrialNumForName = charNameOrder[numComplete];
      // charName = charNameList[currentTrialNumForName];
      // experiment.characterNames[numComplete] = charName;

      charNameOrder = shuffledArray(charNameList.length);
      // tempCharNames = [ charNameList[charNameOrder[0]],
      //                   charNameList[charNameOrder[1]],
      //                   charNameList[charNameOrder[2]],
      //                   charNameList[charNameOrder[3]],
      //                   charNameList[charNameOrder[4]]];
      // $('#CharName1').html(tempCharNames[0]);
      // $('#CharName2').html(tempCharNames[1]);
      // $('#CharName3').html(tempCharNames[2]);
      // $('#CharName4').html(tempCharNames[3]);
      // $('#CharName5').html(tempCharNames[4]);
      // experiment.characterNames[numComplete] = tempCharNames;

      $('#CharName1').html(charNameList[charNameOrder[0]]);
      $('#CharName2').html(charNameList[charNameOrder[0]]);
      experiment.characterNames[numComplete] = charNameList[charNameOrder[0]];
      


      //currentTrialNum is used for randomizing later
      currentTrialNum = shuffledOrder[numComplete]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#behaviorSpan1').html(trial.behavior);
      $('#behaviorSpan2').html(trial.behavior);
      $('#behaviorSpan3').html(trial.behavior);
      $('#behaviorSpan4').html(trial.behavior);
      $('#behaviorSpan5').html(trial.behavior);

      experiment.behaviorIDArray[numComplete] = trial.behaviorID;
      experiment.behaviorTypeArray[numComplete] = trial.behaviorType;
      experiment.behaviorArray[numComplete] = trial.behavior;
      experiment.orderArray[numComplete] = currentTrialNum;


      experiment.startTime = (new Date()).getTime();
      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

