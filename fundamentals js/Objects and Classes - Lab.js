//1.	Person Info
function personInfo(firstName, lastName, age){
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return person;
}


//2.	City
function city(cityObj){
    for (let keys of Object.keys(cityObj)){
        console.log(`${keys} -> ${cityObj[keys]}`)
    }
}

//3.	Convert to Object
function convertToObject(strJson){
    let convertedObj = JSON.parse(strJson);

    for(let keys in convertedObj){
        console.log(`${keys}: ${convertedObj[keys]}`);
    }
}

//4.	Convert to JSON
function convertToJSON(name, lastName, hairColor){
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person));
}

//5.	Cats
function cats(arr){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for(let i = 0; i < arr.length; i++){
        let catData = arr[i].split(' ');
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for(let elem of cats){
        elem.meow();
    }
}

//6.	Songs
function songs(arr){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = arr.shift();
    let typeSong = arr.pop();

    for(let i = 0; i < numberOfSongs; i++){
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song)
    }

    if(typeSong == "all"){
        songs.forEach((i) => console.log(i.name))
    }else{
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name))
    }
}
