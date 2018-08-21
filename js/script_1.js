var app = angular.module('myApp', []);

app.controller("myCtrl", function ($scope) {
    //private variables
    var jcrop_api;
    var isLabel = true;
    //scope variables
    $scope.attrGroups = [];
    $scope.addMe = null;
    $scope.json = {};
    $scope.valueIndex = 0;
    $scope.isFileUploaded = false;
    $scope.stepsModel = [];

    //constructors
    function attrGroup(attrId, ltext = '', lx = null, ly = null, lw = null, lh = null) {
        this.attrId = attrId;
        this.label = new rectLabelObj(ltext, lx, ly, lw, lh);
        this.attrValues = [];
        //this.values.push(new rectValueObj(vText, vid, vx, vy, vw, vh));

        this.addAttrValue = function(vText, vid, vx, vy, vw, vh){
            this.attrValues.push(new rectValueObj(vText, vid, vx, vy, vw, vh));
        }
        console.log(this.attrValues);
        //remove this later - just for test
        //this.attrValues.push(new rectValueObj(vText, vid+1, vx+10, vy+10, vw+10, vh+10));

        // function rectObj(text, x, y, w, h) {
        //     this.text = text;
        //     this.rect = new rect(x, y, w, h);
        // }

        function rectLabelObj(text, x, y, w, h) {
            this.text = text;
            this.rect = new rect(x, y, w, h);
        }

        function rectValueObj(text, id, x, y, w, h) {
            this.text = text,
            this.id = id;
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
        var testAttrGroup = new attrGroup(1, 'Ticket Number', 534, 102, 80, 13);
        testAttrGroup.addAttrValue('TicketNumber Value', 1,  630, 102, 70, 18);
        testAttrGroup.addAttrValue('TicketNumber Value2', 2,  640, 112, 80, 28);

        var testAttrGroup2 = new attrGroup(2, 'Sample open gravity', 23, 375, 80, 9);
        testAttrGroup2.addAttrValue('open Gravity Value', 3, 152, 374, 26, 10);
        testAttrGroup2.addAttrValue('open Gravity Value2', 4, 162, 384, 36, 20);

        $scope.attrGroups.push(testAttrGroup);
        $scope.attrGroups.push(testAttrGroup2);
        //$scope.attrGroups.push(new attrGroup(2, 'Sample open gravity', 23, 375, 80, 9, 'open Gravity Value', 2, 152, 374, 26, 10));
        $scope.addMe = new attrGroup(null);
        $scope.addMe.addAttrValue(null, 0, 0, 0, 0, 0);
        //img width and height
        var img = document.getElementById('target');
        $scope.json.id=1;
        $scope.json.size = {};
        $scope.json.size.w=img.clientWidth;
        $scope.json.size.h=img.clientHeight;
        //NEED TO SWAP IT AS OF NOW

        $('#target').Jcrop({
            onChange: addcoords,
            onSelect: addcoords,
            bgColor: 'black',
            bgOpacity: .4,
            //onRelease: clearCoords
        }, function () {
            jcrop_api = this;
        });

        //code to get img dimensions
        // var img = document.getElementById('target');
        // console.log('width - ' + img.clientWidth);
        // console.log('height - ' + img.clientHeight);
    }
    $scope.addTempItem = function () {
        //IF ATTR NOT PRESENT
        $scope.addMe.attrId = $scope.attrGroups.length + 1;
    }
    $scope.addItem = function () {
        $scope.attrGroups.push($scope.addMe);
        reset();
    }
    $scope.addNewValue = function(){
        $scope.addMe.addAttrValue(null, 0, 0, 0, 0, 0);
        $scope.valueIndex += 1;
        //console.log('value index - ', $scope.valueIndex);
    }
    //initializing
    //$scope.init();
    $scope.animateTo = function (rect, val) {
        isLabel = val;
        jcrop_api.animateTo([rect.x, rect.y, rect.x + rect.w, rect.y + rect.h]);
    }
    $scope.saveJSON = function(){
        $scope.json.attrGroups = $scope.attrGroups;
        download(JSON.stringify($scope.json), "template.json", 'text/plain');
    }

    $scope.imageUpload = function(event){
        $scope.isFileUploaded = true;
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
             var file = files[i];
                 var reader = new FileReader();
                 reader.onload = $scope.imageIsLoaded; 
                 reader.readAsDataURL(file);
         }
    }

    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
            $scope.stepsModel.push(e.target.result);
        });
        $scope.$apply(function(){
            $scope.init();
        });
    }

    //internal functions
    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
    //download(jsonData, 'json.txt', 'text/plain');
    //internal functions
    function reset(){
        $scope.addMe = new attrGroup(null);
        $scope.addMe.addAttrValue(null, 0, 0, 0, 0, 0);
        $scope.valueIndex = 0;
        isLabel = true;
    }
    // Simple event handler, called from onChange and onSelect
    // event handlers, as per the Jcrop invocation above
    function addcoords(c) {
        if (isLabel) {
            $scope.addMe.label.rect.x = c.x;
            $scope.addMe.label.rect.y = c.y;
            $scope.addMe.label.rect.w = c.w;
            $scope.addMe.label.rect.h = c.h;
        }
        else{
            $scope.addMe.attrValues[$scope.valueIndex].rect.x = c.x;
            $scope.addMe.attrValues[$scope.valueIndex].rect.y = c.y;
            $scope.addMe.attrValues[$scope.valueIndex].rect.w = c.w;
            $scope.addMe.attrValues[$scope.valueIndex].rect.h = c.h;
        }
        $scope.$apply();
    };
});