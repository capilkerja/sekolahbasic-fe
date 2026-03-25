import { Event } from "@/types/event";
import { UpcomingEventItem } from "./UpcomingEventItem";
import { Link } from "lucide-react";

type Props = {
  events: Event[];
};

export function UpcomingEvents({ events }: Props) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6">
        Upcoming Calendar
      </h2>

      <div className="space-y-3">
        {events.map((event) => (
          <UpcomingEventItem key={event.id} event={event} />
        ))}
      </div>

      {events.length > 3 ? (
          <Link href="/events" className="w-full mt-4 py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            View Full Calendar
          </Link>
        ) : (
          <div className="w-full mt-4 text-center p-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            No upcoming events
          </div>
      )}
    </section>
  );
}
