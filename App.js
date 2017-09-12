// @flow

import React from 'react';
import { View } from 'react-native';
import QR from './QR';
import Fingerprint from './Fingerprint';

export default class Tapsafe extends React.Component {
    props: {}
    state: {
        step: number
    }

    constructor(props: {}) {
        super(props);
        this.state = {step: 1};
    }

    render() {
        console.log("setstate", this.state.step);
        return (
            <View style={{flex: 1}}>
                {
                    this.state.step == 1
                ?
                    <QR onmatch={e => this.setState({step: 2})} />
                :
                    <Fingerprint onmatch={e => this.setState({step: 3})} />
                }
            </View>
        );
    }
}
