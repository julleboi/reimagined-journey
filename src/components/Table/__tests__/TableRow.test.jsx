import React from "react";
import { shallow } from "enzyme";
import TableRow from "../TableRow";

describe("<TableRow />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TableRow items={["foo", "bar", "baz"]} />);
  });

  it("renders correctly", () => {
    const row = wrapper.find(".tableRow");
    const columns = row.children(".tableCell");
    expect(columns).toHaveLength(3);
    expect(row.text()).toMatchInlineSnapshot(`"foobarbaz"`);
  });
});
