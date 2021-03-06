// @flow

import React from 'react';
import { Text, View, Vibration, Image } from 'react-native';
import RNFingerprint from 'react-native-fingerprint';

export default class Fingerprint extends React.Component<{onmatch: Function}, {msg: string, err: boolean}> {
    state = {
        msg: "You need to use Fingerprint unlocking to use this App.",
        err: false
    };

    onFingerprint(result: boolean) {
        if(result) {
            this.props.onmatch(result);
        } else {
            this.setState({msg: "Please try again.", err: true});
            setTimeout(() => RNFingerprint.authenticate().then(result => this.onFingerprint(result)), 500);
        }
    }


    componentDidMount() {
        RNFingerprint.hasEnrolledFingerprints().then(() => {
            this.setState({msg: "Please touch Fingerprint reader"});
            RNFingerprint.authenticate().then(result => this.onFingerprint(result));
            Vibration.vibrate(100);
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./ic_fp_40px.png')}  style={{width: 40, height: 40, marginBottom: 10}} />
                <Text style={{color: this.state.err ? 'red' : 'black'}}>{this.state.msg}</Text>
            </View>
        );
    }
}
