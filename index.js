'use strict';

const colors = {
  foreground: '#cbccc6',
  background: '#141925',
  cursor: '#f9af4f',
  cursorAccent: '#f9af4f',
  selection: 'rgba(151, 151, 155, 0.2)',
  border: '#141925',
};

const terminalColors = {
  black: '#191e2a',
  red: '#ed8274',
  green: '#a6cc70',
  yellow: '#fad07b',
  blue: '#95e6cb',
  magenta: '#cfbafa',
  cyan: '#95e6cb',
  white: '#c7c7c7',
  lightBlack: '#686868',
  lightRed: '#f28779',
  lightGreen: '#bae67e',
  lightYellow: '#ffd580',
  lightBlue: '#95e6cb',
  lightMagenta: '#d4bfff',
  lightCyan: '#95e6cb',
  lightWhite: '#ffffff',
};

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor: colors.background,
    foregroundColor: colors.foreground,
    borderColor: colors.border,
    cursorColor: colors.cursor,
    cursorAccentColor: colors.cursorAccent,
    selectionColor: colors.selection,
    colors: terminalColors,
    css: `
		/* Hide title when only one tab */
		.tabs_title {
      display: none !important;
		}
		/* Add a highlight line below the active tab */
		.tab_tab::before {
      content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1px;
			background-color: ${colors.cursor};
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
      transform: scaleX(1);
			transition: all 350ms cubic-bezier(0, 0, 0.2, 1);
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
      opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
      opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`,
  });
