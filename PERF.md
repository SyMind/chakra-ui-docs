# Performance Comparison

I tested the build performance with the following steps:

1. Execute `pnpm run build`
2. Wait for the 'Compiled successfully' message

I tested the dev performance with the following steps:

1. Execute `pnpm run dev`
2. Wait for the server to be ready (indicated by the 'Ready' message)
3. Run curl on the root endpoint (/)

Each build was run 5 times, and the shortest time to reach "Compiled successfully" was recorded.

Test environment: Apple M1 Pro CPU

| Tool        | Build without cache | Build with cache | Dev without cache               | Dev with cache |
|-------------|---------------------|------------------|---------------------------------|----------------|
| Rspack      | 3.8s                | 2.8s             | 1.7s                            | 3ms            |
| Webpack     | 14.0s               | 4.0s             | 7.8s                            | 3.2s           |
