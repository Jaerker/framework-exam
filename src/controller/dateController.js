const Month = {
    0: { short: 'JAN', long: 'Januari' },
    1: { short: 'FEB', long: 'Februari' },
    2: { short: 'MAR', long: 'Mars' },
    3: { short: 'APR', long: 'April' },
    4: { short: 'MAJ', long: 'Maj' },
    5: { short: 'JUN', long: 'Juni' },
    6: { short: 'JUL', long: 'Juli' },
    7: { short: 'AUG', long: 'Augusti' },
    8: { short: 'SEP', long: 'September' },
    9: { short: 'OKT', long: 'Oktober' },
    10: { short: 'NOV', long: 'November' },
    11: { short: 'DEC', long: 'December' }
}

export const formatDay = (date) => {
    const newDate = new Date(date);
    return newDate.getDate();
}
export const formatShortMonth = (date) => {
    const newDate = new Date(date);
    return Month[newDate.getMonth()].short;
}
export const formatLongMonth = (date) => {
    const newDate = new Date(date);
    return Month[newDate.getMonth()].long;
}
export const formatTime = (time) => {
    return `${time.slice(0, 2)}.${time.slice(3, 5)}`;
}