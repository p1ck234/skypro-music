import { getValueFromLocalStorage } from "@/utils/getValueFromLS";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  authState: boolean;
  userData: {
    id: number;
    email: string;
    username: string;
  } | null;
  token: {
    access: string;
    refresh: string;
  } | null;
};

function checkLSAuth(key: string) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || "");
    return data || null;
  } catch (error) {
    return null;
  }
}

const initialState: AuthStateType = {
  authState: !!checkLSAuth("user"),
  userData: checkLSAuth("user"),
  token: checkLSAuth("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setUserData: (
      state,
      action: PayloadAction<{
        email?: string;
        username?: string;
        id?: number;
        access?: string;
        refresh?: string;
      } | null>
    ) => {
      if (action.payload) {
        state.userData = {
          id: action.payload.id || state.userData?.id || 0,
          email: action.payload.email || state.userData?.email || "",
          username: action.payload.username || state.userData?.username || "",
        };
        state.token = {
          access: action.payload.access || state.token?.access || "",
          refresh: action.payload.refresh || state.token?.refresh || "",
        };
      } else {
        state.userData = null;
        state.token = null;
      }
    },
  },
});

export const { setAuthState, setUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
