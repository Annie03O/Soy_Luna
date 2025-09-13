export class RankItem {
    id: number;
    label: string;

    constructor(label: string) {
        this.id = Date.now();
        this.label = label;
    }
}