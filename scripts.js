// Write your JavaScript code here.
function init (){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    const up = document.getElementById("upButton");
    const down = document.getElementById("downButton");
    const right = document.getElementById("rightButton");
    const left = document.getElementById("leftButton");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackgorund = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    
        //loaded
        console.log("window loaded");

        //takeoff button
        takeOff.addEventListener('click', function(){
            let takeOffResponse = confirm("Confirm that shuttle is ready for takeoff.");
            if (takeOffResponse == true){
                flightStatus.innerHTML = 'Shuttle in Flight.';
                shuttleBackgorund.style.backgroundColor = "Blue";
                spaceShuttleHeight.value = 10000;
            };
        });

        //land button
        landing.addEventListener('click', function(){
            window.alert("The shuttle is landing");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackgorund.style.backgroundColor = "Green";
            spaceShuttleHeight.innerHTML = "0";
        });

        //abort button
        missionAbort.addEventListener('click', function(){
            let abortResponse = confirm("Confirm that you want to abort the mission.");
            if(abortResponse == true){
                flightStatus.innerHTML = "Mission aborted";
                shuttleBackgorund.style.backgroundColor = "Green";
                spaceShuttleHeight.innerHTML = "0";
            };
        });

        //move rocket
        up.addEventListener('click', function(){
            
        });

        down.addEventListener('click', function(){

        });

        right.addEventListener('click', function(){

        });

        left.addEventListener('click', function(){

        });
    
};


// Remember to pay attention to page loading!
window.addEventListener("load", init);