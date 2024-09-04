import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.CF4E0Mpo.js";const k=JSON.parse('{"title":"Setup users","description":"","frontmatter":{},"headers":[],"relativePath":"installation/setup-users.md","filePath":"installation/setup-users.md","lastUpdated":1725453287000}'),n={name:"installation/setup-users.md"};function l(p,s,r,h,o,d){return t(),e("div",null,s[0]||(s[0]=[i(`<h1 id="setup-users" tabindex="-1">Setup users <a class="header-anchor" href="#setup-users" aria-label="Permalink to &quot;Setup users&quot;">​</a></h1><h2 id="set-root-password" tabindex="-1">Set root password <a class="header-anchor" href="#set-root-password" aria-label="Permalink to &quot;Set root password&quot;">​</a></h2><p>🔑 Use a strong and complicated password</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwd</span></span></code></pre></div><h2 id="add-your-user" tabindex="-1">Add your user <a class="header-anchor" href="#add-your-user" aria-label="Permalink to &quot;Add your user&quot;">​</a></h2><p>🧑 This will be your user you&#39;ll use to log in. For group reference see <a href="https://wiki.archlinux.org/index.php/Users_and_groups#Group_list" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Users_and_groups#Group_list</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audio,video,input,wheel,sys,log,rfkill,lp,adm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourusername</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourusername</span></span></code></pre></div><p>🎰 If you want to force your user to change password after first login:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chage</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourusername</span></span></code></pre></div><h2 id="enable-sudo" tabindex="-1">Enable sudo <a class="header-anchor" href="#enable-sudo" aria-label="Permalink to &quot;Enable sudo&quot;">​</a></h2><p>🧐 This will give your user administrative privileges</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EDITOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nano</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> visudo</span></span></code></pre></div><p>💥 Uncomment (remove the # in front of) the following lines</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>%wheel ALL=(ALL) ALL</span></span></code></pre></div>`,14)]))}const c=a(n,[["render",l]]);export{k as __pageData,c as default};
