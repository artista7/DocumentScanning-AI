var app = angular.module('myApp', []);

app.controller("myCtrl", function ($scope) {
    //scope variables
    $scope.attrGroups = [
    ];
    $scope.addMe = null;
    
    //constructors
    function attrGroup(attrId, ltext, lx, ly, lw, lh, vtext, vx, vy, vw, vh){
        this.attrId = attrId;
        this.label = new rectObj(ltext, lx, ly, lw, lh);
        this.value = new rectObj(vtext, vx, vy, vw, vh);

        //nested object label
        function rectObj(text, x, y, w, h){
            this.text = text;
            this.rect = new rect(x, y, w, h);
        }

        function rect(x, y, w, h){
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
    }

    //scope fucntion
    $scope.init = function(){
        $scope.attrGroups.push(new attrGroup(1, 'test1', 0, 0, 25, 25, 'test1', 30, 0, 25, 25));
        $scope.attrGroups.push(new attrGroup(2, 'test2', 30, 0, 25, 25, 'test1', 30, 30, 25, 25));
        $scope.addMe = new attrGroup(null, null, null, null, null, null, null, null, null, null);
        //NEED TO SWAP IT AS OF NOW
        $scope.selectedType = 'label';
        jQuery(function ($) {
            $('#target').Jcrop({
                //onChange: editcoords,
                onSelect: addcoords,
                bgColor:     'black',
                bgOpacity:   .4,
                //setSelect:   [ 100, 100, 50, 50 ],
                //aspectRatio: 16 / 9
                onRelease: clearCoords
            });
        });
    }

    $scope.addItem = function(){
        //IF ATTR NOT PRESENT
        $scope.attrGroups.push($scope.addMe);
        $scope.addMe = new attrGroup(null, null, null, null, null, null, null, null, null, null);
    }

    $scope.reset = function () {
        $scope.addMe = new attrGroup(null, null, null, null, null, null, null, null, null, null);
    }

    //initializing
    $scope.init();

    //internal functions
    // Simple event handler, called from onChange and onSelect
    // event handlers, as per the Jcrop invocation above
    function addcoords(c) {
        if($scope.selectedType == 'label'){
            $scope.addMe.label.rect.x = c.x;
            $scope.addMe.label.rect.y = c.y;
            $scope.addMe.label.rect.w = c.w;
            $scope.addMe.label.rect.h = c.h;
        }
        else{
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