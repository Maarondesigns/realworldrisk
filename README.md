# Real World RISK

This is a 3D version of the RISK board game that I've been coding to help learn the CesiumJS framework, get better at javascript, and just for me personal entertainment. The major difference from the original game is that this has the real world map with almost all countries (some left out because they are too small to really see/manage). It is very much a work in progress but it is actually playable.

If you clone the project you can just run npm install and npm start and it works completely offline. Pretty much CesiumViewer.js, CesiumViewer.css, data and Images folders are the whole project, everything else is the Cesium framework or basic node express server to run it. Enjoy!

Changes/Features:

- manual placement
- ability to set names for humans or do random name gen
- fast forward 2 speed
- set home position or home fly to continent, or country with most forces
- show can attack lines (across water)
- make player summary sortable by column headers
- create some kind of end game animation (right now it just alerts)

Better AI:

- they spread out reinforcements to anyone that can attack but should make some kind of strategy
- they don't attack players adjacent continents (sabotage)
- they don't think about nearby countries with alot of troops (bonus: find route to merge them into existing area)

Better UI:

- trade in cards is clunky
- troop number slider is just default html
- current player / phase button
- battle (show players / bigger dice)
- show path when moving troops (this requires find shortest path function)

Other:

- refactor code to be in classes (separate base map, game, canAttack selection, continent selection, and cesium utility functions)

Long term ideas:

- Chart showing troop / territory change over time
- Rearrangeable/resizeable UI elements (or choose from preset layouts)
- Player characters with animations or at least images for win/lose/dead
- save user data for rank/achievments/etc.
- realtime online play
- cities / resources / money / technology / natural disasters
- campaigns
- create your own map studio
- create your own campaign
