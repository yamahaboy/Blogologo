import { darkBackGround, darkBackGround10, lightBackGround, titleColor, white } from "./colorConstants";

type ThemeColorType = {
    backgroundColor: string;
    headerColor: string;
    searchBtnColor: string;
    userColor: string;
    blogColor: string;
    tabsColor: string;
    intervalBtnColor: string;
    dropDownColor: string;
    intervalBtnBackColor: string;
    dropDownBackColor: string;
    cardBackColor: string;
    textInCardColor: string;
    paginationColor:string;
}
type ThemeVariant = {
    light: ThemeColorType;
    dark: ThemeColorType;
  };

  export const colors: ThemeVariant = {
    light: {
        backgroundColor: lightBackGround,
        headerColor: white,
        searchBtnColor: titleColor,
        userColor: titleColor,
        blogColor:titleColor,
        tabsColor: titleColor,
        intervalBtnColor: titleColor,
        dropDownColor: titleColor,
        intervalBtnBackColor:darkBackGround10,
        dropDownBackColor: white,
        cardBackColor: white,
        textInCardColor: titleColor,
        paginationColor:titleColor,
    },
    dark: {
        backgroundColor: darkBackGround,
        headerColor: darkBackGround10,
        searchBtnColor: white,
        userColor: white,
        blogColor:white,
        tabsColor: white,
        intervalBtnColor: white,
        dropDownColor: white,
        intervalBtnBackColor:darkBackGround10,
        dropDownBackColor: darkBackGround10,
        cardBackColor: darkBackGround10,
        textInCardColor: white,
        paginationColor:white,
    }
  };