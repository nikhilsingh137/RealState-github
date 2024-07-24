import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  IAbout,
  IBanner,
  ICity,
  IFeature,
  IFooter,
  IHeader,
  IImagebox,
} from "./Articel";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  imageData: Array<IImagebox>;
  error: boolean;
  bannerData: Array<IBanner>;
  featureData: Array<IFeature>;
  cityData: Array<ICity>;
  aboutData: Array<IAbout>;
  footerData: Array<IFooter>;
}

export const fetchHeder = createAsyncThunk("fetchHeder", async () => {
  const headerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/ReactHeader.json"
  );
  return headerData.json();
});

export const fetchImagebox = createAsyncThunk("fetchImagebox", async () => {
  const imageData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/Imagebox.json"
  );
  return imageData.json();
});
export const fetchBanner = createAsyncThunk("fetchBanner", async () => {
  const bannerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/banner.json"
  );
  return bannerData.json();
});
export const fetchFeature = createAsyncThunk("fetchFeature", async () => {
  const featureData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/feature.json"
  );
  return featureData.json();
});
export const fetchCity = createAsyncThunk("fetchCity", async () => {
  const cityData = await fetch("http://localhost:5000/city");
  return cityData.json();
});
export const fetchAbout = createAsyncThunk("fetchAbout", async () => {
  const aboutData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/aboutData.json"
  );
  return aboutData.json();
});
export const fetchFooter = createAsyncThunk("fetchFooter", async () => {
  const footerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/data/footer.json"
  );
  return footerData.json();
});

export const initialState: IType = {
  isloading: false,
  headerData: [],
  error: false,
  imageData: [],
  bannerData: [],
  featureData: [],
  cityData: [],
  aboutData: [],
  footerData: [],
};

export const SliceApi = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHeder.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeder.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchImagebox.fulfilled, (state, action) => {
      state.imageData = action.payload;
    });
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      state.bannerData = action.payload;
    });
    builder.addCase(fetchFeature.fulfilled, (state, action) => {
      state.featureData = action.payload;
    });
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.cityData = action.payload;
    });
    builder.addCase(fetchAbout.fulfilled, (state, action) => {
      state.aboutData = action.payload;
    });
    builder.addCase(fetchFooter.fulfilled, (state, action) => {
      state.footerData = action.payload;
    });
    builder.addCase(fetchHeder.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default SliceApi.reducer;
