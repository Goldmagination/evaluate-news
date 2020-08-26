import { urlChecker } from "../src/client/js/urlChecker";

describe("testing submit", () => {
  it("To verify Url", () => {
    expect(urlChecker("https://www.udacity.com/")).toBe(true);
  });

  it("returns False is something goes wrong", () => {
    expect(urlChecker("nope")).toBe(false);
  });
});
