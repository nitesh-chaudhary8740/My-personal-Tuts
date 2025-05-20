
// ========= Gemini Response===================
// JavaScript -> Synchronous (Default Execution)
// JavaScript -> Single Threaded (Has one main execution thread)

// Blocking (Synchronous) vs. Non-Blocking (Asynchronous)

// 1. Blocking Code:
//    - Executed directly by the JavaScript Engine on the Call Stack.
//    - Each line must complete before the next one starts.
//    - If a task takes a long time, it "blocks" the main thread, freezing the UI.

// 2. Non-Blocking Code (Asynchronous):
//    - Initiates an operation (e.g., a timer, a network request) but doesn't wait for it to complete.
//    - The JavaScript Engine hands off these tasks to external environments:
//        - **Web APIs** (in the browser: like `setTimeout`, `Workspace`, DOM events like `click`).
//        - **Node.js APIs** (in the Node.js runtime: like file system operations, network requests).
//    - These external APIs handle the long-running task in the background.

//    - Once an asynchronous task completes in the Web/Node API:
//        - Its associated callback function is placed into one of two queues:
//            a) **MicroTask Queue (Higher Priority):** For tasks like Promise callbacks (`.then()`, `.catch()`, `.finally()`), `async/await` code, and `queueMicrotask()`.
//            b) **MacroTask Queue (or Task Queue / Callback Queue - Lower Priority):** For tasks like `setTimeout()`, `setInterval()`, I/O operations, and most UI events (like `click`, `load`).

//    - The **Event Loop** is continuously checking:
//        1. Is the **Call Stack** empty? (i.e., has all synchronous code finished running?)
//        2. If yes, it first empties the **MicroTask Queue** (processing all microtasks).
//        3. Then, it picks one task from the **MacroTask Queue** and pushes its callback onto the **Call Stack** for execution.