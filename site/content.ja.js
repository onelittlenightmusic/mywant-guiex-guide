/*
 * The mywant-guiex guide in Japanese. content.en.js is the same guide in
 * English: both keep the same topic ids, icons and colours, so a link
 * (#canvas) opens the same topic in either language. `ui` is the page's own
 * wording; `sections` are the rows of cards, each topic one card and the
 * sidebar page it opens. `body` is HTML — shot() (site.js) writes a screenshot
 * from site/img, a `.code` block's "#" lines are drawn as comments, and every
 * block gets a copy button (app.js).
 */
window.GUIDE = window.GUIDE || {};
window.GUIDE.ja = {
  ui: {
    htmlLang: 'ja',
    langName: '日本語',
    docTitle: 'mywant-guiex ガイド',
    subtitle: 'やさしいガイド',
    topics: n => `${n} topics`,
    heroLead: 'Want を盤面に並べて、キャラクターで歩き、ロボットと話す。MyWant を「遊べる」画面にする拡張です。',
    heroSub: 'mywant-gui に足して使います。カードを押すと、右側にくわしい説明が開きます。',
    menu: 'メニュー',
    sections: 'Sections',
    startHere: 'Start here',
    theme: '明るさの切り替え',
    lang: 'Switch to English',
    close: '閉じる',
    copy: 'コピー',
    prev: '前へ',
    grid: '一覧',
    next: '次へ',
    guides: 'ガイド',
    guidesNote: 'MyWant のほかのガイド',
  },
  sections: [
    {
      id: 'start',
      title: 'はじめる',
      note: '上から順に読めば、キャンバスで遊べるようになります',
      icon: 'rocket',
      topics: [
        {
          id: 'what',
          step: 'Step 1',
          title: 'mywant-guiex ってなに？',
          sub: 'mywant-gui を、遊べる画面にする拡張',
          icon: 'sparkles',
          color: '#0891b2',
          body: `
<p><strong>mywant-guiex</strong> は、MyWant の画面 <a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=ja">mywant-gui</a> に足して使う拡張です。
カードの一覧で「管理する」画面に、盤面の上で「遊ぶ」ための仕掛けが加わります。</p>
${shot('canvas-me.jpg', 'キャンバス。Want がタイルになって並び、自分のキャラクター（ここではキツネの Aki）がその上に立ちます')}
<h4>できること</h4>
<ul>
  <li><strong>キャンバス</strong>：Want を盤面のタイルとして好きな場所に並べる</li>
  <li><strong>盤面を歩く</strong>：自分のキャラクターで歩き回り、立ったタイルを開いたり動かしたりする。ゲームパッドにぴったり</li>
  <li><strong>ロボット</strong>：いつもそばにいる AI の相棒に話しかける</li>
  <li><strong>Web Want</strong>：いつものサイトを取り込んで、Want にする</li>
  <li><strong>ブラウザの別のタブへ</strong>：自分のキャラクターが、ほかのサイトの上にも出かけていく</li>
  <li><strong>型（Kata）</strong>：Want の組み合わせ方を、道場の帯のように身につけていく</li>
</ul>
<div class="box">
  <p class="box-title"><i data-lucide="info"></i>無料で使えます</p>
  <p>mywant-guiex のソースコードは公開していませんが、できあがったものは Homebrew で誰でも入れられます。</p>
</div>
`,
        },
        {
          id: 'install',
          step: 'Step 2',
          title: 'インストール',
          sub: 'Homebrew で 1 行',
          icon: 'download',
          color: '#10b981',
          body: `
<p>Mac では <a href="https://brew.sh/ja/" target="_blank" rel="noopener">Homebrew</a> で入れます。MyWant 本体と mywant-gui も一緒に入ります。</p>
<ol class="steps">
  <li><strong>配布元を登録して、信頼する</strong>（はじめの 1 回だけ）
    <div class="code"><pre>brew tap onelittlenightmusic/mywant
brew trust onelittlenightmusic/mywant</pre></div>
  </li>
  <li><strong>mywant-guiex を入れる</strong>
    <div class="code"><pre>brew install mywant-guiex</pre></div>
  </li>
  <li><strong>MyWant と画面を起動する</strong>（もう動いていれば不要）
    <div class="code"><pre>mywant start -D
mywant gui start -D</pre></div>
  </li>
  <li><strong>ブラウザで <a href="http://localhost:8081" target="_blank" rel="noopener">http://localhost:8081</a> を開く（開いていれば再読み込み）</strong><br />Menu に <strong>Canvas</strong>・<strong>Web Wants</strong>・<strong>Kata</strong>・<strong>Extension</strong> が増えれば完了です。</li>
</ol>
<div class="box">
  <p class="box-title"><i data-lucide="link"></i>バージョンはそろえる</p>
  <p>mywant-guiex は、同じバージョンの mywant-gui 用に作られています。違うと、画面はそのまま動きますがキャンバスなどが出てきません。アップデートは、いつも 2 つ一緒に。</p>
</div>
<div class="code"><pre>brew upgrade mywant-gui mywant-guiex</pre></div>
<p>手元で拡張だけを置いたり外したりするときは、次のコマンドを使います。</p>
<div class="code"><pre>mywant guiex install     # ~/.mywant/gui-extensions/ に置く
mywant guiex uninstall   # 外す</pre></div>
`,
        },
        {
          id: 'browser-extension',
          step: 'Step 3',
          title: 'ブラウザ拡張を入れる',
          sub: 'Web Want と、タブをまたぐ CursorMan に',
          icon: 'puzzle',
          color: '#f43f5e',
          body: `
<p>Web Want を作るときや、自分のキャラクターをほかのサイトへ連れて行くときは、ブラウザ拡張 <strong>MyWant Web Inspector</strong> を使います。キャンバスだけならなくても大丈夫です。</p>
<ol class="steps">
  <li><strong>Menu の Extension を開く</strong><br />拡張が入っていないと「No extension answering in this browser」と出ます。<strong>Install</strong> を押すと、手順と配布ファイル（Chrome 版・Firefox 版）が出ます。</li>
  <li><strong>Chrome の場合：zip を展開して読み込む</strong><br /><code>chrome://extensions</code> を開き、右上の<strong>デベロッパーモード</strong>をオンにして、「パッケージ化されていない拡張機能を読み込む」から <code>chrome-extension</code> フォルダを選びます。</li>
  <li><strong>MyWant のページを再読み込みする</strong><br />Extension ページに、拡張がつなぐサーバーの設定（プロファイル）が並べば完了です。はじめは <code>http://localhost:8080</code> につなぎます。</li>
</ol>
${shot('extension.jpg', 'Extension ページ。拡張が入っていないときは Install ボタンが出ます')}
<div class="box">
  <p class="box-title"><i data-lucide="server"></i>別のマシンの MyWant につなぐとき</p>
  <p>Extension ページで、つなぎ先のサーバーを切り替えられます。パスワードだけは、安全のため拡張自身の設定画面で入れます。</p>
</div>
`,
        },
        {
          id: 'character',
          step: 'Step 4',
          title: '自分のキャラクターを決める',
          sub: '盤面を歩くのは、あなたのキャラクター',
          icon: 'user-round',
          color: '#8b5cf6',
          body: `
<p>キャンバスを歩き回るのは、<strong>自分のキャラクター</strong>です。mywant-gui の <strong>Characters</strong> ページでキャラクターを作り、「Use as my CursorMan」で自分にしておきましょう。
くわしくは <a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=ja#characters">mywant-gui ガイドの Characters</a> を見てください。</p>
<h4>キャンバスならではの設定</h4>
<p>mywant-guiex を入れると、キャラクターの設定にキャンバス用の項目が加わります。</p>
<dl class="terms">
  <dt>Move Speed</dt><dd>歩く姿を描く速さ（見た目のなめらかさ）</dd>
  <dt>Real Speed</dt><dd>「進む」ボタンなどで動かされるときに、1 秒で進むマスの数</dd>
</dl>
<p>自分のキャラクターを決めずに使うと、標準の姿（Default CursorMan）で歩きます。</p>
`,
        },
      ],
    },
    {
      id: 'killer',
      title: 'キラーコンテンツ',
      note: 'mywant-guiex でしかできないこと',
      icon: 'sparkles',
      topics: [
        {
          id: 'canvas',
          title: 'キャンバス',
          sub: 'Want を、盤面のタイルに',
          icon: 'map',
          color: '#0891b2',
          body: `
<p>Menu の <strong>Canvas</strong>（または <code>c</code> キー）で、Want が 1 つずつ <strong>タイル</strong> になって盤面に並びます。<code>l</code> キーでカードの一覧に戻ります。</p>
${shot('canvas-detail.jpg', 'タイルを押すと、右にいつものサイドバーが開きます')}
<ul>
  <li>タイルは好きな場所へ動かせます。似た Want を近くに集めて、自分だけの盤面を作れます</li>
  <li>Want が使っている <strong>Thing</strong>（丸いもの）がそばに浮かび、つながりが線で見えます</li>
  <li>右の <strong>ミニマップ</strong> で、盤面の全体と今いる場所がわかります</li>
  <li>ヘッダの <strong>PAD</strong> で、画面上にゲームパッドを出せます（スマホで便利）</li>
</ul>
${shot('canvas.jpg', 'ミニマップを開いたところ')}
<p>コマンドでタイルを動かすこともできます。</p>
<div class="code"><pre>mywant guiex tile set tokyo-weather 0 1</pre></div>
`,
        },
        {
          id: 'walk',
          title: '盤面を歩く',
          sub: 'キャラクターとゲームパッドで',
          icon: 'gamepad-2',
          color: '#8b5cf6',
          body: `
<p>キャンバスでは、自分のキャラクターが盤面を歩きます。矢印キーでもゲームパッドでも動かせて、立ったタイルがそのまま操作の対象になります。</p>
<dl class="terms">
  <dt>十字キー / 左スティック</dt><dd>歩く（B を押しながらで速く）</dd>
  <dt>A</dt><dd>立っているタイルを開く。長押しで、タイルを持ち上げて動かす</dd>
  <dt>右スティック</dt><dd>ズーム</dd>
  <dt>L2 / R2</dt><dd>タイルからタイルへジャンプ（つながりに沿って / 向きを決めて）</dd>
  <dt>Y</dt><dd>ヘッダのボタンへ</dd>
  <dt>B 長押し</dt><dd>向きと距離のガイドを出す</dd>
</dl>
<p>ピルの <strong>MODE</strong> のランプが、いまどのジャンプのモードかを示し、押すと切り替わります（詳しくは「Z モードで渡る」）。</p>
${shot('help-gamepad.jpg', 'Help（? キー）の Gamepad Layout に、ボタンの図があります')}
<div class="box">
  <p class="box-title"><i data-lucide="lock"></i>うっかり動かさないために</p>
  <p>Settings の Interaction Mode を <strong>Game</strong> にすると、タイルの位置が固定されます。歩き回るだけのときにおすすめです。</p>
</div>
<p>ゲームパッドのつなぎ方は <a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=ja#gamepad">mywant-gui ガイドのゲームパッドで操作</a> を見てください。</p>
`,
        },
        {
          id: 'robot',
          title: 'ロボット',
          sub: 'いつもそばにいる AI の相棒',
          icon: 'bot',
          color: '#3b82f6',
          body: `
<p>ヘッダにいるのが <strong>ロボット</strong> です。ヘッダの吹き出しから話しかけると、ロボットが答えてくれます。どのページから話しかけても、会話はひと続きのまま残ります。</p>
${shot('robot.jpg', 'ロボットの言葉はチャット欄に出て、ロボットのカーソルが画面のボタンを指し示します')}
<ul>
  <li>ロボットは盤面の上にもキャラクターとして立っていて、あなたの後についてくることもできます</li>
  <li>答えるのは、手元の AI の CLI（<code>claude</code> や <code>gemini</code>）です。使う AI は、吹き出しの横のキャラクターを長押しすると選べます</li>
  <li>ロボットが指し示した操作は、Logs ページの <strong>Robot</strong> タブに残り、あとから再生できます</li>
</ul>
<h4>コマンドからしゃべらせる</h4>
<p>AI エージェントやスクリプトから、画面の上のロボットに説明させることもできます。</p>
<div class="code"><pre>mywant guiex robot say "＋ で Want を追加できます" --target add_want_btn</pre></div>
<div class="box">
  <p class="box-title"><i data-lucide="info"></i>AI の CLI が必要です</p>
  <p>ロボットの返事には、Claude Code（<code>claude</code>）か Gemini CLI（<code>gemini</code>）が、このマシンに入っている必要があります。</p>
</div>
`,
        },
        {
          id: 'web-want',
          title: 'Web Want',
          sub: 'いつものサイトを、Want に',
          icon: 'globe',
          color: '#0ea5e9',
          body: `
<p>いつも使う Web サイトを取り込むと、そのサイトが <strong>Want の種類</strong>になります。検索欄やボタンなど、使いたい部品を覚えさせておけば、MyWant からそのサイトを開いて操作できます。
たとえば、この mywant-gui のガイドのページも Web Want にできます。</p>
${shot('web-wants-grid.jpg', 'Menu の Web Wants。取り込んだサイトが、画面の写真つきで並びます')}
<h4>ブラウザ拡張から作る</h4>
<ol class="steps">
  <li><strong>取り込みたいサイトを開き、ツールバーの MyWant のアイコンを押す</strong><br />ページの上に自分のキャラクターとサイドバーが現れます。</li>
  <li><strong>使いたい部品を覚えさせる</strong><br />矢印キー（またはゲームパッド）でキャラクターを検索欄やボタンの上へ動かし、<code>X</code> を押すと記録されます。右クリックのメニューからも記録できます。<code>X</code> の長押しで名前を変えられます。</li>
  <li><strong>サイドバーの Save を押す</strong><br />そのサイトの Want の種類ができ、Web Wants ページと、Want 追加フォームの <strong>web</strong> の分類に並びます。</li>
</ol>
${shot('web-add.jpg', 'できた種類は、Want 追加フォームの web の分類からも選べます')}
<h4>使う</h4>
<p>Web Wants ページでカードを選び、Start ボタン（キーボードなら <code>Shift + Enter</code>）で操作が出ます。</p>
<dl class="terms">
  <dt>Launch</dt><dd>そのサイトを新しいタブで開き、記録した部品を MyWant から動かせるようにします</dd>
  <dt>Inspect</dt><dd>記録した部品を表示した状態で開き直します。部品を足したり直したりして、Update で上書きします</dd>
  <dt>Delete</dt><dd>その種類を消します</dd>
</dl>
`,
        },
        {
          id: 'tabs',
          title: 'ほかのタブへ出かける',
          sub: 'キャラクターが、ブラウザのタブをまたいで',
          icon: 'app-window',
          color: '#f97316',
          body: `
<p>ブラウザ拡張を入れると、自分のキャラクター（CursorMan）が MyWant の画面を飛び出して、<strong>ほかのサイトのタブの上</strong>にも現れます。
ほかのサイトの上でもゲームパッドや矢印キーでキャラクターを歩かせ、ボタンや入力欄を指し示せます。</p>
<h4>タブを移る</h4>
<dl class="terms">
  <dt>ゲームパッド</dt><dd>B を押しながら L1 / R1</dd>
  <dt>キーボード</dt><dd><code>Cmd + Shift + Option + ← / →</code></dd>
</dl>
<p>方向を選ぶ小さな画面が出て、いちばん左・左・右・いちばん右のタブへ移れます。ほかのサイトの上でも同じです。</p>
<h4>ほかのサイトの上でできること</h4>
<ul>
  <li><code>X</code> で部品を記録して、Web Want を作る（「Web Want」を参照）</li>
  <li>ロボットも、ほかのタブへ移動して説明できます（<code>mywant guiex robot move</code>）</li>
</ul>
<div class="box">
  <p class="box-title"><i data-lucide="puzzle"></i>ブラウザ拡張が必要です</p>
  <p>「ブラウザ拡張を入れる」の手順で入れてください。拡張が入っていなければ、ほかのタブには何も起きません。</p>
</div>
`,
        },
        {
          id: 'bookmarklet',
          title: 'スマホから取り込む',
          sub: 'ブックマークレットで Web Want を作る',
          icon: 'smartphone',
          color: '#14b8a6',
          body: `
<p>ブラウザ拡張を入れられないスマホのブラウザでも、<strong>ブックマークレット</strong>を使えば Web Want を作れます。</p>
<ol class="steps">
  <li><strong>Web Wants ページのヘッダの ＋ を押す</strong><br />「Web Want を作る準備」が開きます。</li>
  <li><strong>ブックマークレットを入れる</strong><br />パソコンならブックマークバーへドラッグ。スマホは、表示される QR コードを読み取るとインストール用のページが開きます。</li>
  <li><strong>取り込みたいサイトで、そのブックマークを開く</strong><br />部品を選んで保存すると、Web Wants に並びます。</li>
</ol>
<div class="box">
  <p class="box-title"><i data-lucide="globe"></i>https の公開アドレスが必要です</p>
  <p>ブラウザのセキュリティの決まりで、ブックマークレットは <code>http://localhost</code> や家の中のアドレスからは動きません。MyWant をインターネットから届く https のアドレス（クラウドにデプロイしたものなど）で開いて使ってください。</p>
</div>
`,
        },
        {
          id: 'kata',
          title: '型（Kata）',
          sub: 'Want の組み合わせを、道場で身につける',
          icon: 'swords',
          color: '#0f766e',
          body: `
<p><strong>型（かた）</strong>は、盤面の上にある Want や Thing の <strong>組み合わせ</strong>です。
たとえば「駅を覚えさせる」＋「その駅までの経路を調べる」がそろうと、「宛（あて）」という型が <strong>極まり</strong>ます。</p>
${shot('kata.jpg', 'Menu の Kata（道場）。型が帯ごとに並び、極まったものにはチェックと LIVE の印がつきます')}
<ul>
  <li>型は <strong>帯</strong>（白帯・黄帯・合帯・緑帯・青帯…）ごとに並び、決められた数の型を極めると次の帯が開きます</li>
  <li>同じ型を別の場所でも極めていくと、<strong>初伝</strong>・<strong>皆伝</strong>と位が上がります</li>
  <li>位が上がると、手数（ショートカット）や呼び名が増えていきます</li>
  <li>型は機能の鍵ではありません。どの Want も最初から使えます。型は「うまい組み合わせ」を見つけた印です</li>
</ul>
${shot('kata-detail.jpg', '型を押すと、何を組み合わせればよいか（所作）と、できあがるものが見られます')}
`,
        },
      ],
    },
    {
      id: 'on-tabs',
      title: 'ブラウザのタブでできること',
      note: 'ブラウザ拡張（またはブックマークレット）で、いつものサイトの上で',
      icon: 'app-window',
      topics: [
        {
          id: 'pill-cursor',
          title: 'ピルと Browse ／ Canvas',
          sub: 'ページのまま見るか、盤面のように動くか',
          icon: 'panel-top-open',
          color: '#22c55e',
          body: `
<p>ブラウザ拡張を入れると、どのサイトの上にも小さな<strong>コントロールピル</strong>が浮かびます。</p>
<dl class="terms">
  <dt>畳んだとき</dt><dd><code>WARP ｜ BROWSE ｜ ›</code>。WARP で MyWant に戻り、右端の <code>›</code> で広げます</dd>
  <dt>広げたとき</dt><dd><code>WARP ｜ BROWSE ｜ PAUSE ｜ MODE ｜ NEWS ｜ … ｜ SAVE ｜ ‹</code>。<code>‹</code> で畳みます</dd>
</dl>
<h4>Browse と Canvas</h4>
<p><strong>BROWSE</strong> を押すと <strong>CANVAS</strong> に切り替わります（もう一度で戻ります）。ピルを畳んでいても切り替えられます。</p>
<dl class="terms">
  <dt>Browse</dt><dd>ページはページのまま。ピルを広げている間だけキャラクターが来て、畳むと去ります</dd>
  <dt>Canvas</dt><dd>ページを盤面のように扱います。ピルを畳んでいてもキャラクターがいて、オーラマークが色付きで見え、Constellation の線が出て、Z モード・矢印キー・ゲームパッド・指の操作がすべてキャラクターに届きます</dd>
</dl>
<p>Canvas では、X や長押しでマークをつけてもサイドバーは開きません。スマホでもページが隠れません。</p>
<h4>指で</h4>
<dl class="terms">
  <dt>タップ</dt><dd>キャラクターがそこへ移動します（ページのボタンは押しません）</dd>
  <dt>長押し</dt><dd>その部品のオーラマークをつける／外す</dd>
  <dt>キャラクターを引っぱる</dt><dd>引っぱった向きのマークへ飛びます（MODE が Z や Cmd なら、狙って離すと飛ぶ）</dd>
</dl>
<p>Browse でピルを畳んでいるときは、タップはふつうにページのものです。</p>
`,
        },
        {
          id: 'aura-jump',
          title: 'オーラマークの間をジャンプ',
          sub: 'X で印をつけたら、上下左右でひとっ飛び',
          icon: 'locate-fixed',
          color: '#a855f7',
          body: `
<p>サイトの上でキャラクターを検索欄やボタンに重ねて <code>X</code> を押す（スマホでは長押し）と、その部品に<strong>オーラマーク</strong>がつきます。
マークをつけておけば、<strong>上下左右でマークからマークへ飛べます</strong>。</p>
<h4>飛ぶ</h4>
<dl class="terms">
  <dt>ゲームパッド</dt><dd>十字ボタンの上下左右</dd>
  <dt>キーボード</dt><dd>Canvas では矢印キーだけで。Browse では <code>Cmd + ↑ / ↓ / ← / →</code>（矢印キーだけなら自由に歩きます）</dd>
  <dt>好きな向きへ</dt><dd>R2 を押しながら左スティックで狙い、R2 を離すと、その線の先でいちばん近いマークへ（ピルの MODE を Cmd にすると、キャラクターを引っぱって同じことができます）</dd>
</dl>
<p>押した向きにあるマークのうち、いちばん近いものへ飛びます。飛んだ先がページの縦の真ん中あたりに来るよう、ページが上下にスクロールします（横にはスクロールしません）。飛んだ先の部品は光り、<code>Enter</code> で押せます。</p>
<h4>次に来たときも</h4>
<p>サイドバーの Save で保存しておけば、そのサイトを次に開いたときもマークが戻ってきます。サイドバーでカードにマウスを乗せると、ページ上のその部品に枠が出ます。</p>
`,
        },
        {
          id: 'aura-constellation',
          title: 'マークを Constellation でつなぐ',
          sub: 'Y で線を結んで、名前を付ける',
          icon: 'waypoints',
          color: '#f59e0b',
          body: `
<p>オーラマーク同士を線でつないで、<strong>Constellation</strong> にできます。キャンバスの Y 接続と同じやり方です。
つないでおけば、<strong>Z モードでつながりをたどって渡れます</strong>（「Z モードで渡る」を参照）。「検索 → カート → 購入」のように、いつも同じ順に使う部品を行き来するのに便利です。</p>
<h4>つなぐ</h4>
<ol class="steps">
  <li><strong>マークの上で Y</strong><br />そこから線が伸び、歩くとついてきます。</li>
  <li><strong>次のマークまで歩いて Y</strong><br />いくつでも足せます。いちばん新しいマークでもう一度 Y を押すと、それだけ外れます。</li>
  <li><strong>Enter（ゲームパッドは A）で名前を付けて確定</strong><br />Escape（B）で線ごと捨てられます。同じ名前を付けると、その Constellation に続けてつながります。</li>
</ol>
<p>スマホでは、ピルの MODE を <strong>Y</strong> にしてマークをタップしていき、キャラクターのそばの「確定」を押します。</p>
<p>できたら、サイドバーの Save でマークと一緒に保存します。次にそのサイトを開いたときも戻ってきます。</p>
`,
        },
        {
          id: 'z-mode',
          title: 'Z モードで渡る',
          sub: 'つながりの先が、上下左右に並ぶ',
          icon: 'move',
          color: '#f59e0b',
          body: `
<p>Z モードの間は、上下左右が「いちばん近いマーク」ではなく、<strong>今いるマークから Constellation でつながっている先</strong>へのジャンプになります。</p>
<h4>入る</h4>
<dl class="terms">
  <dt>キーボード</dt><dd><code>Z</code> を押している間</dd>
  <dt>ゲームパッド</dt><dd>L2 を押している間</dd>
  <dt>ピル</dt><dd><strong>MODE</strong> を押して Z に（押すたびに なし → Z → Cmd → Y）。押しっぱなしにできない手のために、Z のまま固定されます</dd>
</dl>
<p>Z モードに入ると、キャラクターのまわりに<strong>行き先の札</strong>が出ます。まん中が今いるマーク、上下左右がそれぞれの向きのつながり先で、札には Constellation の名前も出ます。</p>
<h4>渡る</h4>
<dl class="terms">
  <dt>向きを押す</dt><dd>矢印キー・十字ボタンで、その向きの札へ</dd>
  <dt>狙って離す</dt><dd>L2 を押しながら左スティックを倒すと琥珀色の矢印が出て、その向きの札が大きくなります。L2 を離すとそこへ（押したまま A なら、飛んでそのまま続けて狙えます）</dd>
  <dt>札をタップ</dt><dd>スマホでは、札そのものをタップして渡れます</dd>
</dl>
<p>渡った先がページの縦の真ん中あたりに来るよう、ページが上下にスクロールします。</p>
<h4>札の向きの決まり方</h4>
<p>それぞれの行き先は、実際にある向きにいちばん合う方向に置かれます。真左にあるものは左に、左下にあるものは（左が埋まっていれば）下に。盤面（キャンバス）の Z モードも同じ決まりです。</p>
<div class="box">
  <p class="box-title"><i data-lucide="crosshair"></i>Cmd モード（狙う）</p>
  <p>R2 を押している間（またはピルの MODE を Cmd に）は、上下左右にいちばん近いマークの札が緑で出て、左スティックで好きな向きを狙えます。離すと、その線の先でいちばん近いマークへ。つながりに関係なく飛べるモードです。</p>
</div>
`,
        },
        {
          id: 'pill-lamp',
          title: 'ピルの矢印の色で、安心する',
          sub: '呼ばれていなければ、帰らなくていい',
          icon: 'lamp',
          color: '#f59e0b',
          body: `
<p>MyWant の画面は、見張り続ける場所ではなく、好きなときに帰ってくる場所です。ほかのサイトを見ている間は、ピルの右端の<strong>小さな矢印（› ／ ‹）の色</strong>だけで、帰る必要があるかが分かります。</p>
<dl class="terms">
  <dt>緑</dt><dd>何もあなたを待っていません。帰らなくて大丈夫です</dd>
  <dt>オレンジ</dt><dd>何かがあなたを待っています（承認待ち、失敗、ログインが必要 など）。ピルを広げると、呼び出しのボタンからそこへ飛べます</dd>
  <dt>オレンジの塗り</dt><dd>自分で全体を一時停止しています</dd>
  <dt>灰色</dt><dd>MyWant に届いていません</dd>
</dl>
<div class="box">
  <p class="box-title"><i data-lucide="bell-off"></i>呼ばないものもあります</p>
  <p>あなたの手を止めないように作られた確認（予約の確認など）は、ログインが切れていてもあなたを呼びません。</p>
</div>
`,
        },
      ],
    },
    {
      id: 'more',
      title: 'もっと使う',
      note: '慣れてきたら',
      icon: 'wrench',
      topics: [
        {
          id: 'cli',
          title: 'コマンドで動かす',
          sub: 'mywant guiex',
          icon: 'terminal',
          color: '#64748b',
          body: `
<p>キャンバスまわりの操作は、<code>mywant guiex</code> コマンドからもできます。AI エージェントに画面を動かしてもらうときにも使えます。</p>
<div class="code"><pre># 自分のキャラクターを操作する（しゃべる・動く など）
mywant guiex i --help
# タイルを動かす
mywant guiex tile set tokyo-weather 0 1
# ロボットにしゃべらせる・ほかのタブへ動かす
mywant guiex robot say "こんにちは"
mywant guiex robot move --help
# 拡張を置く・外す
mywant guiex install
mywant guiex uninstall
# すべてのコマンド
mywant guiex commands</pre></div>
<p>ページの移動やフォームの操作など、キャンバス以外の画面操作は <code>mywant gui</code> コマンドです（<a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=ja#cli">mywant-gui ガイド</a>）。</p>
`,
        },
        {
          id: 'looks',
          title: 'キャンバスの見た目',
          sub: '地面・背景・デザイン',
          icon: 'palette',
          color: '#ec4899',
          body: `
<p>キャンバスの見た目は、キャラクターごとの <strong>Display</strong> 設定で変えられます（mywant-gui の Characters ページ）。</p>
<dl class="terms">
  <dt>Canvas Background</dt><dd>地面の色</dd>
  <dt>Background Image</dt><dd>背景に置く画像の URL</dd>
  <dt>Overlay Design</dt><dd>メニューやダイアログのデザイン</dd>
</dl>
<p>盤面のデザインそのものを足すこともできます。デザインは <strong>Custom</strong>（追加機能のパック）として配られていて、次のように入れます。</p>
<div class="code"><pre>mywant custom install owner/repo --kind design</pre></div>
`,
        },
        {
          id: 'trouble',
          title: '困ったとき',
          sub: 'よくあるつまずき',
          icon: 'life-buoy',
          color: '#6b7280',
          body: `
<h4>Menu に Canvas が出てこない</h4>
<p>mywant-gui と mywant-guiex のバージョンが違うと、拡張は読み込まれません。理由は <code>~/.mywant/gui.log</code> に <code>[gui-extensions] guiex skipped: …</code> と出ます。2 つをそろえてください。</p>
<div class="code"><pre>brew upgrade mywant-gui mywant-guiex</pre></div>
<h4>ブラウザ拡張のアイコンに「!」が出る</h4>
<p>拡張がサーバーの認証に失敗しています。Extension ページのつなぎ先と、拡張の設定画面のパスワードを確かめてください。</p>
<h4>ロボットが答えない</h4>
<p>このマシンに <code>claude</code> か <code>gemini</code> の CLI が入っていて、使える状態か確かめてください。</p>
<h4>もっと知りたい</h4>
<ul>
  <li><a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=ja">mywant-gui ガイド</a>（画面の基本）</li>
  <li><a href="https://onelittlenightmusic.github.io/MyWant/?lang=ja">MyWant ガイド</a>（Want のしくみ）</li>
  <li><a href="https://github.com/onelittlenightmusic/mywant-gui-dist/releases" target="_blank" rel="noopener">配布ファイル（Releases）</a></li>
</ul>
`,
        },
      ],
    },
  ],
};
