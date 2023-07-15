const markdownIt = require('markdown-it');
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_includes/partials");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.addFilter('markdownify', (markdownString) => {
    return markdownLibrary.render(markdownString);
  });
  eleventyConfig.addFilter("button", function (text, link) {
    return `
      <div class="tickets-button">
        <a href="${link}" target="_blank" class="">
          ${text}
          <span class="close">
            <img src="assets/images/play-outline-svgrepo-com.svg" alt="" />
          </span>
        </a>
      </div>
    `;
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
