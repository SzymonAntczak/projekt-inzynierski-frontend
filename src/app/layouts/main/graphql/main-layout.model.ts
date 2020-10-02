export interface GqlRestaurantListItem {
    _id: string;
    name: string;
    owner: string;
}

export interface GqlRestaurantList {
    restaurants: GqlRestaurantListItem[];
}