import React from "react";
import { mount } from "enzyme";
import MTable from "@material-ui/core/Table";
import TableHeader from "../TableHeader";

describe("<TableHeader />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MTable>
        <TableHeader columnNames={["date", "id", "value"]} />
      </MTable>
    );
  });

  test("renders columns correctly", () => {
    const header = wrapper.find("thead.tableHeader");
    const columns = header.find("th.tableCell");
    expect(columns).toHaveLength(3);
    expect(header.text()).toMatchInlineSnapshot(`"dateidvalue"`);
  });
});
