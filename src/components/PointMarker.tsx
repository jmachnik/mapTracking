import * as React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {Point, StoreState} from "../types";
import {choosePoint} from "../actions";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {Marker} from "./Marker";

export interface PointMarkerProps {
    lat: number,
    lng: number,
    name?: string,
}

export function mapStateToProps(store: StoreState, ownProps: PointMarkerProps) {
    return {}
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, void, Action>) {
    return {
        choosePoint: (point: Point) => {
            return dispatch(choosePoint(point));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps,)(Marker);


