module.exports = function(eleventyConfig) {
    // Pull in necessary packages
    const slugify = require("slugify");

    // Set up layouts
    eleventyConfig.addLayoutAlias("default", "layouts/default.html");
    eleventyConfig.addLayoutAlias("character", "layouts/character.html");

    // Pass through files
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("docs");
    eleventyConfig.addPassthroughCopy("images");

    // Collections
    const characterSort = (a, b) => {
        if (a.data.list_priority) {
            return -1;
        }
        if (b.data.list_priority) {
            return 1;
        }
        if (a.data.title < b.data.title) {
            return -1;
        }
        if (a.data.title > b.data.title) {
            return 1;
        }
        return 0;
    };
    const characterFilter = (character) => !character.data.draft;
    eleventyConfig.addCollection("characters", function(collection) {
        return collection.getFilteredByGlob("_characters/*.md")
            .filter(characterFilter)
            .sort(characterSort);
    });

    // {{ array | where: key,value }}
    eleventyConfig.addFilter("where", function (array, key, value) {
        return array.filter(item => {
            const keys = key.split(".");
            const reducedKey = keys.reduce((object, key) => {
                return object[key];
            }, item);
            return (reducedKey === value ? item : false);
        });
    });

    // {{ number | at_least: comparator }}
    eleventyConfig.addFilter("at_least", function (number, comparator) {
        return Math.max(number, comparator);
    });

    // {{ number | at_most: comparator }}
    eleventyConfig.addFilter("at_most", function (number, comparator) {
        return Math.min(number, comparator);
    });

    // {{ array | add: item }}
    eleventyConfig.addFilter("add", function (array, item) {
        array.push(item);
        return array;
    });

    // Super-Slug
    const slug = (string) => {
        return slugify(string).toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=_""`~()]/g,"");
    };
    // Slug Shortcode
    eleventyConfig.addShortcode("slug", function(string) {
        return slug(string);
    });

    // Plus-Minus
    const plusminus = (number, space = true) => {
        return (number < 0 ? ("–" + (space ? " " : "")) : ("+" + (space ? " " : ""))) + Math.abs(number);
    };
    // Plus-Minus Shortcode
    eleventyConfig.addShortcode("plusminus", function(number, color = true, space = true) {
        if (color) {
            return (number < 0 ? `<span class="negative">` : number > 0 ? `<span class="positive">` : `<span class="neutral">`) + plusminus(number, space) + `</span>`;
        }
        return plusminus(number, space);
    });

    // Emoji
    eleventyConfig.addShortcode("emoji", function(emoji) {
        return `<span class="emoji">${emoji}</span>`;
    })
};
