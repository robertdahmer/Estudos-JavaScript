var current = new Date()
var day = current.getDate()
var month = current.getMonth()
var hour = parseFloat(current.getHours())
var name = 'Robert'
console.log(`Now are ${hour} hours. In day ${day} of month ${month}`)
if (hour <= '12:00') {
    console.log(`Good Morning, ${name}.`)
}
else if (hour > '12:00' && hour < '19:00') {
    console.log(`Good Afternoon, ${name}.`)
}
else{
    console.log(`Good Night, ${name}.`)
}
