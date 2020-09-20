const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@base-color': '#00916E',
                    '@btn-subtle-hover-bg':'#E5FFF9',
                    '@btn-subtle-hover-color':'#00916E',
                    '@btn-subtle-color':'#00916E',
                    '@btn-subtle-primary-color':'#00916E'

    }
    }
  })
);