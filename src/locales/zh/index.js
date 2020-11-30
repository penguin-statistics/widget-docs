export default {
  app: {
    name: '小组件使用文档',
    vendor: '企鹅物流数据统计'
  },
  settings: {
    language: '语言选择'
  },
  generator: {
    heading: {
      title: '嵌入代码生成器',
      subtitle: '将生成可供网站使用的 {0} 代码'
    },
    server: {
      _name: '选择服务器',
      _null: '选择服务器',
      CN: 'CN（国服）',
      US: 'US（美服）',
      JP: 'JP（日服）',
      KR: 'KR（韩服）'
    },
    category: {
      _name: '选择数据统计类别',
      _null: '选择数据统计类别',
      stage: '关卡统计数据',
      item: '物品统计数据',
      exact: '关卡内特定物品统计数据'
    },
    stageId: {
      _name: '关卡 ID',
      hint: '请输入关卡 ID'
    },
    itemId: {
      _name: '物品 ID',
      hint: '请输入物品 ID'
    },
    copy: {
      null: '拷贝至剪贴板',
      true: '成功拷贝至剪贴板',
      false: '拷贝至剪贴板失败'
    },
    result: '已生成的可嵌入代码',
    customize: '自定义',
    lang: {
      _name: '预设语言',
      _null: '（使用缺省语言设置）',
      zh: '预设语言：简体中文',
      en: '预设语言：英文（English）',
      ja: '预设语言：日语（日本語）',
      ko: '预设语言：韩语（한국어）'
    },
    theme: {
      _name: '预设主题',
      _null: '（使用缺省主题设置）',
      light: '预设主题：亮色主题',
      dark: '预设主题：暗色主题'
    },
    dnt: {
      _name: '预设 DNT (Do Not Track)',
      _null: '（使用缺省 DNT 设置）',
      1: '预设 DNT：启用'
    }
  },
  docs: {
    before: require('./docs-before.md').default,
    after: require('./docs-after.md').default
  }
}
