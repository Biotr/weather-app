import moment from 'moment';

export const getTime=(epoch,type)=>{
    switch(type){
        case 'day':
            return moment.unix(epoch).format('dddd')
        case 'hour':
            return moment.unix(epoch).format('LT')
        default:
            return ''
    }
    
}