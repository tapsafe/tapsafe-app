// @flow

import React from 'react';
import Camera from 'react-native-camera';

export default class QR extends React.Component {
    props: {
        onmatch: Function
    }

    render() {
        return (
            <Camera
                style={{flex: 1}}
                barCodeTypes={["qr"]}
                onBarCodeRead={e => this.props.onmatch(e.data)}
            >
            </Camera>
        );
    }
}
