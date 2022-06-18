class ValidatorStatic {
    static isEmail(email) {
        this.email = email;
        if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
            return true;
        } else {
            return false;
        }
    }

    static isDomain(domain) {
        this.domain = domain;
        if (domain.match(/^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/)) {
            return true;
        } else {
            return false;
        }

    }

    static isDate(date) {
        this.date = date;
        if (date.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)) {
            return true;
        } else {
            return false;
        }

    }

    static isPhone(phone) {
        this.phone = phone;
        if (phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));

// ----------------------------------------------

class Validator {
    isEmail(email) {
        this.email = email;
        if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(domain) {
        this.domain = domain;
        if (domain.match(/^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/)) {
            return true;
        } else {
            return false;
        }

    }

    isDate(date) {
        this.date = date;
        if (date.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)) {
            return true;
        } else {
            return false;
        }

    }

    isPhone(phone) {
        this.phone = phone;
        if (phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
            return true;
        } else {
            return false;
        }
    }
}

var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));