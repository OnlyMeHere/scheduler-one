var dateHeader = document.getElementById("currentDay");
var timeNow = moment();
var curTime = moment().function(h);
var dayHours = []
var nineAm = getElementById("9am");
var tenAm = getElementById("10am");
var elevAm = getElementById("11am");
var noon = getElementById("12pm");
var onePm = getElementById("1pm");
var twoPm = getElementById("2pm");
var threPm = getElementById("3pm");
var fourPm = getElementById("4pm");


// ---- current day displayed at the top of the calander

dateHeader.innerHTML = timeNow.format("MMMM, Do YYYY");
console.log(timeNow);

// ---- scrolling down finds time blocks for standard business hours


// --- each time block is color-coded for past, present and future.

function highLighter() {
        
        if (curTime >= "9");
            nineAm.document.replace("future", "present");
        if (curTime >= "10");
            nineAm.document.replace("present","past");
            tenAm.document.replace("future", "present")
        if (curTime >= "11");
            tenAm.document.replace("present", "past");
            elevAm.document.replace("future", "present");
        if (curTime >= "12");
            elevAm.document.replace("present", "past");
            noon.document.replace("future", "present");
        if (curTime >= "13");
            noon.document.replace("present", "past");
            onePm.document.replace("future", "present");
        if (curTime >= "14");
            onePm.document.replace("present", "past");
            twoPm.document.replace("future", "present");
        if (curTime >= "15");
            twoPm.document.replace("present", "past");
            threPm.document.replace("future", "present");
        if (curTime >= "16");
            threPm.document.replace("present", "past");
            fourPm.document.replace("future", "present");
        if (curTime > "17");
            fourPm.document.repalce("present", "past");


};


// ---enter an event by clicking on the time block

function dailyImput {

    
}





// --- the event is saved to local storage by clicking the SAVE button for that time block


// --- refreshing the page finds the saved time block remains 