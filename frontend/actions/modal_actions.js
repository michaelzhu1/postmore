export const UPDATE_MODAL = "UPDATE_MODAL";

export const updateModal = (modalStatus, type, id) => ({
  type: UPDATE_MODAL,
  payload: { isOpen: modalStatus, type, id }
});
