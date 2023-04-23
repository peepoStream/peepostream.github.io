import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/changelog',
    component: ComponentCreator('/changelog', '846'),
    exact: true
  },
  {
    path: '/changelog/0-1-1',
    component: ComponentCreator('/changelog/0-1-1', '3cb'),
    exact: true
  },
  {
    path: '/changelog/archive',
    component: ComponentCreator('/changelog/archive', '393'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '877'),
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
        path: '/config/commands',
        component: ComponentCreator('/config/commands', '0a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/config/moderation',
        component: ComponentCreator('/config/moderation', 'a9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/extension',
        component: ComponentCreator('/extension', 'e3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/extension/install',
        component: ComponentCreator('/extension/install', 'be1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/extension/payouts',
        component: ComponentCreator('/extension/payouts', '615'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/extension/rewards',
        component: ComponentCreator('/extension/rewards', '109'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/FAQ',
        component: ComponentCreator('/FAQ', '608'),
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
        path: '/setup/browser',
        component: ComponentCreator('/setup/browser', 'f41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock',
        component: ComponentCreator('/setup/dock', '1e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock/obs',
        component: ComponentCreator('/setup/dock/obs', '17f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/dock/streamlabs',
        component: ComponentCreator('/setup/dock/streamlabs', '091'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/setup/other',
        component: ComponentCreator('/setup/other', '675'),
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
        path: '/tts',
        component: ComponentCreator('/tts', '837'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tts/command',
        component: ComponentCreator('/tts/command', 'add'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tts/create',
        component: ComponentCreator('/tts/create', '34e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tts/ttse',
        component: ComponentCreator('/tts/ttse', '7cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Twitch400',
        component: ComponentCreator('/Twitch400', '4de'),
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
