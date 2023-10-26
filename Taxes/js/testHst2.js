import IncomeTax from "./IncomeTax.js";

QUnit.test("Ontario Tax 1", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateOT(40922), 2066.56, "We expect HST to be 2066.56");
});

QUnit.test("Ontario Tax 2", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateOT(81847), 7489.00, "We expect HST to be 7489.00");
});

QUnit.test("Ontario Tax 3", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateOT(150000), 16740.00, "We expect HST to be 16740.00");
});

QUnit.test("Ontario Tax 4", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateOT(220000), 26752.00, "We expect HST to be 26755.00");
});

QUnit.test("Ontario Tax 5", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateOT(500000), 65800.00, "We expect HST to be 65800.00");
});




QUnit.test("Federal Tax 1", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateFT(45282), 6792.30, "We expect HST to be 6792.30");
});

QUnit.test("Federal Tax 2", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateFT(90563), 18565.41, "We expect HST to be 18565.42");
});

QUnit.test("Federal Tax 3", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateFT(140388), 36500.88, "We expect HST to be 36500.88");
});

QUnit.test("Federal Tax 4", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateFT(200000), 58000.00, "We expect HST to be 58000.00");
});

QUnit.test("Federal Tax 5", function (assert) {
    const oHst = new IncomeTax();
    assert.equal(oHst.calculateFT(250000), 82500.00, "We expect HST to be 82500.00");
});
