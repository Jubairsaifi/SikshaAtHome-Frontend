import {
    Calendar,
    dateFnsLocalizer,
} from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Math Class",
        start: new Date(),
        end: new Date(),
    },
];

const AvailabilityCalendar = () => {
    return (
        <div className="h-[600px]">
            <Calendar
                localizer={localizer}
                events={events}
                selectable
                startAccessor="start"
                endAccessor="end"
                popup
            />
        </div>
    );
};

export default AvailabilityCalendar;