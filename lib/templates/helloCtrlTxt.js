module.exports =
`import { Ctrl }  from "purratz";
import HelloService from "./hello.service";

Ctrl.initService(HelloService); // inject service

Ctrl.get('',
 _=> Ctrl.ctx(()=> { return 'Hello World !'})); //without service

Ctrl.get('/purr',_=> Ctrl.service().purr());
Ctrl.get('/who/:name',_=> Ctrl.service().who());
Ctrl.get('/async', _=> Ctrl.service().asyncFunc());
Ctrl.get('/status', _=> Ctrl.service().objectWithStatus());


export default Ctrl.export('');//parent route`;