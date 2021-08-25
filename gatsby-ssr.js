import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Layout from './src/components/Layout/Layout';

export function wrapRootElement({element, props}) {
    return <Provider store={store}>{element}</Provider>
}

export function wrapPageElement({element, props}) {
    return <Layout {...props}>{element}</Layout>;
}
