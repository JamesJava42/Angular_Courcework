import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ValidirDirective } from './header/validir.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from './button/button.component';
import { AccordtionComponent } from './accordtion/accordtion.component';
import { CarousalComponent } from './carousal/carousal.component';
import { LayoutgComponent } from './layoutg/layoutg.component';
import { ComponentsComponent } from './components/components.component';
import { FormsComponent } from './components/forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonsGroupComponent } from './components/buttons-group/buttons-group.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DropDownsComponent } from './components/drop-downs/drop-downs.component';
import { PagenationsComponent } from './components/pagenations/pagenations.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PopupsComponent } from './components/popups/popups.component';
import { ScrollspysComponent } from './components/scrollspys/scrollspys.component';
import { NavsComponent } from './components/navs/navs.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { ModelsComponent } from './components/models/models.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { LayoutsComponent } from './forms/layouts/layouts.component';
import { ChecksRadioComponent } from './forms/checks-radio/checks-radio.component';
import { FloatingGroupsComponent } from './forms/floating-groups/floating-groups.component';
import { InputGroupsComponent } from './forms/input-groups/input-groups.component';
import { ValidationsComponent } from './forms/validations/validations.component';
import { FormControlComponent } from './forms/form-control/form-control.component';
import { SelectComponent } from './forms/select/select.component';
import { RangeComponent } from './forms/range/range.component';
import { Layout1Component } from './layoutg/layout1/layout1.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './forms/practices/registration/registration.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddComponent } from './add/add.component';
import { CockpitComponent } from './decorator/cockpit/cockpit.component';
import { ServertemplateComponent } from './decorator/servertemplate/servertemplate.component';
import { AddressComponent } from './project-components/address/address.component';
import { AccountComponent } from './services-task/account/account.component';
import { NewAccountComponent } from './services-task/new-account/new-account.component';
import { TenentSidebarComponent } from './sidebars/tenent-sidebar/tenent-sidebar.component';
import { FormValidComponent } from './practice/form-valid/form-valid.component';
import { RoutingComponent } from './angualr_notes/routing/routing.component';
import { SpecialcharactervalidatorDirective } from './page/membership/member-ship/member-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,HeaderComponent, ValidirDirective, ButtonComponent, AccordtionComponent, CarousalComponent, LayoutgComponent, ComponentsComponent, FormsComponent, ButtonsComponent, AlertsComponent, AccordionComponent, TooltipComponent, BadgeComponent, BreadcrumbComponent, ButtonsGroupComponent, CollapseComponent, DropDownsComponent, PagenationsComponent, ProgressComponent, PopupsComponent, ScrollspysComponent, NavsComponent, SpinnersComponent, ToastsComponent, OffcanvasComponent, ModelsComponent, ListGroupsComponent, LayoutsComponent, ChecksRadioComponent, FloatingGroupsComponent, InputGroupsComponent, ValidationsComponent, FormControlComponent, SelectComponent, RangeComponent, Layout1Component, ContentComponent, RegistrationComponent, AddCardComponent, AddComponent, CockpitComponent, ServertemplateComponent, AddressComponent, AccountComponent, NewAccountComponent, TenentSidebarComponent, FormValidComponent, SpecialcharactervalidatorDirective, RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
