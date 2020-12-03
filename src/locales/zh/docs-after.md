# 详细文档

若要使用小组件，外部开发者可请求「将*页面路径*与以下 URL 模板拼接所获得的 URL」以得到 HTML 格式的小组件内容页：
```
GET https://widget.penguin-stats.io/{path}
```

## 页面路径
- 引用**特定关卡**的统计数据：`/result/:server/stage/:stageId`
    - 例 1：引用服务器 国服 `CN` 的关卡 第一章 1-7 `main_01-07` 的统计数据：`/result/CN/stage/main_01-07`
    - 例 2：引用服务器 日服 `JP` 的关卡 沃伦姆德的薄暮 TW-8 `act11d0_08` 的统计数据：`/result/JP/stage/act11d0_08`
- 引用**特定物品**的统计数据：`/result/:server/item/:itemId`
    - 例 1：引用服务器 国服 `CN` 的物品 固源岩 `30012` 的统计数据：`/result/CN/item/30012`
    - 例 2：引用服务器 日服 `JP` 的关卡 家具 `furni` 的统计数据：`/result/JP/item/furni`
- 引用**特定关卡内特定物品**的统计数据：`/result/:server/exact/:stageId/:itemId`
    - 例 1：引用服务器 国服 `CN` 的关卡 第一章 1-7 `main_01-07` **内**的物品 固源岩 `30012` 的统计数据：`/result/CN/exact/main_01-07/30012`
    - 例 2：引用服务器 日服 `JP` 的关卡 沃伦姆德的薄暮 TW-8 `act11d0_08` **内**的物品 家具 `furni` 的统计数据：`/result/JP/exact/act11d0_08/furni`

## 查询参数
其中，页面路径内的相关查询参数定义为
### 服务器 `server` (`string`)
- 声明所查询数据的服务器
- 仅支持下列值：
    - `CN`（国服）
    - `US`（美服）
    - `JP`（日服）
    - `KR`（韩服）

### 关卡 ID `stageId` (`string`)
- 关卡 ID 在本站所有服务及相关数据项内均为唯一值
- 关卡 ID 可使用位于 `https://penguin-stats.io/PenguinStats/api/v2/stages` 的本站公共 API 进行查询

### 物品 ID `itemId` (`string`)
- 物品 ID 在本站所有服务及相关数据项内均为唯一值
- 物品 ID 可使用位于 `https://penguin-stats.io/PenguinStats/api/v2/items` 的本站公共 API 进行查询

## 自定义
与此同时，通过一系列的 Search Params (Query String)，外部开发者还可自定义小组件内的部分展示效果，以期达到更好的用户体验

### 预设语言 `lang`
- 若：
    - 定义了合法值：小组件将会无视浏览器自动语言检测与用户设置保存，直接以所定义语言进行渲染
    - 缺省：
        - 若有已保存的用户设置（用户在小组件底部设置过语言）则使用该语言渲染，否则
        - 检测浏览器或设备所设置的语言，并用该语言渲染；若检测失败，则
        - 使用默认语言 `en` 英文
- 合法值为：
    - `zh`：简体中文
    - `en`：英文（English）
    - `ja`：日语（日本語）
    - `ko`：韩语（한국어）

### 预设主题 `theme`
- 若：
    - 定义了合法值：小组件将会无视用户设置保存，直接以所定义主题进行渲染
    - 缺省：使用默认主题 `light` 亮色主题
- 合法值为：
    - `light`：亮色主题
    - `dark`：暗色主题

### DNT (Do Not Track) `dnt`
- 若：
    - 定义此参数的值为 `1`（阿拉伯数字一）：无论用户浏览器是否设置了 DNT，小组件都将**不会**发送任何分析数据及错误报告数据
    - 缺省：小组件将通过 [`navigator.doNotTrack`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT) 方法检查用户浏览器内的 DNT 设置；若检测到用户设置了 DNT ，那么小组件也将**不会**发送任何分析数据及错误报告数据
- **请注意，本站十分不建议您设置此参数**。此参数的主要设计用途是为需要保证 GDPR、COPPA 等法案合规性的站点而预留的，因为这些法案通常直接杜绝了任何分析信息所可能被合规发送的可能性。
- 我们请求不需要保证 GDPR、COPPA 等法案合规性的站点，**不要设置此参数**。原因在于：
    1. 我们在使用用户数据时已十分克制（详见本站[隐私权政策](https://penguin-stats.io/compliance/privacy-zh.html)）、且这些分析数据对我们需要做出一些决策时有时会起到相当大的作用；
    2. 设置此值也会停止所有错误报告的发送，进而在小组件出现任何问题时，我们将很难在第一时间知晓问题存在；
    3. 由于与此问题相关的所有信息都会由于此参数的设置而被抑制发送，我们在知晓问题存在后也很可能由于错误报告信息不足而极难排查问题诱因。
    
> 但若您确需设置此参数，又或您认为对您站点的用户设置此参数是必要的，小组件也将完全尊重此参数值、不发送任何分析数据与报告数据 :D

## 附：技术性说明
此小组件的实现方式是由 Go 将所有数据按照所指定的查询参数过滤后，仅保留最少可供小组件渲染的数据条目（粒度精细至一个独立的 `key: value` 组），并直接将数据内容注入页面特定标签后，发送给浏览器进行渲染。其中，
- 前端使用了 Vue.js 与 Vuetify，并力求项目大小最小化。源代码开源于 [penguin-statistics/widget-frontend](https://github.com/penguin-statistics/widget-frontend)
- 后端使用了 Go，采用了通用的 MVC 模式开发。源代码开源于 [penguin-statistics/widget-backend](https://github.com/penguin-statistics/widget-backend)
