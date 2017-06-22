"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("./shared/event.service");
var EventListComponent = (function () {
    function EventListComponent(eventService) {
        this.eventService = eventService;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.events = this.eventService.getEvents();
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        template: "\n        <div>\n            <h1>Upcoming Angular 2 Events</h1>\n            <hr/>\n            <div class=\"row\">\n                <event-thumbnail \n                        *ngFor=\"let event of events\"\n                        [event]=\"event\"\n                         class=\"col-md-5\">\n                    \n                </event-thumbnail>\n            </div>s\n            \n        </div>\n    "
    }),
    __metadata("design:paramtypes", [event_service_1.EventService])
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=events-list.component.js.map