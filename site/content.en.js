/*
 * The mywant-guiex guide in English — the same topics, ids, icons and colours
 * as content.ja.js (see the note there). Change both together.
 */
window.GUIDE = window.GUIDE || {};
window.GUIDE.en = {
  ui: {
    htmlLang: 'en',
    langName: 'English',
    docTitle: 'mywant-guiex Guide',
    subtitle: 'A gentle guide',
    topics: n => `${n} topics`,
    heroLead: 'Lay your Wants out on a board, walk it as your character, talk to the robot. The extension that makes MyWant something you play.',
    heroSub: 'It adds to mywant-gui. Press a card to open its explanation on the right.',
    menu: 'Menu',
    sections: 'Sections',
    startHere: 'Start here',
    theme: 'Switch light and dark',
    lang: '日本語に切り替える',
    close: 'Close',
    copy: 'Copy',
    prev: 'Prev',
    grid: 'All',
    next: 'Next',
    guides: 'Guides',
    guidesNote: 'More guides to MyWant',
  },
  sections: [
    {
      id: 'start',
      title: 'Getting started',
      note: 'Read from the top and you are playing on the canvas',
      icon: 'rocket',
      topics: [
        {
          id: 'what',
          step: 'Step 1',
          title: 'What is mywant-guiex?',
          sub: 'The extension that makes mywant-gui playable',
          icon: 'sparkles',
          color: '#0891b2',
          body: `
<p><strong>mywant-guiex</strong> is an extension you add to <a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=en">mywant-gui</a>, MyWant's screen.
To a screen built for <em>managing</em> Wants as a list of cards, it adds the pieces for <em>playing</em> with them on a board.</p>
${shot('canvas-me.jpg', 'The canvas: Wants as tiles, with your character (here Aki the fox) standing on one')}
<h4>What you get</h4>
<ul>
  <li><strong>The canvas</strong>: lay Wants out as tiles on a board, wherever you like</li>
  <li><strong>Walk the board</strong>: roam as your character, opening and moving the tile you stand on — made for a gamepad</li>
  <li><strong>The robot</strong>: an AI companion that is always there to talk to</li>
  <li><strong>Web Wants</strong>: capture the sites you use and turn them into Wants</li>
  <li><strong>Out to other tabs</strong>: your character leaves MyWant and walks onto other sites too</li>
  <li><strong>Kata</strong>: learn good combinations of Wants, belt by belt, like a dojo</li>
</ul>
<div class="box">
  <p class="box-title"><i data-lucide="info"></i>Free to use</p>
  <p>mywant-guiex's source is not public, but the builds are, and anyone can install them with Homebrew.</p>
</div>
`,
        },
        {
          id: 'install',
          step: 'Step 2',
          title: 'Install',
          sub: 'One line with Homebrew',
          icon: 'download',
          color: '#10b981',
          body: `
<p>On a Mac, install it with <a href="https://brew.sh/" target="_blank" rel="noopener">Homebrew</a>. MyWant itself and mywant-gui come along.</p>
<ol class="steps">
  <li><strong>Add the source and trust it</strong> (only the first time)
    <div class="code"><pre>brew tap onelittlenightmusic/mywant
brew trust onelittlenightmusic/mywant</pre></div>
  </li>
  <li><strong>Install mywant-guiex</strong>
    <div class="code"><pre>brew install mywant-guiex</pre></div>
  </li>
  <li><strong>Start MyWant and the screen</strong> (skip if they are running)
    <div class="code"><pre>mywant start -D
mywant gui start -D</pre></div>
  </li>
  <li><strong>Open <a href="http://localhost:8081" target="_blank" rel="noopener">http://localhost:8081</a> (or reload it)</strong><br />Done when <strong>Canvas</strong>, <strong>Web Wants</strong>, <strong>Kata</strong> and <strong>Extension</strong> appear in the Menu.</li>
</ol>
<div class="box">
  <p class="box-title"><i data-lucide="link"></i>Keep the versions together</p>
  <p>mywant-guiex is built for the mywant-gui of the same version. If they differ, the screen keeps working but the canvas and the rest do not show up. Always upgrade the two together.</p>
</div>
<div class="code"><pre>brew upgrade mywant-gui mywant-guiex</pre></div>
<p>To place or remove just the extension by hand:</p>
<div class="code"><pre>mywant guiex install     # into ~/.mywant/gui-extensions/
mywant guiex uninstall   # remove it</pre></div>
`,
        },
        {
          id: 'browser-extension',
          step: 'Step 3',
          title: 'Install the browser extension',
          sub: 'For Web Wants, and your CursorMan on other tabs',
          icon: 'puzzle',
          color: '#f43f5e',
          body: `
<p>Making Web Wants and taking your character out to other sites use the <strong>MyWant Web Inspector</strong> browser extension. For the canvas alone you don't need it.</p>
<ol class="steps">
  <li><strong>Open Extension in the Menu</strong><br />Without the extension it says "No extension answering in this browser". Press <strong>Install</strong> for the steps and the downloads (Chrome and Firefox builds).</li>
  <li><strong>For Chrome: unzip and load it</strong><br />Open <code>chrome://extensions</code>, turn on <strong>Developer mode</strong> at the top right, choose "Load unpacked" and pick the <code>chrome-extension</code> folder.</li>
  <li><strong>Reload the MyWant page</strong><br />Done when the Extension page lists the servers the extension talks to (profiles). It starts out talking to <code>http://localhost:8080</code>.</li>
</ol>
${shot('extension.jpg', 'The Extension page. Without the extension, it offers an Install button')}
<div class="box">
  <p class="box-title"><i data-lucide="server"></i>Talking to MyWant on another machine</p>
  <p>Switch the server the extension talks to on the Extension page. Only the password goes in the extension's own settings page, for safety.</p>
</div>
`,
        },
        {
          id: 'character',
          step: 'Step 4',
          title: 'Choose your character',
          sub: 'It is your character that walks the board',
          icon: 'user-round',
          color: '#8b5cf6',
          body: `
<p>What walks the canvas is <strong>your character</strong>. Make one on mywant-gui's <strong>Characters</strong> page and press "Use as my CursorMan" to make it yours.
See <a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=en#characters">Characters in the mywant-gui guide</a>.</p>
<h4>Settings only the canvas has</h4>
<p>With mywant-guiex, a character's settings gain a few for the canvas.</p>
<dl class="terms">
  <dt>Move Speed</dt><dd>How fast the walking is drawn (how smooth it looks)</dd>
  <dt>Real Speed</dt><dd>How many cells a second it covers when something moves it, such as a "going" button</dd>
</dl>
<p>If you choose no character, you walk as the standard figure (the Default CursorMan).</p>
`,
        },
      ],
    },
    {
      id: 'killer',
      title: 'The good stuff',
      note: 'What only mywant-guiex does',
      icon: 'sparkles',
      topics: [
        {
          id: 'canvas',
          title: 'The canvas',
          sub: 'Wants as tiles on a board',
          icon: 'map',
          color: '#0891b2',
          body: `
<p><strong>Canvas</strong> in the Menu (or the <code>c</code> key) turns each Want into a <strong>tile</strong> on a board. The <code>l</code> key goes back to the list of cards.</p>
${shot('canvas-detail.jpg', 'Press a tile and the familiar sidebar opens on the right')}
<ul>
  <li>Move tiles wherever you like — gather related Wants and build a board of your own</li>
  <li>The <strong>Things</strong> a Want uses (the round ones) float beside it, with lines showing the connection</li>
  <li>The <strong>minimap</strong> on the right shows the whole board and where you are</li>
  <li><strong>PAD</strong> in the header puts a gamepad on screen — handy on a phone</li>
</ul>
${shot('canvas.jpg', 'With the minimap open')}
<p>Tiles can be moved from a command too.</p>
<div class="code"><pre>mywant guiex tile set tokyo-weather 0 1</pre></div>
`,
        },
        {
          id: 'walk',
          title: 'Walk the board',
          sub: 'With your character and a gamepad',
          icon: 'gamepad-2',
          color: '#8b5cf6',
          body: `
<p>On the canvas, your character walks the board. Drive it with the arrow keys or a gamepad; the tile you stand on is what your buttons act on.</p>
<dl class="terms">
  <dt>D-pad / left stick</dt><dd>Walk (hold B to go faster)</dd>
  <dt>A</dt><dd>Open the tile you stand on. Hold it to pick the tile up and move it</dd>
  <dt>Right stick</dt><dd>Zoom</dd>
  <dt>L2 / R2</dt><dd>Jump from tile to tile (along a connection / in a direction you aim)</dd>
  <dt>Y</dt><dd>To the header's buttons</dd>
  <dt>Hold B</dt><dd>Show the direction and distance guide</dd>
</dl>
<p>The <strong>MODE</strong> lamp in the pill shows which jump mode is on, and pressing it switches (see "Cross in Z mode").</p>
${shot('help-gamepad.jpg', '"Gamepad Layout" in Help (the ? key) has a picture of the buttons')}
<div class="box">
  <p class="box-title"><i data-lucide="lock"></i>So nothing moves by accident</p>
  <p>Set Interaction Mode in Settings to <strong>Game</strong> and the tiles stay put. Good for when you only want to roam.</p>
</div>
<p>How to connect a gamepad: <a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=en#gamepad">Play it with a gamepad, in the mywant-gui guide</a>.</p>
`,
        },
        {
          id: 'robot',
          title: 'The robot',
          sub: 'An AI companion, always there',
          icon: 'bot',
          color: '#3b82f6',
          body: `
<p>The one in the header is the <strong>robot</strong>. Talk to it from the header's speech bubble and it answers. Whichever page you talk from, it is one continuing conversation.</p>
${shot('robot.jpg', 'What the robot says lands in the chat, and its cursor points at the button it means')}
<ul>
  <li>The robot also stands on the board as a character, and can follow you around</li>
  <li>Its answers come from an AI command line on your machine (<code>claude</code> or <code>gemini</code>). Hold the character beside the bubble to choose which</li>
  <li>What the robot pointed you through is kept in the <strong>Robot</strong> tab of the Logs page, ready to replay</li>
</ul>
<h4>Make it speak from a command</h4>
<p>An AI agent or a script can have the robot explain things on screen.</p>
<div class="code"><pre>mywant guiex robot say "Press + to add a Want" --target add_want_btn</pre></div>
<div class="box">
  <p class="box-title"><i data-lucide="info"></i>Needs an AI command line</p>
  <p>For the robot to answer, Claude Code (<code>claude</code>) or the Gemini CLI (<code>gemini</code>) has to be installed on this machine.</p>
</div>
`,
        },
        {
          id: 'web-want',
          title: 'Web Wants',
          sub: 'The sites you use, as Wants',
          icon: 'globe',
          color: '#0ea5e9',
          body: `
<p>Capture a website you use and it becomes a <strong>kind of Want</strong>. Teach it the parts you care about — a search box, a button — and MyWant can open that site and work it for you.
Even the mywant-gui guide's own page can be one.</p>
${shot('web-wants-grid.jpg', 'Web Wants in the Menu: every captured site, with a picture of its page')}
<h4>Make one from the browser extension</h4>
<ol class="steps">
  <li><strong>Open the site and press the MyWant icon in the toolbar</strong><br />Your character and a sidebar appear on top of the page.</li>
  <li><strong>Teach it the parts you want</strong><br />Move your character onto a search box or a button with the arrow keys (or a gamepad) and press <code>X</code> to record it. The right-click menu records one too. Hold <code>X</code> to rename it.</li>
  <li><strong>Press Save in the sidebar</strong><br />A kind of Want for that site is created, and it shows up on the Web Wants page and under <strong>web</strong> in the Add Want form.</li>
</ol>
${shot('web-add.jpg', 'The new kind can also be picked under web in the Add Want form')}
<h4>Use it</h4>
<p>On the Web Wants page, choose a card and press Start (<code>Shift + Enter</code> on a keyboard) for its actions.</p>
<dl class="terms">
  <dt>Launch</dt><dd>Open the site in a new tab, with the recorded parts ready for MyWant to drive</dd>
  <dt>Inspect</dt><dd>Reopen it with the recorded parts shown. Add or fix parts, then Update to save over it</dd>
  <dt>Delete</dt><dd>Remove that kind</dd>
</dl>
`,
        },
        {
          id: 'tabs',
          title: 'Out to other tabs',
          sub: 'Your character, across browser tabs',
          icon: 'app-window',
          color: '#f97316',
          body: `
<p>With the browser extension, your character (your CursorMan) leaves the MyWant screen and appears <strong>on other sites' tabs</strong> too.
Walk it there with a gamepad or the arrow keys, and point at buttons and fields.</p>
<h4>Move between tabs</h4>
<dl class="terms">
  <dt>Gamepad</dt><dd>Hold B and press L1 / R1</dd>
  <dt>Keyboard</dt><dd><code>Cmd + Shift + Option + ← / →</code></dd>
</dl>
<p>A small picker appears: go to the leftmost, left, right or rightmost tab. The same on other sites.</p>
<h4>What you can do on other sites</h4>
<ul>
  <li>Record parts with <code>X</code> and make a Web Want (see "Web Wants")</li>
  <li>The robot can move to other tabs and explain there too (<code>mywant guiex robot move</code>)</li>
</ul>
<div class="box">
  <p class="box-title"><i data-lucide="puzzle"></i>Needs the browser extension</p>
  <p>Install it as in "Install the browser extension". Without it, nothing happens on other tabs.</p>
</div>
`,
        },
        {
          id: 'bookmarklet',
          title: 'Capture from a phone',
          sub: 'Make Web Wants with a bookmarklet',
          icon: 'smartphone',
          color: '#14b8a6',
          body: `
<p>A phone's browser can't take the extension, but a <strong>bookmarklet</strong> still makes Web Wants.</p>
<ol class="steps">
  <li><strong>Press + in the header of the Web Wants page</strong><br />The setup for making a Web Want opens.</li>
  <li><strong>Install the bookmarklet</strong><br />On a computer, drag it to the bookmarks bar. On a phone, scan the QR code shown and an install page opens.</li>
  <li><strong>On the site you want, open that bookmark</strong><br />Pick the parts and save; it shows up in Web Wants.</li>
</ol>
<div class="box">
  <p class="box-title"><i data-lucide="globe"></i>Needs a public https address</p>
  <p>Browser security rules stop a bookmarklet from working with <code>http://localhost</code> or an address inside your home network. Open MyWant at an https address reachable from the internet (a cloud deployment, for example) to use it.</p>
</div>
`,
        },
        {
          id: 'kata',
          title: 'Kata',
          sub: 'Learn combinations of Wants in the dojo',
          icon: 'swords',
          color: '#0f766e',
          body: `
<p>A <strong>kata</strong> (型, "form") is a <strong>combination</strong> of Wants and Things that are actually on your board.
For example, "remember a station" plus "look up a route to that station" completes the kata called 宛 (<em>ate</em>, "addressed to").</p>
${shot('kata.jpg', 'Kata in the Menu — the dojo. Kata are laid out belt by belt; the ones you hold carry a check and a LIVE mark')}
<ul>
  <li>Kata are grouped into <strong>belts</strong> — white, yellow, a combining belt, green, blue… — and holding enough of a belt's kata opens the next</li>
  <li>Holding the same kata again in new places raises it from <strong>shoden</strong> (初伝) to <strong>kaiden</strong> (皆伝)</li>
  <li>Higher ranks bring shortcuts and names for what you do</li>
  <li>Kata never lock a feature away: every Want works from day one. A kata is the mark of having found a good combination</li>
</ul>
${shot('kata-detail.jpg', 'Press a kata to see what to combine (its waza) and what it gives you')}
`,
        },
      ],
    },
    {
      id: 'on-tabs',
      title: 'On your browser tabs',
      note: 'With the browser extension (or the bookmarklet), on the sites you already use',
      icon: 'app-window',
      topics: [
        {
          id: 'pill-cursor',
          title: 'The pill, Browse and Canvas',
          sub: 'The page as it is, or moved through like the board',
          icon: 'panel-top-open',
          color: '#22c55e',
          body: `
<p>With the browser extension, a small <strong>pill</strong> floats at the bottom left of every site. It stays out of the page's way, and calls your character whenever you want it.</p>
${shot('tabs-pill.gif', 'Press BROWSE to switch to CANVAS: the marks light up and a minimap opens on the right')}
<ul>
  <li><strong>Browse</strong>: the page stays as it is. Your character comes only while the pill is open</li>
  <li><strong>Canvas</strong>: walk the page like the board. Marks and their lines show, and the arrow keys and the gamepad move your character</li>
  <li>The <code>›</code> at the pill's right end opens it and <code>‹</code> folds it. The <strong>MYWANT</strong> tile at the top left takes you back to MyWant</li>
</ul>
<div class="box">
  <p class="box-title"><i data-lucide="smartphone"></i>On a phone</p>
  <p>In Canvas, a tap walks your character there and a long press marks the part (an aura mark). The page's buttons are never pressed by accident.</p>
</div>
`,
        },
        {
          id: 'aura-jump',
          title: 'Jump between aura marks',
          sub: 'Mark the parts you use, then hop',
          icon: 'locate-fixed',
          color: '#a855f7',
          body: `
<p>Put an <strong>aura mark</strong> on the parts you always use — a search box, a button — and one arrow key hops from mark to mark. No hunting with the mouse, even on a long page.</p>
${shot('tabs-aura-jump.gif', 'In Canvas, an arrow key hops to the nearest mark that way')}
<ol class="steps">
  <li><strong>Mark</strong><br />Put your character over the part and press <code>X</code> (a long press on a phone).</li>
  <li><strong>Hop</strong><br />In Canvas, the arrow keys or the gamepad's D-pad. In Browse, hold <code>Cmd</code> with the arrows.</li>
  <li><strong>Press</strong><br />The part you land on lights up; <code>Enter</code> presses it.</li>
</ol>
<div class="box">
  <p class="box-title"><i data-lucide="save"></i>Next time too</p>
  <p>Press SAVE on the pill, and the marks come back the next time you open the site.</p>
</div>
`,
        },
        {
          id: 'aura-constellation',
          title: 'Join marks into a constellation',
          sub: 'Tie the order you always follow',
          icon: 'waypoints',
          color: '#f59e0b',
          body: `
<p>For parts you always use in the same order — search → cart → buy — tie the marks together with lines into a <strong>constellation</strong>. It works just like Y connect on the canvas.</p>
${shot('tabs-constellation.gif', 'Stretch the line with Y, then name it with Enter')}
<ol class="steps">
  <li><strong>Y on the first mark</strong><br />A line starts there.</li>
  <li><strong>Move to the next mark and press Y</strong><br />Join as many as you like.</li>
  <li><strong>Enter to name it</strong><br />Escape drops it. Then press SAVE on the pill.</li>
</ol>
<p>Follow the lines with "Cross in Z mode", next.</p>
<div class="box">
  <p class="box-title"><i data-lucide="smartphone"></i>On a phone</p>
  <p>Set the pill's MODE to <strong>Y</strong>, tap the marks in turn, then press the confirm button by your character.</p>
</div>
`,
        },
        {
          id: 'z-mode',
          title: 'Cross in Z mode',
          sub: 'Follow the lines, never lost',
          icon: 'move',
          color: '#f59e0b',
          body: `
<p>In <strong>Z mode</strong>, the arrow keys go where your mark is joined to, instead of to the nearest mark. Destination chips appear around your character, so you can see at a glance where you can go.</p>
${shot('tabs-z-mode.gif', 'In Z mode, ← crosses along the constellation to the next mark')}
<ol class="steps">
  <li><strong>Enter Z mode</strong><br />Hold <code>Z</code>, or L2 on a gamepad. Set the pill's <strong>MODE</strong> to Z and it stays on without holding anything.</li>
  <li><strong>Go the chip's way</strong><br />With the arrow keys or the D-pad. On a phone, tap the chip.</li>
</ol>
<div class="box">
  <p class="box-title"><i data-lucide="crosshair"></i>Aim any way</p>
  <p>On a gamepad, hold L2 (along the lines) or R2 (to any mark), aim with the left stick, and let go to land there.</p>
</div>
`,
        },
        {
          id: 'pill-lamp',
          title: 'Rest easy by the pill’s chevron',
          sub: 'Not called, no need to come back',
          icon: 'lamp',
          color: '#f59e0b',
          body: `
<p>The MyWant screen is not somewhere to keep watch; it is somewhere to come back to when you like. While you are on other sites, just glance at the <strong>colour of the small chevron</strong> at the pill's right end.</p>
${shot('tabs-lamp.jpg', 'A green chevron: nothing is waiting for you')}
<ul>
  <li><strong>Green</strong>: nothing is waiting. No need to come back</li>
  <li><strong>Orange</strong>: something is waiting for you (an approval, a failure, a login…). Open the pill to go straight there</li>
  <li><strong>Grey</strong>: MyWant cannot be reached</li>
</ul>
<div class="box">
  <p class="box-title"><i data-lucide="bell-off"></i>Some things never call</p>
  <p>Checks made so as never to stop what you are doing (such as checking a reservation) do not call you, even when a login has lapsed.</p>
</div>
`,
        },
      ],
    },
    {
      id: 'more',
      title: 'Going further',
      note: 'Once you are used to it',
      icon: 'wrench',
      topics: [
        {
          id: 'cli',
          title: 'Drive it from commands',
          sub: 'mywant guiex',
          icon: 'terminal',
          color: '#64748b',
          body: `
<p>The canvas side can be driven with the <code>mywant guiex</code> command — handy when an AI agent does the driving.</p>
<div class="code"><pre># your own character (say things, move, …)
mywant guiex i --help
# move a tile
mywant guiex tile set tokyo-weather 0 1
# make the robot speak, or move it to another tab
mywant guiex robot say "Hello"
mywant guiex robot move --help
# place or remove the extension
mywant guiex install
mywant guiex uninstall
# every command
mywant guiex commands</pre></div>
<p>Moving between pages, filling forms and the rest of the screen are <code>mywant gui</code> commands (<a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=en#cli">mywant-gui guide</a>).</p>
`,
        },
        {
          id: 'looks',
          title: 'How the canvas looks',
          sub: 'Ground, background, designs',
          icon: 'palette',
          color: '#ec4899',
          body: `
<p>How the canvas looks is part of each character's <strong>Display</strong> settings (mywant-gui's Characters page).</p>
<dl class="terms">
  <dt>Canvas Background</dt><dd>The colour of the ground</dd>
  <dt>Background Image</dt><dd>The URL of a picture to put behind it</dd>
  <dt>Overlay Design</dt><dd>How menus and dialogs look</dd>
</dl>
<p>New board designs can be added too. They come as <strong>Customs</strong> (add-on packs), installed like this:</p>
<div class="code"><pre>mywant custom install owner/repo --kind design</pre></div>
`,
        },
        {
          id: 'trouble',
          title: 'When stuck',
          sub: 'Common stumbles',
          icon: 'life-buoy',
          color: '#6b7280',
          body: `
<h4>Canvas doesn't appear in the Menu</h4>
<p>If mywant-gui and mywant-guiex are different versions, the extension is not loaded; <code>~/.mywant/gui.log</code> says <code>[gui-extensions] guiex skipped: …</code>. Bring them together:</p>
<div class="code"><pre>brew upgrade mywant-gui mywant-guiex</pre></div>
<h4>The browser extension's icon shows "!"</h4>
<p>The extension failed to authenticate with the server. Check the server on the Extension page and the password in the extension's settings page.</p>
<h4>The robot doesn't answer</h4>
<p>Check that the <code>claude</code> or <code>gemini</code> command line is installed on this machine and works.</p>
<h4>Learn more</h4>
<ul>
  <li><a href="https://onelittlenightmusic.github.io/mywant-gui/?lang=en">mywant-gui guide</a> (the screen's basics)</li>
  <li><a href="https://onelittlenightmusic.github.io/MyWant/?lang=en">MyWant guide</a> (how Wants work)</li>
  <li><a href="https://github.com/onelittlenightmusic/mywant-gui-dist/releases" target="_blank" rel="noopener">Downloads (Releases)</a></li>
</ul>
`,
        },
      ],
    },
  ],
};
