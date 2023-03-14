import{_ as a,c as s,o as e,Q as n}from"./chunks/framework.e7dbb61d.js";const C=JSON.parse('{"title":"Configure system","description":"","frontmatter":{},"headers":[],"relativePath":"installation/configure-system.md","lastUpdated":1678802488000}'),l={name:"installation/configure-system.md"},o=n(`<h1 id="configure-system" tabindex="-1">Configure system <a class="header-anchor" href="#configure-system" aria-label="Permalink to &quot;Configure system&quot;">​</a></h1><h2 id="the-nano-text-editor" tabindex="-1">The nano text editor <a class="header-anchor" href="#the-nano-text-editor" aria-label="Permalink to &quot;The nano text editor&quot;">​</a></h2><p>Nano is the text editor we will use in this tutorial. Basic Usage:</p><ul><li>Move with arrow keys</li><li><code>CTRL + O</code> and then <code>ENTER</code> to save</li><li><code>CTRL + X</code> to exit</li></ul><h2 id="setup-hostname" tabindex="-1">Setup hostname <a class="header-anchor" href="#setup-hostname" aria-label="Permalink to &quot;Setup hostname&quot;">​</a></h2><p>📛 This will be the name of your PC on your network (Replace <code>myhostname</code>)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myhostname</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/hostname</span></span>
<span class="line"><span style="color:#FFCB6B;">nano</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/hosts</span></span>
<span class="line"></span></code></pre></div><p>Add these lines</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1   localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">::1         localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.1.1   myhostname.localdomain  myhostname</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="setup-locale" tabindex="-1">Setup locale <a class="header-anchor" href="#setup-locale" aria-label="Permalink to &quot;Setup locale&quot;">​</a></h2><p>🌐 Uncomment (remove the # in front of) all languages you need</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nano</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/locale.gen</span></span>
<span class="line"></span></code></pre></div><p>🏁 Generate locales</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">locale-gen</span></span>
<span class="line"></span></code></pre></div><p>🔘 Set locale</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LANG=en_US.UTF-</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/locale.conf</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> LANG</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">en_US.UTF-</span><span style="color:#F78C6C;">8</span></span>
<span class="line"></span></code></pre></div><p>⌨️ Set tty keymap (replace <code>yourkeymap</code> with your keymap e.g. <code>de-latin1</code>)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEYMAP=yourkeymap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/vconsole.conf</span></span>
<span class="line"></span></code></pre></div><h2 id="setup-time-date" tabindex="-1">Setup time &amp; date <a class="header-anchor" href="#setup-time-date" aria-label="Permalink to &quot;Setup time &amp; date&quot;">​</a></h2><p>📅 You can tab-complete your stuff after zoneinfo</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/zoneinfo/Region/City</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/localtime</span></span>
<span class="line"><span style="color:#FFCB6B;">hwclock</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--systohc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--utc</span></span>
<span class="line"></span></code></pre></div><h2 id="configure-pacman" tabindex="-1">Configure pacman <a class="header-anchor" href="#configure-pacman" aria-label="Permalink to &quot;Configure pacman&quot;">​</a></h2><p>Edit pacman configuration file</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nano</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/pacman.conf</span></span>
<span class="line"></span></code></pre></div><h3 id="setup-multilib" tabindex="-1">Setup multilib <a class="header-anchor" href="#setup-multilib" aria-label="Permalink to &quot;Setup multilib&quot;">​</a></h3><p>👾 multilib is a repository which contains 32-bit libraries and is disabled by default (needed for some games &amp; software; highly recommended to enable)</p><p>💥 Uncomment (remove the # in front of) the following lines</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[multilib]</span></span>
<span class="line"><span style="color:#F07178;">Include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /etc/pacman.d/mirrorlist</span></span>
<span class="line"></span></code></pre></div><h3 id="enable-parallel-downloads" tabindex="-1">Enable parallel downloads <a class="header-anchor" href="#enable-parallel-downloads" aria-label="Permalink to &quot;Enable parallel downloads&quot;">​</a></h3><p>🌐 Depending on your internet connection enabling parallel downloads may speed up the package download process</p><p>💥 Uncomment (remove the # in front of) this line and set it to your desired value</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">ParallelDownloads</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 5</span></span>
<span class="line"></span></code></pre></div><h3 id="extra-candy" tabindex="-1">Extra candy <a class="header-anchor" href="#extra-candy" aria-label="Permalink to &quot;Extra candy&quot;">​</a></h3><p>🍬 If you want some extra candy you can uncomment <code>Color</code> and <code>VerbosePkgLists</code> and add <code>ILoveCandy</code> under <code>Misc options</code>.</p><h3 id="after-configuring" tabindex="-1">After configuring <a class="header-anchor" href="#after-configuring" aria-label="Permalink to &quot;After configuring&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Syu</span></span>
<span class="line"></span></code></pre></div>`,36),t=[o];function p(c,i,r,d,h,y){return e(),s("div",null,t)}const m=a(l,[["render",p]]);export{C as __pageData,m as default};
