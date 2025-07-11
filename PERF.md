# Performance Comparison

I tested the performance with the following steps:

1. Execute `pnpm run dev`
2. Wait for the server to be ready (indicated by the 'Ready' message)
3. Run curl on the root endpoint (/)

Each build was run 5 times, and the shortest time to reach "Compiled successfully" was recorded.

Test environment: Apple M1 Pro CPU

| Tool       | Build without cache | Build with cache | Dev without cache                | Dev with cache                  |
|------------|--------------------|------------------|----------------------------------|---------------------------------|
| Rspack     | 5.0s               | 4.0s             | 1.9s (2656 modules)              | 1.6s (2650 modules)             |
| Webpack    | 14.0s              | 4.0s             | 7.8s (2688 modules)              | 3.2s (2682 modules)             |
| Turbopack  | 6.3s               | -                | 2.7s                             | -                               |
