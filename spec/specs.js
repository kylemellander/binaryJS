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

  it("returns large number result", function() {
    expect(binary(2536)).to.equal(100111101000)
  })

})

describe("trinary", function() {

  it("returns 0 when 0 is entered", function() {
    expect(trinary(0)).to.equal(0)
  })

  it("returns 1 when 1 is entered", function() {
    expect(trinary(1)).to.equal(1)
  })

  it("returns 10 when 2 is entered", function() {
    expect(trinary(2)).to.equal(2)
  })

  it("returns large number result", function() {
    expect(trinary(236)).to.equal(22202)
  })

})

describe("numberConverter", function() {

  it("returns 0 when 0 is entered", function() {
    expect(numberConverter(0, 16)).to.equal("0")
  })

  it("returns 1 when 1 is entered", function() {
    expect(numberConverter(1, 16)).to.equal("1")
  })

  it("returns 10 when 2 is entered", function() {
    expect(numberConverter(10, 16)).to.equal("a")
  })

  it("returns large number result", function() {
    expect(numberConverter(236, 16)).to.equal("ec")
  })

})
