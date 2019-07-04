export const breadcrumbs = {
  root: {
    name: '/',
    displayName: '主页',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: '监控大盘',
    },
    {
      name: 'statistics',
      displayName: '统计',
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: '子豪表',
        },
        {
          name: 'progress-bars',
          displayName: '进度条',
        },
      ],
    },
    {
      name: 'forms',
      displayName: '表格',
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: '表格元素',
        },
        {
          name: 'form-wizards',
          displayName: '表单向导',
        },
        {
          name: 'medium-editor',
          displayName: '医学工作者',
        },
      ],
    },
    {
      name: 'tables',
      displayName: '表格',
    },
    {
      name: 'ui',
      displayName: 'ui组件',
      disabled: true,
      children: [
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
        {
          name: 'buttons',
          displayName: '按钮',
        },
        {
          name: 'collapse',
          displayName: 'menu.collapse',
        },
        {
          name: 'filters',
          displayName: 'menu.filters'
        },
        {
          name: 'color-pickers',
          displayName: 'menu.colorPickers',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'dropdowns',
          displayName: 'menu.dropdowns',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'tags',
          displayName: 'menu.tags',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
      ],
    },
    {
      name: 'extra',
      displayName: 'menu.extra',
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      disabled: true,
      children: [
        {
          name: 'google-maps',
          displayName: 'Google Maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'Yandex Maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'Leaflet Maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'Bubble Maps',
        },
        {
          name: 'line-maps',
          displayName: 'Line Maps',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      disabled: true,
      children: [
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
  ],
}
