module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/_includes/partials");

      
  
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };
  