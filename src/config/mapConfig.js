// export const mapStyles= {
    // barikoi_osm:  {
    //     id: 'barikoi-osm-bright',
    //     label: 'barikoi-osm-bright',
    //     url: `https://map.barikoi.com/styles/osm-liberty/style.json?key=${process.env.REACT_APP_BKOI_API_TOKEN}`,
    //     // icon: 'https://api.maptiler.com/maps/voyager/256/0/0/0.png?key=xxx'
    // }
// }

// import { MAP } from '../App.config'

const config = {
  "version": "v1",
  "config": {
    "visState": {
      "filters": [],
      "layers": [],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {},
          "compareMode": false,
          "compareType": "absolute",
          "enabled": true
        },
        "brush": {
          "size": 0.5,
          "enabled": false
        },
        "geocoder": {
          "enabled": false
        },
        "coordinate": {
          "enabled": false
        }
      },
      "layerBlending": "normal",
      "splitMaps": [],
      "animationConfig": {
        "currentTime": null,
        "speed": 1
      }
    },
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "latitude": 23.793733913654076,
      "longitude": 90.36872236556212,
      "pitch": 0,
      "zoom": 10.7759970069689,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "barikoi-osm-bright",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "building": true,
        "water": true,
        "land": true
      },
      "threeDBuildingColor": [
        219.7513799623817,
        221.61367979257136,
        223.47597962276103
      ],
      "mapStyles": {
        barikoi_osm:  {
            id: 'barikoi-osm-bright',
            // accessToken: null,
            custom: true,
            label: 'barikoi-osm-bright',
            url: `https://map.barikoi.com/styles/osm-liberty/style.json?key=${process.env.REACT_APP_BKOI_API_TOKEN}`,
            // icon: 'https://api.maptiler.com/maps/voyager/256/0/0/0.png?key=xxx'
        }
      }
    }
  }
}

export default config
  