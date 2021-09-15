function solve(str){
    return str.match(/\w+/g).join(", ").toUpperCase()
}
solve('Hi, how are you?');
solve('hello')
