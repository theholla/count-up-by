describe("countUp", function() {
  it("counts to an upper bound by a specified interval", function() {
    expect(countUp(25, 5)).to.eql([5, 10, 15, 20, 25]);
  });
})
