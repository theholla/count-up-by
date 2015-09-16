describe("countUp", function() {
  it("counts to an upper bound by a specified interval", function() {
    expect(countUp(25,5)).to.eql([" 5", " 10", " 15", " 20", " 25"]);
  });

  // oh no, this is an integration test
  it("handles numbers that are too large or not divisible", function(){
    expect(countUp(1,3)).to.contain("really");
  });

})
