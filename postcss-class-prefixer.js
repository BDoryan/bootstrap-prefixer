module.exports = (opts = {}) => {
    const { prefix } = opts;
  
    return (root) => {
      root.walkRules((rule) => {
        rule.selector = rule.selector.replace(/\.(?!\.)[^\s\.:#]+/g, (match) => {
          return `.${prefix}-${match.slice(1)}`;
        });
      });
    };
  };