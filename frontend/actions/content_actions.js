export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_BODY = "UPDATE_BODY";
export const UPDATE_COLOR = "UPDATE_COLOR";

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title
});

export const updateBody = body => ({
  type: UPDATE_BODY,
  payload: body
});

export const updateColor = color => ({
  type: UPDATE_COLOR,
  payload: color
});
