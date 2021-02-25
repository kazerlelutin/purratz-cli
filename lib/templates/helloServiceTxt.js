module.exports =
    `import { Service } from "purratz";

export default class HelloService extends Service {

    purr() {
    return "RonRonRonRonRonRon..."
    }

    who(){
        const name  = this.params.name
        return 'Hello ' + name + ' !';
    }

    async asyncFunc(){
        const message =  new Promise(function(resolve, reject) {
            resolve("Sorry, i'm late !");
        });

        return this.withPromise(message)
    }

    objectWithStatus(){
        return {
            status: 403,
            message: "Hello world !",
        }
    }
}`;