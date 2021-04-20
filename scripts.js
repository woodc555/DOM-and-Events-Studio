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

    let height = 0;
    let vertical = 240;
    let horizontal = 0;

    
        //loaded
        console.log("window loaded");

        //takeoff button
        takeOff.addEventListener('click', function(){
            let takeOffResponse = confirm("Confirm that shuttle is ready for takeoff.");
            if (takeOffResponse == true){
                flightStatus.innerHTML = 'Shuttle in Flight.';
                shuttleBackgorund.style.backgroundColor = "Blue";
                spaceShuttleHeight.innerHTML = "10000";
            };
        });

        //land button
        landing.addEventListener('click', function(){
            window.alert("The shuttle is landing");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackgorund.style.backgroundColor = "Green";
            spaceShuttleHeight.innerHTML = "0";
            vertical = 240;
            horizontal = 0;
            rocket.style.top = vertical + "px";
            rocket.style.left = horizontal + "px";
        });

        //abort button
        missionAbort.addEventListener('click', function(){
            let abortResponse = confirm("Confirm that you want to abort the mission.");
            if(abortResponse == true){
                flightStatus.innerHTML = "Mission aborted";
                shuttleBackgorund.style.backgroundColor = "Green";
                spaceShuttleHeight.innerHTML = "0";
                vertical = 240;
                horizontal = 0;
                rocket.style.top = vertical + "px";
                rocket.style.left = horizontal + "px";
            };
        });

        //move rocket
        rocket.style.position = "absolute";
        rocket.style.left = "0px";
        rocket.style.top = "240px";

        up.addEventListener('click', function(){
            height += 10000;
            spaceShuttleHeight.innerHTML = height;
            
            if (vertical > 0) {
                vertical -= 10;
                rocket.style.top = vertical + "px";
            };
        });
        
        down.addEventListener('click', function(){
            if (height > 0) {
                height -= 10000;
            };
            spaceShuttleHeight.innerHTML = height;
            if (vertical < 240) {
                vertical += 10;
                rocket.style.top = vertical + "px";
            };
            
        });

        right.addEventListener('click', function(){
            if (horizontal < 360) {
                horizontal += 10;
                rocket.style.left = horizontal + "px";
            };
            
        });
        
        left.addEventListener('click', function(){
            if (horizontal > -10){
                horizontal -= 10;
                rocket.style.left = horizontal + "px";
            };
            
        });
    
};


// Remember to pay attention to page loading!
window.addEventListener("load", init);