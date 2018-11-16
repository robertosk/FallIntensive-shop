import * as Api from "../../api/Api";
import * as actions from "./appActions";

export const logIn = user => async dispatch => {
  try {
    dispatch(actions.logInUserStart());
    const res = await Api.Auth.login(user);
    Api.setToken(res.data.token);
    dispatch(
      actions.logInUserOK({
        user: res.data.user,
        isLogged: !!res.data.user
      })
    );
  } catch (err) {
    console.log("error ", err);
    Api.removeToken();
  }
};

export const logOut = () => async dispatch => {
  try {
    Api.removeToken();
    dispatch(actions.logOutUser());
  } catch (err) {
    console.log("error ", err);
    Api.removeToken();
  }
};

export const initUser = () => async dispatch => {
  try {
    Api.initApi();
    let user = null;
    const res = await Api.User.getCurrent();
    if (res.status === 200) {
      user = res.data.user;
      dispatch(
        actions.getCurrentUser({
          user,
          isLogged: !!user
        })
      );
    }
  } catch (err) {
    console.log("error ", err);
    Api.removeToken();
  }
};
