import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../utils/httpService";

export const fetchLecturers = createAsyncThunk(
	"lectures/fetchLectures",
	async () => {
		const { data } = await httpService.get("/lecturers");
		return data;
	}
);
const initialState = {
	lecturers: [],
	filteredLecturers: [],
	languages: {},
	loading: "",
};

export const lecturesSlice = createSlice({
	name: "lecturers",
	initialState,
	reducers: {
		searchByName: (state, action) => {
			const filteredLecturers = state.lecturers.filter((lecturer) =>
				lecturer.name.toLowerCase().includes(action.payload.toLowerCase())
			);

			return {
				...state,
				filteredLecturers:
					action.payload.length > 0 ? filteredLecturers : [...state.lecturers],
			};
		},
		searchByLanguage: (state, action) => {
			console.log(action.payload);
			const filteredLecturers = state.lecturers.filter((lecturer) =>
				lecturer.languages.includes(action.payload)
			);

			return {
				...state,
				filteredLecturers:
					action.payload.length > 0 ? filteredLecturers : [...state.lecturers],
			};
		},
	},
	extraReducers: (builder) => {
		const mapArrayToHash = (array) => {
			return array.reduce((map, obj) => {
				map[obj.id] = obj.name;
				return map;
			}, {});
		};
		builder
			.addCase(fetchLecturers.fulfilled, (state, action) => {
				state.loading = "success";
				state.lecturers = action.payload.lecturers;
				state.languages = mapArrayToHash(action.payload.Languages);
			})
			.addCase(fetchLecturers.rejected, (state, action) => {
				state.loading = "failed";
			})
			.addCase(fetchLecturers.pending, (state, action) => {
				state.loading = "loading";
			});
	},
});

// Action creators are generated for each case reducer function
export const { searchByName, searchByLanguage } = lecturesSlice.actions;
