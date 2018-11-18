import * as React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {StoreState} from "../types";
import {Map} from "./Map";
import {getPoints, movePoints} from "../actions";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";

function mapStateToProps({mapCenter, points}: StoreState) {
    return ({
        center: mapCenter,
        points: points,
    });
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, void, Action>) {
    return {
        fetchPoints: () => {
            return dispatch(getPoints());
        },
        movePoints: () => {
            return dispatch(movePoints());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);


