import userReducer from "./userReducer";
import * as actions from "../actions/userActions";

describe("userReducer", () => {
  it("should delete a user when passed DELETE_USER_SUCCESS", () => {
    // arrange
    const initialState = [{ id: 1, firstName: "C", lastName: "H" }];
    const action = actions.deleteUserSuccess(1);

    // act
    const newState = userReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(0);
  });

  it("should save a user when passed SAVE_USER_SUCCESS", () => {
    // arrange
    const initialState = [];
    const action = actions.saveUserSuccess({
      id: 1,
      firstName: "C",
      lastName: "H"
    });

    // act
    const newState = userReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(1);
  });
});
