import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TwoBlocksComponent } from './components/two-blocks/two-blocks.component';
import { OurCouncilComponent } from './pages/who-we-are/our-council/our-council.component';
import { FooterComponent } from './components/footer/footer.component';
import { CouncilPhotoComponent } from './components/council-photo/council-photo.component';
import { FromThePresidentComponent } from './pages/from-the-president/from-the-president.component';
import { OurMembersComponent } from './pages/who-we-are/our-members/our-members.component';
import { OurBranchNetworkComponent } from './pages/who-we-are/our-branch-network/our-branch-network.component';
import { CommitteesComponent } from './pages/who-we-are/committees/committees.component';
import { FromTheCeoComponent } from './pages/from-the-ceo/from-the-ceo.component';
import { SnapshotOfOurYearComponent } from './pages/our-year/snapshot-of-our-year/snapshot-of-our-year.component';
import { ThoughtLeadershipComponent } from './pages/our-year/thought-leadership/thought-leadership.component';
import { RaisingStandardsComponent } from './pages/our-year/raising-standards/raising-standards.component';
import { InspireAndEquipComponent } from './pages/our-year/inspire-and-equip/inspire-and-equip.component';
import { BuildEngagementComponent } from './pages/our-year/build-engagement/build-engagement.component';
import { GovernanceFocusComponent } from './pages/our-year/governance-focus/governance-focus.component';
import { CoreEnablersComponent } from './pages/our-year/core-enablers/core-enablers.component';
import { SpotlightTemplateComponent } from './components/spotlight-template/spotlight-template.component';
import { SimonBerryComponent } from './pages/spotlight/simon-berry/simon-berry.component';
import { WarwickTauwhareGeorgeComponent } from './pages/spotlight/warwick-tauwhare-george/warwick-tauwhare-george.component';
import { LaurissaCooneyComponent } from './pages/spotlight/laurissa-cooney/laurissa-cooney.component';
import { MicheleFreyComponent } from './pages/spotlight/michele-frey/michele-frey.component';
import { BreccanMcleodLundyComponent } from './pages/spotlight/breccan-mcleod-lundy/breccan-mcleod-lundy.component';
import { MenaAntonioComponent } from './pages/spotlight/mena-antonio/mena-antonio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TwoBlocksComponent,
    OurCouncilComponent,
    FooterComponent,
    CouncilPhotoComponent,
    FromThePresidentComponent,
    OurMembersComponent,
    OurBranchNetworkComponent,
    CommitteesComponent,
    FromTheCeoComponent,
    SnapshotOfOurYearComponent,
    ThoughtLeadershipComponent,
    RaisingStandardsComponent,
    InspireAndEquipComponent,
    BuildEngagementComponent,
    GovernanceFocusComponent,
    CoreEnablersComponent,
    SpotlightTemplateComponent,
    SimonBerryComponent,
    WarwickTauwhareGeorgeComponent,
    LaurissaCooneyComponent,
    MicheleFreyComponent,
    BreccanMcleodLundyComponent,
    MenaAntonioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
