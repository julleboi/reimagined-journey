import React from "react";
import { mount } from "enzyme";
import MTable from "@material-ui/core/Table";
import TableBody from "../TableBody";

describe("<TableBody />", () => {
  it.each([
    {
      data: [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
      ],
      length: 3,
      expected: 9,
    },
    {
      data: [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
      ],
      length: 2,
      expected: 6,
    },
  ])("renders correct amount of cells", ({ data, length, expected }) => {
    const wrapper = mount(
      <MTable>
        <TableBody rows={data} rowLength={length} />
      </MTable>
    );
    const cells = wrapper.find("td.tableCell");
    expect(cells).toHaveLength(expected);
  });
});
