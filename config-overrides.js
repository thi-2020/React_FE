const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@base-color': '#0073b1',
                    '@btn-subtle-hover-bg':'#E7F7FF',
                    '@btn-subtle-hover-color':'#0073b1',
                    '@btn-subtle-color':'#0073b1',
                    '@btn-subtle-primary-color':'#0073b1'

    }
    }
  })
);