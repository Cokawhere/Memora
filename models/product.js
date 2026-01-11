export default class product {
    id;
    occasionIds = [];
    title;
    creator = 'Unknown Creator';
    priceRange = 'غير محدد';
    imageUrl;
    isPremium = false;
    isCustomizable = false;
    difficulty = 'simple';

    constructor(data) {
        this.id = data.id;
        this.occasionIds = data.occasionIds || this.occasionIds;
        this.title = data.title;
        this.creator = data.creator ?? this.creator;
        this.priceRange = data.priceRange ?? this.priceRange;
        this.imageUrl = data.imageUrl;
        this.isPremium = !!data.isPremium;
        this.isCustomizable = !!data.isCustomizable;
        this.difficulty = data.difficulty ?? this.difficulty;
    }

}