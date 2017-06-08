import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
import {EventListComponent} from './events/events-list.component';
import {ThumbNailComponent} from './events/event-thumbnail.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        ThumbNailComponent
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}