import * as constants from '../constants';
import {Action, Dispatch} from "redux";
import {Point} from "../types";

export interface MovePoints extends Action {
    type: constants.MOVE_POINTS;
}

export interface FetchPoints extends Action {
    type: constants.FETCH_POINTS;
    payload: Point[];
}

export interface ChoosePoint extends Action {
    type: constants.CHOOSE_POINT;
    payload: Point;
}

export interface FollowPoint extends Action {
    type: constants.FOLLOW_POINT;
    payload: Point;
}
export type MovePointsAction = MovePoints;

export function movePoints(): MovePointsAction {
    return {
        type: constants.MOVE_POINTS
    }
}

export function fetchPoints(points: any): FetchPoints {
    return{
        type: constants.FETCH_POINTS,
        payload: points
    }
}

export function getPoints() {
    return function (dispatch: Dispatch<FetchPoints>) {
        import('../assets/Points.json').then(json => {
            dispatch({type: constants.FETCH_POINTS, payload: json.points})
        });
    }
}

export function movePointsRandomly() {
    return function (dispatch: Dispatch<MovePoints>) {
        dispatch({type: constants.MOVE_POINTS})
    }
}

export function choosePoint(point: Point){
    return function(dispatch: Dispatch<ChoosePoint>){
        dispatch({type: constants.CHOOSE_POINT, payload: point})
    }
}

export function followPoint(point: Point) {
    return function(dispatch: Dispatch<FollowPoint>){
        dispatch({type: constants.FOLLOW_POINT, payload: point})
    }
}
