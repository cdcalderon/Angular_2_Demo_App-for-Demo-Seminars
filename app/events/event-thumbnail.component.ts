import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector:'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStarTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px}
        .well div { color: #bbb;}
        .thumbnail {min-height: 210px}
        .green { color: greenyellow !important;}
        .bold { font-weight: bold }
        
    `]
})
export class EventThumbNailComponent {
    @Input() event:any;

    getStarTimeClass() {
        const isEarlyStart = this.event && this.event.time == '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}
    }

    // alternative
    // getStartTimeStyle():any {
    //     if (this.event && this.event.time === '8:00 am')
    //         return {color: '#003300', 'font-weight': 'bold'}
    //     return {}
    // }

    // getStartTimeStyle():any {
    //     if (this.event && this.event.time === '8:00 am')
    //         return 'green bold';
    //     return {}
    // }

}