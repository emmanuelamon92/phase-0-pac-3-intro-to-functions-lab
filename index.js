function shout(string){
    return string.toUpperCase();
}

let whisper = string => string.toLowerCase();

let logShout = string => console.log(string.toUpperCase())

let logWhisper = string => console.log(string.toLowerCase())

let sayHiToGrandma = string => {

    if(string === string.toLowerCase()){
        return ("I can't hear you!");
    }

    if (string === string.toUpperCase()){
        return ("YES INDEED!");
    }

    if (string === "I love you, Grandma."){
        return ("I love you, too.");
    }
}