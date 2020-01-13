# Real World RISK

This is a 3D version of the RISK board game that I've been coding to help learn the CesiumJS framework, get better at javascript, and just for me personal entertainment. The major difference from the original game is that this has the real world map with almost all countries (some left out because they are too small to really see/manage). It is very much a work in progress but it is actually playable.

If you clone the project you can just run npm install and npm start and it works completely offline. Pretty much CesiumViewer.js, CesiumViewer.css, data and Images folders are the whole project, everything else is the Cesium framework or basic node express server to run it. Enjoy!

Changes/Features:

- manual placement
- make back of card image
- find image/icon for game log toggle (GLT)
- set home position or home fly to continent, or country with most forces
- attack dice number / move troops number (max dice 3, move troops min = dice num)
- animate continent border when new player controls it
- create some kind of end game animation (right now it just alerts)

Better AI:

- Continue with multiple strategies if they are in a good position. Large troop counts can get stuck in countries they aren't considering.
- Don't spread out reinforcements to attack or reinforce, instead make some kind of strategy
- Attack players adjacent continents or sabotage player doing too well if it's not too risky
- Think about nearby countries with alot of troops that could attack or that they could merge into existing area
- Take out weak player and steal cards if it's not too risky

Better UI:

- Troop count label isn't great / show country names below troop count when zoomed in enough
- trade in cards is clunky
- current player / phase button could be better (player image is just silhouette)
- battle (show players / bigger dice / animations)
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
