import App from "./App";
import { shallow } from "enzyme";
describe("Shallow Home Page", () => {
  it("Object Check", () => {
    let wrapper = shallow(<App></App>);
    expect(wrapper.exists(".App")).toEqual(true);
  });
});
