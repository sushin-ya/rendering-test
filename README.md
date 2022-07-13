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
