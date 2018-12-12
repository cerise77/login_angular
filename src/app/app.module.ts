import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule }   from '@angular/common/http';

import { HomeComponent }   from './home.component';

import { BoldDirective} from './bold.directive';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule],
    declarations: [  HomeComponent, BoldDirective],
    bootstrap:    [ HomeComponent ]
})
export class AppModule { }




/*import { ReactiveFormsModule }   from '@angular/forms';*/

//, ReactiveFormsModule

//import { ItemComponent }   from './item.component';

//import { BoldDirective} from './bold.directive';


// определение маршрутов
/*const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: '**', component: NotFoundComponent }
];*/


/*@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
                    AppComponent, HomeComponent,
                    NotFoundComponent,  ItemComponent, BoldDirective],
    bootstrap:    [ AppComponent ]
})*/
//export class AppModule { }
