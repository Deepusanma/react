import { Student } from "../state/StudentState";

export const StudentLogic = (state = Student, action) => {
    switch (action.type) {
        case "ADD":
            {
            return {
                xth: (state.xth/500)*100,
                xiith: (state.xiith/600) *100
            };
        }
        case "DELETE":
            {
            return {
                xth: (state.xth/500)*100,
                xiith: (state.maths+state.chemistry+state.physics)/3
            };
        }
        default:
            return state;
    }
};
