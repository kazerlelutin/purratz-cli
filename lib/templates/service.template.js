function serviceTemplate(name) {

    return `import { Service } from "purratz";

export default class ${name}Service extends Service {

    hello() {
        return {
            status: 200,
            message: "hello !"   
        }
    }
}`
}

module.exports = serviceTemplate;