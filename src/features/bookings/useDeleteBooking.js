import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingAPI(bookingId),
    onSuccess: () => {
      toast.success(`Booking deleted successfully.`);

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
        invalidate: true,
      });
    },
    onError: () => {
      toast.error(`Failed to delete booking`);
    },
  });

  return { deleteBooking, isDeleting };
}
