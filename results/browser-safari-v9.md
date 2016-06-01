
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 1ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 8ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 5ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit objects [pass: 28, fail: 0]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ init [pass: 20, fail: 0, duration: 7ms]

# Summary 

- duration: 27ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Safari 9.0.2 on OS X 10.11.2

# add-remove
## add-remove
    dripEmitter x 6,101,453 ops/sec ±4.23% (10 runs sampled)
    MiniSignals x 2,803,316 ops/sec ±20.21% (10 runs sampled)
    EventDispatcher x 2,375,420 ops/sec ±14.06% (10 runs sampled)
    EventEmitter3 x 1,292,633 ops/sec ±2.84% (10 runs sampled)
    ReactiveProperty x 1,162,361 ops/sec ±14.38% (10 runs sampled)
    EventEmitter x 648,400 ops/sec ±6.21% (10 runs sampled)
    JS-Signals x 619,520 ops/sec ±7.14% (10 runs sampled)
    dripEmitterEnhanced x 557,108 ops/sec ±5.29% (10 runs sampled)
    EventEmitter2 x 463,133 ops/sec ±7.09% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 1,354,802 ops/sec ±33.98% (10 runs sampled) *burn in*
    MiniSignals x 703,388 ops/sec ±12.90% (10 runs sampled)
    event-signal x 566,802 ops/sec ±7.67% (10 runs sampled)
    dripEmitter x 590,196 ops/sec ±15.20% (10 runs sampled)
    ReactiveProperty x 506,899 ops/sec ±6.36% (10 runs sampled)
    RXJS x 493,949 ops/sec ±5.16% (10 runs sampled)
    EventEmitter2 x 465,502 ops/sec ±11.04% (10 runs sampled)
    EventEmitter3 x 383,062 ops/sec ±7.65% (10 runs sampled)
    EventEmitter x 350,096 ops/sec ±7.01% (10 runs sampled)
    signal-lite x 342,492 ops/sec ±10.97% (10 runs sampled)
    JS-Signals x 278,428 ops/sec ±7.46% (10 runs sampled)
    dripEmitterEnhanced x 274,942 ops/sec ±12.69% (10 runs sampled)
    signal-emitter x 152,702 ops/sec ±1.53% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with bound function
## emit with bound function
    Theoretical max x 4,427,236 ops/sec ±26.77% (10 runs sampled) *burn in*
    MiniSignals x 2,640,141 ops/sec ±6.78% (10 runs sampled)
    event-signal x 2,126,112 ops/sec ±3.92% (10 runs sampled)
    dripEmitter x 1,834,898 ops/sec ±12.46% (10 runs sampled)
    RXJS x 1,591,336 ops/sec ±4.03% (10 runs sampled)
    ReactiveProperty x 1,476,948 ops/sec ±10.82% (10 runs sampled)
    EventEmitter2 x 1,458,746 ops/sec ±13.93% (10 runs sampled)
    EventEmitter3 x 1,337,719 ops/sec ±7.73% (10 runs sampled)
    signal-lite x 1,293,558 ops/sec ±5.06% (10 runs sampled)
    EventEmitter x 946,756 ops/sec ±10.71% (10 runs sampled)
    JS-Signals x 805,019 ops/sec ±3.80% (10 runs sampled)
    dripEmitterEnhanced x 850,168 ops/sec ±15.25% (10 runs sampled)
    signal-emitter x 448,437 ops/sec ±8.07% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with context
## emit with context
    Theoretical max x 4,397,861 ops/sec ±27.38% (10 runs sampled) *burn in*
    MiniSignals x 3,270,194 ops/sec ±6.99% (10 runs sampled)
    event-signal x 2,718,954 ops/sec ±4.81% (10 runs sampled)
    ReactiveProperty x 1,621,102 ops/sec ±4.29% (10 runs sampled)
    EventEmitter3 x 1,610,915 ops/sec ±7.66% (10 runs sampled)
    signal-lite x 1,466,979 ops/sec ±1.91% (10 runs sampled)
    dripEmitter x 1,620,703 ops/sec ±15.26% (10 runs sampled)
    RXJS x 1,487,066 ops/sec ±9.99% (10 runs sampled)
    EventEmitter2 x 1,442,348 ops/sec ±14.03% (10 runs sampled)
    EventEmitter x 1,017,819 ops/sec ±10.38% (10 runs sampled)
    JS-Signals x 981,151 ops/sec ±8.21% (10 runs sampled)
    dripEmitterEnhanced x 809,057 ops/sec ±10.38% (10 runs sampled)
    signal-emitter x 566,768 ops/sec ±3.56% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    Theoretical max x 1,173,289 ops/sec ±33.57% (10 runs sampled) *burn in*
    MiniSignals x 803,342 ops/sec ±2.11% (10 runs sampled)
    ReactiveProperty x 717,176 ops/sec ±7.49% (10 runs sampled)
    dripEmitter x 548,720 ops/sec ±5.45% (10 runs sampled)
    EventEmitter2 x 521,665 ops/sec ±5.49% (10 runs sampled)
    event-signal x 527,433 ops/sec ±13.17% (10 runs sampled)
    RXJS x 492,089 ops/sec ±7.96% (10 runs sampled)
    EventEmitter3 x 452,080 ops/sec ±7.88% (10 runs sampled)
    signal-lite x 441,496 ops/sec ±6.21% (10 runs sampled)
    EventEmitter x 394,242 ops/sec ±5.40% (10 runs sampled)
    JS-Signals x 394,505 ops/sec ±6.89% (10 runs sampled)
    signal-emitter x 343,662 ops/sec ±9.49% (10 runs sampled)
    dripEmitterEnhanced x 346,545 ops/sec ±15.74% (10 runs sampled)
    minivents x 279,053 ops/sec ±9.58% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many parameters
