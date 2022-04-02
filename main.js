import jsonData from './data.json' assert { type: "json" };

// Declare variables
// Work Component
const workDaily = document.querySelector('#workData');
const workDailyPre = document.querySelector('#pre-workData');
const workWeekly = document.querySelector('#workData');
const workWeeklyPre = document.querySelector('#pre-workData');
const workMonthly = document.querySelector('#workData');
const workMonthlyPre = document.querySelector('#pre-workData');
// PLay Component
const playDaily = document.querySelector('#playData');
const playDailyPre = document.querySelector('#pre-playData');
const playWeekly = document.querySelector('#playData');
const playWeeklyPre = document.querySelector('#pre-playData');
const playMonthly = document.querySelector('#playData');
const playMonthlyPre = document.querySelector('#pre-playData');
// Study Component
const studyDaily = document.querySelector('#studyData');
const studyDailyPre = document.querySelector('#pre-studyData');
const studyWeekly = document.querySelector('#studyData');
const studyWeeklyPre = document.querySelector('#pre-studyData');
const studyMonthly = document.querySelector('#studyData');
const studyMonthlyPre = document.querySelector('#pre-studyData');
// Exercise Component
const exerciseDaily = document.querySelector('#exerciseData');
const exerciseDailyPre = document.querySelector('#pre-exerciseData');
const exerciseWeekly = document.querySelector('#exerciseData');
const exerciseWeeklyPre = document.querySelector('#pre-exerciseData');
const exerciseMonthly = document.querySelector('#exerciseData');
const exerciseMonthlyPre = document.querySelector('#pre-exerciseData');
// Social Component
const socialDaily = document.querySelector('#socialData');
const socialDailyPre = document.querySelector('#pre-socialData');
const socialWeekly = document.querySelector('#socialData');
const socialWeeklyPre = document.querySelector('#pre-socialData');
const socialMonthly = document.querySelector('#socialData');
const socialMonthlyPre = document.querySelector('#pre-socialData');
// SelfCare Component
const selfCareDaily = document.querySelector('#selfCareData');
const selfCareDailyPre = document.querySelector('#pre-selfCareData');
const selfCareWeekly = document.querySelector('#selfCareData');
const selfCareWeeklyPre = document.querySelector('#pre-selfCareData');
const selfCareMonthly = document.querySelector('#selfCareData');
const selfCareMonthlyPre = document.querySelector('#pre-selfCareData');

// function getData() {
//     for (let i = 0; i < jsonData.length; i++) {
//         if (jsonData[i].title == 'Work'){
//             console.log(jsonData[i].timeframes.daily.current)
//         }
//     }
// }

//Daily
function daily () {
    // Work Component
    workDaily.innerHTML = jsonData[0].timeframes.daily.current
    workDailyPre.innerHTML = jsonData[0].timeframes.daily.previous

    // Play Component
    
    playDaily.innerHTML = jsonData[1].timeframes.daily.current
    playDailyPre.innerHTML = jsonData[1].timeframes.daily.previous

    // Study Component
    
    studyDaily.innerHTML = jsonData[2].timeframes.daily.current
    studyDailyPre.innerHTML = jsonData[2].timeframes.daily.previous
    
    // Exercise Component
    
    exerciseDaily.innerHTML = jsonData[3].timeframes.daily.current
    exerciseDailyPre.innerHTML = jsonData[3].timeframes.daily.previous

    // Social Component
    
    socialDaily.innerHTML = jsonData[4].timeframes.daily.current
    socialDailyPre.innerHTML = jsonData[4].timeframes.daily.previous

    // Self Care Component
    
    selfCareDaily.innerHTML = jsonData[5].timeframes.daily.current
    selfCareDailyPre.innerHTML = jsonData[5].timeframes.daily.previous
}

// Weekly
function weekly () {
    // Work Component
    workWeekly.innerHTML = jsonData[0].timeframes.weekly.current
    workWeeklyPre.innerHTML = jsonData[0].timeframes.weekly.previous

    // Play Component
    playWeekly.innerHTML = jsonData[1].timeframes.weekly.current
    playWeeklyPre.innerHTML = jsonData[1].timeframes.weekly.previous

    // Study Component
    studyWeekly.innerHTML = jsonData[2].timeframes.weekly.current
    studyWeeklyPre.innerHTML = jsonData[2].timeframes.weekly.previous
    
    // Exercise Component
    exerciseWeekly.innerHTML = jsonData[3].timeframes.weekly.current
    exerciseWeeklyPre.innerHTML = jsonData[3].timeframes.weekly.previous

    // Social Component
    socialWeekly.innerHTML = jsonData[4].timeframes.weekly.current
    socialWeeklyPre.innerHTML = jsonData[4].timeframes.weekly.previous

    // Self Care Component
    selfCareWeekly.innerHTML = jsonData[5].timeframes.weekly.current
    selfCareWeeklyPre.innerHTML = jsonData[5].timeframes.weekly.previous
}

// Monthly
function monthly () {
    // Work Component
    workMonthly.innerHTML = jsonData[0].timeframes.monthly.current
    workMonthlyPre.innerHTML = jsonData[0].timeframes.monthly.previous

    // Play Component
    
    playMonthly.innerHTML = jsonData[1].timeframes.monthly.current
    playMonthlyPre.innerHTML = jsonData[1].timeframes.monthly.previous

    // Study Component
    
    studyMonthly.innerHTML = jsonData[2].timeframes.monthly.current
    studyMonthlyPre.innerHTML = jsonData[2].timeframes.monthly.previous
    
    // Exercise Component
    
    exerciseMonthly.innerHTML = jsonData[3].timeframes.monthly.current
    exerciseMonthlyPre.innerHTML = jsonData[3].timeframes.monthly.previous

    // Social Component
    
    socialMonthly.innerHTML = jsonData[4].timeframes.monthly.current
    socialMonthlyPre.innerHTML = jsonData[4].timeframes.monthly.previous

    // Self Care Component
    
    selfCareMonthly.innerHTML = jsonData[5].timeframes.monthly.current
    selfCareMonthlyPre.innerHTML = jsonData[5].timeframes.monthly.previous
}

// Button Variables
const dailyButton = document.querySelector('#dailyBtn')
const weeklyButton = document.querySelector('#weeklyBtn')
const monthlyButton = document.querySelector('#monthlyBtn')

document.addEventListener('DOMContentLoaded', weekly);
dailyButton.addEventListener('click', daily);
weeklyButton.addEventListener('click', weekly);
monthlyButton.addEventListener('click', monthly);