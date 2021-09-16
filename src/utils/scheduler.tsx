export class Scheduler {
    private targetRate: number = 500;
    private lastTick: number;
    // private timeoutHandler: NodeJS.Timeout;
    private running: boolean = false;

    constructor(){
        this.lastTick = Date.now();
    }
 
    start(tick:(deltaTime:number)=>void): void {
        if (this.running) {
            return;
        }
        this.lastTick = Date.now(); //note - switch to performance.now if necessary
        this.running = true;
 
        let repeater = () => {
            if (!this.running) {
                return;
            }
            let timeDelta:number = Date.now() - this.lastTick;
            tick(timeDelta); 
            this.lastTick = Date.now();
            setTimeout(repeater.bind(this), this.targetRate);
        };
        setTimeout(repeater.bind(this), this.targetRate);
 
    };
    stop(): void {
        this.running = false;
    };
 
    /**
     * Changes the tick rate after the next tick
     * @param rate New rate in milliseconds per tick
     */
    setTargetRate(rate: number): void {
        this.targetRate = rate;
    };
}