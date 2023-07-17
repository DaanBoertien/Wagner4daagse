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

  eleventyConfig.addCollection("artiesten", function(collection) {
    let artiesten = collection.getFilteredByGlob("src/artiesten/*.md");
    // console.log(artiesten);
    return artiesten;
  });

  eleventyConfig.addCollection("programma", function(collection) {
    let programma = collection.getFilteredByGlob("src/programma/*.md");
    // console.log(programma);
    return programma;
  });

  eleventyConfig.addFilter("getArtistData", function(name, artiesten) {
    // console.log('Requested artist name:', name);
    let artist = artiesten.find(artist => artist.data.name === name);
    // console.log('Returned artist data:', artist);
    return artist;
  });
  // Sort 'programma' collection by 'sort_order' attribute
  eleventyConfig.addCollection("sortedProgramma", function(collection) {
    return collection.getFilteredByTag("programma").sort(function(a, b) {
      return a.data.order - b.data.order;
    });
  });


 
    eleventyConfig.addCollection("artistMap", function(collectionApi) {
      let artistMap = {};
      collectionApi.getFilteredByTag("artiesten").forEach((artist) => {
        artistMap[artist.fileSlug] = artist;
      });
      console.log(artistMap);  // Add this line to print the map to the console
      return artistMap;
    });
  
  
    // ...rest of your config
  
  

  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.addFilter('markdownify', (markdownString) => {
    return markdownLibrary.render(markdownString);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
