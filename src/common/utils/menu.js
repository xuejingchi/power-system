export const allMenu = [
  {
    name: '首页',
    url: 'index',
    icon: 'home',
  }, {
    name: '电力统计',
    url: 'power',
    icon: 'bars',
    children: [
      { name: '输出电信息', url: 'power' },
      { name: '同设备对比', url: 'equipment' }
    ]
  }, {
    name: '工具模块',
    url: 'tool',
    icon: 'tool',
    children: [
      { name: '小应用', url: 'tools' },
      { name: '富文本编辑器', url: 'editor' },
      { name: '待办事项', url: 'todoList' },
    ],
  }, {
    name: '测试图片区',
    url: 'pic',
    icon: 'edit',
    children: [
      { name: '照片区域', url: 'album' },
    ],
  }, {
    name: '搜索模块',
    url: 'search',
    icon: 'search',
    children: [
      { name: '搜索iframe测试', url: 'searchEngine' },
    ],
  }, {
    name: '开发模块',
    url: 'dev',
    icon: 'apple-o',
    children: [
      { name: '更多模块', url: 'todo' },
    ],
  }, {
    name: 'test',
    url: 'follow',
    icon: 'heart-o',
  }]