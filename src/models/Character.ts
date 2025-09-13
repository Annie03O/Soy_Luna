export class Character {
    constructor(public id: number, public name: string, public imgUrl: string, public actor: string, public link: string) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.actor = actor;
        this.link = link;
    }
}