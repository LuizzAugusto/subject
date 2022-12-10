//@ts-check
export function createSubject() {
    /**
     * 
     * @type {((...args: any) => void)[]}
     */
    const observers = [];

    /**
     * 
     * @param  {...any} args 
     */
    async function notifyAll(...args) {
        for (const observer of observers)
            observer(...args);
    }

    /**
     * 
     * @param {(...args: any) => void} observer 
     */
    async function subscribe(observer) { await observers.push(observer); }

    /**
     * 
     * @param {(...args: any) => void} observer 
     */
    async function unsubscribe(observer) {
        for (let x = 0; x < observers.length; x++)
            if (observer === observers[x])
                await observers.splice(x, 1); return;
    }

    return {
        notifyAll,
        subscribe,
        unsubscribe
    };
}