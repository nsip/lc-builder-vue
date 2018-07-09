import Challenge from 'layouts/Challenge'
import ChallengeText from 'pages/ChallengeText'
import Alignment from 'pages/Alignment'
import Resources from 'pages/Resources'
import Manifest from 'pages/Manifest'

export default [
  {
    path: '/',
    component: Challenge,
    children: [
      { path: '', component: ChallengeText }, // sets the default start page
      { path: 'challengeText', component: ChallengeText },
      { path: 'alignment', component: Alignment },
      { path: 'resources', component: Resources },
      { path: 'manifest', component: Manifest }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
