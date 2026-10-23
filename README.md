# WeUp Clock 官网

纯静态 HTML / CSS / JavaScript，无框架、依赖安装或构建步骤。首页支持英文／简体中文；App 的 10 种语言与官网的两种语言是不同范围。

## 文件与真源

本项目的 `store/site/` 是官网维护真源，与 App 源码、商店素材一起保存在私有仓库 `FerryCorleone/wake-together-ios`。仅将此目录同步至公开仓库 [FerryCorleone/weup-clock-site](https://github.com/FerryCorleone/weup-clock-site) 根目录；不要上传整个 App 项目、`.local/` 或 `store/review-notes.txt`。

| 文件 | 用途 |
| --- | --- |
| `index.html` | 官网首页，英文文案及动画示意 |
| `assets/site.js` | 中文文案、语言切换、滚动动画与下载链接 |
| `assets/site.css` | 首页样式 |
| `assets/config.js` | App Store 链接及支持邮箱配置 |
| `assets/poses.js` | 动作轮廓矢量数据 |
| `support.html` / `privacy.html` | 中英文帮助与隐私政策 |
| `style.css` / `icon.png` | 帮助页样式及 App 图标 |
| `.nojekyll` / `robots.txt` | 静态托管配置 |
| `CHANGELOG.md` | 官网独立版本记录 |

产品事实以项目 `docs/PRD.md` 等最新文档为准。手机画面为网页动画示意，不是真机识别录像。

## 本地预览

从 App 项目根目录运行：

```sh
./scripts/preview-site.sh
```

打开 <http://127.0.0.1:8783/?lang=zh>；英文用 `?lang=en`。服务仅监听本机，`Ctrl+C` 停止。也可在此目录执行 `python3 -m http.server 8783 --bind 127.0.0.1`。

## 配置

下载链接只在 `assets/config.js` 中配置，按钮通过 `data-appstore` 读取。当前 `APP_STORE_ID` / `APP_STORE_URL` 留空，按钮会回退到 Apple 的通用 App Store 页面。项目商店资料记录 App ID 为 `6822047203`；待核实公开商品页可访问后再填入，不能用占位链接宣称已经上架。支持邮箱为 `qiezi.products@gmail.com`；变更邮箱时也应核对帮助／隐私页中的文字和 mailto。

## GitHub 版本与发布

- 官网版本独立使用 `site-vX.Y.Z`；预览使用 `site-vX.Y.Z-preview.N`，不修改 iOS build 号。
- 先在本目录修改并本地检查，再提交私有 App 仓库。
- 公开仓库使用 `codex/` 预览分支和草稿 PR。公开仓库 `main` 根目录已启用 GitHub Pages，合并到 `main` 会自动上线。
- 2026-10-16 导入版为 `site-v1.0.0-preview.1`，先本地审阅，不自动替换线上支持页。私有仓库 main 表示已纳入源码管理，不代表网站上线。

同步示例（从 App 项目根目录；公开仓库检出放在忽略的 `.local/`）：

```sh
# 首次才需要 clone
git clone https://github.com/FerryCorleone/weup-clock-site.git .local/weup-clock-site
git -C .local/weup-clock-site switch -c codex/site-v1.0.0-preview
rsync -av store/site/ .local/weup-clock-site/
git -C .local/weup-clock-site diff --check
# 核对差异后 commit、push 该预览分支，创建草稿 PR；审阅确认后才合并。
```

公开站地址：<https://ferrycorleone.github.io/weup-clock-site/>。隐私 URL 保持 `/privacy.html`；旧首页帮助深链接 `/#support` 与 `/#zh` 跳转到 `support.html` 对应锚点。不要改变已登记的 URL。

正式上线前检查首页中英文、手机窄屏、帮助／隐私链接、旧帮助锚点和真实 App Store 商品链接。网站可以直接部署公开仓库根目录，无需构建；App 私有仓库的托管根目录应选 `store/site/`，不得选项目根目录。
