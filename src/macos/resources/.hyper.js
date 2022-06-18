// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.9)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'UNDERLINE',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#212121',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#ffffff',

    // terminal selection color
    selectionColor: "rgba(248,28,229,0.3)",

    // border color (window, tabs)
    borderColor: '#333',

    // custom CSS to embed in the main window
    //css: '@media (prefers-color-scheme: light) { .hyper_main { background-color: white; color: black; } .terminal { background-color: white; color: black;  } .xterm-link-layer { background-color: white; color: black;  } } .xterm-viewport { background-color: #eeeeee !important }',
    css: '',
    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object

    colors: {
      black: '#4f5354',
      red: '#ff669e',
      green: '#94d118',
      yellow: '#c4b322',
      blue: '#29cae7',
      magenta: '#a16cff',
      cyan: '#a3bbbf',
      white: '#f7f8f2',
      lightBlack: '#1c1d1f',
      lightRed: '#f92772',
      lightGreen: '#a7e22e',
      lightYellow: '#fe9720',
      lightBlue: '#66d9ee',
      lightMagenta: '#9e6efe',
      lightCyan: '#5f7173',
      lightWhite: '#cbccc6'
    },
    // colors: {
    //   black: '#1c1d1f',
    //   red: '#f92772',
    //   green: '#a7e22e',
    //   yellow: '#fe9720',
    //   blue: '#66d9ee',
    //   magenta: '#9e6efe',
    //   cyan: '#5f7173',
    //   white: '#cbccc6',
    //   lightBlack: '#4f5354',
    //   lightRed: '#ff669e',
    //   lightGreen: '#beed5f',
    //   lightYellow: '#e7db75',
    //   lightBlue: '#66d9ee',
    //   lightMagenta: '#a16cff',
    //   lightCyan: '#a3bbbf',
    //   lightWhite: '#f7f8f2',
    // },

    hyperVibrance: {
        vibrancy: 'ultra-dark',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    //shell: '/usr/local/bin/bash',
    shell: '/usr/local/bin/bash',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: false,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg


    hyperTabs: {
      trafficButtons: true,
      border: false,
      tabIcons: false,
      closeAlign: 'left',
    }
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-quit",
    "hyper-search",
    "hyper-tabs-enhanced",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [
    // "fixed-statusline"
    "lightmode"
  ],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
