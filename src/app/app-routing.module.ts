import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { CommitteesComponent } from './pages/who-we-are/committees/committees.component';
import { OurBranchNetworkComponent } from './pages/who-we-are/our-branch-network/our-branch-network.component';
import { OurCouncilComponent } from './pages/who-we-are/our-council/our-council.component';
import { OurMembersComponent } from './pages/who-we-are/our-members/our-members.component';
import { FromThePresidentComponent } from './pages/from-the-president/from-the-president.component';
import { FromTheCeoComponent } from './pages/from-the-ceo/from-the-ceo.component';
import { BuildEngagementComponent } from './pages/our-year/build-engagement/build-engagement.component';
import { CoreEnablersComponent } from './pages/our-year/core-enablers/core-enablers.component';
import { GovernanceFocusComponent } from './pages/our-year/governance-focus/governance-focus.component';
import { InspireAndEquipComponent } from './pages/our-year/inspire-and-equip/inspire-and-equip.component';
import { RaisingStandardsComponent } from './pages/our-year/raising-standards/raising-standards.component';
import { SnapshotOfOurYearComponent } from './pages/our-year/snapshot-of-our-year/snapshot-of-our-year.component';
import { ThoughtLeadershipComponent } from './pages/our-year/thought-leadership/thought-leadership.component';
import { SpotlightTemplateComponent } from './components/spotlight-template/spotlight-template.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'committees', component: CommitteesComponent },
  { path: 'our-branch-network', component: OurBranchNetworkComponent },
  { path: 'our-council', component: OurCouncilComponent },
  { path: 'our-members', component: OurMembersComponent },
  { path: 'from-the-president', component: FromThePresidentComponent },
  { path: 'from-the-ceo', component: FromTheCeoComponent },
  { path: 'build-engagement', component: BuildEngagementComponent },
  { path: 'core-enablers', component: CoreEnablersComponent },
  { path: 'governance-focus', component: GovernanceFocusComponent },
  { path: 'inspire-and-equip', component: InspireAndEquipComponent },
  { path: 'raising-standards', component: RaisingStandardsComponent },
  { path: 'snapshot-of-our-year', component: SnapshotOfOurYearComponent },
  { path: 'thought-leadership', component: ThoughtLeadershipComponent },
  { path: 'spotlight/breccan-mcleod-lundy', component: SpotlightTemplateComponent },
  { path: 'spotlight/laurissa-cooney', component: SpotlightTemplateComponent },
  { path: 'spotlight/mena-antonio', component: SpotlightTemplateComponent },
  { path: 'spotlight/michele-frey', component: SpotlightTemplateComponent },
  { path: 'spotlight/simon-berry', component: SpotlightTemplateComponent },
  { path: 'spotlight/warwick-tauwhare-george', component: SpotlightTemplateComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', redirectTo: '/homepage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
