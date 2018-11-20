import * as Api from "../../api/Api";
import * as actions from "./appActions";
import _ from "lodash";

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
    Api.removeToken();
    dispatch(actions.logInUserError("error ", err));
  }
};

export const register = user => async dispatch => {
  try {
    dispatch(actions.registerUserStart());
    user = _.omit(user, ["termsAgree", "confirm"]);
    const res = await Api.Auth.register(user);
    dispatch(
      actions.registerUserOK({
        user: res.data.user
      })
    );
  } catch (err) {
    dispatch(actions.registerUserError(err));
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
    if (Api.initApi()) {
      let user = null;
      const res = await Api.User.getCurrent();

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
