import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '08e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '717'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '486'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '34d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'af1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '840'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c95'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f43'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'fd6'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'fd2'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'd2b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '681'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fa9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '7f4'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '404'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'b6e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'df3'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b77'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/account',
        component: ComponentCreator('/account', 'aef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/account/billing',
        component: ComponentCreator('/account/billing', '981'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/account/permissions',
        component: ComponentCreator('/account/permissions', 'ff0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/config',
        component: ComponentCreator('/config', '7b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/config/commands',
        component: ComponentCreator('/config/commands', 'f7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/config/moderation',
        component: ComponentCreator('/config/moderation', '5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rewards',
        component: ComponentCreator('/rewards', 'af4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rewards/actions',
        component: ComponentCreator('/rewards/actions', '9d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rewards/create',
        component: ComponentCreator('/rewards/create', '7d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/rewards/tts',
        component: ComponentCreator('/rewards/tts', '236'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup',
        component: ComponentCreator('/setup', '36f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/chat',
        component: ComponentCreator('/setup/chat', '09c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/chat/command',
        component: ComponentCreator('/setup/chat/command', 'd01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/chat/setup',
        component: ComponentCreator('/setup/chat/setup', '4ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/chat/TTSE',
        component: ComponentCreator('/setup/chat/TTSE', '0f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock',
        component: ComponentCreator('/setup/dock', '64a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock/browser-source',
        component: ComponentCreator('/setup/dock/browser-source', '32e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock/obs',
        component: ComponentCreator('/setup/dock/obs', '1cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock/other',
        component: ComponentCreator('/setup/dock/other', '10d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock/streamlabs',
        component: ComponentCreator('/setup/dock/streamlabs', '991'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/streamdeck',
        component: ComponentCreator('/setup/streamdeck', 'b41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Twitch400',
        component: ComponentCreator('/Twitch400', 'd27'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
