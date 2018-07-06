import Challenge from 'layouts/Challenge'
import ChallengeText from 'pages/ChallengeText'
import Alignment from 'pages/Alignment'
import Resources from 'pages/Resources'

export default [
  {
    path: '/',
    component: Challenge,
    children: [
      { path: '', component: ChallengeText }, // sets the default start page
      { path: 'challengeText', component: ChallengeText },
      { path: 'alignment', component: Alignment },
      { path: 'resources', component: Resources }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
