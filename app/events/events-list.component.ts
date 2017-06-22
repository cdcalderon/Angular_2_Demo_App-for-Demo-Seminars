import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <event-thumbnail 
                        *ngFor="let event of events"
                        [event]="event"
                         class="col-md-5">
                    
                </event-thumbnail>
            </div>s
            
        </div>
    `
})
export class EventListComponent implements  OnInit{
    events:any[];
    constructor(private eventService: EventService) {

    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}