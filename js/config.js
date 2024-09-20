const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Duckduckgo',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },
    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'ChiefDelphi',
      key: 'c',
      url: 'https://www.chiefdelphi.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Twitch',
      key: 't',
      url: 'https://www.twitch.tv',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },
    {
        category: 'General',
        name: 'Notion',
        key: 'n',
        url: 'https://www.notion.so',
        color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
        icon: 'notion',
        quickLaunch: true,
      },
      {
        category: 'General',
        name: 'GitHub',
        key: 'g',
        url: 'https://github.com',
        search: '/search?q={}',
        color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
        icon: 'github',
        quickLaunch: true,
      },
      {
        category: 'General',
        name: 'HackerNews',
        key: 'h',
        url: 'https://news.ycombinator.com/',
        search: '/search?stories[query]={}',
        color: 'linear-gradient(135deg, #FF6600, #DC5901)',
        icon: 'hackernews',
        quickLaunch: true,
      },
    {
      category: 'General',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
        category: 'School',
        name: 'Shovel',
        key: 's',
        url: 'https://dig.shovelapp.io/196503/home',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
      },
    {
      category: 'School',
      name: 'Brightspace',
      key: 'b',
      url: 'https://purdue.brightspace.com/d2l/home/6824',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },
    {
        category: 'School',
        name: 'Gradescope',
        key: 'g',
        url: 'https://www.gradescope.com/',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
    },
    {
        category: 'School',
        name: 'Campuswire',
        key: 'c',
        url: 'https://campuswire.com/c/G5A0EB83E/feed',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
    },
    {
        category: 'Courses',
        name: 'ENGR133',
        key: 'e',
        url: 'https://purdue-engr-13300.github.io/fall-2024/',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
    },
    {
        category: 'Courses',
        name: 'MA261 Pearson',
        key: 'p',
        url: 'https://mylabmastering.pearson.com/?courseId=13001341#/',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
    },
    {
        category: 'Courses',
        name: 'MA261 Schedule',
        key: 's',
        url: 'https://www.math.purdue.edu/academic/courses/semester/202510/ma26100/2024-Fall.pdf',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
    },
    {
        category: 'Courses',
        name: 'PHYS172',
        key: 'p',
        url: 'https://purdue.brightspace.com/d2l/le/content/1106007/Home',
        color: '#1a73e8',
        icon: 'translate',
        quickLaunch: false,
    },


  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
