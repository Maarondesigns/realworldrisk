// window.CESIUM_BASE_URL = "./Source/";

// import * as Cesium from "./Source/Cesium.js";
// import {
//   Cartesian3,
//   Color,
//   createWorldTerrain,
//   defined,
//   formatError,
//   Math as CesiumMath,
//   objectToQuery,
//   queryToObject,
//   CzmlDataSource,
//   GeoJsonDataSource,
//   KmlDataSource,
//   TileMapServiceImageryProvider,
//   Viewer,
//   viewerCesiumInspectorMixin,
//   viewerDragDropMixin,
//   ProviderViewModel,
//   buildModuleUrl
// } from "../../Source/Cesium.js";
if (window.location.hostname !== "localhost")
  Sentry.init({
    dsn: "https://cd57a268a543414baa6015f2c0677939@sentry.io/1965024"
  });

function main(geo) {
  // console.log(geo);
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZGFjODY4OC04NjVlLTQ0MTEtYTEzYy1iZWI4ODdhZjM0OTciLCJpZCI6MTY3NTUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzExNTI1MjN9.3rBWB6NySV4EUyawEX3k3WBPLCxg-ii3kyhKNWrzKPU";

  /*
     Options parsed from query string:
       source=url          The URL of a CZML/GeoJSON/KML data source to load at startup.
                           Automatic data type detection uses file extension.
       sourceType=czml/geojson/kml
                           Override data type detection for source.
       flyTo=false         Don't automatically fly to the loaded source.
       tmsImageryUrl=url   Automatically use a TMS imagery provider.
       lookAt=id           The ID of the entity to track at startup.
       stats=true          Enable the FPS performance display.
       inspector=true      Enable the inspector widget.
       debug=true          Full WebGL error reporting at substantial performance cost.
       theme=lighter       Use the dark-text-on-light-background theme.
       scene3DOnly=true    Enable 3D only mode.
       view=longitude,latitude,[height,heading,pitch,roll]
                           Automatically set a camera view. Values in degrees and meters.
                           [height,heading,pitch,roll] default is looking straight down, [300,0,-90,0]
       saveCamera=false    Don't automatically update the camera view in the URL when it changes.
     */
  // var endUserOptions = queryToObject(window.location.search.substring(1));
  // var endUserOptions = {
  //   source: "../data/world-NE-10m-1p5.kml",
  //   sourceType: "kml"
  // };
  var endUserOptions = {
    source: "data/world-NE-10m-1p5.json",
    sourceType: "geojson"
  };

  // var imageryProvider;
  // if (defined(endUserOptions.tmsImageryUrl)) {
  //   imageryProvider = new TileMapServiceImageryProvider({
  //     url: endUserOptions.tmsImageryUrl
  //   });
  // }

  var loadingIndicator = document.getElementById("loadingIndicator");
  // var viewer;
  // let naturalEarth = new ProviderViewModel({
  //   name: "Natural Earth",
  //   iconUrl: buildModuleUrl(
  //     "Widgets/Images/ImageryProviders/naturalEarthII.png"
  //   ),
  //   tooltip:
  //     "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
  //   creationFunction: function() {
  //     return new TileMapServiceImageryProvider({
  //       // url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
  //       url: "data/mapTiles/naturalEarth3"
  //     });
  //   }
  // });
  // let selectedImageryProviderViewModel = naturalEarth;
  // try {
  //   // var hasBaseLayerPicker = !defined(imageryProvider);
  //   viewer = new Viewer("cesiumContainer", {
  //     imageryProvider: imageryProvider,
  //     baseLayerPicker: true,
  //     sceneModePicker: false,
  //     timeline: false,
  //     selectionIndicator: false,
  //     selectedImageryProviderViewModel,
  //     scene3DOnly: endUserOptions.scene3DOnly,
  //     requestRenderMode: true
  //   });

  //   // if (hasBaseLayerPicker) {
  //   //   var viewModel = viewer.baseLayerPicker.viewModel;
  //   //   viewModel.selectedTerrain = viewModel.terrainProviderViewModels[1];
  //   // } else {
  //   //   viewer.terrainProvider = createWorldTerrain({
  //   //     requestWaterMask: true,
  //   //     requestVertexNormals: true
  //   //   });
  //   // }
  // } catch (exception) {
  //   loadingIndicator.style.display = "none";
  //   var message = formatError(exception);
  //   console.error(message);
  //   if (!document.querySelector(".cesium-widget-errorPanel")) {
  //     window.alert(message); //eslint-disable-line no-alert
  //   }
  //   return;
  // }

  // let satelliteWithLabels = new Cesium.ProviderViewModel({
  //   name: "Satelite Labels",
  //   iconUrl: "./img/mapicons/satellite_with_labels.jpg",
  //   tooltip: "some tooltip text (optional)",
  //   creationFunction: function() {
  //     return new Cesium.BingMapsImageryProvider({
  //       url: "https://dev.virtualearth.net",
  //       key: "AvYm4h6TlEkjjh583Rgih5zqyjSgUFfRq9JTL8Hojhy2oxGY6-sW6pXl8VBMEQld",
  //       mapStyle: Cesium.BingMapsStyle.AERIAL_WITH_LABELS_ON_DEMAND
  //     });
  //   }
  // });
  // let satellite = new Cesium.ProviderViewModel({
  //   name: "Satelite",
  //   iconUrl: "./img/mapicons/satellite.jpg",
  //   tooltip: "some tooltip text (optional)",
  //   creationFunction: function() {
  //     return new Cesium.BingMapsImageryProvider({
  //       url: "https://dev.virtualearth.net",
  //       key: "AvYm4h6TlEkjjh583Rgih5zqyjSgUFfRq9JTL8Hojhy2oxGY6-sW6pXl8VBMEQld",
  //       mapStyle: Cesium.BingMapsStyle.AERIAL
  //     });
  //   }
  // });
  // let street = new Cesium.ProviderViewModel({
  //   name: "Streets Labels",
  //   iconUrl: "./img/mapicons/streets.jpg",
  //   tooltip: "some tooltip text (optional)",
  //   creationFunction: function() {
  //     return new Cesium.BingMapsImageryProvider({
  //       url: "https://dev.virtualearth.net",
  //       key: "AvYm4h6TlEkjjh583Rgih5zqyjSgUFfRq9JTL8Hojhy2oxGY6-sW6pXl8VBMEQld",
  //       mapStyle: Cesium.BingMapsStyle.ROAD_ON_DEMAND
  //     });
  //   }
  // });
  let naturalEarth = new Cesium.ProviderViewModel({
    name: "Natural Earth",
    iconUrl: Cesium.buildModuleUrl(
      "Widgets/Images/ImageryProviders/naturalEarthII.png"
    ),
    tooltip:
      "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
    creationFunction: function() {
      return new Cesium.TileMapServiceImageryProvider({
        // url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
        url: "data/mapTiles/naturalEarthSmall"
      });
    }
  });

  let imageryProviderViewModels = [];
  // naturalEarth,
  //   satelliteWithLabels,
  //   satellite,
  //   street
  // ];
  // this.imageryModels = {
  //   naturalEarth,
  //   satelliteWithLabels,
  //   satellite,
  //   street
  // };
  let selectedImageryProviderViewModel = naturalEarth; //satellite; //WithLabels;
  let mapProjection = new Cesium.WebMercatorProjection(Cesium.Ellipsoid.WGS84);

  // mapProjection.MaximumLatitude = 89.9;
  let viewer = new Cesium.Viewer("cesiumContainer", {
    // scene3DOnly: true,
    selectionIndicator: false,
    homeButton: true,
    geocoder: false,
    // sceneModePicker: false,
    timeline: false,
    navigationHelpButton: false,
    baseLayerPicker: true,
    imageryProviderViewModels,
    selectedImageryProviderViewModel,
    terrainProviderViewModels: [],
    mapProjection,
    contextOptions: {
      webgl: {
        preserveDrawingBuffer: true
      }
    },
    orderIndependentTranslucency: false
    // terrainExaggeration: 40
    // requestRenderMode: true
  });

  let layers = viewer.scene.imageryLayers;
  // let grid = layers.addImageryProvider(new Cesium.GridImageryProvider());
  let naturalEarthDark = layers.addImageryProvider(
    new Cesium.TileMapServiceImageryProvider({
      // url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
      url: "data/mapTiles/naturalEarthDarkSmall"
    })
  );
  setTimeout(() => {
    naturalEarthDark.alpha = 0;
  }, 10000);

  viewer.extend(Cesium.viewerDragDropMixin);
  if (endUserOptions.inspector) {
    viewer.extend(Cesium.viewerCesiumInspectorMixin);
  }

  var showLoadError = function(name, error) {
    var title = "An error occurred while loading the file: " + name;
    var message =
      "An error occurred while loading the file, which may indicate that it is invalid.  A detailed error report is below:";
    viewer.cesiumWidget.showErrorPanel(title, message, error);
  };

  viewer.dropError.addEventListener(function(viewerArg, name, error) {
    showLoadError(name, error);
  });

  //main globals
  var scene = viewer.scene;
  var context = scene.context;
  if (endUserOptions.debug) {
    context.validateShaderProgram = true;
    context.validateFramebuffer = true;
    context.logShaderCompilation = true;
    context.throwOnWebGLError = true;
  }
  let countryEntities,
    countryBorders,
    countryLabels,
    countries,
    countryCoords = [],
    userManuallyMoved;
  var view = endUserOptions.view;
  var source = endUserOptions.source;
  var options = endUserOptions.sourceOptions;
  if (Cesium.defined(source)) {
    var sourceType = endUserOptions.sourceType;
    if (!Cesium.defined(sourceType)) {
      // autodetect using file extension if not specified
      if (/\.czml$/i.test(source)) {
        sourceType = "czml";
      } else if (
        /\.geojson$/i.test(source) ||
        /\.json$/i.test(source) ||
        /\.topojson$/i.test(source)
      ) {
        sourceType = "geojson";
      } else if (/\.kml$/i.test(source) || /\.kmz$/i.test(source)) {
        sourceType = "kml";
      }
    }

    var loadPromise, loadPromise2;
    if (sourceType === "czml") {
      loadPromise = Cesium.CzmlDataSource.load(source);
    } else if (sourceType === "geojson") {
      // loadPromise = Cesium.GeoJsonDataSource.load(geo, options);
      loadPromise = Cesium.GeoJsonDataSource.load(source, options);
      // loadPromise2 = Cesium.GeoJsonDataSource.load(source, options);
    } else if (sourceType === "kml") {
      loadPromise = Cesium.KmlDataSource.load(source, {
        camera: scene.camera,
        canvas: scene.canvas
      });
    } else {
      showLoadError(source, "Unknown format.");
    }

    if (Cesium.defined(loadPromise)) {
      loadPromise
        .then(function(dataSource) {
          let tooSmall = countryData
            .filter(x => x.Area_mi2 < 5000 && x.id !== "XK")
            .map(x => x.id);

          let entities = dataSource.entities.values;
          countries = [];
          entities.forEach(e => {
            let id = e.id.split("_")[0];
            let country = countryData.find(co => co.id === id);
            if (
              country &&
              countries.indexOf(id) === -1 &&
              tooSmall.indexOf(id) === -1
            )
              countries.push(id);
          });
          countries.forEach((c, ci) => {
            let country = countryData.find(co => co.id === c);
            if (!getCanAttack(c))
              console.log(c, country.country, country.Area_mi2);
            if (country) {
              let objs = entities
                .filter(e => e.id.split("_")[0] === c)
                .map(e => {
                  return {
                    id: e.id,
                    coords: e.polygon.hierarchy._value
                  };
                });
              countryCoords = [...countryCoords, ...objs];
              // let color = [Math.random(), Math.random(), Math.random()];
              objs.forEach(o => {
                removePrimitive(o.id).then(() => {
                  createPrimitive({
                    cartesian: o.coords,
                    id: o.id,
                    fillOpacity: 0.3,
                    fillColor: [1, 1, 1]
                    // strokeColor: color
                  });
                });
              });
            }
          });
        })
        .then(function() {
          fetchAutoGenNames().then(names => {
            let humans = ["Player 1"],
              numOfRobots = 4,
              robots = names.slice(0, numOfRobots);
            function updateRobots() {
              let robotsContainer = document.querySelector(
                "#startGame #robots"
              );
              robotsContainer.innerHTML = robots
                .map(r => `<div>${r}</div>`)
                .join("");
            }
            function updateHumans() {
              let humansContainer = document.querySelector(
                "#startGame #humans"
              );
              humansContainer.innerHTML = humans
                .map(
                  (h, i) =>
                    `<div><textarea id="human_${i}" type="text" value="${h}">${h}</textarea></div>`
                )
                .join("");
              humans.forEach((h, i) => {
                let el = document.getElementById(`human_${i}`);
                el.addEventListener("input", function(e) {
                  // let t = e.target;
                  let name = el.value;
                  if (el.scrollTop != 0)
                    el.style.height = el.scrollHeight + "px";
                  humans[i] = name;
                });
              });
            }
            let addHuman = document.getElementById("addHuman");
            addHuman.addEventListener("click", function() {
              if (humans.length + numOfRobots === 10) return;
              humans.push(`Player ${humans.length + 1}`);
              updateHumans();
            });
            let removeHuman = document.getElementById("removeHuman");
            removeHuman.addEventListener("click", function() {
              if (humans.length + numOfRobots === 2) return;
              humans.pop();
              updateHumans();
            });
            let addRobot = document.getElementById("addRobot");
            addRobot.addEventListener("click", function() {
              if (humans.length + numOfRobots === 10) return;
              numOfRobots += 1;
              robots = names.slice(0, numOfRobots);
              updateRobots();
            });
            let removeRobot = document.getElementById("removeRobot");
            removeRobot.addEventListener("click", function() {
              if (humans.length + numOfRobots === 2) return;
              numOfRobots -= 1;
              robots = names.slice(0, numOfRobots);
              updateRobots();
            });
            updateHumans();
            updateRobots();
            let startGame = document.getElementById("startGame");
            startGame.style.display = "block";
            let startGameButton = document.getElementById("startGameButton");
            startGameButton.addEventListener("click", function() {
              initGame({ humans, robots });
            });
          });
          // humansInput.addEventListener("input", function(e) {
          //   let humans = +e.target.value;
          //   let robots = +robotsInput.value;
          //   if (humans + robots > 10) robots = 10 - humans;
          //   robotsInput.value = robots;
          // });
          // robotsInput.addEventListener("input", function(e) {
          //   let robots = +e.target.value;
          //   let humans = +humansInput.value;
          //   if (humans + robots > 10) humans = 10 - robots;
          //   humansInput.value = humans;
          // });
          // startGameButton.addEventListener("click", initCanAttack);
          // startGameButton.addEventListener("click", initContinents);
        })
        .otherwise(function(error) {
          showLoadError(source, error);
        });
      // });
    }
  }

  function fetchAutoGenNames() {
    return fetch(
      `https://namey.muffinlabs.com/name.json?count=10&with_surname=true&frequency=all`
    )
      .then(res => {
        // console.log(res);
        return res.json().then(names => {
          return names;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  function addContinentBorders() {
    console.log("creating continents");
    function addContinentBorder(c) {
      // console.log(c);
      var corridorPrimitive = new Cesium.Primitive({
        show: true, //false,
        releaseGeometryInstances: false,
        geometryInstances: new Cesium.GeometryInstance({
          id: c.Name,
          geometry: Cesium.CorridorGeometry.createGeometry(
            new Cesium.CorridorGeometry({
              positions: c.Border,
              width: 30000,
              extrudedHeight: 20000
            })
          )
        }),
        appearance: new Cesium.MaterialAppearance({
          material: new Cesium.Material.fromType("Color", {
            color: new Cesium.Color(c.Color[0], c.Color[1], c.Color[2])
          })
        }),
        asynchronous: false
      });
      viewer.scene.primitives.add(corridorPrimitive);
    }
    let timeout = 0;
    countryCoords.forEach(x => {
      let cont = continents.find(
        y => y.Countries.indexOf(x.id.split("_")[0]) !== -1
      );
      if (cont) {
        let { Name, Color } = cont;
        let borderGroups = [],
          index = 0;
        let coords = x.coords.positions;
        coords.forEach((c, i) => {
          let isInterior = co => {
            return countryCoords.some(y => {
              let continent = continents.find(
                z => z.Countries.indexOf(y.id.split("_")[0]) !== -1
              );
              // if(!continent) console.log(y.id)
              return (
                continent &&
                continent.Name === cont.Name &&
                y.id !== x.id &&
                y.coords.positions.some(z => z.x === co.x && z.y === co.y)
              );
            });
          };
          if (
            !borderGroups[index] &&
            coords[i + 1] &&
            !isInterior(coords[i + 1])
          ) {
            borderGroups[index] = [c];
          } else if (borderGroups[index]) {
            if (!isInterior(c)) borderGroups[index].push(c);
            else if (
              isInterior(c) &&
              coords[i - 1] &&
              !isInterior(coords[i - 1])
            ) {
              borderGroups[index].push(c);
              index += 1;
            }
          }
        });
        timeout += borderGroups.length * 10;
        borderGroups.forEach((Border, i) => {
          setTimeout(() => {
            spinGlobe(0.01);
            if (Border.length > 1) addContinentBorder({ Name, Color, Border });
          }, 10 * i);
        });
      }
    });
    return new Promise(res => {
      setTimeout(() => {
        res();
      }, timeout);
    });
  }

  let canAttackPaths = [];
  function drawCanAttackPaths() {
    countries.forEach(c => {
      let canAttack = getCanAttack(c);
      let sb = sharesBorder(c, canAttack);
      sb.no.forEach(x => {
        let ft = [c, x];
        if (
          !canAttackPaths.find(y => y.indexOf(c) !== -1 && y.indexOf(x) !== -1)
        )
          canAttackPaths.push(ft);
      });
    });
    canAttackPaths.forEach(x => {
      spinGlobe(0.02);
      drawPath(x, {
        id: `from-${x[0]}_to-${x[1]}`,
        width: 1,
        color: Cesium.Color.WHITE //new Cesium.Color(0.2, 0.2, 0.2)
      });
    });
  }

  function sharesBorder(id, array) {
    let coords = countryCoords
      .filter(x => x.id.split("_")[0] === id)
      .reduce((a, b) => [...a, ...b.coords.positions], []);
    let yes = [],
      no = [];
    if (array) {
      yes = array.filter(x => {
        let xCoords = countryCoords
          .filter(y => y.id.split("_")[0] === x)
          .reduce((a, b) => [...a, ...b.coords.positions], []);
        let response = xCoords.some(y =>
          coords.some(z => z.x === y.x && z.y === y.y)
        );
        return response;
      });
      no = array.filter(x => yes.indexOf(x) === -1);
    }
    return { no, yes };
  }

  function removePath() {
    let path = viewer.scene.primitives._primitives.find(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === "path";
      }
    });

    viewer.scene.primitives.remove(path);
  }

  function drawPath(ids, { id, color, width }) {
    let positions = ids.map(x => {
      let country = countryData.find(y => y.id === x);
      return Cesium.Cartesian3.fromDegrees(
        +country.centroidLat,
        +country.centroidLon
      );
    });
    let path = new Cesium.Primitive({
      releaseGeometryInstances: false,
      geometryInstances: new Cesium.GeometryInstance({
        id: id ? id : "path",
        geometry: Cesium.PolylineGeometry.createGeometry(
          new Cesium.PolylineGeometry({
            positions,
            width
          })
        )
      }),
      appearance: new Cesium.PolylineMaterialAppearance({
        material: new Cesium.Material.fromType("PolylineDash", {
          color
        })
      }),
      asynchronous: false
    });
    viewer.scene.primitives.add(path);
  }

  function showPrimitive(id, continent) {
    if (showContinents && !continent) return;
    var primitives = viewer.scene.primitives;
    let polygons = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_polygon";
      }
    });
    let corridors = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_corridor";
      }
    });
    let holes = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_corridor_hole";
      }
    });
    let other = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id;
      }
    });
    if (polygons.length) polygons.forEach(e => (e.show = true));
    if (corridors.length) corridors.forEach(e => (e.show = true));
    if (holes.length) holes.forEach(e => (e.show = true));
    if (other.length) other.forEach(e => (e.show = true));
  }

  function hidePrimitive(id) {
    var primitives = viewer.scene.primitives;
    let polygons = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_polygon";
      }
    });
    let corridors = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_corridor";
      }
    });
    let other = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id;
      }
    });
    if (polygons.length) polygons.forEach(e => (e.show = false));
    if (corridors.length) corridors.forEach(e => (e.show = false));
    if (other.length) other.forEach(e => (e.show = false));
  }

  function getExistingPrimitive(id) {
    var primitives = viewer.scene.primitives;

    let existingPolygon = primitives._primitives.find(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_polygon";
      }
    });
    let existingCorridor = primitives._primitives.find(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_corridor";
      }
    });
    let existingHoles = primitives._primitives.filter(p => {
      if (p._instanceIds && p._instanceIds[0]) {
        return p._instanceIds[0] === id + "_corridor_hole";
      }
    });
    return {
      existingPolygon,
      existingCorridor,
      existingHoles
    };
  }

  function removePrimitive(id) {
    var primitives = viewer.scene.primitives;
    let {
      existingPolygon,
      existingCorridor,
      existingHoles
    } = getExistingPrimitive(id);
    if (existingPolygon) primitives.remove(existingPolygon);
    if (existingCorridor) primitives.remove(existingCorridor);
    if (existingHoles.length) existingHoles.forEach(h => primitives.remove(h));
    return new Promise(res => {
      res(true);
    });
  }

  function createPrimitive({
    cartesian,
    id,
    height = 0,
    fillColor = [1, 1, 1],
    strokeColor = [1, 1, 1],
    fillOpacity = 0.8,
    strokeOpacity = 1.0,
    dontShow
  }) {
    // if (showContinents) dontShow = true;

    var primitives = viewer.scene.primitives;

    let {
      existingPolygon,
      existingCorridor,
      existingHoles
    } = getExistingPrimitive(id);

    if (!existingPolygon && !existingCorridor && !existingHoles.length) {
      let polygonPrimitive = new Cesium.Primitive({
        show: dontShow ? false : true,
        releaseGeometryInstances: false,
        geometryInstances: new Cesium.GeometryInstance({
          id: id + "_polygon",
          geometry: Cesium.PolygonGeometry.createGeometry(
            new Cesium.PolygonGeometry({
              polygonHierarchy: cartesian,
              height
            })
          )
        }),
        appearance: new Cesium.MaterialAppearance({
          material: new Cesium.Material.fromType("Color", {
            color: new Cesium.Color(
              fillColor[0],
              fillColor[1],
              fillColor[2],
              fillOpacity
            )
          })
        }),
        asynchronous: false
      });
      let { positions, holes } = cartesian;
      makeCorridor(positions);
      if (holes.length) {
        holes.forEach(h => {
          makeCorridor(h.positions, true);
        });
      }
      function makeCorridor(p, isHole) {
        let cid = id + "_corridor";
        if (isHole) cid += "_hole";
        let corridorPrimitive = new Cesium.Primitive({
          show: dontShow ? false : true,
          releaseGeometryInstances: false,
          geometryInstances: new Cesium.GeometryInstance({
            id: cid,
            geometry: Cesium.CorridorGeometry.createGeometry(
              new Cesium.CorridorGeometry({
                positions: p,
                width: 8000,
                extrudedHeight: height + 10000
              })
            )
          }),
          appearance: new Cesium.MaterialAppearance({
            material: new Cesium.Material.fromType("Color", {
              color: new Cesium.Color(
                strokeColor[0],
                strokeColor[1],
                strokeColor[2],
                strokeOpacity
              )
            })
          }),
          asynchronous: false
        });
        primitives.add(corridorPrimitive);
      }
      primitives.add(polygonPrimitive);
    } else {
      // console.log({
      //   id,
      //   existingPolygon,
      //   existingCorridor,
      //   existingHoles
      // });
    }
    return new Promise(res => res(true));
  }

  function addCountryLabels() {
    let winS = Math.min(window.innerWidth, window.innerHeight);
    countryLabels = new Cesium.CustomDataSource("countryLabels");
    viewer.dataSources.add(countryLabels);
    countryData.forEach(c => {
      let fontSizes = ["20px", "18px", "16px", "14px", "12px"];
      let areas = [2000000, 1000000, 200000, 50000, 0];
      let i = areas.findIndex(a => c.Area_mi2 > a);
      // let fS = fontSizes[i];
      let tBD = [18337, 25505];
      // if (c.labelClusterCat) tBD = [2500, 4660];
      // else if (i === 4) tBD = [6810, 7885];
      // console.log(c.country, winS, tBD.map(x => x / winS));
      let translucencyByDistance = new Cesium.NearFarScalar(
        tBD[0] * winS,
        1.0,
        tBD[1] * winS,
        0.0
      );
      countryLabels.entities.add({
        id: c.id + "_label",
        show: false,
        name: c.id,
        module: "countryLabels",
        centroid: [+c.centroidLat, +c.centroidLon],
        position: Cesium.Cartesian3.fromDegrees(+c.centroidLat, +c.centroidLon),
        label: {
          text: getForces(c.id).toString(),
          // translucencyByDistance,
          font: `bold 16px Helvetica`,
          fillColor: Cesium.Color.WHITE,
          showBackground: true,
          backgroundPadding: new Cesium.Cartesian2(5, 4),
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE //,
          // eyeOffset: new Cesium.Cartesian3(0, 0, -2000000)
        }
      });
    });
  }

  let players;

  function getForces(c) {
    if (!players) return "";
    let player = players.find(p => p.territory.find(t => t.name === c));
    if (!player) return "";
    let territory = player.territory.find(t => t.name === c);
    // console.log(c, territory.forces);
    return territory.forces;
  }

  function getCanAttack(id, player) {
    let ca = [];
    ca = countriesCanAttack.find(x => x.id === id);
    if (ca) {
      ca = ca.canAttack;
      if (player)
        ca = ca.filter(x => !player.territory.find(y => y.name === x));
    }
    return ca;
  }

  function getPlayerColor(id) {
    let player = players.find(p => p.territory.find(t => t.name === id));
    if (player) return player.color;
  }
  function getPlayerName(id) {
    let player = players.find(p => p.territory.find(t => t.name === id));
    if (player) return player.name;
  }
  function getIDFromName(name) {
    return countryData.find(x => x.country === name).id;
  }
  function getNameFromID(id) {
    return countryData.find(x => x.id === id).country;
  }

  function spinGlobe(v) {
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, v);
  }

  function initGameMap() {
    console.log("initiating game map");
    // countryLabels.entities.values.forEach(l => {
    //   // let { x, y } = l.position._value;
    //   l.label.text = getForces(l.name).toString();
    //   let c = getPlayerColor(l.name);
    //   if (c) l.label.backgroundColor = new Cesium.Color(c[0], c[1], c[2], 1);
    //   l.position = Cesium.Cartesian3.fromDegrees(
    //     l.centroid[0],
    //     l.centroid[1],
    //     getForces(l.name) * 30000 + 20000
    //   );
    // });

    let totalPrimitives = 0;
    countries.forEach((c, i) => {
      let color = getPlayerColor(c);
      let height = getForces(c) * 30000;
      let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
      totalPrimitives += filter.length;
      if (filter.length)
        filter.forEach(o => {
          setTimeout(() => {
            spinGlobe(0.02);
            removePrimitive(o.id).then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id,
                height,
                fillColor: color,
                strokeColor: color
              });
            });

            createPrimitive({
              cartesian: o.coords,
              id: o.id + "_transparent",
              height,
              fillColor: color,
              strokeColor: color,
              fillOpacity: 0.1,
              strokeOpacity: 0.2,
              dontShow: true
            });

            let continent = continents.find(
              x => x.Countries.indexOf(o.id.split("_")[0]) !== -1
            );
            if (!continent) console.log(o.id);
            else
              createPrimitive({
                cartesian: o.coords,
                id: o.id + "_continent",
                fillColor: continent.Color,
                strokeColor: [1, 1, 1],
                fillOpacity: 0.4,
                strokeOpacity: 0.3,
                dontShow: true
              });
            //labels
            let l = countryLabels.entities.values.find(l => l.name === c);
            l.label.text = getForces(l.name).toString();
            l.label.backgroundColor = new Cesium.Color(
              color[0],
              color[1],
              color[2],
              1
            );
            l.position = Cesium.Cartesian3.fromDegrees(
              l.centroid[0],
              l.centroid[1],
              height + 20000
            );
            l.show = true;
          }, 5 * (i + 1));
        });
    });
    return new Promise(res => {
      setTimeout(() => {
        res(true);
      }, totalPrimitives * 10);
    });
  }

  function resetCountryTransparencies() {
    countries.forEach((c, i) => {
      let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
      if (filter)
        filter.forEach(o => {
          hidePrimitive(o.id + "_transparent");
          showPrimitive(o.id);
        });
    });
    naturalEarthDark.alpha = 0;
  }

  function updateMap(ids) {
    // console.log("updateMap", ids);
    let filteredLabels = countryLabels.entities.values,
      filteredCountries = countries;
    if (ids) {
      filteredLabels = filteredLabels.filter(l => ids.indexOf(l.name) !== -1);
      filteredCountries = filteredCountries.filter(c => ids.indexOf(c) !== -1);
    }
    filteredLabels.forEach(l => {
      // let { x, y } = l.position._value;
      l.label.text = getForces(l.name).toString();
      let c = getPlayerColor(l.name);
      if (c) l.label.backgroundColor = new Cesium.Color(c[0], c[1], c[2], 1);
      l.position = Cesium.Cartesian3.fromDegrees(
        l.centroid[0],
        l.centroid[1],
        getForces(l.name) * 30000 + 20000
      );
    });
    // let primitives = viewer.scene.primitives._primitives;
    // primitives.forEach(p => {
    //   if (p._instanceIds) p.destroy();
    // });
    let finished = [],
      totalPrimitives = 0;
    filteredCountries.forEach((c, i) => {
      let color = getPlayerColor(c);
      let height = getForces(c) * 30000;
      let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
      totalPrimitives += filter.length;
      if (filter.length)
        filter.forEach(o => {
          setTimeout(() => {
            removePrimitive(o.id).then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id,
                height,
                fillColor: color,
                strokeColor: color
              }).then(() => {
                finished.push(o.id);
              });
            });
            removePrimitive(o.id + "_transparent").then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id + "_transparent",
                height,
                fillColor: color,
                strokeColor: color,
                fillOpacity: 0.1,
                strokeOpacity: 0.2,
                dontShow: true
              });
            });
          }, 5 * (i + 1));
        });
    });

    return new Promise(res => {
      let interval = setInterval(() => {
        // console.log(totalPrimitives, finished.length);
        if (totalPrimitives === finished.length) {
          clearInterval(interval);
          res(true);
        }
      }, 3);
    });

    // console.log(primitivesToBeDestroyed);
    // primitivesToBeDestroyed.forEach(p=>p.destroy())
    // primitives.forEach(p => {
    //   if (!p._instanceIds || !p._instanceIds.length) return;
    //   let split = p._instanceIds[0].split("_");
    //   let id = split[0],
    //     type = split[1];
    //   console.log(id, type, height, cartesian);

    //   if (type === "polygon")
    //     p.geometryInstances = new Cesium.GeometryInstance({
    //       id: id + "_" + type,
    //       geometry: Cesium.PolygonGeometry.createGeometry(
    //         new Cesium.PolygonGeometry({
    //           polygonHierarchy: new Cesium.PolygonHierarchy(cartesian),
    //           height
    //         })
    //       )
    //     });
    //   else if (type === "corridor")
    //     p.geometryInstances = new Cesium.GeometryInstance({
    //       id: id + "_" + type,
    //       geometry: Cesium.CorridorGeometry.createGeometry(
    //         new Cesium.CorridorGeometry({
    //           positions: cartesian,
    //           width: 8000,
    //           extrudedHeight: height + 10000
    //         })
    //       )
    //     });
    // });
    // countryEntities.entities.values.forEach(e => {
    //   // console.log(e.name, getForces(e.name));
    //   // if (e.polygon) e.polygon.extrudedHeight = getForces(e.name) * 30000;
    //   if (e.polygon) e.polygon.height = getForces(e.name) * 30000;
    //   if (e.corridor)
    //     e.corridor.extrudedHeight = getForces(e.name) * 30000 + 10000;
    // });
    // countryBorders.entities.values.forEach(e => {
    //   // console.log(e.name, getForces(e.name));
    //   if (e.polygon) e.polygon.extrudedHeight = getForces(e.name) * 30000;
    //   if (e.corridor)
    //     e.corridor.extrudedHeight = getForces(e.name) * 30000 + 10000;
    // });
  }

  function flyToCountries({ ids, pitch = -2 * Math.PI, range = 10000000 }) {
    // console.log({userManuallyMoved,ids})
    if (!userManuallyMoved && ids && ids.length) {
      let geometries = ids
        .map(id => {
          let ps = viewer.scene.primitives._primitives.filter(
            x =>
              x._instanceIds && x._instanceIds.some(y => y.split("_")[0] === id)
          );
          if (ps.length)
            return Cesium.BoundingSphere.fromBoundingSpheres(
              ps.map(p => p.geometryInstances.geometry.boundingSphere)
            );
        })
        .filter(x => x);
      // console.log(geometries);
      if (geometries.length) {
        if (scene.mode === 1) {
          let { center, radius } = Cesium.BoundingSphere.fromBoundingSpheres(
            geometries
          );
          let offset = new Cesium.HeadingPitchRange(
            2 * Math.PI,
            -0.785,
            radius * 2
          );
          scene.camera.lookAt(center, offset);
          scene.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          // viewer.trackedEntity = undefined;
          // viewer.selectedEntity = undefined;
        } else {
          let offset = new Cesium.HeadingPitchRange(2 * Math.PI, pitch, range);
          scene.camera.flyToBoundingSphere(
            Cesium.BoundingSphere.fromBoundingSpheres(geometries),
            {
              offset,
              duration: 1
            }
          );
        }
      }
    }
    return new Promise(res => {
      setTimeout(() => {
        res(true);
      }, 1000);
    });
  }

  let showContinents = true; //false;

  function initGame({ humans, robots }) {
    console.log({ humans, robots });
    let gameLog = {
      log: [],
      update(x) {
        this.log.push(x);
        let gameLog = document.getElementById("gameLog");
        let c = integerToRGB(x.player.color);
        gameLog.innerHTML += `<div><div style="border-color:${c};">${x.text}</div></div>`;
        gameLog.scrollTo({
          top: [...gameLog.childNodes]
            .map(x => x.getBoundingClientRect().height)
            .reduce((a, b) => a + b, 0),
          left: 0,
          behavior: "smooth"
        });
      }
    };
    document.getElementById("startGame").style.display = "none";
    let gameInstructions = document.getElementById("gameInstructions");

    function initPlayers() {
      console.log("initiating players");
      players = [];
      function createPlayers(names) {
        console.log("creating players: ", names);
        let colors = [
          [0, 1, 0],
          [0, 0, 1],
          [1, 0, 0],
          [1, 1, 0],
          [0, 1, 1],
          [1, 0, 1],
          [0.78, 0.58, 0.3],
          [0.63, 0.3, 0.78]
        ];
        names.forEach((name, i) => {
          let color = colors[i];
          if (!color) color = [Math.random(), Math.random(), Math.random()];
          // console.log(name, i, color);
          players.push({
            name,
            color,
            territory: [],
            image: "Images/user.png",
            cards: [], //["Cavalry", "Infantry", "Artillery"],
            continents: [],
            isComputer: i > humans.length - 1,
            index: getPlayerIndex(i, names.length),
            forcesToPlace: 0
          });
        });
      }
      // console.log("fetching random names");
      // return fetch(
      //   `https://namey.muffinlabs.com/name.json?count=${humans +
      //     robots}&with_surname=true&frequency=all`
      // )
      //   .then(res => {
      //     // console.log(res);
      //     return res.json().then(names => {
      return new Promise(res => {
        createPlayers([...humans, ...robots]);
        res();
      });
      // });
      // })
      // .catch(error => {
      //   console.log({ error });
      //   let names = [];
      //   while (names.length < humans) names.push(`Human ${names.length + 1}`);
      //   while (names.length < humans + robots)
      //     names.push(`Robot ${names.length + 1 - humans}`);
      //   createPlayers(names);
      // });
    }

    function showAlert(text, player) {
      gameLog.update({ player, text });
      return new Promise(res => {
        if (fastForward === 2) {
          res(true);
          return;
        }
        let alertBox = document.getElementById("alertBox");
        alertBox.classList.remove("fade-out");
        alertBox.classList.add("fade-in");
        alertBox.style.display = "block";
        alertBox.style.borderColor = integerToRGB(player.color);
        alertBox.innerHTML = text;
        function hideAlertBox() {
          alertBox.classList.remove("fade-in");
          alertBox.classList.add("fade-out");
          setTimeout(() => {
            alertBox.style.display = "none";
            alertBox.innerHTML = "";
            res(true);
          }, 650);
        }
        let timeout = setTimeout(hideAlertBox, fastForward ? 1500 : 10000);
        alertBox.addEventListener("click", function() {
          clearTimeout(timeout);
          hideAlertBox();
        });
      });
    }

    // players = [
    //   {
    //     name: "Player 1",
    //     color: [1, 1, 0],
    //     territory: [],
    //     image: "Images/user.png",
    //     cards: ["Artillery", "Artillery", "Cavalry", "Infantry"],
    //     continents: []
    //   },
    //   {
    //     name: "Player 2",
    //     color: [0, 1, 0],
    //     territory: [],
    //     image: "Images/user.png",
    //     cards: [],
    //     continents: []
    //   } ,
    // {
    //   name: "Player 3",
    //   color: [0.78, 0.58, 0.3],
    //   territory: [],
    //   image: "Images/user.png",
    //   cards: [],
    //   continents: []
    // },
    // {
    //   name: "Player 4",
    //   color: [0, 1, 1],
    //   territory: [],
    //   image: "Images/user.png",
    //   cards: [],
    //   continents: []
    // },
    // {
    //   name: "Player 5",
    //   color: [0.63, 0.3, 0.78],
    //   territory: [],
    //   image: "Images/user.png",
    //   cards: [],
    //   continents: []
    // }
    //];

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function initPlayerTerritories() {
      console.log("initiating player territories");
      shuffle(countries).forEach((e, i) => {
        let pI = i % players.length;
        let player = players[pI];
        player.territory.push({
          name: e,
          forces: 1
        });
      });
      // continents.forEach((cont, i) => {
      //   cont.Countries.forEach(c => {
      //     let player = players[i];
      //     player.territory.push({
      //       name: c,
      //       forces: 1
      //     });
      //   });
      // });
      players.forEach((p, i) => {
        let total = calcTotalForces(p);
        let initialAmount = Math.ceil(countries.length / players.length) * 3;
        let left = initialAmount - total;
        while (left > 0) {
          p.territory[
            Math.floor(Math.random() * p.territory.length)
          ].forces += 1;
          left -= 1;
        }
        p.continents = getPlayerContinentsFromTerritory(p);
      });
    }

    function getPlayerContinentsFromTerritory(player) {
      return continents
        .filter(
          x => !x.Countries.find(y => !player.territory.find(z => z.name === y))
        )
        .map(x => x.Name);
    }

    function setMoveForcesColors(selected, canMoveTo) {
      let filter = countryCoords.filter(x => x.id.split("_")[0] === selected);
      if (filter)
        filter.forEach(o => {
          removePrimitive(o.id).then(() => {
            createPrimitive({
              cartesian: o.coords,
              id: o.id,
              height: getForces(selected) * 30000,
              strokeColor: [1, 1, 1],
              fillColor: getPlayerColor(selected)
            });
          });
        });

      countries
        .filter(c => c !== selected && canMoveTo.indexOf(c) === -1)
        .forEach((c, i) => {
          filter = countryCoords.filter(x => x.id.split("_")[0] === c);
          if (filter)
            filter.forEach(o => {
              hidePrimitive(o.id);
              showPrimitive(o.id + "_transparent");
            });
        });
    }

    function setIsMovingTroopsColors(sel) {
      sel.forEach(selected => {
        let filter = countryCoords.filter(x => x.id.split("_")[0] === selected);
        if (filter)
          filter.forEach(o => {
            removePrimitive(o.id).then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id,
                height: getForces(selected) * 30000,
                strokeColor: [1, 1, 1],
                fillColor: getPlayerColor(selected)
              });
            });
          });
      });

      countries
        .filter(c => (c !== sel.indexOf(c)) === -1)
        .forEach((c, i) => {
          filter = countryCoords.filter(x => x.id.split("_")[0] === c);
          if (filter)
            filter.forEach(o => {
              hidePrimitive(o.id);
              showPrimitive(o.id + "_transparent");
            });
        });
    }

    function showAttackButtons() {
      cantClick = true;
      let attackButtonsContainer = document.getElementById("attackButtons");
      attackButtonsContainer.style.display = "grid";
      attackButtonsContainer.innerHTML = `<div><button id="singleCountry">Single Country</button></div>`;
      attackButtonsContainer.innerHTML += `<div><button id="multiCountry">Multi Country</button></div>`;
      function hideButtons() {
        attackButtonsContainer.innerHTML = "";
        attackButtonsContainer.style.display = "none";
      }
      return new Promise(res => {
        let singleCountry = document.getElementById("singleCountry");
        let multiCountry = document.getElementById("multiCountry");
        singleCountry.addEventListener("click", () => {
          cantClick = false;
          hideButtons();
          res(false);
        });
        multiCountry.addEventListener("click", () => {
          cantClick = false;
          hideButtons();
          res(true);
        });
      });
    }

    function setCanAttackCountryColors(selected, canAttack) {
      let filter = countryCoords.filter(x => x.id.split("_")[0] === selected);
      if (filter)
        filter.forEach(o => {
          removePrimitive(o.id).then(() => {
            createPrimitive({
              cartesian: o.coords,
              id: o.id,
              height: getForces(selected) * 30000,
              strokeColor: [1, 0, 0],
              fillColor: getPlayerColor(selected)
            });
          });
        });
      // console.log("setCanAttackCountryColors", selected, canAttack);
      canAttack.forEach(c => {
        let height = getForces(c) * 30000;
        filter = countryCoords.filter(x => x.id.split("_")[0] === c);
        if (filter)
          filter.forEach(o => {
            removePrimitive(o.id).then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id,
                height,
                strokeColor: [1, 1, 1],
                fillColor: getPlayerColor(c)
              });
            });
          });
      });

      countries
        .filter(c => c !== selected && canAttack.indexOf(c) === -1)
        .forEach((c, i) => {
          filter = countryCoords.filter(x => x.id.split("_")[0] === c);
          if (filter)
            filter.forEach(o => {
              hidePrimitive(o.id);
              showPrimitive(o.id + "_transparent");
            });
        });
    }

    function setBattleCountryColors({ aggressor, defender }) {
      updateMap([aggressor, defender]);
      let prevCanAttack = countriesCanAttack.find(x => x.id === aggressor);
      prevCanAttack = prevCanAttack.canAttack.filter(
        x =>
          !players[currentPlayersTurn].territory.find(y => y.name === x) &&
          x !== defender
      );
      // console.log("setBattleCountryColors", aggressor, prevCanAttack);
      prevCanAttack.forEach(c => {
        // let color = getPlayerColor(c);
        // let height = getForces(c) * 30000;
        let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
        if (filter)
          filter.forEach(o => {
            hidePrimitive(o.id);
            showPrimitive(o.id + "_transparent");
            //   removePrimitive(o.id).then(() => {
            //     createPrimitive({
            //       cartesian: o.coords,
            //       id: o.id,
            //       height,
            //       fillColor: color,
            //       strokeColor: color,
            //       fillOpacity: 0.1,
            //       strokeOpacity: 0.1
            //     });
            //   });
          });
      });
    }

    //game global variables
    let currentPlayersTurn,
      firstPlayer,
      playerGetsACard,
      phases = ["Place Troops", "Attack", "Move Forces"],
      phase = -1,
      cards = ["Infantry", "Cavalry", "Artillery"],
      cardImages = {
        Infantry: "Images/cards/infantry.png",
        Cavalry: "Images/cards/cavalry.png",
        Artillery: "Images/cards/artillery.png"
      },
      round = 0,
      gameHasStarted,
      fastForward = 0,
      battleOccurred;

    let nextPhaseButton = document.getElementById("nextPhase");
    let turnOverButton = document.getElementById("turnOver");
    let fastForwardButton = document.getElementById("fastForward");

    fastForwardButton.addEventListener("click", function() {
      if (fastForward === 2) {
        fastForward = 0;
        fastForwardButton.classList.remove("pulse");
        document.getElementById("ff1").style.color = "black";
        document.getElementById("ff2").style.color = "black";
      } else {
        fastForward += 1;
        fastForwardButton.classList.add("pulse");
        document.getElementById("ff1").style.color = "red";
        if (fastForward === 2)
          document.getElementById("ff2").style.color = "red";
      }
    });
    currentPlayersTurn = Math.ceil(
      Math.random() * (humans.length + robots.length - 1)
    );
    firstPlayer = currentPlayersTurn;
    initPlayers().then(() => {
      initPlayerTerritories();
      addCountryLabels();
      addContinentBorders().then(() => {
        drawCanAttackPaths();
        setTimeout(() => {
          toggleContinents();
          initGameMap().then(() => {
            // console.log("starting game");
            setCardTradeInHandler();
            setContinentsToggleHandler();
            setGameLogToggleHandler();
            setDetailsToggleHandler();
            updateSummary();
            toggleGameDetails();
            setTimeout(() => {
              nextPlayersTurn();
              toggleGameDetails();
              showGameStuff();
            }, 4000);
          });
        }, 500);
      });
    });

    function showGameStuff() {
      gameInstructions.style.display = "grid";
      let playersTurn = document.getElementById("playersTurn");
      playersTurn.style.display = "block";
      let continentsButton = document.getElementById("continents");
      continentsButton.style.display = "block";
      let logToggle = document.getElementById("gameLogToggle");
      logToggle.style.display = "block";
      let roundContainer = document.getElementById("round");
      roundContainer.style.display = "block";
    }

    function setContinentsToggleHandler() {
      let continentsButton = document.getElementById("continents");
      continentsButton.addEventListener("click", toggleContinents);
    }

    function toggleContinents() {
      if (showContinents) {
        showContinents = false;
        continents.forEach(cont => {
          hidePrimitive(cont.Name);
          cont.Countries.forEach(c => {
            let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
            filter.forEach(o => {
              hidePrimitive(o.id + "_continent");
              showPrimitive(o.id);
            });
          });
        });
      } else {
        showContinents = true;
        continents.forEach(cont => {
          showPrimitive(cont.Name, true);
          cont.Countries.forEach(c => {
            let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
            filter.forEach(o => {
              hidePrimitive(o.id);
              showPrimitive(o.id + "_continent", true);
            });
          });
        });
      }
    }

    function setCardTradeInHandler() {
      let playerCards = document.getElementById("playerCards");
      playerCards.addEventListener("click", function() {
        if (!players[currentPlayersTurn].isComputer) viewCards();
      });
    }

    function setGameLogToggleHandler() {
      let logToggle = document.getElementById("gameLogToggle");
      logToggle.addEventListener("click", toggleGameLog);
    }

    function toggleGameLog() {
      let gl = document.getElementById("gameLog");
      if (gl.classList.contains("slide-in")) {
        gl.classList.add("slide-out");
        gl.classList.remove("slide-in");
        setTimeout(() => {
          gl.style.display = "none";
        }, 500);
      } else {
        gl.style.display = "block";
        gl.classList.add("slide-in");
        gl.classList.remove("slide-out");
      }
    }

    function setDetailsToggleHandler() {
      let detailsToggle = document.getElementById("gameDetailsToggle");
      detailsToggle.style.display = "block";
      detailsToggle.addEventListener("click", toggleGameDetails);
    }

    function toggleGameDetails() {
      let gd = document.getElementById("gameDetails");
      if (gd.classList.contains("slide-in")) {
        gd.classList.add("slide-out");
        gd.classList.remove("slide-in");
        // setTimeout(() => {
        //   gd.style.display = "none";
        // }, 500);
      } else {
        // gd.style.display = "block";
        gd.classList.add("slide-in");
        gd.classList.remove("slide-out");
      }
    }

    function calcTotalForces(p) {
      return (
        p.territory
          .map(t => t.forces)
          .reduce((a, b) => {
            return a + b;
          }, 0) + p.forcesToPlace
      );
    }

    function integerToRGB(colorArray, opacity = 1) {
      return `rgba(${colorArray
        .map(c => Math.round(c * 255))
        .toString()}, ${opacity})`;
    }

    let playerSortMethod = "Players";
    function getSortedPlayers() {
      let sortablePlayers = JSON.parse(JSON.stringify(players));
      switch (playerSortMethod) {
        case "Players":
          return sortablePlayers.sort((a, b) => a.index - b.index);
        case "Total Forces":
          return sortablePlayers.sort(
            (a, b) => calcTotalForces(b) - calcTotalForces(a)
          );
        case "Territory":
          return sortablePlayers.sort(
            (a, b) => b.territory.length - a.territory.length
          );
        case "Continents":
          return sortablePlayers.sort(
            (a, b) => b.continents.length - a.continents.length
          );
        case "Cards":
          return sortablePlayers.sort(
            (a, b) => b.cards.length - a.cards.length
          );
        default:
          return sortablePlayers.sort((a, b) => a.index - b.index);
      }
    }

    function updateSummary() {
      let headers = [
        "Players",
        "Total Forces",
        "Territory",
        "Continents",
        "Cards"
      ];
      let cont = document.getElementById("playersContainer");
      cont.style.display = "";
      cont.innerHTML = `<div id="playerDetailsHeaders" class="playerDetails">${headers
        .map(
          h =>
            `<div style="color:${
              h === playerSortMethod ? "red" : ""
            };">${h}</div>`
        )
        .join("")}</div>`;
      cont.innerHTML += getSortedPlayers()
        .map(p => {
          let playerDetails = `<div class="playerDetails" style="color:${integerToRGB(
            p.color
          )};">`;
          let tColor = "white";
          if (p.color[0] === 1 && p.color[1] === 1 && p.color[2] === 0)
            tColor = "rgb(150,150,150)";
          playerDetails += `<div class="playerNames" style="color:${tColor};background:${integerToRGB(
            p.color,
            0.9
          )};">${p.name}${p.isComputer ? " (computer)" : ""}</div>`;
          playerDetails += `<div>${calcTotalForces(p)}</div>`;
          let tL = p.territory.length,
            cL = countries.length;
          let percentage = ((tL / cL) * 100).toFixed(0);
          playerDetails += `<div>${tL} / ${cL} (${percentage}%)</div>`;
          playerDetails += `<div>${p.continents.length}</div>`;
          playerDetails += `<div>${p.cards.length}</div>`;
          playerDetails += `</div>`;
          return playerDetails;
        })
        .join("");
      [...document.getElementById("playerDetailsHeaders").childNodes].forEach(
        (el, i) => {
          el.addEventListener("click", function() {
            playerSortMethod = headers[i];
            console.log(playerSortMethod);
            updateSummary();
          });
        }
      );
    }

    function updateContainerAndText(player) {
      let { forcesToPlace, name, image, color } = player;
      nextPhaseButton.disabled = true;

      if (forcesToPlace)
        document.getElementById(
          "placeTroops"
        ).innerHTML = `${forcesToPlace} left`;

      document.getElementById(
        "playersTurn"
      ).innerHTML = `<div>${name}</div><div><img src="${image}"></div>`;

      let color1 = integerToRGB(color);
      let color2 = integerToRGB(color, 0.5);
      gameInstructions.style.boxShadow = `0 0 14px 1px ${color1}`;
      gameInstructions.style.borderColor = `${color1}`;
      gameInstructions.style.background = `${color2}`;
      let container = document.getElementById("gameOuterContainer");
      container.style.border = `solid 10px ${color1}`;
    }

    function goToNextPhase() {
      phase += 1;
      if (phase === phases.length - 1) {
        if (!players[currentPlayersTurn].isComputer)
          turnOverButton.style.display = "block";
        nextPhaseButton.style.display = "none";
      }
      let currentPhase = document.getElementById("currentPhase");
      currentPhase.innerHTML = "Current Phase: " + phases[phase];
      if (phase === 0)
        currentPhase.innerHTML += `<span id="placeTroops"></span>`;
    }
    goToNextPhase();
    nextPhaseButton.addEventListener("click", function() {
      if (phase === 1 && !battleOccurred) {
        if (window.confirm("You haven't attacked anyone! Are you sure?"))
          goToNextPhase();
      } else goToNextPhase();
    });

    function getPlayerIndex(i, total) {
      if (i < firstPlayer) i += total;
      return i - firstPlayer;
    }

    function calcForcesToPlace(player) {
      let territories = player.territory.length;
      let canPlace = Math.round(territories / 6);
      let text = `<div>${player.name} recieved:</div>`;
      text += `<div>${canPlace} forces for having ${territories} territories.</div>`;
      if (player.continents) {
        player.continents.forEach(c => {
          let f = calcForcesFromContinent(c);
          text += `<div>${f} forces for controlling ${c}.</div>`;
          canPlace += f;
        });
      }

      if (round === 1 && currentPlayersTurn !== firstPlayer) {
        let { index } = player;
        let fromLast = players.length - 1 - index;
        let amount = players.length > 5 ? 10 - fromLast : 10 - fromLast * 2;
        canPlace += amount;
        let suffixes = [
          "",
          "st",
          "nd",
          "rd",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th",
          "th"
        ];
        text += `<div>${amount} force${
          amount > 1 ? "s" : ""
        } for going ${index + 1}${suffixes[index + 1]}</div>`;
      }
      canPlace = Math.round(canPlace);
      if (canPlace < 3) canPlace = 3;
      text += `<div>Total: ${canPlace}</div>`;
      return showAlert(text, player).then(() => {
        return canPlace;
      });
    }

    function calcForcesFromContinent(name) {
      let continent = continents.find(x => x.Name === name);
      if (!continent || !continent.Countries) return 0;
      console.log(name, Math.ceil(continent.Countries.length / 4));
      return Math.ceil(continent.Countries.length / 4);
    }

    function canTradeCards(player) {
      let cavalry = player.cards.filter(x => x === "Cavalry"),
        infantry = player.cards.filter(x => x === "Infantry"),
        artillery = player.cards.filter(x => x === "Artillery");
      let c, f;
      if (cavalry.length && infantry.length && artillery.length) c = "All";
      else if (artillery.length >= 3) c = "Artillery";
      else if (cavalry.length >= 3) c = "Cavalry";
      else if (infantry.length >= 3) c = "Infantry";
      if (c) {
        let forces = { All: 10, Artillery: 8, Cavalry: 6, Infantry: 4 };
        f = forces[c];
        return { c, f };
      }
    }

    function viewCards() {
      let viewCards = document.getElementById("viewCards");
      viewCards.style.display = "flex";
      let player = players[currentPlayersTurn];
      let h = window.innerHeight;
      viewCards.innerHTML += `<div class='backdrop'></div>`;
      viewCards.innerHTML += `<div id="lgCardContainer">${player.cards
        .map(
          c =>
            `<div style="min-width:${h * 0.27}px;min-height:${h *
              0.42}px;max-width:${h * 0.27}px;max-height:${h *
              0.42}px;">${c}<img src=${cardImages[c]}></div>`
        )
        .join("")}</div>`;
      if (phase === 0) {
        let canTrade = canTradeCards(player),
          text;
        if (canTrade) {
          if (canTrade.c === "All")
            text = `Trade in one card of each type for ${canTrade.f} forces.`;
          else
            text = `Trade in 3 ${canTrade.c} cards for ${canTrade.f} forces.`;
          viewCards.innerHTML += `<div id="tradeInCards"><button>${text}</button></div>`;
          document
            .getElementById("tradeInCards")
            .addEventListener("click", function() {
              tradeInCards(player, canTrade);
            });
        }
      }
      document
        .querySelector("#viewCards .backdrop")
        .addEventListener("click", function() {
          console.log("close cards");
          viewCards.innerHTML = "";
          viewCards.style.display = "none";
        });
    }

    function tradeInCards(player, canTrade) {
      let { c, f } = canTrade;
      if (c === "All") {
        ["Artillery", "Cavalry", "Infantry"].forEach(x => {
          let index = player.cards.findIndex(y => x === y);
          player.cards.splice(index, 1);
        });
      } else {
        [1, 2, 3].forEach(i => {
          let index = player.cards.findIndex(x => x === c);
          player.cards.splice(index, 1);
        });
      }
      player.forcesToPlace += f;
      document.getElementById(
        "placeTroops"
      ).innerHTML = `${player.forcesToPlace} left`;
      let viewCards = document.getElementById("viewCards");
      viewCards.innerHTML = "";
      viewCards.style.display = "none";
      updatePlayersCards();
      let text = `Got ${f} troops for trading cards.`;
      if (player.isComputer) showAlert(text, player);
      else gameLog.update({ player, text });
    }

    function updatePlayersCards() {
      let playerCards = document.getElementById("playerCards");
      let player = players[currentPlayersTurn];
      playerCards.innerHTML = player.cards
        .map((c, i, a) => {
          let text = "";
          if (!player.isComputer) text = `${c}<img src=${cardImages[c]}>`;
          return `<div style="transform: translateX(${(i / a.length) * 12 -
            6}px) rotate(${(i / a.length) * 36 - 18}deg)">${text}</div>`;
        })
        .join("");
    }

    function animateCard(card) {
      if (fastForward === 2) return new Promise(res => res());
      // let cards = players[currentPlayersTurn].cards.length;
      let playerCards = document.getElementById("playerCards");
      let h = window.innerHeight,
        w = window.innerWidth;
      let rect = playerCards.getBoundingClientRect();
      let sScale = 5,
        eScale = 1,
        sTop = h * 0.5,
        sLeft = w * 0.5,
        eTop = rect.top,
        eLeft = rect.left,
        sRotate = 0,
        eRotate = -18,
        steps = 10,
        currentStep = 0;
      let text = "";
      if (!players[currentPlayersTurn].isComputer)
        text = `${card}<img src=${cardImages[card]}>`;
      playerCards.innerHTML += `<div id="newCard" style="position:fixed;">${text}</div>`;
      let newCard = document.getElementById("newCard");
      newCard.style.transform = `scale(${sScale}) rotate(${sRotate}deg)`;
      newCard.style.top = `${sTop}px`;
      newCard.style.left = `${sLeft}px`;

      return new Promise(res => {
        setTimeout(() => {
          let interval = setInterval(() => {
            if (currentStep >= steps) {
              clearInterval(interval);
              res(true);
            } else {
              let percent = currentStep / steps;
              function getCurrent(s, e) {
                let diff = s - e;
                return s - diff * percent;
              }
              let scale = getCurrent(sScale, eScale);
              let rotate = getCurrent(sRotate, eRotate);
              let top = getCurrent(sTop, eTop);
              let left = getCurrent(sLeft, eLeft);
              // console.log({ percent, scale, rotate, top, left });
              newCard.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
              newCard.style.top = `${top}px`;
              newCard.style.left = `${left}px`;
              currentStep += 1;
            }
          }, 500 / steps);
        }, 1000);
      });
    }

    function nextPlayersTurn() {
      turnOverButton.style.display = "none";
      if (playerGetsACard) {
        playerGetsACard = false;
        let card = cards[Math.floor(Math.random() * cards.length)];
        animateCard(card).then(() => {
          let player = players[currentPlayersTurn];
          let text = `Got a ${card} card for conquering territory`;
          gameLog.update({ player, text });
          player.cards.push(card);
          updatePlayersCards();
          setTimeout(() => {
            startNextTurn();
          }, 800);
        });
      } else {
        startNextTurn();
      }
      function startNextTurn() {
        battleOccurred = false;
        phase = -1;
        goToNextPhase();
        if (
          round === 0 &&
          currentPlayersTurn === firstPlayer &&
          !gameHasStarted
        )
          gameHasStarted = true;
        else incrementCurrentPlayer();
        if (currentPlayersTurn === firstPlayer) incrementRound();
        let player = players[currentPlayersTurn];
        if (player.isComputer) {
          fastForwardButton.style.display = "block";
        } else {
          nextPhaseButton.style.display = "block";
          fastForward = 0;
          document.getElementById("ff1").style.color = "black";
          document.getElementById("ff2").style.color = "black";
          fastForwardButton.classList.remove("pulse");
          fastForwardButton.style.display = "none";
        }
        updateContainerAndText(player);
        updateSummary();
        updatePlayersCards();
        calcForcesToPlace(player).then(f => {
          player.forcesToPlace = f;
          updateContainerAndText(player);
          updateSummary();
          updatePlayersCards();
          if (player.isComputer) doComputerPlayerTurn(player);
        });
      }

      function incrementCurrentPlayer() {
        function inc() {
          if (currentPlayersTurn === players.length - 1) currentPlayersTurn = 0;
          else currentPlayersTurn += 1;
        }
        inc();
        while (
          players[currentPlayersTurn] &&
          !players[currentPlayersTurn].territory.length
        ) {
          inc();
        }
      }

      function incrementRound() {
        round += 1;
        console.log({ round });
        document.getElementById("round").innerHTML = `Round: ${round}`;
      }
    }

    function doComputerPlayerTurn(player) {
      nextPhaseButton.style.display = "none";
      //COMPUTER STRATEGY:
      //look for highest probability of getting a continent and try to get it without losing too many forces
      //if another player is getting to strong look for the least risky way to attack their continents
      //if another player is weak and has cards kill them and take their cards if its not too risky
      //if another player has alot of troops near your continent defend it
      //if your position looks indefensible run away
      //if no good options make yourself not appealing to attack and attack the lowest bordering
      //country in order to get a card
      placeComputerForces(player).then(() => {
        goToNextPhase();
        computerAttackPhase(player).then(() => {
          goToNextPhase();
          computerMoveForces(player).then(() => {
            nextPlayersTurn();
          });
        });
      });
    }

    function placeComputerForces(player) {
      let canTrade = canTradeCards(player);
      if (canTrade) tradeInCards(player, canTrade);
      return new Promise(res => {
        let alreadyReinforced = [];

        function doStuff() {
          if (player.forcesToPlace < 1) {
            res(true);
          } else {
            let tryToGetCont = shouldTryToConquerContinent(player);
            let shouldReinforce = shouldReinforceContinent(
              player,
              !tryToGetCont[0] || !+tryToGetCont[0].percent
            );
            let id, amount;
            if (shouldReinforce.length) {
              id = shouldReinforce[0].country;
              amount = shouldReinforce[0].amount;
              // gameLog.update({ player, text: `Should reinforce ${id}` });
              // console.log(`Should reinforce ${id}`);
            } else {
              let countries = tryToGetCont[0].Countries.filter(x =>
                player.territory.find(y => y.name === x)
              )
                .filter(x => getCanAttack(x, player).length)
                .filter(x => !alreadyReinforced.find(y => y === x));
              countries
                .map(x => x)
                .forEach(c => {
                  let ca = getCanAttack(c, player);
                  ca.filter(x =>
                    player.territory.find(y => y.name === x)
                  ).forEach(x => {
                    if (countries.indexOf(x) === -1) countries.push(x);
                  });
                });
              id = countries[Math.floor(Math.random() * countries.length)];
              amount = Math.round(player.forcesToPlace / countries.length);
              alreadyReinforced.push(id);
              // gameLog.update({
              //   player,
              //   text: `Should try to conquer ${tryToGetCont[0].Name} by reinforcing ${id}`
              // });
            }
            if (amount > player.forcesToPlace) amount = player.forcesToPlace;
            if (amount < 1 && player.forcesToPlace) amount = 1;

            let duration = fastForward ? (fastForward === 2 ? 0 : 200) : 1000;
            setTimeout(() => {
              if (!fastForward)
                flyToCountries({ ids: [id] }).then(() => {
                  if (!fastForward) placeForces(id, amount);
                  doStuff();
                });
              else {
                placeForces(id, amount);
                doStuff();
              }
            }, duration);
          }
        }
        doStuff();
      });
    }

    function shouldReinforceContinent(player, noConquerMethod) {
      // console.log({ noConquerMethod });
      let hasCont = continents.filter(x =>
        player.continents.find(y => y === x.Name)
      );

      let shouldReinforce = [];
      if (hasCont.length) {
        hasCont.forEach(continent => {
          continent.Countries.forEach(country => {
            let c = getForces(country);
            let isTrouble = getCanAttack(country, player).filter(
              x => !player.territory.find(y => y.name === x)
            );
            if (!noConquerMethod)
              isTrouble = isTrouble.filter(x => getForces(x) > c);
            if (isTrouble.length) {
              let amount;
              if (!noConquerMethod) {
                amount = isTrouble
                  .map(x => getForces(x))
                  .reduce((a, b) => {
                    let amountA = a - c;
                    if (amountA < 0) amountA = 0;
                    let amountB = b - c;
                    return amountA + amountB;
                  }, 0);
              } else {
                amount = Math.round(player.forcesToPlace / isTrouble.length);
                if (amount > player.forcesToPlace)
                  amount = player.forcesToPlace;
              }
              if (amount < 1) amount = 1;
              // console.log({ isTrouble, amount });
              shouldReinforce.push({ country, amount });
            }
          });
        });
      }
      // console.log({ shouldReinforce });
      return shouldReinforce;
    }

    function shouldTryToConquerContinent(player) {
      let doesntHaveCont = continents.filter(
        x => !player.continents.find(y => y === x.Name)
      );
      let byTerritory = doesntHaveCont
        .map(x => {
          x.percent =
            x.Countries.filter(x => player.territory.find(y => y.name === x))
              .length / x.Countries.length;
          return x;
        })
        .sort((a, b) => b.percent - a.percent);
      // console.log(
      //   "territory:",
      //   byTerritory.map(x => `${x.Name}: ${x.percent}`)
      // );
      let byForces = doesntHaveCont
        .map(x => {
          let mine = x.Countries.filter(x =>
            player.territory.find(y => y.name === x)
          );
          let notMine = x.Countries.filter(
            x => !player.territory.find(y => y.name === x)
          );
          x.percent =
            mine.map(x => getForces(x)).reduce((a, b) => a + b, 0) /
            notMine.map(x => getForces(x)).reduce((a, b) => a + b, 0);
          return x;
        })
        .sort((a, b) => b.percent - a.percent);
      // console.log(
      //   "forces:",
      //   byForces.map(x => `${x.Name}: ${x.percent}`)
      // );
      if (byTerritory[0].Name === byForces[0].Name) return byTerritory;
      else {
        let territory1v2 = byTerritory[0].percent / byTerritory[1].percent;
        let forces1v2 = byForces[0].percent / byForces[1].percent;
        if (territory1v2 > forces1v2) return byTerritory;
        else return byForces;
      }
      //this doesn't take into account adjacent, or near adjacent territories
      //that have a lot of troops to attack into the continent with
    }

    function computerAttackPhase(player) {
      return new Promise(res => {
        let tryToGetCont = shouldTryToConquerContinent(player);
        let countries = tryToGetCont[0].Countries.filter(x =>
          player.territory.find(y => y.name === x)
        );
        if (!countries.length)
          countries = shouldReinforceContinent(
            player,
            !tryToGetCont[0] || !+tryToGetCont[0].percent
          ).map(x => x.country);
        countries
          .map(x => x)
          .forEach(c => {
            let ca = getCanAttack(c, player);
            ca.filter(x => player.territory.find(y => y.name === x)).forEach(
              x => {
                if (countries.indexOf(x) === -1) countries.push(x);
              }
            );
          });
        let ts = player.territory.filter(
          x => countries.indexOf(x.name) !== -1 && x.forces > 3
        );
        if (ts.length) {
          function tryAttack(t) {
            return new Promise(res => {
              function doStuff(t) {
                let ca = getCanAttack(t.name, player),
                  shouldAttack;
                if (ca.length)
                  shouldAttack = ca.find(x => {
                    let caP = players.find(p =>
                      p.territory.find(t => t.name === x)
                    );
                    let caT = caP.territory.find(t => t.name === x);
                    return caP.name !== player.name && caT.forces < t.forces;
                  });
                if (shouldAttack) {
                  // gameLog.update({
                  //   player,
                  //   text: `Should try to conquer ${tryToGetCont[0].Name} by attacking ${shouldAttack}`
                  // });
                  // console.log(
                  //   `Should try to conquer ${tryToGetCont[0].Name} by attacking ${shouldAttack}`
                  // );
                  let duration = fastForward === 2 ? 0 : 100;
                  if (!fastForward) {
                    selectEntity(t.name);
                    duration = 600;
                  }
                  setTimeout(() => {
                    battle(t.name, shouldAttack, true).then(winner => {
                      // let id = getIDFromName(winner.name);
                      // let color = integerToRGB(getPlayerColor(id));
                      // // setTimeout(() => {
                      let success = winner.role === "aggressor";
                      // let text = success
                      //   ? `<span style="color:${color};">${winner.name}'s</span> attack was successful`
                      //   : `<span style="color:${color};">${winner.name}</span> successfully defended it's territory.`;
                      // gameLog.update({ player, text });
                      if (success && getForces(shouldAttack) > 3) {
                        // gameLog.update({
                        //   player,
                        //   text: `Continue attacking with ${shouldAttack}`
                        // });
                        setTimeout(
                          () => {
                            doStuff(
                              player.territory.find(
                                x => x.name === shouldAttack
                              )
                            );
                          },
                          fastForward ? (fastForward === 2 ? 0 : 100) : 300
                        );
                      } else res(winner);
                      // }, 1500);
                    });
                  }, duration);
                } else {
                  res(false);
                }
              }
              doStuff(t);
            });
          }
          let i = 0;
          function attacks() {
            if (i < ts.length) {
              tryAttack(ts[i]).then(() => {
                setTimeout(
                  () => {
                    i += 1;
                    attacks();
                  },
                  fastForward ? (fastForward === 2 ? 0 : 100) : 1000
                );
              });
            } else res(true);
          }
          attacks();
        } else res(false);
      });
    }

    function computerMoveForces(player) {
      let ts = player.territory.filter(
          x => !getCanAttack(x.name, player).length
        ),
        a,
        d,
        move;
      if (ts.length) {
        ts.sort((a, b) => b.forces - a.forces);
        a = ts[0].name;
        canMoveTo = calcCanMoveTo(
          a,
          player.territory.map(t => t.name)
        );
        move = ts[0].forces - 1;
        d = canMoveTo.find(x => getCanAttack(x, player).length);
        let tryToGetCont = shouldTryToConquerContinent(player);
        let shouldReinforce = shouldReinforceContinent(
          player,
          !tryToGetCont[0] || !+tryToGetCont[0].percent
        );
        if (shouldReinforce.length) {
          let { country, amount } = shouldReinforce[0];
          if (canMoveTo.indexOf(country) !== -1) {
            d = country;
            if (amount + 1 < move) move = amount + 1;
            console.log(
              `Should reinforce ${country} by moving ${move} troops from ${a} to ${d}`
            );
          }
        } else if (tryToGetCont.length) {
          let countries = tryToGetCont[0].Countries.filter(x =>
            player.territory.find(y => y.name === x)
          );
          countries
            .map(x => x)
            .forEach(c => {
              let ca = getCanAttack(c, player);
              ca.filter(x => player.territory.find(y => y.name === x)).forEach(
                x => {
                  if (countries.indexOf(x) === -1) countries.push(x);
                }
              );
            });
          if (countries.length)
            d = countries[Math.floor(Math.random() * countries.length)];
          console.log(
            `Should try to conquer ${tryToGetCont[0].Name} by moving ${move} troops from ${a} to ${d}`
          );
        }
      }
      return new Promise(res => {
        if (a && d) {
          moveTroops({ move, a, d });
          gameLog.update({
            player: players[currentPlayersTurn],
            text: `Moved ${move} troop${move > 1 ? "s" : ""} from ${a} to ${d}`
          });
        }
        setTimeout(
          () => {
            res(true);
          },
          fastForward === 2 ? 100 : 400
        );
      });
    }

    turnOverButton.addEventListener("click", nextPlayersTurn);

    let selectedCountry1;
    let selectedCountry2;
    let canAttack;
    let canMoveTo;
    let cantClick;

    let screenSpaceHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    screenSpaceHandler.setInputAction(function(clicked) {
      viewer.selectedEntity = undefined;
      if (cantClick) return;
      let player = players[currentPlayersTurn];
      if (!player || player.isComputer || isDoingMAC) return;
      let p = clicked.position;
      var e = scene.pick(p);
      if (e && e.id) {
        selectEntity(e.id, p, "single");
      } else {
        deselectEntities();
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    viewer.screenSpaceEventHandler.removeInputAction(
      Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
    );

    let isMoving;
    viewer.screenSpaceEventHandler.setInputAction(function() {
      userManuallyMoved = true;
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
    viewer.screenSpaceEventHandler.setInputAction(function() {
      if (!isMoving) userManuallyMoved = false;
    }, Cesium.ScreenSpaceEventType.LEFT_UP);
    viewer.camera.moveStart.addEventListener(function() {
      isMoving = true;
    });
    viewer.camera.moveEnd.addEventListener(function() {
      isMoving = false;
      userManuallyMoved = false;
    });

    let multiCountryAssault = [],
      isDoingMAC;

    function selectEntity(e, pos, clicked) {
      let id;
      e.id ? (id = e.id.split("_")[0]) : (id = e.split("_")[0]);
      // console.log(id);
      let player = players.find(p => p.territory.find(t => t.name === id));
      if (selectedCountry1) {
        selectedCountry2 = id;
        if (
          selectedCountry2 === selectedCountry1 &&
          !multiCountryAssault.length
        ) {
          deselectEntities();
          return;
        }
        if (phase === 1) {
          if (player.name === players[currentPlayersTurn].name) {
            if (!multiCountryAssault.length) {
              selectedCountry1 = undefined;
              selectEntity(e);
            }
            return;
          } else if (multiCountryAssault.length) {
            if (id === multiCountryAssault[multiCountryAssault.length - 1]) {
              initMultiCountryAssault(multiCountryAssault);
            } else if (canAttack && canAttack.find(x => x === id)) {
              let index = multiCountryAssault.indexOf(id);
              if (index !== -1)
                multiCountryAssault = multiCountryAssault.slice(0, index + 1);
              else multiCountryAssault.push(id);
              removePath();
              drawPath(multiCountryAssault, {
                width: 8,
                color: Cesium.Color.RED
              });
              canAttack = getCanAttack(id, players[currentPlayersTurn]);
              setCanAttackCountryColors(id, canAttack);
            } else return;
          } else if (canAttack && canAttack.find(x => x === id))
            battle(selectedCountry1, selectedCountry2);
          else return;
        }
        if (phase === 2) {
          if (player.name !== players[currentPlayersTurn].name) {
            deselectEntities();
            return;
          } else {
            if (canMoveTo.indexOf(selectedCountry2) !== -1) {
              setIsMovingTroopsColors([selectedCountry1, selectedCountry2]);
              showMoveTroopsSlider(selectedCountry1, selectedCountry2);
            } else {
              deselectEntities();
              return;
            }
          }
        }
      } else {
        multiCountryAssault = [];
        if (player.name !== players[currentPlayersTurn].name) return;
        if (phase === 0) {
          humanPlaceForces(id, player);
        } else {
          if (player.territory.find(x => x.name === id).forces < 2) {
            if (phase === 1) alert(`You need at least 2 forces to attack.`);
            else if (phase === 2) alert(`No forces to move.`);
            return;
          }
          if (phase === 1) {
            canAttack = getCanAttack(id, player);
            if (!canAttack.length) {
              alert("You can't attack anyone from here.");
              deselectEntities();
            } else {
              setCanAttackCountryColors(id, canAttack);
              if (!isDoingMAC && !players[currentPlayersTurn].isComputer) {
                showAttackButtons().then(mac => {
                  if (mac) multiCountryAssault.push(id);
                });
              }
            }
          }
          if (phase == 2) {
            //calc canMoveTo by recursively looking in countriesCanAttack.canAttack
            canMoveTo = calcCanMoveTo(
              id,
              player.territory.map(t => t.name)
            );
            setMoveForcesColors(id, canMoveTo);
          }
          selectedCountry1 = id;
          nextPhaseButton.style.display = "none";
          turnOverButton.style.display = "none";
        }
      }
    }

    function calcCanMoveTo(id, playerTerritories) {
      let canMoveTo = [];
      let cannotMoveTo = [];

      function findT(id) {
        let ca = countriesCanAttack.find(x => x.id === id);
        if (ca) {
          let cmt = ca.canAttack.filter(
            x => canMoveTo.indexOf(x) === -1 && cannotMoveTo.indexOf(x) === -1
          );
          let go = cmt.filter(x => playerTerritories.indexOf(x) !== -1);
          let stop = cmt.filter(x => playerTerritories.indexOf(x) === -1);
          cannotMoveTo = [...cannotMoveTo, ...stop];
          canMoveTo = [...canMoveTo, ...go];
          go.forEach(x => findT(x));
        }
      }
      findT(id);
      return canMoveTo;
    }

    function deselectEntities() {
      if (!isDoingMAC) removePath();
      let update = [];
      if (selectedCountry1) {
        update.push(selectedCountry1);
        selectedCountry1 = undefined;
      }
      if (selectedCountry2) {
        update.push(selectedCountry2);
        selectedCountry2 = undefined;
      }
      if (canAttack) {
        update = [...update, ...canAttack];
        canAttack = undefined;
      }
      if (canMoveTo) {
        update = [...update, ...canMoveTo];
        canMoveTo = undefined;
      }
      if (multiCountryAssault.length) {
        update = [...update, ...multiCountryAssault];
        multiCountryAssault = [];
      }
      if (update.length) updateMap(update);
      resetCountryTransparencies();
      if (!players[currentPlayersTurn].isComputer)
        if (phase === 2) turnOverButton.style.display = "block";
        else if (!isDoingMAC) nextPhaseButton.style.display = "block";
    }

    function humanPlaceForces(id, player) {
      let f = player.forcesToPlace;
      if (f < 1) return;
      let moveTroopsContainer = document.getElementById("moveTroopsContainer");
      moveTroopsContainer.style.display = "block";
      let cont = document.querySelector("#moveTroopsContainer > div");
      cont.innerHTML = `<div>How many troops do you want to place?</div>`;
      let amount;
      cont.innerHTML += `<input id='numberOfTroops' type="range" name="points" min=${1} max="${f}" value="1">`;
      cont.innerHTML += `<div id="showNumber"></div>`;
      let buttons = `<div class="moveTroopsButtons"><button id="moveTroops">Submit</button>`;
      // if (phase === 2)
      //   buttons += `<button id="cancelMoveTroops">Cancel</button>`;
      buttons += "</div>";
      cont.innerHTML += buttons;
      let moveTroopsButton = document.getElementById("moveTroops");
      // let cancelMoveTroopsButton = document.getElementById("cancelMoveTroops");
      let numberOfTroops = document.getElementById("numberOfTroops");
      let showNumber = document.getElementById("showNumber");
      function moveTroopsChanged(val) {
        showNumber.innerHTML = val;
        amount = val;
        let p = (val - 1) / (f - 1);
        showNumber.style.left = `calc(${p * 100}% - ${p * 25}px)`;
      }
      moveTroopsChanged(1);
      numberOfTroops.addEventListener("input", function(e) {
        moveTroopsChanged(+e.target.value);
      });
      moveTroopsButton.addEventListener("click", function() {
        placeForces(id, amount);
        moveTroopsContainer.style.display = "none";
        cont.innerHTML = "";
      });
    }

    let justPlaced;

    function placeForces(id, num = 1) {
      let player = players[currentPlayersTurn];
      if (!fastForward) {
        if (justPlaced) return;
        justPlaced = true;
      }
      if (player.forcesToPlace > 0) {
        //slider to place troops?
        let t = player.territory.find(x => x.name === id);
        if (t) {
          t.forces += num;
          player.forcesToPlace -= num;
        }
        document.getElementById(
          "placeTroops"
        ).innerHTML = `${player.forcesToPlace} left`;
        updateMap([id]);
        updateSummary();
        setTimeout(() => {
          let text = `Placed ${num} troop${num > 1 ? "s" : ""} in ${id}`;
          gameLog.update({ player, text });
          justPlaced = false;
          if (player.forcesToPlace === 0) nextPhaseButton.disabled = false;
        }, 80);
      } else {
        justPlaced = false;
        nextPhaseButton.disabled = false;
      }
    }

    function rollDice(num) {
      let results = [];
      if (num > 3) num = 3;
      for (let i = 0; i < num; i++) {
        results.push(Math.ceil(Math.random() * 6));
      }
      return results;
    }

    function initMultiCountryAssault(ids) {
      isDoingMAC = true;
      let i = 0;
      function tryAttack(t) {
        return new Promise(res => {
          function doStuff(t) {
            let shouldAttack = ids[i + 1];
            if (shouldAttack) {
              setTimeout(() => {
                if (!fastForward) selectEntity(t);
                selectedCountry1 = t;
                selectedCountry2 = shouldAttack;
                battle(t, shouldAttack, false, true).then(winner => {
                  updateMap([ids[i], ...getCanAttack(ids[i])]);
                  let success = winner.role === "aggressor";
                  i += 1;
                  if (success && getForces(shouldAttack) > 1 && ids[i]) {
                    setTimeout(() => {
                      doStuff(ids[i]);
                    }, 300);
                  } else res();
                });
              }, 600);
            } else {
              res(false);
            }
          }
          doStuff(t);
        });
      }
      fastForwardButton.style.display = "block";
      tryAttack(ids[i]).then(() => {
        multiCountryAssault = [];
        isDoingMAC = false;
        fastForwardButton.style.display = "none";
        nextPhaseButton.style.display = "block";
        fastForward = 0;
        document.getElementById("ff1").style.color = "black";
        document.getElementById("ff2").style.color = "black";
        fastForwardButton.classList.remove("pulse");
        removePath();
        resetCountryTransparencies();
      });
    }

    function battle(aggressor, defender, isComputer, isMCA) {
      battleOccurred = true;
      let aP = {
        name: getPlayerName(aggressor),
        color: getPlayerColor(aggressor)
      };
      let text = `<span style="font-weight:bold;color:${integerToRGB(
        aP.color
      )}">${getNameFromID(aggressor)}(${getForces(
        aggressor
      )})</span> attacks <span style="font-weight:bold;color:${integerToRGB(
        getPlayerColor(defender)
      )}">${getNameFromID(defender)}(${getForces(defender)})</span>`;
      gameLog.update({ player: aP, text });
      let aC = countryData.find(x => x.id === aggressor).country;
      let dC = countryData.find(x => x.id === defender).country;
      let battleContainer, rollDiceButton, autoRollButton, retreatButton;
      function updateBattleHeaders() {
        if (fastForward) return;
        let battleHeader1 = document.getElementById("battleHeader1");
        let battleHeader2 = document.getElementById("battleHeader2");
        battleHeader1.innerHTML = `<div>${aC}</div><div>${getForces(
          aggressor
        )}</div>`;
        battleHeader2.innerHTML = `<div>${dC}</div><div>${getForces(
          defender
        )}</div>`;
      }

      if (!fastForward) {
        naturalEarthDark.alpha = 1.0;
        setBattleCountryColors({
          aggressor,
          defender
        });
        battleContainer = document.getElementById("battleContainer");
        cantClick = true;

        flyToCountries({
          ids: [aggressor, defender],
          pitch: -1,
          range: 0
        });
        if (!isComputer) {
          battleContainer.style.display = "grid";
          battleContainer.innerHTML = `<div class="battleHeader" id="battleHeader1"></div>`;
          battleContainer.innerHTML += `<div id="battleDetailsContainer"><div id="battleDetails"></div></div>`;
          battleContainer.innerHTML += `<div class="battleHeader" id="battleHeader2"></div>`;

          updateBattleHeaders();
          if (!isMCA) {
            battleContainer.innerHTML += `<div id="battleButtons"><button id="rollDice">Roll Dice</button><button id="autoRoll">Auto Roll</button><button id="retreat">Retreat</button></div>`;
            rollDiceButton = document.getElementById("rollDice");
            autoRollButton = document.getElementById("autoRoll");
            retreatButton = document.getElementById("retreat");
            rollDiceButton.addEventListener("click", miniBattle);
            autoRollButton.addEventListener("click", autoRoll);
            retreatButton.addEventListener("click", function() {
              endMove([selectedCountry1]);
            });
          }
        }
      }

      function disableButtons() {
        if (!isComputer && !isMCA) {
          rollDiceButton.disabled = true;
          autoRollButton.disabled = true;
          retreatButton.disabled = true;
        }
      }

      function autoRoll() {
        disableButtons();
        return new Promise(res => {
          function autoBattle() {
            miniBattle().then(winner => {
              // console.log("miniBattle winner: ", winner);
              if (!winner) autoBattle();
              else res(winner);
            });
          }
          autoBattle();
        });
      }

      if (isComputer || isMCA)
        return new Promise(res => {
          setTimeout(
            () => {
              autoRoll().then(winner => {
                // winner.id = winner.role === "aggressor" ? aggressor : defender;
                // console.log("autoRoll winner: ", winner);
                setTimeout(
                  () => {
                    res(winner);
                  },
                  fastForward ? (fastForward === 2 ? 0 : 600) : 2000
                );
              });
            },
            fastForward ? (fastForward === 2 ? 0 : 200) : 1200
          );
        });

      function miniBattle() {
        //Each die represents one troop (max of 3 for attacking/ 2 for defending in a roll.)
        //The highest goes with he highest and the lowest goes with the next lowest.
        //For every die beaten, a player looses a troop.
        //A player can retreat from a battle at any point, however this must be before any dice are thrown.
        let aDice = rollDice(
          getForces(aggressor) > 3 ? 3 : getForces(aggressor)
        ).sort((a, b) => b - a);
        let dDice = rollDice(
          getForces(defender) > 2 ? 2 : getForces(defender)
        ).sort((a, b) => b - a);
        if (!isComputer && !fastForward) {
          let battleDetails = document.getElementById("battleDetails");
          if (battleDetails) {
            battleDetails.innerHTML = "";
            battleDetails.innerHTML = `
        <div style="display:grid;grid-template-rows:1fr 1fr 1fr;">${aDice
          .map(d => `<div class="dice dice-${d}"></div>`)
          .join("")}</div>
        <div style="display:grid;grid-template-rows:1fr 1fr 1fr;">${dDice
          .map(d => `<div class="dice dice-${d}"></div>`)
          .join("")}</div>
          <div id="aLostCount"></div>
          <div id="dLostCount"></div>
        `;
          }
        }
        let aLostCount = 0,
          dLostCount = 0;
        let diceRoll1 = diceResults(
          {
            dice: aDice[0],
            country: aC,
            id: aggressor
          },
          {
            dice: dDice[0],
            country: dC,
            id: defender
          }
        );
        let { winner, lost } = diceRoll1;
        lost === "a" ? (aLostCount += 1) : (dLostCount += 1);
        if (!winner && dDice[1]) {
          let diceRoll2 = diceResults(
            {
              dice: aDice[1],
              country: aC,
              id: aggressor
            },
            {
              dice: dDice[1],
              country: dC,
              id: defender
            }
          );
          winner = diceRoll2.winner;
          diceRoll2.lost === "a" ? (aLostCount += 1) : (dLostCount += 1);
        }
        if (!fastForward) updateMap([aggressor, defender]);
        return new Promise(res => {
          if (!isComputer && !fastForward) {
            if (aLostCount)
              document.getElementById(
                "aLostCount"
              ).innerHTML = `-${aLostCount}`;
            if (dLostCount)
              document.getElementById(
                "dLostCount"
              ).innerHTML = `-${dLostCount}`;
          }
          setTimeout(
            () => {
              if (winner) {
                //disable buttons
                disableButtons();
                setTimeout(
                  () => {
                    let { role } = winner;
                    let success = role === "aggressor";
                    let id = getIDFromName(winner.name);
                    let color = integerToRGB(getPlayerColor(id));
                    let text = success
                      ? `<span style="color:${color};">${winner.name}'s</span> attack was successful`
                      : `<span style="color:${color};">${winner.name}</span> successfully defended it's territory.`;
                    gameLog.update({
                      player: players[currentPlayersTurn],
                      text
                    });

                    if (!isComputer && !fastForward) {
                      battleDetails.style.display = "block";
                      battleDetails.innerHTML = `<div>${winner.name} wins!</div>`;
                    }
                    if (role === "defender") {
                      moveOver([defender, aggressor]);
                      res(winner);
                    } else if (role === "aggressor") {
                      playerGetsACard = true;
                      //set territory
                      if (!isComputer && !fastForward)
                        battleDetails.innerHTML += `<div>${dC} now belongs to ${players[currentPlayersTurn].name}</div>`;
                      let loser = players.find(p =>
                        p.territory.find(t => t.name === defender)
                      );
                      let pWinner = players.find(p =>
                        p.territory.find(t => t.name === aggressor)
                      );
                      let wTerritory = pWinner.territory.find(
                        t => t.name === aggressor
                      );
                      loser.territory = loser.territory.filter(
                        t => t.name !== defender
                      );
                      players[currentPlayersTurn].territory.push({
                        name: defender,
                        forces: 0
                      });
                      //set continent
                      setPlayerContinents({
                        winner: pWinner,
                        loser
                      }).then(() => {
                        if (!loser.territory.length) {
                          let text = `${loser.name} has been defeated.`;
                          if (!isComputer)
                            text += ` You recieve ${loser.cards.length} cards!`;
                          showAlert(text, loser);
                          pWinner.cards = [...pWinner.cards, ...loser.cards];
                          loser.cards = [];
                          updatePlayersCards();
                        }
                        if (
                          players.filter(p => p.territory.length).length === 1
                        ) {
                          endGame(pWinner);
                          return;
                        }
                        setTimeout(
                          () => {
                            if (wTerritory.forces > 1) {
                              if (
                                isComputer ||
                                isMCA ||
                                wTerritory.forces < 4
                              ) {
                                gameLog.update({
                                  player: players[currentPlayersTurn],
                                  text: `Moved ${wTerritory.forces -
                                    1} troops from ${aggressor} to ${defender}`
                                });
                                moveTroops({
                                  move: wTerritory.forces - 1,
                                  a: aggressor,
                                  d: defender
                                });
                                let ids = [defender];
                                if (wTerritory.forces - 1 === 1)
                                  ids.push(aggressor);
                                moveOver(ids);
                              } else showMoveTroopsSlider(aggressor, defender);
                            } else moveOver([defender, aggresor]);
                            res(winner);
                          },
                          fastForward || isComputer
                            ? fastForward === 2
                              ? 0
                              : 200
                            : 1200
                        );
                      });
                    }
                  },
                  fastForward ? (fastForward === 2 ? 30 : 150) : 1000
                );
              } else res(winner);
            },
            fastForward ? (fastForward === 2 ? 10 : 50) : 500
          );
        });

        function diceResults(a, d) {
          let winner, lost;
          if (a.dice > d.dice || !d.dice) {
            lost = "d";
            let player = players.find(p =>
              p.territory.find(t => t.name === d.id)
            );
            let territory = player.territory.find(t => t.name === d.id);
            territory.forces -= 1;
            if (territory.forces < 1)
              winner = {
                role: "aggressor",
                name: a.country
              };
          } else {
            lost = "a";
            let player = players.find(p =>
              p.territory.find(t => t.name === a.id)
            );
            let territory = player.territory.find(t => t.name === a.id);
            territory.forces -= 1;
            if (territory.forces < 2) {
              if (territory.forces < 1) territory.forces = 1;
              winner = {
                role: "defender",
                name: d.country
              };
            }
          }
          if (!isComputer) updateBattleHeaders();
          updateSummary();
          return {
            winner,
            lost
          };
        }
      }
    }

    function setPlayerContinents({ winner, loser }) {
      return new Promise(res => {
        let won = getPlayerContinentsFromTerritory(winner).find(
          x => winner.continents.indexOf(x) === -1
        );
        let lost = loser.continents.find(
          x => getPlayerContinentsFromTerritory(loser).indexOf(x) === -1
        );
        let ps = [new Promise(res => res(true))];
        if (won) {
          ps.push(
            showAlert(`${winner.name} now controls all of ${won}`, winner)
          );
          winner.continents.push(won);
        }
        if (lost) {
          ps.push(showAlert(`${loser.name} no longer controls ${lost}`, loser));
          loser.continents = loser.continents.filter(x => x !== lost);
        }
        updateSummary();
        Promise.all(ps).then(() => {
          res({ won, lost });
        });
      });
    }

    function showMoveTroopsSlider(a, d) {
      cantClick = true;
      let moveTroopsQueue = [],
        movingTroops;
      let interval = setInterval(() => {
        if (moveTroopsQueue.length && !movingTroops) {
          movingTroops = true;
          moveTroops(moveTroopsQueue[0]).then(finished => {
            if (finished) {
              moveTroopsQueue.shift();
              movingTroops = false;
              // if (phase === 2) setIsMovingTroopsColors([a.id, d.id]);
            }
          });
        }
      }, 20);
      document.getElementById("battleContainer").style.display = "";
      let moveTroopsContainer = document.getElementById("moveTroopsContainer");
      moveTroopsContainer.style.display = "block";
      let cont = document.querySelector("#moveTroopsContainer > div");
      cont.innerHTML += `<div>How many troops do you want to move?</div>`;
      let existing = players[currentPlayersTurn].territory.find(
        x => x.name === a
      );
      let max = existing.forces - 1;
      let min = phase === 1 && max > 1 ? 2 : 1;
      cont.innerHTML += `<input id='numberOfTroops' type="range" name="points" min=${min} max="${max}">`;
      cont.innerHTML += `<div id="showNumber"></div>`;
      let buttons = `<div class="moveTroopsButtons"><button id="moveTroops">Submit</button>`;
      if (phase === 2)
        buttons += `<button id="cancelMoveTroops">Cancel</button>`;
      buttons += "</div>";
      cont.innerHTML += buttons;
      let moveTroopsButton = document.getElementById("moveTroops");
      let cancelMoveTroopsButton = document.getElementById("cancelMoveTroops");
      let numberOfTroops = document.getElementById("numberOfTroops");
      let showNumber = document.getElementById("showNumber");
      let move = 0,
        final = 0;
      showNumber.innerHTML = numberOfTroops.value = 0;

      function moveTroopsChanged(val) {
        let newMove = val - move;
        showNumber.innerHTML = val;
        moveTroopsQueue.push({
          move: newMove,
          a,
          d
        });
        move = val;
        final += newMove;
        let p = (val - min) / (max - min);
        showNumber.style.left = `calc(${p * 100}% - ${p * 25}px)`;
      }
      numberOfTroops.addEventListener("input", function(e) {
        moveTroopsChanged(+e.target.value);
      });
      moveTroopsChanged(min);

      moveTroopsButton.addEventListener("click", function() {
        let text = `Moved ${final} troops from ${a} to ${d}`;
        gameLog.update({ player: players[currentPlayersTurn], text });
        clearInterval(interval);
        moveTroopsContainer.style.display = "none";
        cont.innerHTML = "";
        let player = players[currentPlayersTurn];
        let movingTo = player.territory.find(x => x.name === d);
        let existing = player.territory.find(x => x.name === a);
        let ids = [];
        if (movingTo.forces > existing.forces) ids.push(d);
        else if (existing.forces > movingTo.forces) ids.push(a);
        else ids = [d, a];
        moveOver(ids);
      });
      if (cancelMoveTroopsButton) {
        let startedAt = {
          a: {
            id: a,
            forces: players[currentPlayersTurn].territory.find(
              x => x.name === a
            ).forces
          },
          d: {
            id: d,
            forces: players[currentPlayersTurn].territory.find(
              x => x.name === d
            ).forces
          }
        };
        cancelMoveTroopsButton.addEventListener("click", function() {
          clearInterval(interval);
          moveTroopsContainer.style.display = "none";
          cont.innerHTML = "";
          moveTroopsBack(startedAt).then(() => {
            resetCountryTransparencies();
            deselectEntities();
            cantClick = false;
          });
        });
      }
    }

    function moveTroopsBack({ a, d }) {
      players[currentPlayersTurn].territory.find(x => x.name === a.id).forces =
        a.forces;
      players[currentPlayersTurn].territory.find(x => x.name === d.id).forces =
        d.forces;
      return updateMap([a.id, d.id]);
    }

    function moveTroops({ move, a, d }) {
      let player = players[currentPlayersTurn];
      let movingTo = player.territory.find(x => x.name === d);
      movingTo.forces += move;
      let existing = player.territory.find(x => x.name === a);
      existing.forces = existing.forces - move;
      // if(fastForward===2){
      //   updateMap([a, d]);
      //   return new Promise(res=>res(true))
      // }
      // else
      return updateMap([a, d]);
    }

    function moveOver(ids) {
      endMove(ids);
      resetCountryTransparencies();
      updateSummary();
    }

    function hideBattleDetails() {
      let battleContainer = document.getElementById("battleContainer");
      battleContainer.innerHTML = "";
      battleContainer.style.display = "none";
    }

    function endMove(ids) {
      hideBattleDetails();
      if (phase === 1) {
        let pitch = -2 * Math.PI;
        if (scene.mode === 1) pitch = -1;
        if (!fastForward) {
          flyToCountries({
            ids, //: [selectedCountry1, selectedCountry2],
            pitch,
            range: 0 //5000000
          });
        }
      }
      deselectEntities();
      cantClick = false;
      if (phase === 2 && !players[currentPlayersTurn].isComputer)
        nextPlayersTurn();
    }

    function endGame(winner) {
      alert(`${winner.name} is the winner! All opponents have been defeated!`);
      screenSpaceHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      let promises = [];
      viewer.dataSources.remove(countryLabels);
      countryLabels = undefined;
      countries.forEach((c, i) => {
        let filter = countryCoords.filter(x => x.id.split("_")[0] === c);

        if (filter.length)
          promises = [
            ...promises,
            ...filter.map(o => {
              return removePrimitive(o.id).then(() => {
                removePrimitive(o.id + "_transparent").then(() => {
                  createPrimitive({
                    cartesian: o.coords,
                    id: o.id,
                    fillOpacity: 0.3
                  });
                });
              });
            })
          ];
      });
      Promise.all(promises).then(res => {
        document.getElementById("startGame").style.display = "block";
        let gameInstructions = document.getElementById("gameInstructions");
        let gameDetails = document.getElementById("gameDetails");
        gameInstructions.style.display = "none";
        gameDetails.style.display = "none";
        let continentsButton = document.getElementById("continents");
        continentsButton.removeEventListener("click", toggleContinents);
        continentsButton.style.display = "none";
        let detailsToggle = document.getElementById("gameDetailsToggle");
        detailsToggle.style.display = "none";
        detailsToggle.removeEventListener("click", toggleGameDetails);
      });
    }
  }

  function initContinents() {
    let countries = [];
    let screenSpaceHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    screenSpaceHandler.setInputAction(function(clicked) {
      viewer.selectedEntity = undefined;
      let p = clicked.position;
      var e = scene.pick(p);
      if (e && e.id) {
        let id = e.id.split("_")[0];
        if (countries.indexOf(id) === -1) countries.push(id);
        let filter = countryCoords.filter(x => x.id.split("_")[0] === id);
        if (filter.length)
          filter.forEach(o => {
            removePrimitive(o.id).then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id,
                fillColor: [1, 0, 0]
              });
            });
          });
        let button = document.getElementById("startGameButton");
        button.style.display = "block";
        button.innerHTML = "Done";
        button.removeEventListener("click", initContinents);
        button.addEventListener("click", saveContinents);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    function saveContinents() {
      console.log(countries);
      countries.forEach(c => {
        let filter = countryCoords.filter(x => x.id.split("_")[0] === c);
        if (filter.length)
          filter.forEach(o => {
            removePrimitive(o.id).then(() => {
              createPrimitive({
                cartesian: o.coords,
                id: o.id
              });
            });
          });
      });
      countries = [];
      let button = document.getElementById("startGameButton");
      button.style.display = "block";
      button.innerHTML = "Start";
      button.removeEventListener("click", saveContinents);
      button.addEventListener("click", initContinents);
    }
    // let screenSpaceHandler = new Cesium.ScreenSpaceEventHandler(
    //   scene.canvas
    // );
    // screenSpaceHandler.setInputAction(function(m) {
    //   viewer.selectedEntity = undefined;
    //   let p = m.endPosition;
    //   var e = scene.pick(p);
    //   if (e && e.id) {
    //     let s = e.id.split("_");
    //     s.pop();
    //     let id = s.join("_");
    //     let shape = countryCoords.find(x => x.id === id);
    //     let pickRay = viewer.camera.getPickRay(p);
    //     let pickPosition = viewer.scene.globe.pick(pickRay, viewer.scene);
    //     let coords = shape.coords.sort((a, b) => {
    //       let aD = Cesium.Cartesian3.distance(pickPosition, a),
    //         bD = Cesium.Cartesian3.distance(pickPosition, b);
    //       return aD - bD;
    //     });
    //     addPoints(coords.slice(0, 2));
    //   } else {
    //     console.log("deselect");
    //   }
    // }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  }

  //this helps to set which countries can attack which other countries
  function initCanAttack() {
    countryEntities.entities.values.forEach(e => {
      if (e.polygon) {
        if (countriesCanAttack.find(x => x.id === e.id.split("_")[0]))
          e.polygon.material = new Cesium.Color(0, 1, 1, 0.5);
        else e.polygon.material = Cesium.Color.RED;
      }
    });
    let selectedFirst,
      canAttack = [];
    let screenSpaceHandler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
    screenSpaceHandler.setInputAction(function(clicked) {
      viewer.selectedEntity = undefined;
      let p = clicked.position;
      var e = scene.pick(p);
      if (e && e.id) {
        let id = e.id.id.split("_")[0];
        if (!selectedFirst) {
          selectedFirst = id;
          countryEntities.entities.values.forEach(e => {
            let eid = e.id.split("_")[0];
            if (e.polygon && selectedFirst === eid) {
              e.polygon.material = Cesium.Color.RED;
            }
          });
          let button = document.getElementById("startGameButton");
          button.style.display = "block";
          button.innerHTML = "Done";
          button.removeEventListener("click", initCanAttack);
          button.addEventListener("click", saveCanAttack);
          let c = countriesCanAttack.find(x => x.id === selectedFirst);
          if (c) {
            countryEntities.entities.values.forEach(e => {
              let eid = e.id.split("_")[0];
              if (e.polygon && c.canAttack.find(x => x === eid)) {
                if (canAttack.indexOf(eid) === -1) canAttack.push(eid);
                e.polygon.material = Cesium.Color.WHITE;
              }
            });
          }
        } else {
          let selectedNext = id;
          canAttack.push(selectedNext);
          countryEntities.entities.values.forEach(e => {
            let eid = e.id.split("_")[0];
            if (e.polygon && selectedNext === eid) {
              e.polygon.material = Cesium.Color.WHITE;
            }
          });
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    function saveCanAttack() {
      console.log(
        JSON.stringify({
          id: selectedFirst,
          canAttack
        })
      );
      selectedFirst = undefined;
      canAttack = [];
      countryEntities.entities.values.forEach(e => {
        if (e.polygon) {
          if (countriesCanAttack.find(x => x.id === e.id.split("_")[0]))
            e.polygon.material = new Cesium.Color(0, 1, 1, 0.5);
          else e.polygon.material = Cesium.Color.RED; //new Cesium.Color(0, 0, 0, 0.1);
        }
      });
    }
  }

  // if (endUserOptions.stats) {
  //   scene.debugShowFramesPerSecond = true;
  // }

  // var theme = endUserOptions.theme;
  // if (Cesium.defined(theme)) {
  //   if (endUserOptions.theme === "lighter") {
  //     document.body.classList.add("cesium-lighter");
  //     viewer.animation.applyThemeChanges();
  //   } else {
  //     var error = "Unknown theme: " + theme;
  //     viewer.cesiumWidget.showErrorPanel(error, "");
  //   }
  // }

  // if (Cesium.defined(view)) {
  //   var splitQuery = view.split(/[ ,]+/);
  //   if (splitQuery.length > 1) {
  //     var longitude = !isNaN(+splitQuery[0]) ? +splitQuery[0] : 0.0;
  //     var latitude = !isNaN(+splitQuery[1]) ? +splitQuery[1] : 0.0;
  //     var height =
  //       splitQuery.length > 2 && !isNaN(+splitQuery[2])
  //         ? +splitQuery[2]
  //         : 300.0;
  //     var heading =
  //       splitQuery.length > 3 && !isNaN(+splitQuery[3])
  //         ? CesiumMath.toRadians(+splitQuery[3])
  //         : undefined;
  //     var pitch =
  //       splitQuery.length > 4 && !isNaN(+splitQuery[4])
  //         ? CesiumMath.toRadians(+splitQuery[4])
  //         : undefined;
  //     var roll =
  //       splitQuery.length > 5 && !isNaN(+splitQuery[5])
  //         ? CesiumMath.toRadians(+splitQuery[5])
  //         : undefined;

  //     viewer.camera.setView({
  //       destination: Cartesian3.fromDegrees(longitude, latitude, height),
  //       orientation: {
  //         heading: heading,
  //         pitch: pitch,
  //         roll: roll
  //       }
  //     });
  //   }
  // }

  // var camera = viewer.camera;
  // function saveCamera() {
  //   var position = camera.positionCartographic;
  //   var hpr = "";
  //   if (Cesium.defined(camera.heading)) {
  //     hpr =
  //       "," +
  //       Cesium.Math.toDegrees(camera.heading) +
  //       "," +
  //       Cesium.Math.toDegrees(camera.pitch) +
  //       "," +
  //       Cesium.Math.toDegrees(camera.roll);
  //   }
  //   endUserOptions.view =
  //     Cesium.Math.toDegrees(position.longitude) +
  //     "," +
  //     Cesium.Math.toDegrees(position.latitude) +
  //     "," +
  //     position.height +
  //     hpr;
  //   history.replaceState(
  //     undefined,
  //     "",
  //     "?" + Cesium.objectToQuery(endUserOptions)
  //   );
  // }

  // var timeout;
  // if (endUserOptions.saveCamera !== "false") {
  //   camera.changed.addEventListener(function() {
  //     window.clearTimeout(timeout);
  //     timeout = window.setTimeout(saveCamera, 1000);
  //   });
  // }

  loadingIndicator.style.display = "none";
}

// d3.json("../data/world-NE-10m-1p5.json").then(areas => {
d3.json("data/continentGeometries.json").then(areas => {
  // console.log(areas)
  // const keys = Object.keys(areas.objects);
  const geo = areas; // topojson.feature(areas, areas.objects[keys[0]]);

  geo.features = geo.features
    .filter(x => x.geometry)
    .map((k, i) => {
      // console.log(k);
      var scaledK = turf.transformScale(k, 0.995);
      scaledK.id = scaledK.properties.CONTINENT;
      return scaledK;
    });
  main(geo);
});
