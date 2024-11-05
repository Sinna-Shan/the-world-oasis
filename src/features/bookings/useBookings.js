import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() { 
  const [searchParams] = useSearchParams();

  // Filtering
  const filterValue = searchParams.get("status");
  const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue };
  
  // Sorting
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-")
  const sortBy = {field, direction};
      const {
        isLoading,
        error,
        data: bookings,
      } = useQuery({
        queryKey: ["bookings",filter,sortBy],
        queryFn: () => getBookings({filter, sortBy}),
      });
    
    return { isLoading, error, bookings };
}