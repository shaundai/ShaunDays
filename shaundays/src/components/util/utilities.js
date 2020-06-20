const convertTimestamptoTime = (timestamp) => { 
    const dateObj = new Date(timestamp * 1000); 
    const utcString = dateObj.toUTCString(); 
    const time = utcString.slice(-11, -4); 
    return time; 
}

export default convertTimestamptoTime;