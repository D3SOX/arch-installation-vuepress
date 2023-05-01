import{_ as t,c as a,o as e,R as s}from"./chunks/framework.bdd825cc.js";const b=JSON.parse('{"title":"Partitioning & Formatting","description":"","frontmatter":{},"headers":[],"relativePath":"installation/partitioning-formatting.md","filePath":"installation/partitioning-formatting.md","lastUpdated":1682960096000}'),o={name:"installation/partitioning-formatting.md"},n=s(`<h1 id="partitioning-formatting" tabindex="-1">Partitioning &amp; Formatting <a class="header-anchor" href="#partitioning-formatting" aria-label="Permalink to &quot;Partitioning &amp; Formatting&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In the following X and Y are placeholders. Replace them with your corresponding device and partition number. &quot;sd&quot; could also be different if you don&#39;t connect your hard drive via SCSI/SATA</p></div><h2 id="partitioning" tabindex="-1">Partitioning <a class="header-anchor" href="#partitioning" aria-label="Permalink to &quot;Partitioning&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want to do disk encryption, go to the <a href="/encryption/">encryption page</a>. It will guide you back to the main installation when needed.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Also see <a href="https://youtu.be/8-8hFPjM46M" target="_blank" rel="noreferrer">this awesome video</a> about partitioning by EF - Linux Made Simple</p></div><h3 id="list-partition-table" tabindex="-1">List partition table <a class="header-anchor" href="#list-partition-table" aria-label="Permalink to &quot;List partition table&quot;">​</a></h3><p>To get an overview you can list your partition table to find out the device you want to use</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span></span></code></pre></div><h3 id="start-partitioning-tool" tabindex="-1">Start partitioning tool <a class="header-anchor" href="#start-partitioning-tool" aria-label="Permalink to &quot;Start partitioning tool&quot;">​</a></h3><p>▶️ Text-based</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdX</span></span></code></pre></div><p>▶️ UEFI only text-based</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">gdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdX</span></span></code></pre></div><p>▶️ Graphical (Recommended for beginners)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cfdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdX</span></span></code></pre></div><p>▶️ UEFI only Graphical (Recommended for beginners)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cgdisk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdX</span></span></code></pre></div><h3 id="create-partitions" tabindex="-1">Create partitions <a class="header-anchor" href="#create-partitions" aria-label="Permalink to &quot;Create partitions&quot;">​</a></h3><h4 id="decide-partition-table-type" tabindex="-1">Decide partition table type <a class="header-anchor" href="#decide-partition-table-type" aria-label="Permalink to &quot;Decide partition table type&quot;">​</a></h4><ul><li>BIOS: You can use both but this guide uses DOS</li><li>UEFI: You need to use GPT</li></ul><h4 id="gpt-uefi" tabindex="-1">GPT (UEFI) <a class="header-anchor" href="#gpt-uefi" aria-label="Permalink to &quot;GPT (UEFI)&quot;">​</a></h4><table><thead><tr><th>Needed</th><th>Partition</th><th>Partition type</th><th>Mount point</th></tr></thead><tbody><tr><td>✔️</td><td>/dev/sdXY</td><td>EFI system partition</td><td>/mnt/boot/efi</td></tr><tr><td>❌</td><td>/dev/sdXY</td><td>Linux swap</td><td>-</td></tr><tr><td>✔️</td><td>/dev/sdXY</td><td>Linux</td><td>/mnt</td></tr><tr><td>❌</td><td>/dev/sdXY</td><td>Linux</td><td>/mnt/home</td></tr></tbody></table><h4 id="dos-bios" tabindex="-1">DOS (BIOS) <a class="header-anchor" href="#dos-bios" aria-label="Permalink to &quot;DOS (BIOS)&quot;">​</a></h4><table><thead><tr><th>Needed</th><th>Partition</th><th>Partition type</th><th>Mount point</th><th>Flags</th></tr></thead><tbody><tr><td>❌</td><td>/dev/sdXY</td><td>Linux swap</td><td>-</td><td>-</td></tr><tr><td>✔️</td><td>/dev/sdXY</td><td>Linux</td><td>/mnt</td><td>Bootable</td></tr><tr><td>❌</td><td>/dev/sdXY</td><td>Linux</td><td>/mnt/home</td><td>-</td></tr></tbody></table><h4 id="gpt-bios" tabindex="-1">GPT (BIOS) <a class="header-anchor" href="#gpt-bios" aria-label="Permalink to &quot;GPT (BIOS)&quot;">​</a></h4><h3 id="size-recommendations" tabindex="-1">Size recommendations <a class="header-anchor" href="#size-recommendations" aria-label="Permalink to &quot;Size recommendations&quot;">​</a></h3><h4 id="efi-system" tabindex="-1">EFI system <a class="header-anchor" href="#efi-system" aria-label="Permalink to &quot;EFI system&quot;">​</a></h4><ul><li>At least: 150MB</li><li>Recommended: 300MB</li></ul><h4 id="swap" tabindex="-1">Swap <a class="header-anchor" href="#swap" aria-label="Permalink to &quot;Swap&quot;">​</a></h4><p>Taken from <a href="https://docs.voidlinux.org/installation/live-images/partitions.html" target="_blank" rel="noreferrer">https://docs.voidlinux.org/installation/live-images/partitions.html</a></p><table><thead><tr><th>System RAM</th><th>Recommended swap space</th><th>Swap space if using hibernation</th></tr></thead><tbody><tr><td>&lt; 2GB</td><td>2x the amount of RAM</td><td>3x the amount of RAM</td></tr><tr><td>2-8GB</td><td>Equal to amount of RAM</td><td>2x the amount of RAM</td></tr><tr><td>8-64GB</td><td>At least 4GB</td><td>1.5x the amount of RAM</td></tr><tr><td>64GB</td><td>At least 4GB</td><td>Hibernation not recommended</td></tr></tbody></table><h2 id="format-partitions" tabindex="-1">Format partitions <a class="header-anchor" href="#format-partitions" aria-label="Permalink to &quot;Format partitions&quot;">​</a></h2><h3 id="efi-system-partition" tabindex="-1">EFI system partition <a class="header-anchor" href="#efi-system-partition" aria-label="Permalink to &quot;EFI system partition&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkfs.fat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F32</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EFI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdXY</span></span></code></pre></div><h3 id="create-root-filesystem" tabindex="-1">Create root filesystem <a class="header-anchor" href="#create-root-filesystem" aria-label="Permalink to &quot;Create root filesystem&quot;">​</a></h3><p>💽 This will create the filesystem where the system will be installed on</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkfs.ext4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ROOT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdXY</span></span></code></pre></div><h3 id="create-home-partition-filesystem" tabindex="-1">Create home partition filesystem <a class="header-anchor" href="#create-home-partition-filesystem" aria-label="Permalink to &quot;Create home partition filesystem&quot;">​</a></h3><p>🏠 If you created a separate home partition</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkfs.ext4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HOME</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdXY</span></span></code></pre></div><h3 id="create-swap" tabindex="-1">Create Swap <a class="header-anchor" href="#create-swap" aria-label="Permalink to &quot;Create Swap&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkswap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SWAP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdXY</span></span>
<span class="line"><span style="color:#FFCB6B;">swapon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dev/sdXY</span></span></code></pre></div>`,42),i=[n];function l(r,p,d,c,h,m){return e(),a("div",null,i)}const y=t(o,[["render",l]]);export{b as __pageData,y as default};
