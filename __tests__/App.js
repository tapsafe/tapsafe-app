import 'react-native';
import React from 'react';
import TapSafe from '../App.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-camera', () => 'Camera');
jest.mock('react-native-fingerprint', () => 'Fingerprint');

it('renders correctly', () => {
    const tree = renderer.create(
        <TapSafe />
    );
});
