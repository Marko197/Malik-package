const assert = require("assert");
const source = require("../src/index.js")

describe("Testovanie mojej funkcie", function() {
    it("First function", function(){
        let funkcia = source.firstFunction();
        assert.strictEqual(funkcia, "Toto je moja testovacia funkcia");
    });
});