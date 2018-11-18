import * as React from "react";
// @ts-ignore
import GoogleMapReact from "google-map-react";
import {Point} from "../types";
import PointMarker from "./PointMarker";

export interface MapProps {
    center: Object,
    points: Point[],
    fetchPoints: () => void;
    movePoints: () => void;
}

export interface MapState {
    timer: any,

}

export class Map extends React.Component<MapProps, MapState> {

    componentDidMount() {
        this.props.fetchPoints();
        this.setState({timer: setInterval(() => this.props.movePoints(), 1000)})
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        return (
            <GoogleMapReact
                defaultCenter={{
                    lat: 59.35,
                    lng: 30.33
                }}
                center={this.props.center}
                defaultZoom={5}
                style={{height: '300px'}}>
                {this.props.points.map(point => {
                    return <PointMarker lat={point.lat}
                                        lng={point.lng}
                                        name={point.name}
                                        key={point.name}
                    />
                })}
            </GoogleMapReact>
        )
    }
}
