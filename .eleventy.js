module.exports = (config) => {
    config.addPassthroughCopy('src/css');
    config.addPassthroughCopy('src/js');
    config.addPassthroughCopy('src/images');
    return {
    dir: {
        input: 'src',
        output: '_site'
    },
  };
};
