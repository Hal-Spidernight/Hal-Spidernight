# Hal

```sh
npx hal-spidernight
```

ターミナルから一発で表示できる Hal のプロフィールカードです。

## ローカルで試す

```sh
bun install
npx .          # もしくは: node bin/cli.js
```

## 初回 publish

```sh
npm login
npm publish    # publishConfig.access = "public" が設定済み
```

publish 後の動作確認:

```sh
npx hal-spidernight@latest
```

## リリース (semver bump + tag + publish + push を自動化)

`npm version` ベースで bump → commit → git tag → npm publish → git push を1コマンドで実行します。
作業ツリーがクリーンな状態 (commit 済み) で実行してください。

```sh
npm run release:patch   # 1.0.0 → 1.0.1   (bug fix)
npm run release:minor   # 1.0.0 → 1.1.0   (機能追加・後方互換)
npm run release:major   # 1.0.0 → 2.0.0   (破壊的変更)
```

実行されるフロー:

1. `npm version <bump>` が `package.json` を更新し、`chore(release): vX.Y.Z` のコミットと `vX.Y.Z` タグを作成
2. `postversion` フックが `npm publish` → `git push --follow-tags` を順に実行
3. publish が失敗した場合は git push されないので、修正して `npm publish && git push --follow-tags` を再実行

## カスタマイズ

表示内容は `bin/cli.js` の `lines` 配列を編集するだけで変えられます。
色は [chalk](https://github.com/chalk/chalk)、枠は [boxen](https://github.com/sindresorhus/boxen) を使用しています。
