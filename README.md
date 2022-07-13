## 内部リンクで遷移したとき、何が起こっているか？

- [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

> When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps
> getServerSideProps returns JSON which will be used to render the page.

> next/link または next/router を介したクライアント側のページ遷移でこのページをリクエストすると、Next.js は getServerSideProps を実行するサーバーに API リクエストを送信します
> getServerSideProps は、ページのレンダリングに使用される JSON を返します

- [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)

> If getServerSideProps or getInitialProps is present in a page, Next.js will switch to render the page on-demand, per-request (meaning Server-Side Rendering).

> getServerSideProps または getInitialProps がページに存在する場合、Next.js は、要求ごとにオンデマンドでページをレンダリングするように切り替わります（サーバー側のレンダリングを意味します）。

↓ の文章は何を言っているのかよくわからない

> During prerendering, the router's query object will be empty since we do not have query information to provide during this phase. After hydration, Next.js will trigger an update to your application to provide the route parameters in the query object.

> 事前レンダリング中、このフェーズで提供するクエリ情報がないため、ルーターのクエリオブジェクトは空になります。ハイドレーション後、Next.js はアプリケーションの更新をトリガーして、クエリオブジェクトにルートパラメーターを提供します。

SSG 判定されると html が生成され、SSR 判定されると js が生成される

初回のリクエストが SSG の画面だと、html が返る
初回のリクエストが SSR の画面だと、やっぱり html が返る

初回以外のリクエストには、基本的に js ファイル（仮想 DOM のオブジェクトが入ったもの）が返る
`.next/static/chunks/pages` or `.next/server/chunks/pages`

さらに SSR だと、props の json も一緒に返る

- SSR の場合

<img width="426" alt="スクリーンショット 2022-07-13 22 40 11" src="https://user-images.githubusercontent.com/69495387/178747690-c3b5758b-e8ef-4e99-bbb5-08060f78410c.png">

- SSG の場合

<img width="426" alt="スクリーンショット 2022-07-13 22 40 19" src="https://user-images.githubusercontent.com/69495387/178747697-8afcf9a9-f6a3-44a2-8fd6-98e2e2a11a58.png">

Create React App との違いは、もととなる空の div タグを持った index.html がない...
仮想 DOM はどうやって実体を持つ？？？
