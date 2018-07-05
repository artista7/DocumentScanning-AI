var app = angular.module('myApp', []);

app.controller("myCtrl", function ($scope) {
    //private variables
    var jcrop_api;

    //scope variables
    $scope.attrGroups = [
    ];
    $scope.addMe = null;

    //constructors
    function attrGroup(attrId, ltext, lx, ly, lw, lh, vtext, vx, vy, vw, vh) {
        this.attrId = attrId;
        this.label = new rectObj(ltext, lx, ly, lw, lh);
        this.value = new rectObj(vtext, vx, vy, vw, vh);

        //nested object label
        function rectObj(text, x, y, w, h) {
            this.text = text;
            this.rect = new rect(x, y, w, h);
        }

        function rect(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
    }

    //scope fucntion
    $scope.init = function () {
        $scope.attrGroups.push(new attrGroup(1, 'Ticket Number', 534, 102, 80, 13, 'TicketNumber Value', 630, 102, 70, 18));
        $scope.attrGroups.push(new attrGroup(1, 'Sample open gravity', 23, 375, 80, 9, 'open Gravity Value', 152, 374, 26, 10));
        $scope.addMe = new attrGroup(null, null, null, null, null, null, null, null, null, null);
        //NEED TO SWAP IT AS OF NOW
        $scope.selectedType = 'label';

        $('#target').Jcrop({
            onChange: addcoords,
            onSelect: addcoords,
            bgColor: 'black',
            bgOpacity: .4,
            onRelease: clearCoords
          },function(){
            jcrop_api = this;
          });

        var img = document.getElementById('target');
        //or however you get a handle to the IMG
        console.log('width - ' + img.clientWidth);
        console.log('height - ' + img.clientHeight);
    }

    $scope.addItem = function () {
        //IF ATTR NOT PRESENT
        $scope.attrGroups.push($scope.addMe);
        $scope.addMe = new attrGroup(null, null, null, null, null, null, null, null, null, null);
    }

    $scope.reset = function () {
        $scope.addMe = new attrGroup(null, null, null, null, null, null, null, null, null, null);
    }

    //initializing
    $scope.init();

    $scope.selectBox = function(rect){
        jcrop_api.animateTo([rect.x, rect.y, rect.x + rect.w, rect.y + rect.h]);
    }

    //internal functions
    // Simple event handler, called from onChange and onSelect
    // event handlers, as per the Jcrop invocation above
    function addcoords(c) {
        if ($scope.selectedType == 'label') {
            $scope.addMe.label.rect.x = c.x;
            $scope.addMe.label.rect.y = c.y;
            $scope.addMe.label.rect.w = c.w;
            $scope.addMe.label.rect.h = c.h;
        }
        else {
            $scope.addMe.value.rect.x = c.x;
            $scope.addMe.value.rect.y = c.y;
            $scope.addMe.value.rect.w = c.w;
            $scope.addMe.value.rect.h = c.h;
        }
        //$scope.attrGroups.push($scope.addMe);
        $scope.$apply();
    };

    function clearCoords() {
        $('#coords input').val('');
    };
});