export class Album {
    constructor(public id: number, public imgUrl: string, public link: string, public title: string) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.link = link;
        this.title = title;
    }
}