import toastr from "toastr";

export const showErrorToastr = (errorMessage) => {
  toastr.error(errorMessage, "", {
    closeButton: true,
    progressBar: true,
    timeOut: 3000,
    positionClass: "toast-top-right",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  });
};
