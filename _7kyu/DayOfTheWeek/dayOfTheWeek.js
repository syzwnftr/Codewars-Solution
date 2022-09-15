/*

Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"

Have fun

*/

function dayOfTheWeek(date){
    date = date.split('/').map(str => Number(str));
    let day = new Date(date[2], date[1] - 1, date[0]).toString().split(' ')[0];
    
    if(day === 'Sun') return 'Sunday';
    if(day === 'Mon') return 'Monday';
    if(day === 'Tue') return 'Tuesday';
    if(day === 'Wed') return 'Wednesday';
    if(day === 'Thu') return 'Thursday';
    if(day === 'Fri') return 'Friday';
    if(day === 'Sat') return 'Saturday';
}

console.log(dayOfTheWeek("02/06/1940"))