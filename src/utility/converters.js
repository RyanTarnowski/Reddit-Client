export const unixToLocalTime = (unixTime) => {
    return new Date(unixTime*1000);
};

export const getDateTimeDiff = (unixTime) => {
    const startDate = new Date(unixTime*1000);
    const endDate = Date.now();
    const diff = endDate - startDate;
    const dayDiff = Math.floor(diff / (1000 * 3600 * 24));
    const hourDiff = Math.floor(diff / (1000 * 3600));
    const minDiff = Math.floor((diff / 1000) / 60);

    if (dayDiff > 0){
        return `${dayDiff}d`;
    }
    if (hourDiff > 0){
        return `${hourDiff}h`;
    }
    return `${minDiff}m`;
};

export const compareUtcDesc = (a, b) => {
    if ( a.data.created_utc < b.data.created_utc ){
        return 1;
    }
    if ( a.data.created_utc > b.data.created_utc ){
        return -1;
    }
    return 0;
};