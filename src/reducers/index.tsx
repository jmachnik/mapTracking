import {Point, StoreState} from "../types";
import {CHOOSE_POINT, FETCH_POINTS, FOLLOW_POINT, MOVE_POINTS} from "../constants";


function getNewIncrementDecrementValue() {
    return (Math.random() * (0.005 - 0.2) + 0.01);
}

function getNewPointsPosition(points: Point[]) {
    return points.map(point => {
        return {
            lat: point.lat + getNewIncrementDecrementValue(),
            lng: point.lng + getNewIncrementDecrementValue(),
            name: point.name
        }
    });
}

export function defaultState(): StoreState {
    return {
        points: [],
        mapCenter: {
            lat: 59.35,
            lng: 30.33
        }
    };
}

export function movePoints(state: StoreState = defaultState(), action: any): StoreState {
    switch (action.type) {
        case MOVE_POINTS:
            return {...state, points: getNewPointsPosition(state.points)};
        case FETCH_POINTS:
            return {...state, points: action.payload};
        case CHOOSE_POINT:
            return {...state, chosenPoint: action.payload}
        case FOLLOW_POINT:
            return {...state, mapCenter: state.points.find(p => p.name === action.payload.name)}
    }
    return state;
}
