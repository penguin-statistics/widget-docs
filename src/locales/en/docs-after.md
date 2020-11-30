# Documentation

Developers can obtain the widget in HTML format after concatenating *routes* with the following URL template:
```
GET https://widget.penguin-stats.io/{routes}
```

## Routes
- To get Statistics of a **Stage**: `/result/:server/stage/:stageId`
    - Example 1: Statistics of Stage 1-7 in Mainline Chapter 1 `main_01-07` within Server `CN`: `/result/CN/stage/main_01-07`
    - Example 2: Statistics of Stage TW-8 in Twilight of Wolumonde `act11d0_08` within Server `JP`: `/result/JP/stage/act11d0_08`
- To get Statistics of an **Item**: `/result/:server/item/:itemId`
    - Example 1: Statistics of Item Orirock Cube `30012` within Server `CN`: `/result/CN/item/30012`
    - Example 2: Statistics of Item Furniture `furni` within Server `JP`: `/result/JP/item/furni`
- To get Statistics of **an Item in a Stage**: `/result/:server/exact/:stageId/:itemId`
    - Example 1: Statistics of Item Orirock Cube `30012` **in** Stage 1-7 `main_01-07` within Server `CN`: `/result/CN/exact/main_01-07/30012`
    - Example 2: Statistics of Item Furniture `furni` **in** Stage TW-8 `act11d0_08` within Server `JP`: `/result/JP/exact/act11d0_08/furni`

## Query Parameters
Below listed the descriptions of all Query Parameters required for developers to provide:

### Server `server` (`string`)
- Declares the server to query data with
- Valid values are:
    - `CN`
    - `US`
    - `JP`
    - `KR`

### Stage ID `stageId` (`string`)
- The Stage ID is a unique value across all services and related data entries in the service we provide
- The Stage ID can be looked up using the public API of this site at `https://penguin-stats.io/PenguinStats/api/v2/stages`

### Item ID `itemId` (`string`)
- The Item ID is a unique value across all services and related data entries in the service we provide
- The Item ID can be looked up using the public API of this site at `https://penguin-stats.io/PenguinStats/api/v2/items`

## Customization
Through Search Params (a.k.a. Query Strings), developers could also customize appearance of the widget in order to improve user experience further.

### Preset Language `lang`
- If:
    - Defined one of valid values: the widget will ignore the results from automatic browser language detection and saved user settings, and will render the widget directly with the specified language
    - (Default behavior):
        - If user had explicitly set the language using the settings panel located at bottom of widget, the widget will render in such language. Otherwise
        - Widget would detect the language from the browser and render in such language; if the detection fails, or we haven't support the detected language,
        - Widget would render in default language `en` English
- Valid values are:
    - `zh`: Simplified Chinese (简体中文)
    - `en`: English
    - `ja`: Japanese (日本語)
    - `ko`: Korean (한국어)

### Preset Theme `theme`
- If:
    - Defined one of valid values: the widget would render directly with the specified theme
    - (Default behavior): Use the default theme `light` (Light theme)
- Valid values are:
    - `light`: Light theme
    - `dark`: Dark theme

### DNT (Do Not Track) `dnt`
- If:
    - `1` (number one) defined as the value: Regardless the DNT preference of the browser, widget would **not** send any Analytical and Error Reporting data
    - (Default behavior): the widget would check the DNT preference of the browser through method [`navigator.doNotTrack`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT). If DNT has been detected, the widget would then **not** send any Analytical data and Error Reporting data
- **Enable DNT explicitly is NOT RECOMMENDED**. This parameter is to keep sites that needs compliance for GDPR, COPPA or other equivalent legal documents. Those documents typically denies the site to send any Analytical data, and even so if they allows to do so, documents usually limits those data to only send under the same origin of the site. As to keep those sites from disputes or even lawsuits, we've respected DNT within our widget system.
- We kindly request sites that doesn't need to ensure compliance with GDPR, COPPA or other equivalent legal documents to **NOT enable DNT explicitly** using this parameter. Here's why:
    1. We have a strict [Privacy Policy (in Chinese)](https://penguin-stats.io/compliance/privacy-zh.html) which strictly limits our usage of the Analytical data. Apart from that, those Analytical data oftenly gives us the support we need to make essential decisions for our site.
    2. Setting this value would also stop the widget to send any Error Reports, which indicates that if there's any error occurred in the widget, we wouldn't be able to be notified as soon as possible.
    3. Since the sending of all Error Reports will be also suppressed, it would be very difficult for us to troubleshoot the cause of the error.
    
> That being said, if you think it is necessary to set this parameter for users of your site, the widget will surely respect your decision and would not send any Analytical and Error Reporting data to us :D

## Appendix: Architectural Description
To keep the size of the widget itself, we've designed a mechanism which our backend would filter out matrix records for the queried parameters only, and afterwards the backend would collect only the dependencies of such records and populate them into the `<script type="application/json">` tag of the HTML response along with the packed frontend project. Respectively for frontend and backend,

- Frontend: Build on top of Vue.js and Vuetify. Source code at [penguin-statistics/widget-frontend](https://github.com/penguin-statistics/widget-frontend).
- Backend: Build on top of Go. Source code at [penguin-statistics/widget-backend](https://github.com/penguin-statistics/widget-backend).