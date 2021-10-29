import { toast } from "react-toastify";

toast.configure();

export const notify = (status: string, msg: string) => {
  // Provide toastId to prevent duplicates
  /*     {
      toastId: "custom-id-yes",
    } */

  switch (status) {
    case "success":
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });

      break;

    case "error":
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;

    default:
      break;
  }
};
