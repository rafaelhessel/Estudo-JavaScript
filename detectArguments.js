function detectArguments(a1, a2, a3) {
    let notUndefined = 0;
    if (a1 === undefined){
        notUndefined = 0;
    }
    else if (a2 === undefined){
        notUndefined = 1;
    }
    else if (a3 === undefined){
        notUndefined = 2;
    }
    else{
        notUndefined = 3;
    }
    return notUndefined
}


