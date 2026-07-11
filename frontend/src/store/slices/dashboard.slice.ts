import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardState, NotificationItem, StatisticSummary } from "@/types/dashboard.types";

const initialState: DashboardState = {
  statistics: [],
  notifications: [],
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setStatistics: (state, action: PayloadAction<StatisticSummary[]>) => {
      state.statistics = action.payload;
    },
    setNotifications: (state, action: PayloadAction<NotificationItem[]>) => {
      state.notifications = action.payload;
    },
    markNotificationRead: (state, action: PayloadAction<string>) => {
      const item = state.notifications.find((n) => n.id === action.payload);
      if (item) item.read = true;
    },
    setDashboardLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setStatistics, setNotifications, markNotificationRead, setDashboardLoading } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
