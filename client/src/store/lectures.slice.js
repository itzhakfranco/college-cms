import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpService, mapArrayToHash } from "../utils/utils";

export const fetchLecturers = createAsyncThunk(
	"lectures/fetchLectures",
	async () => {
		const { data } = await httpService.get("/lecturers");
		return data;
	}
);
const initialState = {
	lecturers: [],
	languages: {},
	languagesHash: {},
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
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLecturers.fulfilled, (state, action) => {
        
				const languagesHash = mapArrayToHash(action.payload.languages);
				const lecturers = action.payload.lecturers;

				state.loading = "success";
				state.lecturers = lecturers;
				state.languages = languagesHash;

				state.languagesHash = Object.entries(languagesHash).reduce(
					(languagesHash, [id, lang]) => {
						languagesHash[lang] = lecturers.filter((teacher) =>
							teacher.languages.includes(Number(id))
						);

						return languagesHash;
					},
					{}
				);
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
export const {} = lecturesSlice.actions;
