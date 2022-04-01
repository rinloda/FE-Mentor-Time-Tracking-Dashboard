import jsonData from './data.json' assert { type: "json" };



// Weekly
function weekly () {
    // Work Component
    const workWeekly = document.querySelector('#weekly-work');
    workWeekly.innerHTML = jsonData[0].timeframes.weekly.current
    const preWorkWeekly = document.querySelector('#pre-weekly-work');
    preWorkWeekly.innerHTML = jsonData[0].timeframes.weekly.previous

    // Play Component
    const playWeekly = document.querySelector('#weekly-play');
    playWeekly.innerHTML = jsonData[1].timeframes.weekly.current
    const prePlayWeekly = document.querySelector('#pre-weekly-play');
    prePlayWeekly.innerHTML = jsonData[1].timeframes.weekly.previous

    // Study Component
    const studyWeekly = document.querySelector('#weekly-study');
    studyWeekly.innerHTML = jsonData[2].timeframes.weekly.current
    const preStudyWeekly = document.querySelector('#pre-weekly-study');
    preStudyWeekly.innerHTML = jsonData[2].timeframes.weekly.previous
    
    // Exercise Component
    const exerciseWeekly = document.querySelector('#weekly-exercise');
    exerciseWeekly.innerHTML = jsonData[3].timeframes.weekly.current
    const preExerciseWeekly = document.querySelector('#pre-weekly-exercise');
    preExerciseWeekly.innerHTML = jsonData[3].timeframes.weekly.previous

    // Social Component
    const socialWeekly = document.querySelector('#weekly-social');
    socialWeekly.innerHTML = jsonData[4].timeframes.weekly.current
    const preSocialWeekly = document.querySelector('#pre-weekly-social');
    preSocialWeekly.innerHTML = jsonData[4].timeframes.weekly.previous

    // Self Care Component
    const selfCareWeekly = document.querySelector('#weekly-selfCare');
    selfCareWeekly.innerHTML = jsonData[5].timeframes.weekly.current
    const preselfCareWeekly = document.querySelector('#pre-weekly-selfCare');
    preselfCareWeekly.innerHTML = jsonData[5].timeframes.weekly.previous
}


// Study Component

// Exercise Component

// Social Component

// Self Care Component



document.addEventListener('DOMContentLoaded', weekly)