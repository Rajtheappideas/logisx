import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostUrl } from "../Baseurl";
import { toast } from "react-hot-toast";

export const handleRegisterUser = createAsyncThunk(
  "auth/handleRegisterUser",
  async (
    {
      email,
      password,
      fname,
      lname,
      companyName,
      shipperFname,
      shipperLname,
      shipperEmail,
      shipperPhone,
      location,
      latitude,
      longitude,
      ein,
      totalDocks,
      dockNumbers,
      photo,
      profile,
      fcmToken,
      signal,
    },
    { rejectWithValue }
  ) => {
    try {
      signal.current = new AbortController();
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("fname", fname);
      formdata.append("lname", lname);
      formdata.append("companyName", companyName);
      formdata.append("shipperEmail", shipperEmail);
      formdata.append("shipperFname", shipperFname);
      formdata.append("shipperLname", shipperLname);
      formdata.append("shipperPhone", shipperPhone);
      formdata.append("location", location);
      formdata.append("latitude", latitude);
      formdata.append("longitude", longitude);
      formdata.append("ein", ein);
      formdata.append("totalDocks", totalDocks);
      formdata.append("dockNumbers", dockNumbers);
      formdata.append("photo", photo);
      formdata.append("profile", profile);
      formdata.append("fcmToken", fcmToken);
      const response = await PostUrl("signup", {
        data: formdata,
        signal: signal.current.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleLoginUser = createAsyncThunk(
  "auth/handleLoginUser",
  async ({ email, password, fcmToken, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("login", {
        data: { email, password, fcmToken },
        signal: signal.current.signal,
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleForgotPassword = createAsyncThunk(
  "auth/handleForgotPassword",
  async ({ email, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("forgot-password", {
        data: { email },
        signal: signal.current.signal,
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleResetPassword = createAsyncThunk(
  "auth/handleResetPassword",
  async ({ password, verifyToken, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("reset-password", {
        data: { password, verifyToken },
        signal: signal.current.signal,
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleVerifyOtp = createAsyncThunk(
  "auth/handleVerifyOtp",
  async ({ email, otp, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("verify-otp", {
        data: { email, otp },
        signal: signal.current.signal,
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleChangePassword = createAsyncThunk(
  "auth/handleChangePassword",
  async ({ oldPassword, newPassword, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("change_password", {
        data: { oldPassword, newPassword },
        signal: signal.current.signal,
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleEditProfile = createAsyncThunk(
  "auth/handleEditProfile",
  async ({ fname, lname, companyName, signal }, { rejectWithValue }) => {
    try {
      signal.current = new AbortController();
      const response = await PostUrl("edit_profile", {
        data: { fname, lname, companyName },
        signal: signal.current.signal,
      });
      return response.data;
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  user: null,
  showSignupProcess: false,
  token: null,
  verifyToken: null,
  email: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.loading = true;
      state.user = null;
      state.token = null;
      window.location.href = window.location.origin.concat("/auth");
      toast.success("Logout Successfully.", { duration: 3000 });
      state.loading = false;
    },
    handleChangeShowSignupProcess: (state, { payload }) => {
      state.showSignupProcess = payload;
    },
    handleChangeEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
  extraReducers: (builder) => {
    // register user
    builder.addCase(handleRegisterUser.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleRegisterUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(handleRegisterUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.user = null;
      state.error = payload ?? null;
    });
    // login user
    builder.addCase(handleLoginUser.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleLoginUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload?.shipper;
      state.token = payload?.token;
      state.error = null;
    });
    builder.addCase(handleLoginUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.user = null;
      state.token = null;
      state.error = payload ?? null;
    });
    // forgot password
    builder.addCase(handleForgotPassword.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleForgotPassword.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = null;
      state.token = null;
    });
    builder.addCase(handleForgotPassword.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.user = null;
      state.token = null;
      state.error = payload ?? null;
    });
    // verfiy otp
    builder.addCase(handleVerifyOtp.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleVerifyOtp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = null;
      state.verifyToken = payload?.verifyToken;
    });
    builder.addCase(handleVerifyOtp.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // reset password
    builder.addCase(handleResetPassword.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleResetPassword.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = null;
      state.error = null;
      state.verifyToken = null;
    });
    builder.addCase(handleResetPassword.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.user = null;
      state.error = payload ?? null;
    });
    // change password
    builder.addCase(handleChangePassword.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleChangePassword.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(handleChangePassword.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
    // edit profile
    builder.addCase(handleEditProfile.pending, (state, {}) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(handleEditProfile.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.user = payload?.shipper;
    });
    builder.addCase(handleEditProfile.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload ?? null;
    });
  },
});

export const {
  handleLogout,
  handleChangeShowSignupProcess,
  handleChangeEmail,
} = AuthSlice.actions;

export default AuthSlice.reducer;
