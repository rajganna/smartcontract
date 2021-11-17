import 'bpk-stylesheets/base';
import 'bpk-stylesheets/base.css';
import 'bpk-stylesheets/font';
import 'bpk-stylesheets/font.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
    ChainId,
    DAppProvider,
} from "@usedapp/core";

import App from "./components/App";
import AppErrorBoundary from "./AppErrorBoundary";
const config = {
    readOnlyChainId: ChainId.Rinkeby,
    readOnlyUrls: {
        [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/7596fc2db67e49f2b7c3c70bd6f06dd2',
    },
};


ReactDOM.render(
    <DAppProvider config={config}>
        <BrowserRouter>
                <AppErrorBoundary>
                   <App />
                </AppErrorBoundary>
        </BrowserRouter>
    </DAppProvider>,
    document.getElementById('root'));
