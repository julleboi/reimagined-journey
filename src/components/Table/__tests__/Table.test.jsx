import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import Table from "../Table";

describe("<Table />", () => {
  let props;
  let wrapper;

  const columns = ["Idx", "ID", "Value"];
  const comp = (a, b) => a[0] - b[0];
  const unsortedData = [
    ["1", "sample-id-321", "value1"],
    ["0", "sample-id-123", "value2"],
    ["2", "sample-id-111", "value3"],
    ["3", "sample-id-333", "value4"],
  ];

  beforeEach(async () => {
    props = {
      title: "Test",
      columnNames: columns,
      compareFn: comp,
      fetchData: jest.fn(() => Promise.resolve(unsortedData)),
    };
    wrapper = mount(<Table {...props} />);
    await act(async () => {
      await Promise.resolve(wrapper);
      await new Promise((resolve) => setImmediate(resolve));
      wrapper.update();
    });
  });

  it("calls props.fetchData()", () => {
    expect(props.fetchData).toHaveBeenCalled();
  });

  it("renders and sorts data correctly", () => {
    const rows = wrapper.find("tbody tr.tableRow");
    const asText = rows.map((e) => e.text());
    expect(asText).toMatchInlineSnapshot(`
      Array [
        "0sample-id-123value2",
        "1sample-id-321value1",
        "2sample-id-111value3",
        "3sample-id-333value4",
      ]
    `);
  });

  it("sorts data correctly after pressing toggle order", () => {
    const toggle = wrapper.find(".toggleOrder").first();
    toggle.simulate("click");

    const rows = wrapper.find("tbody tr.tableRow");
    const asText = rows.map((e) => e.text());
    expect(asText).toMatchInlineSnapshot(`
      Array [
        "3sample-id-333value4",
        "2sample-id-111value3",
        "1sample-id-321value1",
        "0sample-id-123value2",
      ]
    `);
  });
});
