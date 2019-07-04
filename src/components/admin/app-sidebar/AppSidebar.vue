<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{ $t('监控大盘') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>{{ $t('许子豪') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'charts' }">
          <span slot="title">
            <span>{{ $t('表图') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'progress-bars' }">
          <span slot="title">
            <span>{{ $t('进度条') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span>{{ $t('表格') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'form-elements' }">
          <span slot="title">
            <span>{{ $t('表单元素') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'form-wizards' }">
          <span slot="title">
            <span>{{ $t('表单向导') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'medium-editor' }">
          <span slot="title">
            <span>{{ $t('医学工作者') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
    
      <!-- <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
          <span>{{ $t('ui元素') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'typography' }">
          <span slot="title">
            <span>{{ $t('印刷术') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'buttons' }">
          <span slot="title">
            <span>{{ $t('按钮') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'collapse' }">
          <span slot="title">
            <span>{{ $t('崩溃') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'color-pickers' }">
          <span slot="title">
            <span>{{ $t('采色器') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'filters' }">
          <span slot="title">
            <span>{{ $t('过滤器') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'timelines' }">
          <span slot="title">
            <span>{{ $t('时间线') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'notifications' }">
          <span slot="title">
            <span>{{ $t('通知') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'icon-sets' }">
          <span slot="title">
            <span>{{ $t('图标') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'spinners' }">
          <span slot="title">
            <span>{{ $t('旋转器') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'grid' }">
          <span slot="title">
            <span>{{ $t('网格') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'modals' }">
          <span slot="title">
            <span>{{ $t('模型') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'file-upload' }">
          <span slot="title">
            <span>{{ $t('文件上传') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tags' }">
          <span slot="title">
            <span>{{ $t('标签') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tree-view' }">
          <span slot="title">
            <span>{{ $t('树形图') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'cards' }">
          <span slot="title">
            <span>{{ $t('卡片') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group> -->
    
  
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-maps"></span>
          <span>{{ $t('匹配') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'google-maps' }">
          <span slot="title">
            <span>{{ '谷歌匹配' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'yandex-maps' }">
          <span slot="title">
            <span>{{ 'Yandex匹配' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'leaflet-maps' }">
          <span slot="title">
            <span>{{ '传单地图' }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'bubble-maps' }">
          <span slot="title">
            <span>{{ $t('气泡图') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'line-maps' }">
          <span slot="title">
            <span>{{ $t('线匹配') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-files"></span>
          <span>{{ $t('页面') }}</span>
        </span>
        <sidebar-link
          :to="{ name: '404-pages' }">
          <span slot="title">
            <span>{{ $t('404 页面') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
          <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>{{ $t('设置') }}</span>
        </span>
        <sidebar-link
          :to="{ name: 'login' }"
          target="_blank"
          :isChildLink="true">
          <span slot="title">
            <span>{{ $t('登录页面') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'signup' }"
          target="_blank">
          <span slot="title">
            <span>{{ $t('注册页面') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
        <sidebar-link
        :to="{ name: 'extra' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
          <span>{{ $t('额外') }}</span>
        </span>
      </sidebar-link>
        <sidebar-link
        :to="{ name: 'tables' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{ $t('表单') }}</span>
        </span>
      </sidebar-link>
    </template>
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}

</script>
