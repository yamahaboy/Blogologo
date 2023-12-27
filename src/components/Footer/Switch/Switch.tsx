import { Switch } from "@mui/material";
import styled from "styled-components";

export const IOSSwitch = styled(Switch).attrs(() => ({
  classes: {
    root: "root",
    switchBase: "switchBase",
    thumb: "thumb",
    track: "track",
    checked: "checked",
    focusVisible: "focusVisible",
  },
  disableRipple: true,
  focusVisibleClassName: "focusVisible",
}))`
  &.root {
    width: 42px;
    height: 26px;
    padding: 0;
    margin: 8px;
  }

  .switchBase {
    padding: 1px;

    &.checked {
      transform: translateX(16px);
      color: white;
      & + .track {
        background-color: #6c1bdb;
        opacity: 1;
        border: none;
      }
    }

    &.focusVisible &.thumb {
      color: #6c1bdb;
      border: 6x sold #fff;
    }
  }

  .thumb {
    width: 24px;
    height: 24px;
  }

  & .track {
    border-radius: 13px;
    border: 1px solid #bdbdbd;
    background-color: #fafafa;
    opacity: 1;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .checked {
  }
  .focusVisible {
  }
`;
