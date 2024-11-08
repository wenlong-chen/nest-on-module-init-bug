Execute `npm run start` to reproduce the bug.

You are expected to get the following log:
```
 % npm run start

> nest-on-module-init-bug@0.0.1 start
> nest start

[Nest] 77208  - 11/08/2024, 12:24:37 PM     LOG [NestFactory] Starting Nest application...
[Nest] 77208  - 11/08/2024, 12:24:37 PM     LOG [InstanceLoader] AppModule dependencies initialized +4ms
[Nest] 77208  - 11/08/2024, 12:24:37 PM     LOG [InstanceLoader] BModule dependencies initialized +0ms
[Nest] 77208  - 11/08/2024, 12:24:37 PM     LOG [InstanceLoader] AModule dependencies initialized +0ms
/nest-on-module-init-bug/src/app.ts:25
      throw new Error('BService not initialized before AService');
            ^


Error: BService not initialized before AService
    at AService.onModuleInit (/nest-on-module-init-bug/src/app.ts:25:13)
    at MapIterator.iteratee (/nest-on-module-init-bug/node_modules/@nestjs/core/hooks/on-module-init.hook.js:22:43)
    at MapIterator.next (/nest-on-module-init-bug/node_modules/iterare/src/map.ts:9:39)
    at IteratorWithOperators.next (/nest-on-module-init-bug/node_modules/iterare/src/iterate.ts:19:28)
    at Function.from (<anonymous>)
    at IteratorWithOperators.toArray (/nest-on-module-init-bug/node_modules/iterare/src/iterate.ts:227:22)
    at callOperator (/nest-on-module-init-bug/node_modules/@nestjs/core/hooks/on-module-init.hook.js:23:10)
    at callModuleInitHook (/nest-on-module-init-bug/node_modules/@nestjs/core/hooks/on-module-init.hook.js:43:23)
    at NestApplication.callInitHook (/nest-on-module-init-bug/node_modules/@nestjs/core/nest-application-context.js:223:50)
    at NestApplication.init (/nest-on-module-init-bug/node_modules/@nestjs/core/nest-application.js:100:20)


```