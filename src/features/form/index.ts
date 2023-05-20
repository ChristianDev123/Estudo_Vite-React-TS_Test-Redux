import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store';

export interface formData {
    name:string,
    age:string
}

const initialState:formData = {
    name:"",
    age:""
};

export const formSlice = createSlice({
    name:"form",
    initialState,  
    reducers:{
        addData: (state, action: PayloadAction<formData>)=>{
            state.age = action.payload.age;
            state.name = action.payload.name;
        },
        removeData: (state)=>{
            state.age = "";
            state.name = "";
        }
    }
});

export const { addData, removeData } = formSlice.actions;

export const SelectData = (state:RootState)=>state.form;

export default formSlice.reducer;