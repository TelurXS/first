
const dateNow = () => {
    return new Date();
}

const printDate = (date) => {
    const LOCALE = "UA";

    const DAY_OPTIONS = {
        weekday: "long"
    }
    const DATE_OPTIONS = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    let timeString = date.toLocaleTimeString();
    let dayString = date.toLocaleDateString(LOCALE, DAY_OPTIONS);
    let dateString = date.toLocaleDateString(LOCALE, DATE_OPTIONS);

    return  timeString + ", " + dayString + ", " + dateString;
}

console.log(printDate(dateNow()));
//09:15:56, середа , 06 травня 2020 року
