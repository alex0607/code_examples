import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FeatureKey } from '@/redux/FeatureKey';
import { User } from '../userApi';

export const selectedUserSlice = createSlice({
    name: FeatureKey.SELECTED_USER,
    initialState: null as User | null,
    reducers: {
        selectUser: (
            state,
            { payload }: PayloadAction<User>,
        ) => payload,
    },
});

export const selectedUserActions = {
    ...selectedUserSlice.actions,
};