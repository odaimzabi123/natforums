import { uploadMediaHandler, uploadFileHandler } from '../../handler/Uploadhandler';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGE_FAIL';

export const UPLOAD_VIDEO_REQUEST = 'UPLOAD_VIDEO_REQUEST';
export const UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS';
export const UPLOAD_VIDEO_FAIL = 'UPLOAD_VIDEO_FAIL';

export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAIL = 'UPLOAD_FILE_FAIL';


const uploadImageRequest = { type: UPLOAD_IMAGE_REQUEST };
const uploadImageSuccess = uploadedImage => ({ type: UPLOAD_IMAGE_SUCCESS, uploadedImage });
const uploadImageFail = error => ({ type: UPLOAD_IMAGE_FAIL, error });
export const uploadImageAction = (token, formData) => async dispatch => {
  dispatch(uploadImageRequest);
  try {
    const uploadedImage = await uploadMediaHandler(token, formData);
    dispatch(uploadImageSuccess(uploadedImage));
  } catch (error) {
    dispatch(uploadImageFail(error));
  }
};

const uploadVideoRequest = { type: UPLOAD_VIDEO_REQUEST };
const uploadVideoSuccess = uploadedVideo => ({ type: UPLOAD_VIDEO_SUCCESS, uploadedVideo });
const uploadVideoFail = error => ({ type: UPLOAD_VIDEO_FAIL, error });
export const uploadVideoAction = (token, formData) => async dispatch => {
  dispatch(uploadVideoRequest);
  try {
    const uploadedVideo = await uploadMediaHandler(token, formData);
    dispatch(uploadVideoSuccess(uploadedVideo));
  } catch (error) {
    dispatch(uploadVideoFail(error));
  }
};

const uploadFileRequest = { type: UPLOAD_FILE_REQUEST };
const uploadFileSuccess = uploadedFile => ({ type: UPLOAD_FILE_SUCCESS, uploadedFile });
const uploadFileFail = error => ({ type: UPLOAD_FILE_FAIL, error });
export const uploadFileAction = (token, formData) => async dispatch => {
  dispatch(uploadFileRequest);
  try {
    const uploadedFile = await uploadFileHandler(token, formData);
    dispatch(uploadFileSuccess(uploadedFile));
  } catch (error) {
    dispatch(uploadFileFail(error));
  }
};

