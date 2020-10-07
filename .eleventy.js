const slugify = require("slugify");

module.exports = function(config) {
    const now = new Date();
    config.setDataDeepMerge(true);

    // Set up layouts
    config.addLayoutAlias("default", "layouts/default.liquid");
    config.addLayoutAlias("character", "layouts/character.liquid");

    // Pass through files
    config.addPassthroughCopy("css");
    config.addPassthroughCopy("js");
    config.addPassthroughCopy("docs");
    config.addPassthroughCopy("images");

    // Character Collection
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
    config.addCollection("characters", function(collection) {
        return collection.getFilteredByTag("character")
            .filter(characterFilter)
            .sort(characterSort);
    });

    // Pages Collection
    const titleSort = (a, b) => {
        return a.data.title.localeCompare(b.data.title);
    };
    config.addCollection("pages", collection => {
        return collection.getFilteredByTag("page")
            .sort(titleSort);
    });

    // {{ array | where: key,value }}
    config.addFilter("where", function (array, key, value) {
        return array.filter(item => {
            const keys = key.split(".");
            const reducedKey = keys.reduce((object, key) => {
                return object[key];
            }, item);
            return (reducedKey === value ? item : false);
        });
    });

    // {{ number | at_least: comparator }}
    config.addFilter("at_least", function (number, comparator) {
        return Math.max(number, comparator);
    });

    // {{ number | at_most: comparator }}
    config.addFilter("at_most", function (number, comparator) {
        return Math.min(number, comparator);
    });

    // {{ array | add: item }}
    config.addFilter("add", function (array, item) {
        array.push(item);
        return array;
    });

    // Super-Slug
    const slug = (string) => {
        return slugify(string).toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=_""`~()]/g,"");
    };
    // Slug Shortcode
    config.addShortcode("slug", function(string) {
        return slug(string);
    });

    // Plus-Minus
    const plusminus = (number, space = true) => {
        return (number < 0 ? ("–" + (space ? " " : "")) : ("+" + (space ? " " : ""))) + Math.abs(number);
    };
    // Plus-Minus Shortcode
    config.addShortcode("plusminus", function(number, color = true, space = true) {
        if (color) {
            return (number < 0 ? `<span class="negative">` : number > 0 ? `<span class="positive">` : `<span class="neutral">`) + plusminus(number, space) + `</span>`;
        }
        return plusminus(number, space);
    });

    // Emoji
    config.addShortcode("emoji", function(emoji) {
        return `<span class="emoji">${emoji}</span>`;
    });

    return {
        dataTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
        passthroughFileCopy: true,
        dir: {
            input: "src"
        }
    };
};
