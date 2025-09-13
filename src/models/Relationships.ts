export class Relationship {
    constructor(public id: number, public characters: string, public imgUrl: string, public link: string) {
        this.id = id,
        this.characters = characters;
        this.imgUrl = imgUrl;
        this.link = link;
    }
}