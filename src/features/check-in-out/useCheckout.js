import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isLoading: checkingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out"
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} checked-out successfully.`);
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: () => {
      toast.error("There was an error while checking out.");
    },
  });

  return { checkOut, checkingOut };
}
