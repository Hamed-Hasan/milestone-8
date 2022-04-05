
let db = {}

const addToDb = (item) => {
    const storage = localStorage.getItem('tracker');
    if(storage){
        db = JSON.parse(storage);
    }
    if(item in db){
        db[item] = db[item] + 1;
    }else{
        db[item] = 1;
        localStorage.setItem('tracker', JSON.stringify(db))
    }
}

const removeFromDb =(item) => {
    const storage = localStorage.getItem('tracker');
    if(storage){
        const storeObj = JSON.parse(storage)
        delete storeObj[item]
        localStorage.setItem('tracker', JSON.stringify(storeObj))
    }
}