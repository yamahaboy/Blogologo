import {
  black,
  darkBackGround,
  darkBackGround10,
  dateInCard50,
  gray,
  headerDarkStyle,
  lightBackGround,
  titleColor,
  white,
  white10,
  white50,
} from "./colorConstants";

type ThemeColorType = {
  backgroundColor: string;
  headerColor: string;
  leftBorder: string;
  searchBtnColor: string;
  userColor: string;
  blogColor: string;
  usedTabsColor: string;
  unUsedTabsColor: string;
  borderTabsColor: string;
  intervalBtnColor: string;
  dropDownColor: string;
  intervalBtnBackColor: string;
  dropDownBackColor: string;
  cardBackColor: string;
  textInCardColor: string;
  paginationColor: string;
  footerTextColor: string;
  inputColor: string;
};
type ThemeVariant = {
  light: ThemeColorType;
  dark: ThemeColorType;
};

export const colors: ThemeVariant = {
  light: {
    backgroundColor: lightBackGround,
    headerColor: white,
    leftBorder: lightBackGround,
    searchBtnColor: titleColor,
    userColor: titleColor,
    blogColor: titleColor,
    usedTabsColor: black,
    unUsedTabsColor: gray,
    borderTabsColor: titleColor,
    intervalBtnColor: titleColor,
    dropDownColor: titleColor,
    intervalBtnBackColor: darkBackGround10,
    dropDownBackColor: white,
    cardBackColor: white,
    textInCardColor: titleColor,
    paginationColor: titleColor,
    footerTextColor: dateInCard50,
    inputColor: white,
  },
  dark: {
    backgroundColor: darkBackGround,
    headerColor: headerDarkStyle,
    leftBorder: darkBackGround,
    searchBtnColor: white,
    userColor: white,
    blogColor: white,
    usedTabsColor: white,
    unUsedTabsColor: white,
    borderTabsColor: white,
    intervalBtnColor: white,
    dropDownColor: white,
    intervalBtnBackColor: white10,
    dropDownBackColor: white10,
    cardBackColor: white10,
    textInCardColor: white,
    paginationColor: white,
    footerTextColor: white50,
    inputColor: white10,
  },
};
