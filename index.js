class HtmlWebpackLinkPlugin {
  constructor(option) {
    this.option = option || {};
    this.getSrc = this.getSrc.bind(this);
  }
  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('html-webpack-plugin-before-html-processing', (data, cb) => {
        const {js = [], css = [], before = true} = this.option;
        if (before) {
          data.assets.js = [
            js.map(this.getSrc),
            ...(data.assets.js || []),
          ];
        } else {
          data.assets.js = [
            ...(data.assets.js || []),
            js.map(this.getSrc),
          ];
        }
        data.assets.css = [
          ...(data.assets.css || []),
          css.map(this.getSrc),
        ];
        cb(null, data);
      })
    })
  }
  getSrc(src) {
    const {suffix = false} = this.option;
    if (suffix) {
      const stamp = new Date().getTime();
      if (src.indexOf('?') === -1) {
        return src + '?v=' + stamp;
      } else {
        return src + '&v=' + stamp;
      }
    }
    return src;
  }
}

module.exports = HtmlWebpackLinkPlugin;