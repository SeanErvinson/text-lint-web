let actions = {
    removeWhitespaces(source) {
        var pattern = new RegExp("[ ]+", 'g');
        return String(source).replace(pattern, "")
    },
    removeTabs(source) {
        var pattern = new RegExp(`\\t+`, 'g');
        return String(source).replace(pattern, "")
    },
    removeLineBreaks(source) {
        var pattern = new RegExp(`\\n+`, 'g');
        return String(source).replace(pattern, "")
    },
    removeValues(source, value, caseSensitive = false) {
        if(String(value).length == 0 || value == null)
            return "";
        var pattern = new RegExp(`${value}+`, 'g' + (caseSensitive ? "i" : ""));
        return String(source).replace(pattern, "")
    },
    allUpper(source) {
        return String(source).toLocaleUpperCase();
    },
    allLower(source) {
        return String(source).toLocaleLowerCase();
    },
    replacesWith(source, oldPattern, newPattern, caseSensitive = false) {
        var pattern = new RegExp(`[${oldPattern}]+`, 'g' + (caseSensitive ? "i" : ""));
        return String(source).replace(pattern, newPattern)
    },
    getMatches(source, value, caseSensitive = false) {
        var pattern = new RegExp(`[${value}]+`, 'g' + (caseSensitive ? "i" : ""));
        return String(source).match(pattern).length;
    },
    removeAllWhiteCharacters(source) {
        var pattern = new RegExp("\\s+", 'g');
        return String(source).replace(pattern, "")
    }
}

export default actions;
