# Changelog

## 0.1.0-alpha.3 (2025-04-05)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/GitbookIO/lightswitch/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#33](https://github.com/GitbookIO/lightswitch/issues/33)) ([27ce482](https://github.com/GitbookIO/lightswitch/commit/27ce4828b4ab6bf58197529421dd8416345fb8e1))
* **client:** accept RFC6838 JSON content types ([#34](https://github.com/GitbookIO/lightswitch/issues/34)) ([4d8f4ce](https://github.com/GitbookIO/lightswitch/commit/4d8f4ce388c51a2da29eb00f511fa4a99c96d71d))
* **client:** improve logging ([#20](https://github.com/GitbookIO/lightswitch/issues/20)) ([4818115](https://github.com/GitbookIO/lightswitch/commit/4818115c707adaa7ef4afab2913e4082a263b4c3))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#43](https://github.com/GitbookIO/lightswitch/issues/43)) ([a39fa23](https://github.com/GitbookIO/lightswitch/commit/a39fa232e01c19caeb939670672de770c87a072e))
* **client:** fix export map for index exports, accept BunFile ([#18](https://github.com/GitbookIO/lightswitch/issues/18)) ([7d38d98](https://github.com/GitbookIO/lightswitch/commit/7d38d985253dcd56cf4f017f00af40d3ecdb843d))
* **client:** fix TypeError with undefined File ([#28](https://github.com/GitbookIO/lightswitch/issues/28)) ([2bc2cb6](https://github.com/GitbookIO/lightswitch/commit/2bc2cb6443f8039fc4fd642261a8b861c0aeb5d6))
* **client:** send `X-Stainless-Timeout` in seconds ([#41](https://github.com/GitbookIO/lightswitch/issues/41)) ([a050b32](https://github.com/GitbookIO/lightswitch/commit/a050b3221fe97dcade80d049133dc2c0be8ee2af))
* **internal:** add mts file + crypto shim types ([#36](https://github.com/GitbookIO/lightswitch/issues/36)) ([9861197](https://github.com/GitbookIO/lightswitch/commit/98611971e42774294141e3ba8febda9da5f521b3))
* **internal:** clean up undefined File test ([#29](https://github.com/GitbookIO/lightswitch/issues/29)) ([313a6f7](https://github.com/GitbookIO/lightswitch/commit/313a6f7ddc4207aba3979d500d35c0ff4ece7169))
* **internal:** return in castToError instead of throwing ([#22](https://github.com/GitbookIO/lightswitch/issues/22)) ([50b5b64](https://github.com/GitbookIO/lightswitch/commit/50b5b64351ff6a4de6210d161a9889a72becf680))
* **mcp:** remove unused tools.ts ([#44](https://github.com/GitbookIO/lightswitch/issues/44)) ([c246dec](https://github.com/GitbookIO/lightswitch/commit/c246decfe0432ff0d3d985049021826252c8d83d))
* **tests:** manually reset node:buffer File ([#30](https://github.com/GitbookIO/lightswitch/issues/30)) ([8211340](https://github.com/GitbookIO/lightswitch/commit/82113405c05cefebce29191e8b810c287c763a82))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#40](https://github.com/GitbookIO/lightswitch/issues/40)) ([7c40d45](https://github.com/GitbookIO/lightswitch/commit/7c40d456f686691f992f70fe6722b4d4e17d3e67))
* **client:** only accept standard types for file uploads ([#25](https://github.com/GitbookIO/lightswitch/issues/25)) ([c5e8df8](https://github.com/GitbookIO/lightswitch/commit/c5e8df8ef19ba385e5e286daa12a2260c9730872))
* **docs:** improve docs for withResponse/asResponse ([#32](https://github.com/GitbookIO/lightswitch/issues/32)) ([71c7c33](https://github.com/GitbookIO/lightswitch/commit/71c7c3331af782b307b21dd18070992ce90b9bda))
* **exports:** cleaner resource index imports ([#38](https://github.com/GitbookIO/lightswitch/issues/38)) ([989d3b5](https://github.com/GitbookIO/lightswitch/commit/989d3b5284553723c34188c229f2a5cfbfcc3bcd))
* **exports:** stop using path fallbacks ([#39](https://github.com/GitbookIO/lightswitch/issues/39)) ([353feba](https://github.com/GitbookIO/lightswitch/commit/353feba64115b93299b08d84c50319e140b48f73))
* **internal:** add aliases for Record and Array ([#42](https://github.com/GitbookIO/lightswitch/issues/42)) ([2e1bebb](https://github.com/GitbookIO/lightswitch/commit/2e1bebbe297c4f43f8b565d704dc41eb0db32964))
* **internal:** codegen related update ([#16](https://github.com/GitbookIO/lightswitch/issues/16)) ([a0b504c](https://github.com/GitbookIO/lightswitch/commit/a0b504c5bf3acdd499eb67b2d9451aa9b201c332))
* **internal:** constrain synckit dev dependency ([#27](https://github.com/GitbookIO/lightswitch/issues/27)) ([c5d034a](https://github.com/GitbookIO/lightswitch/commit/c5d034ad65a1715e4dd81e2023ce88fe4f2aa4f1))
* **internal:** fix devcontainers setup ([#21](https://github.com/GitbookIO/lightswitch/issues/21)) ([bdccc24](https://github.com/GitbookIO/lightswitch/commit/bdccc2455f2e87cd3780873616fa8632b7232d38))
* **internal:** fix tests failing on node v18 ([#26](https://github.com/GitbookIO/lightswitch/issues/26)) ([ca13c87](https://github.com/GitbookIO/lightswitch/commit/ca13c873f7f6377df94f27a6be5b984fee98d38b))
* **internal:** fix tests not always being type checked ([#19](https://github.com/GitbookIO/lightswitch/issues/19)) ([7f7be64](https://github.com/GitbookIO/lightswitch/commit/7f7be648402d60169dc2ddf3f8c9aabe14f6f5ca))
* **internal:** minor client file refactoring ([#37](https://github.com/GitbookIO/lightswitch/issues/37)) ([9a5740b](https://github.com/GitbookIO/lightswitch/commit/9a5740b951f4977df46d0386d9b52c7d21a0d57b))
* **internal:** remove extra empty newlines ([#35](https://github.com/GitbookIO/lightswitch/issues/35)) ([69a769b](https://github.com/GitbookIO/lightswitch/commit/69a769b12e98f13e45adbe9e5a8cf33023de15e4))
* **internal:** remove unnecessary todo ([#23](https://github.com/GitbookIO/lightswitch/issues/23)) ([43587fa](https://github.com/GitbookIO/lightswitch/commit/43587fa0494a0fb6834c2273e2cc138f03c07eb0))
* **internal:** remove unused method ([#13](https://github.com/GitbookIO/lightswitch/issues/13)) ([676a868](https://github.com/GitbookIO/lightswitch/commit/676a868abeeccf928a50e1b7d850f2892857e298))
* **internal:** update eslint config ([#17](https://github.com/GitbookIO/lightswitch/issues/17)) ([c41e942](https://github.com/GitbookIO/lightswitch/commit/c41e942a9ee9400fba7b22dde2d2e2fc50eec6cb))
* **types:** improved go to definition on fetchOptions ([#31](https://github.com/GitbookIO/lightswitch/issues/31)) ([4d59d92](https://github.com/GitbookIO/lightswitch/commit/4d59d92b7c7fa7999bab233282c0da9c98396870))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#24](https://github.com/GitbookIO/lightswitch/issues/24)) ([8e0ab12](https://github.com/GitbookIO/lightswitch/commit/8e0ab1247afb8e9c44340ff9b3f507d5793a8a87))

## 0.1.0-alpha.2 (2025-02-06)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/GitbookIO/lightswitch/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### ⚠ BREAKING CHANGES

* **client:** uri encode path parameters ([#11](https://github.com/GitbookIO/lightswitch/issues/11))

### Bug Fixes

* **client:** uri encode path parameters ([#11](https://github.com/GitbookIO/lightswitch/issues/11)) ([7c32167](https://github.com/GitbookIO/lightswitch/commit/7c32167b921124d79096039947371781eb74bf0e))

## 0.1.0-alpha.1 (2025-02-05)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/GitbookIO/lightswitch/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([#5](https://github.com/GitbookIO/lightswitch/issues/5)) ([5a079e7](https://github.com/GitbookIO/lightswitch/commit/5a079e7ed3650a5a32741bfb9fe070f4f7db1341))
* **api:** update via SDK Studio ([#6](https://github.com/GitbookIO/lightswitch/issues/6)) ([c17a038](https://github.com/GitbookIO/lightswitch/commit/c17a038ebbd38cba6b3eb3f4335dd0a117c0dde8))
* **api:** update via SDK Studio ([#7](https://github.com/GitbookIO/lightswitch/issues/7)) ([7fcb271](https://github.com/GitbookIO/lightswitch/commit/7fcb2717d397559237df277732d1249a09d08b5f))
* **api:** update via SDK Studio ([#8](https://github.com/GitbookIO/lightswitch/issues/8)) ([f1cf215](https://github.com/GitbookIO/lightswitch/commit/f1cf21575e46ad208bbcaa17e0f038962b2d5254))


### Chores

* go live ([#1](https://github.com/GitbookIO/lightswitch/issues/1)) ([ee6938b](https://github.com/GitbookIO/lightswitch/commit/ee6938b2a0bd79748e6b5d9ab2ac62c27058512f))
* sync repo ([a99d060](https://github.com/GitbookIO/lightswitch/commit/a99d060d74d6f6effc3124f481b5430062d448a8))
* update SDK settings ([#3](https://github.com/GitbookIO/lightswitch/issues/3)) ([5033f0f](https://github.com/GitbookIO/lightswitch/commit/5033f0f53999f97430546d4dbf481258538d3bba))
