import React from "react";
import { mount, shallow } from "enzyme";
import TableFooter from "../TableFooter";

describe("<TableFooter />", () => {
  let cb;

  beforeEach(() => {
    cb = jest.fn();
  });

  test("triggers callback on button click", () => {
    const wrapper = mount(
      <TableFooter isLoading={false} error="" buttonCb={cb} />
    );
    wrapper.find("button.loadButton").simulate("click");
    expect(cb).toHaveBeenCalled();
  });

  test("renders a spinner when isLoading is true", () => {
    const wrapper = shallow(
      <TableFooter isLoading={true} error="" buttonCb={cb} />
    );
    expect(wrapper.find(".tableLoading")).toHaveLength(1);
  });

  describe("error message", () => {
    test("is hidden when it is an empty string", () => {
      const wrapper = shallow(
        <TableFooter isLoading={false} error="" buttonCb={cb} />
      );
      const error = wrapper.find(".tableError");
      expect(error.prop("hidden")).toBe(true);
    });

    test("is not hidden when it is not an empty string", () => {
      const wrapper = shallow(
        <TableFooter isLoading={false} error="Some error" buttonCb={cb} />
      );
      const error = wrapper.find(".tableError");
      expect(error.prop("hidden")).toBe(false);
    });
  });
});
