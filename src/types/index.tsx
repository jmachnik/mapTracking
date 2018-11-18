export interface Point {
    lat: number,
    lng: number,
    name?: string,
}
export interface StoreState {
    points: Point[];
    chosenPoint?: Point,
    mapCenter: Point,
}
