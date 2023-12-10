function encourage() {
let randomFeatures = ["face", "eyes", "skin", "hair"];
let randomAdjectives = ["pretty", "beautiful", "radiant", "gorgeous", "amazing", "glamorous", "on point"];
let randomTimes = ["lately.", "at this hour.", "recently.", "right now!"];
let randomVerbs = ["crush it", "kill it", "really own it", "be inspirational"];
let randomConfidenceBoosts = ["a champoin", "glorious", "rather dashing", "the greatest", "the best", "a good person"];

let randomFeature = randomFeatures[Math.floor(Math.random()*randomFeatures.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)];
let randomTime = randomTimes[Math.floor(Math.random()*randomTimes.length)];
let randomVerb = randomVerbs[Math.floor(Math.random()*randomVerbs.length)];
let randomConfidenceBoost = randomConfidenceBoosts[Math.floor(Math.random()*randomConfidenceBoosts.length)];


let randomCompliment = ["Your", randomFeature, "looks", randomAdjective+"!"].join(" ");
let randomEncouragementA = ["You're going to", randomVerb,"today!!"].join(" ");
let randomEncouragementB = ["You are", randomConfidenceBoost+"!!!"].join(" ");

let encouragementArr = [randomCompliment, randomEncouragementA, randomEncouragementB];
let encouragementSifter = encouragementArr[Math.floor(Math.random()*encouragementArr.length)];

document.getElementById("enc").innerHTML = encouragementSifter;
}
