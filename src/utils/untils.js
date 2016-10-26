export function convertDateToSheetsDateString(str) {
    const dateObject = new Date(str);

    return dateObject.toISOString().substr(0, '1990-01-03T15:30:00'.length)
        .replace(/T/, ' ')
        .replace(/-/g, '/');
}

export function toDateInputStr(date) {
    date = new Date(date);
    return date.getFullYear() +
        '-' + alignNum(date.getMonth() + 1) +
        '-' + alignNum(date.getDate()) +
        'T' + alignNum(date.getHours()) +
        ':' + alignNum(date.getMinutes()) +
        ':' + alignNum(date.getSeconds());
}
function alignNum(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}