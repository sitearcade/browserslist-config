// vars

const env =
  process.env.BROWSERSLIST_ENV ||
  process.env.NODE_ENV ||
  'development';

// vars

const config = {
  development: [
    'last 1 version and last 1 year',
    'unreleased versions',
    'node >= 12',
    'not dead',
    'not android > 0',
  ],

  production: [
    'last 2 years',
    'unreleased versions',
    'node >= 12',
    '> 0.2%',
    'not dead',
    'not ie > 0',
    'not android > 0',
  ],
};

// export

module.exports = config[env] || config.development;
