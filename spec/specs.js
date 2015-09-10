describe("binary", function() {

  it("returns 0 when 0 is entered", function() {
    expect(binary(0)).to.equal(0)
  })

  it("returns 1 when 1 is entered", function() {
    expect(binary(1)).to.equal(1)
  })

  it("returns 10 when 2 is entered", function() {
    expect(binary(2)).to.equal(10)
  })

})
