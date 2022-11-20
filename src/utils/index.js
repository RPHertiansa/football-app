import { Loading, QSpinnerFacebook } from "quasar";

export const showLoading = () => {
  if (!Loading.isActive) {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: "white",
      message: "Fetching Data. Please wait.",
    });
  }
};
export const hideLoading = () => {
  if (Loading.isActive) {
    Loading.hide();
  }
};
