function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var q = new Date();
/** 
 * Thanks to KCF for fixing some major bugs.
 * Website: www.kingcodefish.com
 */
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dotw = dayNames[q.getDay()];
var day = q.getDate();
var month = monthNames[q.getMonth()];
var year = q.getFullYear();
var hour = q.getHours();
var minutes = checkTime(q.getMinutes());
