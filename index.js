function checkCollection(collection) {
    let collection2 = collection;
    if(typeof collection === 'object') {
        collection2 = Object.values(collection);
    }
    return collection2;
}

function myEach(collection, callback) {
    let collection2 = checkCollection(collection);
    collection2.forEach(value => callback(value));
    return collection;
}

function myMap(collection, callback) {
    let collection2 = checkCollection(collection);
    return collection2.map(callback);
}

function myReduce(collection, callback, acc = 0) {
    let collection2 = checkCollection(collection);
    if(acc === 0) {
        acc = collection2.shift(0);
    }
    collection2.forEach(val => {
        let returnVal = callback(acc, val, collection);
        acc = returnVal;
    })
    return acc;
}

function myFind(collection, predicate) {
    let collection2 = checkCollection(collection);
    let trueVal;
    for (let val of collection2) {
        if(predicate(val)) {
        		trueVal = val;
                break;
		}	
    }
    return trueVal;
}

function myFilter(collection, predicate) {
    const trueArr = [];
    let collection2 = checkCollection(collection);
    let trueVal;
    for (let val of collection2) {
        if(predicate(val)) {
        		trueVal = val;
                trueArr.push(trueVal);
		}	
    }
    return trueArr;
}

function mySize(collection) {
    let collection2 = checkCollection(collection);
    return collection2.length;
}

function myFirst(array, n = 0) {
    let newArr = [];
    if(n === 0) {
        return array[0];
    } else {
        newArr = array.splice(0, n);
        return newArr; 
    }
}

function myLast(array, n = 0) {
    if(n === 0) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}