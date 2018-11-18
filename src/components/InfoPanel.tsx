import * as React from "react";
// @ts-ignore
import {Point} from "../types";
import './InfoPanel.css';

export interface InfoProps {
    point?: Point,
    followPoint: (point: Point) => void;
}

export interface InfoState {
    timer: any,
}


export class InfoPanel extends React.Component<InfoProps, InfoState> {
    constructor(props: InfoProps) {
        super(props);
        this.handleFollowChange = this.handleFollowChange.bind(this);
    }

    handleFollowChange(event: any) {
        if (event.target.checked) {
            this.setState({timer: setInterval(() => this.props.followPoint(this.props.point), 500)})
        } else {
            clearInterval(this.state.timer)
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    private getInfo() {
        if (this.props.point && this.props.point.name) {
            return `${this.props.point.name} Lat: ${this.props.point.lat} Lng: ${this.props.point.lng}`;
        } else {
            return 'Point not chosen!'
        }
    }

    private getCheckbox() {
        if (this.props.point && this.props.point.name) {
            return <label htmlFor="isFollow">
                Follow
                <input
                    name="isFollow"
                    type="checkbox"
                    onChange={this.handleFollowChange}/>
            </label>
        }
    }

    render() {
        return (
            <div className={'LeftPanel'}>
                {this.getInfo()}
                {this.getCheckbox()}

            </div>
        )
    }
}