## emit many parameters
    Theoretical max x 6,924,988 ops/sec ±31.61% (10 runs sampled) *burn in*
    MiniSignals x 3,614,870 ops/sec ±5.04% (10 runs sampled)
    signal-lite x 1,286,801 ops/sec ±4.02% (10 runs sampled)
    EventEmitter2 x 1,245,437 ops/sec ±12.48% (10 runs sampled)
    EventEmitter x 1,181,459 ops/sec ±12.88% (10 runs sampled)
    EventEmitter3 x 1,116,955 ops/sec ±8.62% (10 runs sampled)
    JS-Signals x 955,860 ops/sec ±3.88% (10 runs sampled)
    minivents x 843,851 ops/sec ±4.83% (10 runs sampled)
    dripEmitterEnhanced x 812,777 ops/sec ±18.81% (10 runs sampled)
    signal-emitter x 469,704 ops/sec ±4.01% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 2,598,308 ops/sec ±36.40% (10 runs sampled) *burn in*
    MiniSignals x 1,015,353 ops/sec ±2.76% (10 runs sampled)
    event-signal x 846,243 ops/sec ±3.60% (10 runs sampled)
    ReactiveProperty x 860,911 ops/sec ±6.25% (10 runs sampled)
    EventDispatcher x 758,716 ops/sec ±5.01% (10 runs sampled)
    RXJS x 682,534 ops/sec ±6.05% (10 runs sampled)
    dripEmitter x 720,769 ops/sec ±14.32% (10 runs sampled)
    EventEmitter2 x 614,094 ops/sec ±9.20% (10 runs sampled)
    EventEmitter3 x 576,878 ops/sec ±6.56% (10 runs sampled)
    signal-lite x 504,025 ops/sec ±5.48% (10 runs sampled)
    EventEmitter x 480,495 ops/sec ±6.33% (10 runs sampled)
    JS-Signals x 384,781 ops/sec ±2.79% (10 runs sampled)
    dripEmitterEnhanced x 402,359 ops/sec ±11.47% (10 runs sampled)
    signal-emitter x 241,678 ops/sec ±3.32% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 9,950,376 ops/sec ±65.94% (10 runs sampled) *burn in*
    MiniSignals x 3,531,702 ops/sec ±2.71% (10 runs sampled)
    event-signal x 2,954,314 ops/sec ±7.47% (10 runs sampled)
    dripEmitter x 2,440,443 ops/sec ±11.23% (10 runs sampled)
    RXJS x 2,227,537 ops/sec ±3.31% (10 runs sampled)
    ReactiveProperty x 2,078,538 ops/sec ±6.69% (10 runs sampled)
    EventEmitter2 x 2,007,644 ops/sec ±9.96% (10 runs sampled)
    EventEmitter3 x 1,769,042 ops/sec ±7.85% (10 runs sampled)
    signal-lite x 1,688,595 ops/sec ±7.39% (10 runs sampled)
    observable x 1,499,970 ops/sec ±3.23% (10 runs sampled)
    EventEmitter x 1,651,527 ops/sec ±15.45% (10 runs sampled)
    observ x 1,459,022 ops/sec ±2.60% (10 runs sampled)
    d3-dispatch x 1,449,760 ops/sec ±7.68% (10 runs sampled)
    JS-Signals x 1,229,729 ops/sec ±3.83% (10 runs sampled)
    minivents x 1,192,526 ops/sec ±8.16% (10 runs sampled)
    dripEmitterEnhanced x 1,189,905 ops/sec ±11.66% (10 runs sampled)
    signal-emitter x 754,750 ops/sec ±4.24% (10 runs sampled)
    namespace-emitter x 689,546 ops/sec ±6.88% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit
## emit
    Theoretical max x 2,726,236 ops/sec ±29.78% (10 runs sampled) *burn in*
    MiniSignals x 641,347 ops/sec ±19.92% (10 runs sampled)
    EventEmitter2 x 501,888 ops/sec ±13.28% (10 runs sampled)
    signal-lite x 458,926 ops/sec ±4.33% (10 runs sampled)
    EventEmitter3 x 432,923 ops/sec ±7.23% (10 runs sampled)
    EventEmitter x 386,519 ops/sec ±9.27% (10 runs sampled)
    JS-Signals x 313,478 ops/sec ±5.06% (10 runs sampled)
    dripEmitterEnhanced x 302,646 ops/sec ±11.95% (10 runs sampled)
    signal-emitter x 172,892 ops/sec ±3.90% (10 runs sampled)
*Fastest is __MiniSignals, EventEmitter2__*

# init
## init
    EventEmitter3 x 78,786,813 ops/sec ±8.66% (10 runs sampled)
    Theoretical max x 60,288,715 ops/sec ±3.48% (10 runs sampled) *burn in*
    EventDispatcher x 40,591,975 ops/sec ±33.91% (10 runs sampled)
    DripEmitter x 23,695,595 ops/sec ±4.12% (10 runs sampled)
    MiniSignals x 34,669,958 ops/sec ±52.35% (10 runs sampled)
    JS-Signals x 19,481,634 ops/sec ±1.95% (10 runs sampled)
    EventEmitter2 x 18,637,698 ops/sec ±3.85% (10 runs sampled)
    EventEmitter x 20,010,172 ops/sec ±33.49% (10 runs sampled)
    DripEmitterEnhanced x 10,903,042 ops/sec ±20.42% (10 runs sampled)
    ReactiveProperty x 5,417,752 ops/sec ±16.87% (10 runs sampled)
*Fastest is __EventEmitter3__*
