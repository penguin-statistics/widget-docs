export default {
  app: {
    name: 'Widget Documentation',
    title: 'Widget',
    vendor: 'Penguin Statistics'
  },
  settings: {
    language: 'Language'
  },
  generator: {
    heading: {
      title: 'Widget Code Generator',
      subtitle: 'Generates {0} code that could be used on websites'
    },
    server: {
      _name: 'Select Server',
      _null: 'Select Server',
      CN: 'CN',
      US: 'US',
      JP: 'JP',
      KR: 'KR'
    },
    category: {
      _name: 'Select Category',
      _null: 'Select Category',
      stage: 'Statistics of a Stage',
      item: 'Statistics of an Item',
      exact: 'Statistics of an Item in a Stage'
    },
    stageId: {
      _name: 'Stage ID',
      hint: 'Specify Stage ID'
    },
    itemId: {
      _name: 'Item ID',
      hint: 'Specify Item ID'
    },
    copy: {
      null: 'Copy to Clipboard',
      true: 'Copied!',
      false: 'Failed to Copy'
    },
    result: 'Generated Code',
    customize: 'Customize',
    lang: {
      _name: 'Preset Language',
      _null: '(Use default language settings)',
      zh: 'Preset Language: Simplified Chinese (简体中文)',
      en: 'Preset Language: English',
      ja: 'Preset Language: Japanese (日本語)',
      ko: 'Preset Language: Korean (한국어)'
    },
    theme: {
      _name: 'Preset Theme',
      _null: '(Use default theme settings)',
      light: 'Preset Theme: Light theme',
      dark: 'Preset Theme: Dark theme'
    },
    dnt: {
      _name: 'Preset DNT (Do Not Track)',
      _null: '(Use default DNT settings)',
      1: 'Preset DNT: Enabled'
    }
  },
  docs: {
    before: require('./docs-before.md').default,
    after: require('./docs-after.md').default
  }
}
