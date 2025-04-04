export const unixToLocalTime = (unixTime) => {
    const date = new Date(unixTime*1000).toLocaleDateString("en-US")
    const time = new Date(unixTime*1000).toLocaleTimeString("en-US")

    return (date + ' ' + time);
};