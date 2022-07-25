function getFullName(obj){
    let fullName = '';
    for(key in obj){
        fullName += obj[key] + ' '; 
    }
    return fullName = fullName.substring(0, fullName.length - 1);
}
