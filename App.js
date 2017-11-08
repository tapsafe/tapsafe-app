// @flow

import React from 'react';
import { View } from 'react-native';
import QR from './QR';
import Fingerprint from './Fingerprint';


export default class Tapsafe extends React.Component<{}, {step: number}> {
    state = {
        step: 1
    };

    render() {
        console.log("setstate", this.state.step);
        return (
            <View style={{flex: 1}}>
                {
                    this.state.step == 1
                ?
                    <QR onmatch={() => this.setState({step: 2})} />
                :
                    <Fingerprint onmatch={() => this.setState({step: 3})} />
                }
            </View>
        );
    }
}
