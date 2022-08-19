let date = new Date();

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'Прямо сейчас'
    }

    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + ' сек. назад'
    }

    let minute = Math.floor(sec / 60);
    if (minute < 60) {
        return minute + ' мин. назад'
    }

    else {
        
    }

}
alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert(formatDate(new Date(new Date - 86400 * 4 * 1000)));