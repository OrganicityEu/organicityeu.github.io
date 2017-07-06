# Assets Discovery Service

The Asset Discovery API facilitates exploration and inspection of available assets.

## General Information

This API aims to create the foundations for a novel urban data observatory in the form of a service that allow various stakeholders (data scientists, city decision makers, organisations and citizens) to explore, with the intent to act, mixed static and real-time urban and social data streams and their exploitation in experimentation.

It comprises the following functionalities:

- Searching and filtering assets using multiple options
- Retrieving information about: services, sites and providers
- Retrieving assets data
- Retrieving experiments and the associated assets
- Support for [GeoJSON](http://geojson.org)

*This API is the core engine of the [Organicity Urban Data Observatory](http://observatory.organicity.eu/) and it is designed following the [OASC](http://oascities.org/) principles, as an extension of the [NGSI 9/10](https://forge.fiware.org/plugins/mediawiki/wiki/fiware/index.php/FI-WARE_NGSI-10_Open_RESTful_API_Specification) standard, specially following the new [FIWARE-NGSI v2 Specification](http://telefonicaid.github.io/fiware-orion/api/v2/latest/)*

## Documentation

- [API Documentation](https://organicityeu.github.io/api/AssetDiscovery.html)
- [API Swagger Blueprint](https://github.com/OrganicityEu/api/blob/master/raw/AssetDiscovery.yaml)

## Examples

Here you will find some examples showcasing the API possibilities using popular Javascript libraries. All the examples are available in **[Codepen collection](http://codepen.io/collection/DBMvPq/#0)**

### Spatial queries: GeoJson and Leaflet

By using the [Asset Discovery Spatial Search](https://organicityeu.github.io/api/AssetDiscovery.html#operation--assets-geo-search-get) method we can quickly get assets data on [GeoJSON](http://geojson.org/geojson-spec.html) format. This allows to quickly develop map vizualizations by using libraries as [Leaflet](http://leafletjs.com/)

**The API method**

```shell
GET https://discovery.organicity.eu/v0/assets/geo/search?city=london
```

**The code example**

Look at the complete example in [Codepen.io](http://codepen.io/pral2a/pen/NRgakY)

```javascript
var myMap = L.map('map');
var assetsLayer = new L.geoJson();
assetsLayer.addTo(myMap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  id: 'mapbox.streets-basic',
  accessToken: 'pk.eyJ1IjoidG9tYXNkaWV6IiwiYSI6ImRTd01HSGsifQ.loQdtLNQ8GJkJl2LUzzxVg'
}).addTo(myMap);

$.getJSON("https://discovery.organicity.eu/v0/assets/geo/search?city=london", function(layers) {

  $(layers).each(function(key, data) {
    $(layers[key].features).each(function(key, data) {
      console.log(data);
      assetsLayer.addData(data);
    });
  });

   myMap.fitBounds(assetsLayer.getBounds());
  
});
```

### Incremental search: AngularJS and Material

By using the [Asset Discovery Incremental Search](https://organicityeu.github.io/api/AssetDiscovery.html#operation--assets-metadata-search-get) method we can quickly search an asset by providing key words incrementally. This allows to quickly build search and filter functionalities with tools as [Angular Material](https://material.angularjs.org/latest/demo/autocomplete)

**The API method**

```shell
GET https://discovery.organicity.eu/v0/assets/metadata/search?query=some+text
```

**The code example**

Look at the complete example in [Codepen.io](http://codepen.io/pral2a/pen/ALxAOp)

```javascript
(function() {
  'use strict';
  angular
    .module('MyApp')
    .controller('IncrementalSearch', IncrementalSearch);

  function IncrementalSearch($q, $log, $filter, $http) {
    var vm = this;

    vm.simulateQuery = true;
    vm.querySearch = querySearch;
    vm.selectedItemChange = selectedItemChange;
    vm.assetsSelectedRemove = assetsSelectedRemove;
    vm.assetsSelected = [];
    vm.assetsLoaded = [];
    vm.deferred = null;

    function querySearch(query) {
      vm.deferred = $q.defer();
      var jsonquery = "";
      if (query !== null && query !== "")
        jsonquery = "&query=" + query.replace(/\s/g,"+");
      $http({
        method: 'GET',
        url: 'https://discovery.organicity.eu/v0/assets/metadata/search?' + jsonquery
      }).then(
        function successCallback(response) {
          vm.deferred.resolve(vm.assetsLoaded = response.data);
        },
        function errorCallback(response) {});
      return vm.deferred.promise;
    }

    function selectedItemChange(item) {
      if (item) {
        //check if item is already selected
        if ($filter('filter')(vm.assetsSelected, function(d) {
            return d.id === item.id;
          })[0]) {} else {
          //add id to object
          vm.assetsSelected.push(item);
        }
        // clear search field
        vm.searchText = '';
        vm.selectedItem = undefined;

        //somehow blur the autocomplete focus
        $mdAutocompleteCtrl.blur();
      }
    }

    function assetsSelectedRemove(item) {
      var index = vm.assetsSelected.indexOf(item);
      vm.assetsSelected.splice(index, 1);
    }
  }
})();

```

```html
<div ng-controller="IncrementalSearch as searchAssets" layout="column" ng-cloak="" ng-app="MyApp">
  <md-content class="md-padding">
    <p ng-repeat="asset in searchAssets.assetsSelected">{{asset.id}}
      <md-button class="md-raised md-warn" ng-click="searchAssets.assetsSelectedRemove(asset)">Remove</md-button>
    </p>
    <form ng-submit="$event.preventDefault()">
      <md-autocomplete md-min-length="3" md-selected-item="searchAssets.selectedItem" md-search-text="searchAssets.searchText" md-selected-item-change="searchAssets.selectedItemChange(item)" md-items="item in searchAssets.querySearch(searchAssets.searchText)" md-item-text="item.id" md-min-length="0"
        md-no-cache="true" placeholder="Search assets...">
        <md-item-template>
          <strong md-highlight-text="searchAssets.searchText" md-highlight-flags="^i">{{item.id}}
          </strong>
        </md-item-template>
        <md-not-found>
          No asset matching "{{searchAssets.searchText}}" was found.
        </md-not-found>
      </md-autocomplete>
    </form>
  </md-content>
</div>
```

### Sites and assets: D3.js treeview

By using the [Asset Discovery Site Filter](https://organicityeu.github.io/api/AssetDiscovery.html#operation--assets-sites--site--get) method we can quickly retrieve assets from an specific site. This allows to quickly build exploration tools for an specific site using tools as [D3.js](https://d3js.org/)

**The API method**

```shell
GET https://discovery.organicity.eu/v0/assets/sites/london?per=10000
```

**The code example**

Look at the complete example in [Codepen.io](http://codepen.io/pral2a/pen/GjygqE)

```javascript
var margin = {
    top: 40,
    right: 10,
    bottom: 10,
    left: 10
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var color = d3.scale.category20c();

var treemap = d3.layout.treemap()
  .size([width, height])
  .sticky(true)
  .value(function(d) {
    return d.size;
  });

var div = d3.select("body").append("div")
  .style("position", "relative")
  .style("width", (width + margin.left + margin.right) + "px")
  .style("height", (height + margin.top + margin.bottom) + "px")
  .style("left", margin.left + "px")
  .style("top", margin.top + "px");

d3.json("https://discovery.organicity.eu/v0/assets/sites/london?per=100", function(error, data) {
  if (error) throw error;
  var assetTypes = [];
  data.forEach(function(asset) {
    assetTypes.push(asset.type);
  })
  assetTypes = new Set(assetTypes);
  var newAssets = {
    name: "london",
    children: []
  };
  assetTypes.forEach(function(type) {
    var typeChilds = {
      name: type,
      children: []
    }
    data.forEach(function(asset) {
      if (asset.type == type)
        typeChilds.children.push({
          name: asset.id,
          size: asset.context.last_updated_at
        });
    })
    newAssets.children.push(typeChilds);
  })
  console.log(newAssets);
  var node = div.datum(newAssets).selectAll(".node")
    .data(treemap.nodes)
    .enter().append("div")
    .attr("class", "node")
    .call(position)
    .style("background", function(d) {
      return d.children ? color(d.name) : null;
    })
    .html(function(d) {
      return d.children ? null : '<a target="_blank" href="https://discovery.organicity.eu/v0/assets/' + d.name + '"/>' + d.name + '</a>';
    })
    .on("mouseover", function(d) {
      d3.selectAll(".name").html(d.name)
    })
    .on("mouseout", function(d) {
      d3.selectAll(".name").html('No asset selected...')
    });;

  d3.selectAll("input").on("change", function change() {
    var value = this.value === "count" ?

      function() {
        return 1;
      } :
      function(d) {
        return d.size;
      };

    node
      .data(treemap.value(value).nodes)
      .transition()
      .duration(1500)
      .call(position);
  });
});

function position() {
  this.style("left", function(d) {
      return d.x + "px";
    })
    .style("top", function(d) {
      return d.y + "px";
    })
    .style("width", function(d) {
      return Math.max(0, d.dx - 1) + "px";
    })
    .style("height", function(d) {
      return Math.max(0, d.dy - 1) + "px";
    });
}
```

```html
<div class="name"></div>
<form>
  <label><input type="radio" name="mode" value="size" checked> Last updated</label>
  <label><input type="radio" name="mode" value="count"> Count</label>
</form>
```

## Status

[![Code Climate](https://codeclimate.com/github/OrganicityEu/organicity-discovery-api/badges/gpa.svg)](https://codeclimate.com/github/OrganicityEu/organicity-discovery-api)


