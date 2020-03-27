import React from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR *24;

const fixPlural = (n, text_forms) => {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { 
        return text_forms[2]; 
    } 
    else if (n1 > 1 && n1 < 5) { 
        return text_forms[1]; 
    } else if (n1 == 1) {
        return text_forms[0]; 
    } else {
        return text_forms[2];
    }
}

export const fixTime = (date) => {
    let updatedDate = new Date(date).getTime();
    const time = parseInt(Date.now() - updatedDate);
    if (time < MINUTE) {
        return 'только что';
    } else if (time < HOUR) {
        let fixedTime = time/MINUTE;
        return `${fixedTime} ${fixPlural(fixedTime, ['минуту', 'минуты', 'минут'])} назад`;
    } else if (time < DAY) {
        let fixedTime = time/HOUR;
        return `${fixedTime} ${fixPlural(fixedTime, ['час', 'часа', 'часов'])} назад`;
    } else {
        let options = {
            hour: 'numeric', minute: 'numeric',
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour12: false,
        }
        let newDate = new Intl.DateTimeFormat('ru-RU',options).format(updatedDate)
        return newDate
    }
}

