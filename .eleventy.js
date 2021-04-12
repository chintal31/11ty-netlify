const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src/",
      includes: "_includes",
      output: "_site",
    },
  };
};
