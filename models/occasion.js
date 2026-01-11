export default class occasion {
    id;
    title;
    color;
    accentColor;
    description;
    imageUrl;
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.color = data.color;
        this.accentColor = data.accentColor || data.color; 
        this.description = data.description || '';
        this.imageUrl = data.imageUrl;
    }

}