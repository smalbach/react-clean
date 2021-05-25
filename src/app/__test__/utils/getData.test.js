/* eslint-disable jest/valid-expect-in-promise */
import getData from "../../shared/utils/getData";

describe("Fetch API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("Call API an retuen data", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "Testing" }));
    getData("https://google.com").then((response) => {
      expect(response.data).toEqual("Testing");
      expect(fetch.mock.call[0][0]).toEqual("https://google.com");
    });
  });
});
