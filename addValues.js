function addValues(obj) {
    sum = 0;
    for (key in obj){
        sum = sum + obj[key];
    }
    return sum
}
