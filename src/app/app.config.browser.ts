import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { PeerServiceBrowserProvider } from './peer.service.browser';

const browserConfig: ApplicationConfig = {
  providers: [PeerServiceBrowserProvider],
};

export const config = mergeApplicationConfig(appConfig, browserConfig);
