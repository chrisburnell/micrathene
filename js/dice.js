;(function() {

    "use strict";

    const rollers = document.querySelectorAll("[data-roll]");

    let values, outcomes, totals, total;

    let containsNumber = /\d|%/g;
    let containsAdjacentCommas = /,,/g;
    let valueSplit = /,\s*|\s+/g;
    let diceSplit = /[dD]/g;
    let modifierReplace = /\s*([\+\-\×\*\x\÷\/])/g;
    let modifierSymbol = /[\+\-\×\*\x\÷\/]/g;
    let modifierMatch = /[\+\-\×\*\x\÷\/](\d|min|max)+/g;
    let minMatch = /min/g;
    let maxMatch = /max/g;

    let fixDiceValue = value => {
        if (value.match(diceSplit)) {
            return value.charAt(0).match(diceSplit) ? `1${value}` : value;
        }
        return `1d${value}`;
    };

    let fixDiceValues = inputValues => {
        return inputValues
            .trim()
            .replace("%", "100")
            .replace(modifierReplace, "$1")
            .split(valueSplit)
            .map(fixDiceValue);
    };

    let roll = (inputValues, target = null) => {
        if (!inputValues.match(containsNumber) || inputValues.match(containsAdjacentCommas)) {
            console.error("You must enter a valid dice notation.");
            return;
        }
        let multiplier, after, number, modifiers;
        values = fixDiceValues(inputValues);
        outcomes = [];
        totals = [];
        console.log("%cRoll: " + values.join(", "), "font-weight: bold");
        for (let value of values) {
            [multiplier, after] = value.split(diceSplit, 2);
            number = after.split(modifierSymbol)[0];
            modifiers = after.match(modifierMatch);
            for (let i = 1; i <= multiplier; i++) {
                outcomes.push(Math.ceil(number * Math.random()));
            }
            addOutcomes(outcomes, modifiers);
            outcomes = [];
        }
        totalOutcomes(totals, target);
    };

    let addOutcomes = (outcomes, modifiers) => {
        total = outcomes.reduce((a, b) => a + b);
        if (modifiers) {
            for (let i in modifiers) {
                let symbol = modifiers[i].substr(0, 1);
                let number = modifiers[i].substr(1);
                let limit = null;
                let index = 0;
                if (symbol === "+") {
                    if (outcomes.length > 1 && number.match(minMatch)) {
                        for (let j in outcomes) {
                            if (!limit || outcomes[j] < limit) {
                                limit = outcomes[j];
                            }
                        }
                        number = limit;
                        modifiers[i] = modifiers[i].toLowerCase() + "(" + number + ")";
                    }
                    else if (outcomes.length > 1 && number.match(maxMatch)) {
                        for (let j in outcomes) {
                            if (!limit || outcomes[j] > limit) {
                                limit = outcomes[j];
                            }
                        }
                        number = limit;
                        modifiers[i] = modifiers[i].toLowerCase() + "(" + number + ")";
                    }
                    total += parseInt(number);
                }
                else if (symbol === "-") {
                    if (outcomes.length > 1 && number.match(minMatch)) {
                        for (let j in outcomes) {
                            if (!limit || outcomes[j] < limit) {
                                limit = outcomes[j];
                            }
                        }
                        number = limit;
                        modifiers[i] = modifiers[i].toLowerCase() + "(" + number + ")";
                    }
                    else if (outcomes.length > 1 && number.match(maxMatch)) {
                        for (let j in outcomes) {
                            if (!limit || outcomes[j] > limit) {
                                limit = outcomes[j];
                            }
                        }
                        number = limit;
                        modifiers[i] = modifiers[i].toLowerCase() + "(" + number + ")";
                    }
                    total -= parseInt(number);
                }
                else if (symbol === "×" || symbol === "*" || symbol === "x") {
                    total *= parseInt(number);
                }
                else if (symbol === "÷" || symbol === "/") {
                    total /= parseInt(number);
                }
            }
            outcomes = outcomes.concat(modifiers);
        }
        total = Math.floor(total);
        totals.push(total);
        console.log("Outcome" + (outcomes.length > 1 ? "s" : "") + ": " + outcomes.join(", ") + " = " + total);
    };

    let totalOutcomes = (totals, target = null) => {
        total = totals.reduce((a, b) => a + b);
        console.log("%cTotal: " + total, "color: green; font-weight: bold");
        if (target) {
            target.innerHTML = total;
        }
    };

    for (let roller of rollers) {
        roller.addEventListener("click", event => {
            event.preventDefault();
            roll(roller.dataset.roll);
        });
    }

})();
