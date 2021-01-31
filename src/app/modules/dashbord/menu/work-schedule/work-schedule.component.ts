import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import ruLocale from '@fullcalendar/core/locales/ru';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: TODAY_STR
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: TODAY_STR + 'T12:00:00'
    }
];

export function createEventId() {
    return String(eventGuid++);
}

@Component({
    selector: 'app-work-schedule',
    templateUrl: './work-schedule.component.html',
    styleUrls: ['./work-schedule.component.scss']
})
export class WorkScheduleComponent implements OnInit {

    public locales = [ruLocale];
    public calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, listPlugin, bootstrapPlugin];
    public calendarWeekends = true;
    public themeSystem = 'Litera';

    constructor() {
    }

    ngOnInit() {
    }

    calendarVisible = true;
    calendarOptions: CalendarOptions = {
        height: 535,
        themeSystem: this.themeSystem,
        plugins: this.calendarPlugins,
        locale: ruLocale,
        allDayClassNames: [
            
        ],
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        footerToolbar: {
            left: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            center: '',
            right: ''
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this)
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
    };
    currentEvents: EventApi[] = [];

    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }

    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    }

    handleEventClick(clickInfo: EventClickArg) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }

    handleEvents(events: EventApi[]) {
        this.currentEvents = events;
    }

}
