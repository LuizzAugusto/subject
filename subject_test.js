import { createSubject } from "./subject.js";

const subject = createSubject();
subject.notifyAll("error");
const obs = (txt) => { console.log(txt) };
subject.subscribe(obs);
subject.notifyAll("Hello World");
subject.unsubscribe(obs);
subject.notifyAll("error");