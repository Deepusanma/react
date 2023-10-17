import { createStore } from "redux";
import { StudentLogic } from "../reducer/StudentLogic";

export const store = createStore(StudentLogic);

