import React from "react";
import "./styles/menu.scss";
import { useState } from "react";

function DropdownMenu(props) {
  const noFilterItem = {
    selectedText: "Filter by Region",
    dropdownText: "No filter",
    value: null,
  };
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);
  const itemList = [...props.itemList, noFilterItem];
  const renderMenuContent = () => {
    return itemList
      .filter((item) => item.value !== selectedItem.value)
      .map((item, index) => {
        return (
          <div
            className="item"
            key={index}
            onClick={() => {
              setSelectedItem(item);
              props.onSelect(item);
            }}
          >
            {props.renderItemContent(item)}
          </div>
        );
      });
  };
  return <div className="menu">{renderMenuContent()}</div>;
}

export default DropdownMenu;
