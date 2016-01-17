
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







// Input Data

var allConditions = [
// 1: positive, 0: negative, 2: neutral
[
{"Version":"2", "actionID":1, "actionText":"cried", "condition":1},
{"Version":"2", "actionID":2, "actionText":"smiled", "condition":1},
{"Version":"2", "actionID":3, "actionText":"yelled", "condition":1},
{"Version":"2", "actionID":4, "actionText":"jumped", "condition":1},
{"Version":"2", "actionID":5, "actionText":"laughed", "condition":1},
{"Version":"2", "actionID":6, "actionText":"screamed", "condition":1},
{"Version":"2", "actionID":7, "actionText":"slept", "condition":1},
{"Version":"2", "actionID":8, "actionText":"cursed", "condition":1},
{"Version":"2", "actionID":9, "actionText":"danced", "condition":1},
{"Version":"2", "actionID":10, "actionText":"frowned", "condition":1},
{"Version":"2", "actionID":11, "actionText":"relaxed", "condition":1},
{"Version":"2", "actionID":12, "actionText":"sat down", "condition":1},
{"Version":"2", "actionID":13, "actionText":"sighed", "condition":1},
{"Version":"2", "actionID":14, "actionText":"killed himself", "condition":1},
{"Version":"2", "actionID":15, "actionText":"punched the wall", "condition":1}
],
[
{"Version":"1", "storyID":1, "storyType":2, "emotion":0, "story": "shopped for groceries", "condition":2}
]
];



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
var numTrials = 3; //allTrialOrders.length; //allTrialOrders.length;

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
$("#total-num").html(numTrials *2);

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

  
  actionIDArray: new Array(15), //new Array(numTrials),
  actionArray: new Array(15), //new Array(numTrials),
  orderArray: new Array(15), //new Array(numTrials),
  condition: chooseCondition + 1,

  // My Results:
  // freeResponses: new Array(numTrials),

  freeResponsesOrdered: new Array(15), //new Array(numTrials),
  counterfactualJudgmentsOrdered: new Array(15), //new Array(numTrials),

  // freeResponsesHappy: new Array(numTrials),
  // freeResponsesCalm: new Array(numTrials),
  // freeResponsesSad: new Array(numTrials),
  // freeResponsesAngry: new Array(numTrials),
  // freeResponsesSurprised: new Array(numTrials),

  // counterfactualJudgmentsHappy: new Array(numTrials),
  // counterfactualJudgmentsCalm: new Array(numTrials),
  // counterfactualJudgmentsSad: new Array(numTrials),
  // counterfactualJudgmentsAngry: new Array(numTrials),
  // counterfactualJudgmentsSurprised: new Array(numTrials),


  characterNames: new Array(15), //new Array(numTrials),
  reactionTimeArray: new Array(numTrials*2),
  exampleCounterfactualResponse: -1,
  
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


    // setting the order.
    for (var i = 0; i < allTrialOrders.length; i++) {
          
    }

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
    experiment.exampleCounterfactualResponse = $('input[name="example1Button"]:checked').val();
    
    // Show the finish slide.
    showSlide("finished");

    /*
    Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we’re just submitting properties [i.e. data])
    */
    setTimeout(function() { turk.submit(experiment);}, 1500);
  },

  askCounterfactual: function() {
	
  	  showSlide("askCounterfactual");
      $('body').scrollTop(0);
      
      if (numCounterfactualComplete > 0) {
      	// experiment.causalStructures[numCounterfactualComplete-1]=$('input[name="causalButton"]:checked').val();

        currentCounterfactualTrialNum = shuffledOrder[ (numCounterfactualComplete-1)*5 ];
        trial = allTrialOrders[currentCounterfactualTrialNum];
        experiment.counterfactualJudgmentsOrdered[trial.actionID-1] = $('input[name="counterfactualButton1"]:checked').val();
        
        currentCounterfactualTrialNum = shuffledOrder[ (numCounterfactualComplete-1)*5 +1];
        trial = allTrialOrders[currentCounterfactualTrialNum];
        experiment.counterfactualJudgmentsOrdered[trial.actionID-1] = $('input[name="counterfactualButton2"]:checked').val();
        
        currentCounterfactualTrialNum = shuffledOrder[ (numCounterfactualComplete-1)*5 +2];
        trial = allTrialOrders[currentCounterfactualTrialNum];
        experiment.counterfactualJudgmentsOrdered[trial.actionID-1] = $('input[name="counterfactualButton3"]:checked').val();
        
        currentCounterfactualTrialNum = shuffledOrder[ (numCounterfactualComplete-1)*5 +3];
        trial = allTrialOrders[currentCounterfactualTrialNum];
        experiment.counterfactualJudgmentsOrdered[trial.actionID-1] = $('input[name="counterfactualButton4"]:checked').val();
        
        currentCounterfactualTrialNum = shuffledOrder[ (numCounterfactualComplete-1)*5 +4];
        trial = allTrialOrders[currentCounterfactualTrialNum];
        experiment.counterfactualJudgmentsOrdered[trial.actionID-1] = $('input[name="counterfactualButton5"]:checked').val();
        

        experiment.endTime = (new Date()).getTime();
        experiment.reactionTimeArray[numComplete + numCounterfactualComplete -1] = experiment.endTime - experiment.startTime;

        $('input[name="counterfactualButton1"]:').prop('checked', false);
        $('input[name="counterfactualButton2"]:').prop('checked', false);
        $('input[name="counterfactualButton3"]:').prop('checked', false);
        $('input[name="counterfactualButton4"]:').prop('checked', false);
        $('input[name="counterfactualButton5"]:').prop('checked', false);
      }
      if (numCounterfactualComplete >= numTrials) {
      	$('.bar').css('width', (200.0 * (numComplete + numCounterfactualComplete)/(numTrials*2)) + 'px');
      	$("#trial-num").html(numComplete + numCounterfactualComplete);
      	$("#total-num").html(numTrials*2);
      	showSlide("askInfo");
      } else {
      $('.bar').css('width', (200.0 * (numComplete + numCounterfactualComplete) /(numTrials*2)) + 'px');
      $("#trial-num").html(numComplete +numCounterfactualComplete);
      $("#total-num").html(numTrials*2);

      //
      numFineTrialToUse = (numCounterfactualComplete)*5

      currentCounterfactualTrialNum = shuffledOrder[numFineTrialToUse]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentCounterfactualTrialNum];
      $('#actionSpan1a').html(trial.actionText);
      $('#actionSpan1b').html(trial.actionText);

      charName = experiment.characterNames[numFineTrialToUse];      
      $('#CharName1a').html(charName);
      $('#CharName1b').html(charName);
      
      tempFreeResponse = experiment.freeResponsesOrdered[trial.actionID-1];
  		$('#exp1a').html(tempFreeResponse.replace(';',','));
      $('#exp1b').html(tempFreeResponse.replace(';',','));
      
      //
      numFineTrialToUse = (numCounterfactualComplete)*5 + 1

      currentCounterfactualTrialNum = shuffledOrder[numFineTrialToUse]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentCounterfactualTrialNum];
      $('#actionSpan2a').html(trial.actionText);
      $('#actionSpan2b').html(trial.actionText);

      charName = experiment.characterNames[numFineTrialToUse];      
      $('#CharName2a').html(charName);
      $('#CharName2b').html(charName);
      
      tempFreeResponse = experiment.freeResponsesOrdered[trial.actionID-1];
      $('#exp2a').html(tempFreeResponse.replace(';',','));
      $('#exp2b').html(tempFreeResponse.replace(';',','));
      //
      numFineTrialToUse = (numCounterfactualComplete)*5 + 2

      currentCounterfactualTrialNum = shuffledOrder[numFineTrialToUse]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentCounterfactualTrialNum];
      $('#actionSpan3a').html(trial.actionText);
      $('#actionSpan3b').html(trial.actionText);

      charName = experiment.characterNames[numFineTrialToUse];      
      $('#CharName3a').html(charName);
      $('#CharName3b').html(charName);
      
      tempFreeResponse = experiment.freeResponsesOrdered[trial.actionID-1];
      $('#exp3a').html(tempFreeResponse.replace(';',','));
      $('#exp3b').html(tempFreeResponse.replace(';',','));
      //
      numFineTrialToUse = (numCounterfactualComplete)*5 + 3

      currentCounterfactualTrialNum = shuffledOrder[numFineTrialToUse]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentCounterfactualTrialNum];
      $('#actionSpan4a').html(trial.actionText);
      $('#actionSpan4b').html(trial.actionText);

      charName = experiment.characterNames[numFineTrialToUse];      
      $('#CharName4a').html(charName);
      $('#CharName4b').html(charName);
      
      tempFreeResponse = experiment.freeResponsesOrdered[trial.actionID-1];
      $('#exp4a').html(tempFreeResponse.replace(';',','));
      $('#exp4b').html(tempFreeResponse.replace(';',','));
      //
      numFineTrialToUse = (numCounterfactualComplete)*5 + 4

      currentCounterfactualTrialNum = shuffledOrder[numFineTrialToUse]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentCounterfactualTrialNum];
      $('#actionSpan5a').html(trial.actionText);
      $('#actionSpan5b').html(trial.actionText);

      charName = experiment.characterNames[numFineTrialToUse];      
      $('#CharName5a').html(charName);
      $('#CharName5b').html(charName);
      
      tempFreeResponse = experiment.freeResponsesOrdered[trial.actionID-1];
      $('#exp5a').html(tempFreeResponse.replace(';',','));
      $('#exp5b').html(tempFreeResponse.replace(';',','));
      //


      experiment.startTime = (new Date()).getTime();
      numCounterfactualComplete++;
    } // end of else loop.
      
      
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
        // experiment.freeResponses[numComplete-1] = $('#freeResponseInput').val();

        currentTrialNum = shuffledOrder[ (numComplete-1)*5 ];
        trial = allTrialOrders[currentTrialNum];
        experiment.freeResponsesOrdered[trial.actionID-1] = $('#freeResponseInput1').val().replace(',',';');;

        currentTrialNum = shuffledOrder[ (numComplete-1)*5 +1];
        trial = allTrialOrders[currentTrialNum];
        experiment.freeResponsesOrdered[trial.actionID-1] = $('#freeResponseInput2').val().replace(',',';');;

        currentTrialNum = shuffledOrder[ (numComplete-1)*5 +2];
        trial = allTrialOrders[currentTrialNum];
        experiment.freeResponsesOrdered[trial.actionID-1] = $('#freeResponseInput3').val().replace(',',';');;

        currentTrialNum = shuffledOrder[ (numComplete-1)*5 +3];
        trial = allTrialOrders[currentTrialNum];
        experiment.freeResponsesOrdered[trial.actionID-1] = $('#freeResponseInput4').val().replace(',',';');;

        currentTrialNum = shuffledOrder[ (numComplete-1)*5 +4];
        trial = allTrialOrders[currentTrialNum];
        experiment.freeResponsesOrdered[trial.actionID-1] = $('#freeResponseInput5').val().replace(',',';');;
        
        // switch(trial.emotionID) {
        //   case 1:
        //     experiment.freeResponsesHappy = freeResponsesTemp;
        //     break;
        //   case 2:
        //     experiment.freeResponsesCalm = freeResponsesTemp;
        //     break;
        //   case 3:
        //     experiment.freeResponsesSad = freeResponsesTemp;
        //     break;
        //   case 4:
        //     experiment.freeResponsesAngry = freeResponsesTemp;
        //     break;
        //   case 5:
        //     experiment.freeResponsesSurprised = freeResponsesTemp;
        //     break;
        // }
      // }
     // $('#freeResponseInput').val('');
     $('#freeResponseInput1').val('');
     $('#freeResponseInput2').val('');
     $('#freeResponseInput3').val('');
     $('#freeResponseInput4').val('');
     $('#freeResponseInput5').val('');
     experiment.endTime = (new Date()).getTime();
     experiment.reactionTimeArray[numComplete-1] = experiment.endTime - experiment.startTime;
    }
    // If subject has completed all trials, update progress bar and
    // show slide to ask for demographic info
    if (numComplete >= numTrials) {
      $('.bar').css('width', (200.0 * numComplete/(numTrials*2)) + 'px');
      $("#trial-num").html(numComplete);
      $("#total-num").html(numTrials*2);
      showSlide("counterfactualExample");
      
    // Otherwise, if trials not completed yet, update progress bar
    // and go to next trial based on the order in which trials are supposed
    // to occur
    } else {
      $('.bar').css('width', (200.0 * numComplete/(numTrials*2)) + 'px');
      $("#trial-num").html(numComplete);
      $("#total-num").html(numTrials*2);


      // function refreshCharName() {
      //    return(charNameList[Math.floor(Math.random()*17)]);
      // };
      // var charName = refreshCharName();

      // currentTrialNumForName = charNameOrder[numComplete];
      // charName = charNameList[currentTrialNumForName];
      // experiment.characterNames[numComplete] = charName;

      charNameOrder = shuffledArray(charNameList.length);
      tempCharName = charNameList[charNameOrder[0]];
      $('#CharName1').html(tempCharName);
      experiment.characterNames[ (numComplete)*5 ] = tempCharName;
      
      tempCharName = charNameList[charNameOrder[1]];
      $('#CharName2').html(tempCharName);
      experiment.characterNames[ (numComplete)*5 +1] = tempCharName;
      
      tempCharName = charNameList[charNameOrder[2]];
      $('#CharName3').html(tempCharName);
      experiment.characterNames[ (numComplete)*5 +2] = tempCharName;
      
      tempCharName = charNameList[charNameOrder[3]];
      $('#CharName4').html(tempCharName);
      experiment.characterNames[ (numComplete)*5 +3] = tempCharName;
      
      tempCharName = charNameList[charNameOrder[4]];
      $('#CharName5').html(tempCharName);
      experiment.characterNames[ (numComplete)*5 +4] = tempCharName;

      


      //currentTrialNum is used for randomizing later
      currentTrialNum = shuffledOrder[ (numComplete)*5 ]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#actionSpan1').html(trial.actionText);
      
      experiment.actionIDArray[ (numComplete)*5 ] = trial.actionID;
      experiment.actionArray[ (numComplete)*5 ] = trial.actionText;
      experiment.orderArray[ (numComplete)*5 ] = currentTrialNum;

      //
      currentTrialNum = shuffledOrder[ (numComplete)*5 +1]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#actionSpan2').html(trial.actionText);
      
      experiment.actionIDArray[ (numComplete)*5 +1] = trial.actionID;
      experiment.actionArray[ (numComplete)*5 +1] = trial.actionText;
      experiment.orderArray[ (numComplete)*5 +1] = currentTrialNum;

      //
      currentTrialNum = shuffledOrder[ (numComplete)*5 +2]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#actionSpan3').html(trial.actionText);
      
      experiment.actionIDArray[ (numComplete)*5 +2] = trial.actionID;
      experiment.actionArray[ (numComplete)*5 +2] = trial.actionText;
      experiment.orderArray[ (numComplete)*5 +2] = currentTrialNum;

      //
      currentTrialNum = shuffledOrder[ (numComplete)*5 +3]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#actionSpan4').html(trial.actionText);
      
      experiment.actionIDArray[ (numComplete)*5 +3] = trial.actionID;
      experiment.actionArray[ (numComplete)*5 +3] = trial.actionText;
      experiment.orderArray[ (numComplete)*5 +3] = currentTrialNum;

      //
      currentTrialNum = shuffledOrder[ (numComplete)*5 +4]; //numComplete //allTrialOrders[numComplete];
      trial = allTrialOrders[currentTrialNum];

      $('#actionSpan5').html(trial.actionText);
      
      experiment.actionIDArray[ (numComplete)*5 +4] = trial.actionID;
      experiment.actionArray[ (numComplete)*5 +4] = trial.actionText;
      experiment.orderArray[ (numComplete)*5 +4] = currentTrialNum;

      experiment.startTime = (new Date()).getTime();
      numComplete++;
    } // end of else loop.
  } // end experiment.next()
}; // end experiment variable

