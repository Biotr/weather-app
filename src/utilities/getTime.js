import moment from 'moment';

export const getTime = (epoch, type) => {

    switch (type) {
        case 'day':
            return moment.unix(epoch).format('dddd')
        case 'hour':
            return moment.unix(epoch).format('LT')
        case 'day_month_year':
            return moment().format("dddd Do MMM YYYY")
        default:
            return ''
    }

}