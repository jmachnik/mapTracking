import * as React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {Point, StoreState} from "../types";
import {followPoint} from "../actions";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {InfoPanel} from "./InfoPanel";

function mapStateToProps({chosenPoint}: StoreState) {
    return ({
        point: chosenPoint
    });
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, void, Action>) {
    return {
        followPoint: (point: Point) => {
            return dispatch(followPoint(point));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);


