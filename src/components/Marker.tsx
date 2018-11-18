import * as React from "react";
import './Marker.css';
import {Point, StoreState} from "../types";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import {movePoints} from "../actions";
import {connect} from "react-redux";

// @ts-ignore
export interface MarkerProps {
    lat: number,
    lng: number,
    name?: string,
}

export class Marker extends React.Component<MarkerProps, {}> {
    render() {
        return (
            <div className={'Marker'}
                // @ts-ignore
                 onClick={() => this.props.choosePoint({
                     lat: this.props.lat,
                     lng: this.props.lng,
                     name: this.props.name
                 })}>
                <span> {this.props.name}</span>
            </div>
        )
    }
}

