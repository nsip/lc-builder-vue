import Challenge from 'layouts/Challenge'
import ChallengeText from 'pages/ChallengeText'
import Alignment from 'pages/Alignment'
import Resources from 'pages/Resources'

export default [
  {
    path: '/',
    // component: () => import(Challenge),
    component: Challenge,
    children: [
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
