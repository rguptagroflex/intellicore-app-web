import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
  sidebarIsActive: boolean;
  mobileSidebarIsActive: boolean;
  pageLoadingIsActive: boolean;
  overlayLoadingIsActive: boolean;
}

const initialState: ThemeState = {
  theme: "dark",
  sidebarIsActive: false,
  mobileSidebarIsActive: false,
  pageLoadingIsActive: false,
  overlayLoadingIsActive: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.theme = "light";
    },
    setDarkTheme: (state) => {
      state.theme = "dark";
    },
    openSidebar: (state) => {
      state.sidebarIsActive = true;
    },
    closeSidebar: (state) => {
      state.sidebarIsActive = false;
    },
  },
});

export const { setLightTheme, setDarkTheme, openSidebar, closeSidebar } =
  themeSlice.actions;
export default themeSlice.reducer;
