class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.id = 0;
    }

    get likes(){
        if(this._likes.length == 0){
            return `${this.title} has 0 likes`
        }

        if(this._likes.length == 1){
            return `${this._likes[0]} likes this story!`
        }
        
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        
    }

    like(username){
        if(this._likes.includes(username)){
            throw new Error(`You can't like the same story twice!`)
        }

        if(username === this.creator){
            throw new Error("You can't like your own story!")
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username){
        if(!this._likes.includes(username)){
            throw new Error("You can't dislike this story!")
        }

        for(let i = 0; i < this._likes.length; i++){
            if(this._likes[i] == username){
                this._likes.splice(i, 1)
                return `${username} disliked ${this.title}`
            }
        }
    }

    comment(username, content, id){
        let flagContains = false
        for(let el of this._comments){
            if(el.Id == id){
                flagContains = true;
                break;
            }
        }
        if(id === undefined || !flagContains){
            this.id++;
            this._comments.push({Id: this.id, Username: username, Content: content, Replies: []})
            return `${username} commented on ${this.title}`
        }else{
            for(let el of this._comments){
                if(el.Id == id){
                    let replyID = `${el.Id}.${el.Replies.length + 1}`
                    el.Replies.push({Id: replyID, Username: username, Content: content});
                    return "You replied successfully"
                }
            }
        }
    }

    toString(sortingType){
        if(sortingType == "desc"){
            this._comments.sort((a, b) => {
                return b.Id - a.Id
            })
            this._comments.forEach(el =>{
                el.Replies.sort((a,b) =>{
                    return b.Id - a.Id
                })
            })
        }else if(sortingType == "username"){
            this._comments.sort((a, b) => {
                return a.Username.localeCompare(b.Username)
            })
            this._comments.forEach(el =>{
                el.Replies.sort((a,b) =>{
                    return a.Username.localeCompare(b.Username)
                })
            })
        }


        let str = ""
        str += `Title: ${this.title}\n`
        str += `Creator: ${this.creator}\n`
        str += `Likes: ${this._likes.length}\n`
        str += `Comments:`

        for(let el of this._comments){
            str += `\n-- ${el.Id}. ${el.Username}: ${el.Content}`
            if(el.Replies){
                for(let elem of el.Replies){
                    str += `\n--- ${elem.Id}. ${elem.Username}: ${elem.Content}`
                }
            }
        }
        return str;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));



