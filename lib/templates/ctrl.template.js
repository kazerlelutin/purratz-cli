function ctrlTemplate(name, service) {

    return service ? `import { ctrl }  from "purratz";
import ${name}Service from "./${name}.service";
const Ctrl = new ctrl();
Ctrl.initService(${name}Service);

Ctrl.get('/', _=> Ctrl.service().hello());

export default Ctrl.export('/${name}');`:
        `import { Ctrl }  from "purratz";

Ctrl.get('',_=> Ctrl.ctx(()=> { return 'Hello World !'}));

export default Ctrl.export('/${name}');`
}

module.exports = ctrlTemplate;