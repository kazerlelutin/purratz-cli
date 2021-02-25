module.exports =
`import { Server } from 'purratz';
import HelloCtrl from './src/hello/hello.controller';

Server.autoConfig();
Server.addRoutes(HelloCtrl);
`;