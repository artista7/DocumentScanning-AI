var app = angular.module('myApp', []);

app.controller("myCtrl", function ($scope) {
    //private variables

    //scope variables
    $scope.TemplateTxt = null;
    $scope.ocrResult = null;
    $scope.templateDimensions = { 'w': 800, 'h': 1000 };
    $scope.uploadedDimensions = { 'w': 2521, 'h': 3264 };
    //$scope.
    $scope.scale = null;

    //constructors
    function attrGroup(attrId, ltext = '', lx = null, ly = null, lw = null, lh = null, vtext = '', vx = null, vy = null, vw = null, vh = null) {
        this.attrId = attrId;
        this.label = new rectObj(ltext, lx, ly, lw, lh);
        this.value = new rectObj(vtext, vx, vy, vw, vh);

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
        //use loadJson
        $scope.TemplateTxt = { "id": 1, "size": { "w": 800, "h": 1000 }, "attrGroups": [{ "attrId": 1, "label": { "text": "Ticket Number", "rect": { "x": 534, "y": 102, "w": 80, "h": 13 } }, "value": { "text": "TicketNumber Value", "rect": { "x": 630, "y": 102, "w": 70, "h": 18 } }, "$$hashKey": "object:3" }, { "attrId": 2, "label": { "text": "Sample open gravity", "rect": { "x": 23, "y": 375, "w": 80, "h": 9 } }, "value": { "text": "open Gravity Value", "rect": { "x": 152, "y": 374, "w": 26, "h": 10 } }, "$$hashKey": "object:4" }, { "attrId": 3, "label": { "text": "Grade", "rect": { "x": 284, "y": 124, "w": 34, "h": 11 } }, "value": { "text": "Grade Value", "rect": { "x": 348, "y": 120, "w": 91, "h": 19 } }, "$$hashKey": "object:8" }, { "attrId": 4, "label": { "text": "Shipper", "rect": { "x": 282, "y": 105, "w": 46, "h": 15 } }, "value": { "text": null, "rect": { "x": 349, "y": 101, "w": 45, "h": 16 } }, "$$hashKey": "object:11" }, { "attrId": 5, "label": { "text": "FMP number", "rect": { "x": 518, "y": 200, "w": 61, "h": 12 } }, "value": { "text": null, "rect": { "x": 587, "y": 201, "w": 66, "h": 13 } }, "$$hashKey": "object:14" }] }
        $scope.ocrResult = [
            {
                "locale": "en",
                "description": "PLAINS\n0.00\nPIPELINE. L.P.\nDate:\n3/5/2018 14:42:50\nShipper: Various\nTicket Number: 1452000261\nTank:\nCRAZY HORSE FED COM 2H I Grade: West Texas Intr\nRevision No:\nDescription: CRAZY HORSE FED COM 21 Batch No:\nField Information\nCapacity:\nOperator: COG Operating LLC\nField:\nLusk; Bone Spring\nBase System: Alpha Crude Connector\nVessel:\nLease: Crazy Hosre Federal Com #002H RT\nLocation: ACC HWY 126 Jct\nRemarks:\nFMP Number: NMNM132970\nCode Ref No: 193477\nConn. Point: HWY 126-C Gath\nAPI Lease No:\nFlow:\nO Delivery Receipt\nFed Lease No: ACC-T-10661\nUnit:\nBarrels O Gallons\nLand Desc: 18 19S 32E\nTank Amb.\nDate\nTemp Temp Ft In Fraction Seal No: CPL: Luis Navarrete\nTransportation\nCycle\nOPEN 03/05/18 01:42 64.0 69.0 14 2 0 1/4 782281 Witness:\n03/18-01\nCLOSE 03/06/18 12:56 55.0 61.0 1 4 2 1/4 754370 Witness:\nOBSERVABLES\nOpen Close VOLUME CALCULATIONS\nFloating\nSample Gravity:\nGross\nTotal\n40.0 40.0\nFree Water\nObserved\nCTS Roof CTL Standard\nSample Temperature: 55 55\nOPEN Volume 0 4 0\nAdjustment\nVolume @ 60\nAPI Gravity:\n40.4 40.4\n474.27 - 11.17 x 1.00006 +/- 0.00 x0.998 = 462.20\nCTL:\n0.998 1.0025 CLOSE en 0 4 0\nSW Pct:\n0.25000\n46.08 - 11.17 x 0.99995 +/- 0.00 x 1.0025\n35.00\nSulfur Pct:\nAPI Volume\nTotal Gross Standard Volume\n427.20\nSW Factor:\n0.9975\nCalculation\nSW Barrels:\n1.07\nSulfur Factor:\nOverride\nTotal Net Standard Volume:\n426.13\n",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 76,
                            "y": 93
                        },
                        {
                            "x": 2356,
                            "y": 93
                        },
                        {
                            "x": 2356,
                            "y": 1707
                        },
                        {
                            "x": 76,
                            "y": 1707
                        }
                    ]
                }
            },
            {
                "description": "PLAINS",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 353,
                            "y": 93
                        },
                        {
                            "x": 724,
                            "y": 93
                        },
                        {
                            "x": 724,
                            "y": 210
                        },
                        {
                            "x": 353,
                            "y": 210
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 346,
                            "y": 532
                        },
                        {
                            "x": 357,
                            "y": 531
                        },
                        {
                            "x": 360,
                            "y": 571
                        },
                        {
                            "x": 349,
                            "y": 572
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 362,
                            "y": 530
                        },
                        {
                            "x": 373,
                            "y": 529
                        },
                        {
                            "x": 376,
                            "y": 569
                        },
                        {
                            "x": 365,
                            "y": 570
                        }
                    ]
                }
            },
            {
                "description": "00",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 375,
                            "y": 530
                        },
                        {
                            "x": 413,
                            "y": 527
                        },
                        {
                            "x": 416,
                            "y": 567
                        },
                        {
                            "x": 378,
                            "y": 570
                        }
                    ]
                }
            },
            {
                "description": "PIPELINE",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 343,
                            "y": 242
                        },
                        {
                            "x": 585,
                            "y": 242
                        },
                        {
                            "x": 585,
                            "y": 304
                        },
                        {
                            "x": 343,
                            "y": 304
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 593,
                            "y": 242
                        },
                        {
                            "x": 610,
                            "y": 242
                        },
                        {
                            "x": 610,
                            "y": 304
                        },
                        {
                            "x": 593,
                            "y": 304
                        }
                    ]
                }
            },
            {
                "description": "L",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 631,
                            "y": 242
                        },
                        {
                            "x": 648,
                            "y": 242
                        },
                        {
                            "x": 648,
                            "y": 304
                        },
                        {
                            "x": 631,
                            "y": 304
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 656,
                            "y": 242
                        },
                        {
                            "x": 673,
                            "y": 242
                        },
                        {
                            "x": 673,
                            "y": 304
                        },
                        {
                            "x": 656,
                            "y": 304
                        }
                    ]
                }
            },
            {
                "description": "P",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 681,
                            "y": 242
                        },
                        {
                            "x": 698,
                            "y": 242
                        },
                        {
                            "x": 698,
                            "y": 304
                        },
                        {
                            "x": 681,
                            "y": 304
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 706,
                            "y": 242
                        },
                        {
                            "x": 723,
                            "y": 242
                        },
                        {
                            "x": 723,
                            "y": 304
                        },
                        {
                            "x": 706,
                            "y": 304
                        }
                    ]
                }
            },
            {
                "description": "Date",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 83,
                            "y": 348
                        },
                        {
                            "x": 151,
                            "y": 348
                        },
                        {
                            "x": 151,
                            "y": 380
                        },
                        {
                            "x": 83,
                            "y": 380
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 158,
                            "y": 348
                        },
                        {
                            "x": 166,
                            "y": 348
                        },
                        {
                            "x": 166,
                            "y": 380
                        },
                        {
                            "x": 158,
                            "y": 380
                        }
                    ]
                }
            },
            {
                "description": "3",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 350,
                            "y": 340
                        },
                        {
                            "x": 363,
                            "y": 340
                        },
                        {
                            "x": 363,
                            "y": 387
                        },
                        {
                            "x": 350,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 369,
                            "y": 340
                        },
                        {
                            "x": 382,
                            "y": 340
                        },
                        {
                            "x": 382,
                            "y": 387
                        },
                        {
                            "x": 369,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "5",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 379,
                            "y": 340
                        },
                        {
                            "x": 392,
                            "y": 340
                        },
                        {
                            "x": 392,
                            "y": 387
                        },
                        {
                            "x": 379,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 398,
                            "y": 340
                        },
                        {
                            "x": 411,
                            "y": 340
                        },
                        {
                            "x": 411,
                            "y": 387
                        },
                        {
                            "x": 398,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "2018",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 412,
                            "y": 340
                        },
                        {
                            "x": 489,
                            "y": 340
                        },
                        {
                            "x": 489,
                            "y": 387
                        },
                        {
                            "x": 412,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "14",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 508,
                            "y": 340
                        },
                        {
                            "x": 543,
                            "y": 340
                        },
                        {
                            "x": 543,
                            "y": 387
                        },
                        {
                            "x": 508,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 547,
                            "y": 340
                        },
                        {
                            "x": 560,
                            "y": 340
                        },
                        {
                            "x": 560,
                            "y": 387
                        },
                        {
                            "x": 547,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "42",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 560,
                            "y": 340
                        },
                        {
                            "x": 595,
                            "y": 340
                        },
                        {
                            "x": 595,
                            "y": 387
                        },
                        {
                            "x": 560,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 600,
                            "y": 340
                        },
                        {
                            "x": 613,
                            "y": 340
                        },
                        {
                            "x": 613,
                            "y": 387
                        },
                        {
                            "x": 600,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "50",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 606,
                            "y": 340
                        },
                        {
                            "x": 649,
                            "y": 340
                        },
                        {
                            "x": 649,
                            "y": 387
                        },
                        {
                            "x": 606,
                            "y": 387
                        }
                    ]
                }
            },
            {
                "description": "Shipper",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 899,
                            "y": 344
                        },
                        {
                            "x": 1022,
                            "y": 344
                        },
                        {
                            "x": 1022,
                            "y": 382
                        },
                        {
                            "x": 899,
                            "y": 382
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1021,
                            "y": 344
                        },
                        {
                            "x": 1031,
                            "y": 344
                        },
                        {
                            "x": 1031,
                            "y": 382
                        },
                        {
                            "x": 1021,
                            "y": 382
                        }
                    ]
                }
            },
            {
                "description": "Various",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1108,
                            "y": 340
                        },
                        {
                            "x": 1233,
                            "y": 340
                        },
                        {
                            "x": 1233,
                            "y": 378
                        },
                        {
                            "x": 1108,
                            "y": 378
                        }
                    ]
                }
            },
            {
                "description": "Ticket",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1678,
                            "y": 333
                        },
                        {
                            "x": 1773,
                            "y": 335
                        },
                        {
                            "x": 1772,
                            "y": 376
                        },
                        {
                            "x": 1677,
                            "y": 374
                        }
                    ]
                }
            },
            {
                "description": "Number",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1778,
                            "y": 335
                        },
                        {
                            "x": 1909,
                            "y": 338
                        },
                        {
                            "x": 1908,
                            "y": 379
                        },
                        {
                            "x": 1777,
                            "y": 376
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1909,
                            "y": 338
                        },
                        {
                            "x": 1920,
                            "y": 338
                        },
                        {
                            "x": 1919,
                            "y": 378
                        },
                        {
                            "x": 1908,
                            "y": 378
                        }
                    ]
                }
            },
            {
                "description": "1452000261",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1994,
                            "y": 339
                        },
                        {
                            "x": 2196,
                            "y": 343
                        },
                        {
                            "x": 2195,
                            "y": 384
                        },
                        {
                            "x": 1993,
                            "y": 380
                        }
                    ]
                }
            },
            {
                "description": "Tank",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 86,
                            "y": 410
                        },
                        {
                            "x": 153,
                            "y": 410
                        },
                        {
                            "x": 153,
                            "y": 442
                        },
                        {
                            "x": 86,
                            "y": 442
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 161,
                            "y": 410
                        },
                        {
                            "x": 169,
                            "y": 410
                        },
                        {
                            "x": 169,
                            "y": 442
                        },
                        {
                            "x": 161,
                            "y": 442
                        }
                    ]
                }
            },
            {
                "description": "CRAZY",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 348,
                            "y": 403
                        },
                        {
                            "x": 467,
                            "y": 402
                        },
                        {
                            "x": 467,
                            "y": 450
                        },
                        {
                            "x": 348,
                            "y": 451
                        }
                    ]
                }
            },
            {
                "description": "HORSE",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 480,
                            "y": 402
                        },
                        {
                            "x": 611,
                            "y": 401
                        },
                        {
                            "x": 611,
                            "y": 449
                        },
                        {
                            "x": 480,
                            "y": 450
                        }
                    ]
                }
            },
            {
                "description": "FED",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 626,
                            "y": 401
                        },
                        {
                            "x": 693,
                            "y": 400
                        },
                        {
                            "x": 693,
                            "y": 448
                        },
                        {
                            "x": 626,
                            "y": 449
                        }
                    ]
                }
            },
            {
                "description": "COM",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 711,
                            "y": 401
                        },
                        {
                            "x": 784,
                            "y": 400
                        },
                        {
                            "x": 784,
                            "y": 447
                        },
                        {
                            "x": 711,
                            "y": 448
                        }
                    ]
                }
            },
            {
                "description": "2H",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 810,
                            "y": 400
                        },
                        {
                            "x": 845,
                            "y": 400
                        },
                        {
                            "x": 845,
                            "y": 447
                        },
                        {
                            "x": 810,
                            "y": 447
                        }
                    ]
                }
            },
            {
                "description": "I",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 869,
                            "y": 400
                        },
                        {
                            "x": 882,
                            "y": 400
                        },
                        {
                            "x": 882,
                            "y": 447
                        },
                        {
                            "x": 869,
                            "y": 447
                        }
                    ]
                }
            },
            {
                "description": "Grade",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 893,
                            "y": 399
                        },
                        {
                            "x": 993,
                            "y": 398
                        },
                        {
                            "x": 993,
                            "y": 446
                        },
                        {
                            "x": 893,
                            "y": 447
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 994,
                            "y": 399
                        },
                        {
                            "x": 1007,
                            "y": 399
                        },
                        {
                            "x": 1007,
                            "y": 446
                        },
                        {
                            "x": 994,
                            "y": 446
                        }
                    ]
                }
            },
            {
                "description": "West",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1105,
                            "y": 398
                        },
                        {
                            "x": 1198,
                            "y": 397
                        },
                        {
                            "x": 1198,
                            "y": 444
                        },
                        {
                            "x": 1105,
                            "y": 445
                        }
                    ]
                }
            },
            {
                "description": "Texas",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1209,
                            "y": 397
                        },
                        {
                            "x": 1303,
                            "y": 396
                        },
                        {
                            "x": 1303,
                            "y": 443
                        },
                        {
                            "x": 1209,
                            "y": 444
                        }
                    ]
                }
            },
            {
                "description": "Intr",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1312,
                            "y": 396
                        },
                        {
                            "x": 1364,
                            "y": 396
                        },
                        {
                            "x": 1364,
                            "y": 443
                        },
                        {
                            "x": 1312,
                            "y": 443
                        }
                    ]
                }
            },
            {
                "description": "Revision",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1672,
                            "y": 399
                        },
                        {
                            "x": 1810,
                            "y": 402
                        },
                        {
                            "x": 1809,
                            "y": 441
                        },
                        {
                            "x": 1671,
                            "y": 438
                        }
                    ]
                }
            },
            {
                "description": "No",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1826,
                            "y": 402
                        },
                        {
                            "x": 1867,
                            "y": 403
                        },
                        {
                            "x": 1866,
                            "y": 442
                        },
                        {
                            "x": 1825,
                            "y": 441
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1873,
                            "y": 403
                        },
                        {
                            "x": 1883,
                            "y": 403
                        },
                        {
                            "x": 1882,
                            "y": 441
                        },
                        {
                            "x": 1872,
                            "y": 441
                        }
                    ]
                }
            },
            {
                "description": "Description",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 80,
                            "y": 469
                        },
                        {
                            "x": 261,
                            "y": 469
                        },
                        {
                            "x": 261,
                            "y": 511
                        },
                        {
                            "x": 80,
                            "y": 511
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 270,
                            "y": 469
                        },
                        {
                            "x": 281,
                            "y": 469
                        },
                        {
                            "x": 281,
                            "y": 511
                        },
                        {
                            "x": 270,
                            "y": 511
                        }
                    ]
                }
            },
            {
                "description": "CRAZY",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 345,
                            "y": 459
                        },
                        {
                            "x": 467,
                            "y": 459
                        },
                        {
                            "x": 467,
                            "y": 512
                        },
                        {
                            "x": 345,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "HORSE",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 480,
                            "y": 459
                        },
                        {
                            "x": 608,
                            "y": 459
                        },
                        {
                            "x": 608,
                            "y": 512
                        },
                        {
                            "x": 480,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "FED",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 628,
                            "y": 459
                        },
                        {
                            "x": 697,
                            "y": 459
                        },
                        {
                            "x": 697,
                            "y": 512
                        },
                        {
                            "x": 628,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "COM",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 713,
                            "y": 459
                        },
                        {
                            "x": 789,
                            "y": 459
                        },
                        {
                            "x": 789,
                            "y": 512
                        },
                        {
                            "x": 713,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "21",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 814,
                            "y": 459
                        },
                        {
                            "x": 843,
                            "y": 459
                        },
                        {
                            "x": 843,
                            "y": 512
                        },
                        {
                            "x": 814,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "Batch",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 898,
                            "y": 459
                        },
                        {
                            "x": 984,
                            "y": 459
                        },
                        {
                            "x": 984,
                            "y": 512
                        },
                        {
                            "x": 898,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "No",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1001,
                            "y": 459
                        },
                        {
                            "x": 1040,
                            "y": 459
                        },
                        {
                            "x": 1040,
                            "y": 512
                        },
                        {
                            "x": 1001,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1045,
                            "y": 459
                        },
                        {
                            "x": 1060,
                            "y": 459
                        },
                        {
                            "x": 1060,
                            "y": 512
                        },
                        {
                            "x": 1045,
                            "y": 512
                        }
                    ]
                }
            },
            {
                "description": "Field",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1654,
                            "y": 478
                        },
                        {
                            "x": 1710,
                            "y": 479
                        },
                        {
                            "x": 1709,
                            "y": 512
                        },
                        {
                            "x": 1653,
                            "y": 511
                        }
                    ]
                }
            },
            {
                "description": "Information",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1723,
                            "y": 480
                        },
                        {
                            "x": 1859,
                            "y": 484
                        },
                        {
                            "x": 1858,
                            "y": 517
                        },
                        {
                            "x": 1722,
                            "y": 513
                        }
                    ]
                }
            },
            {
                "description": "Capacity",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 80,
                            "y": 531
                        },
                        {
                            "x": 216,
                            "y": 531
                        },
                        {
                            "x": 216,
                            "y": 573
                        },
                        {
                            "x": 80,
                            "y": 573
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 218,
                            "y": 531
                        },
                        {
                            "x": 229,
                            "y": 531
                        },
                        {
                            "x": 229,
                            "y": 573
                        },
                        {
                            "x": 218,
                            "y": 573
                        }
                    ]
                }
            },
            {
                "description": "Operator",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1646,
                            "y": 524
                        },
                        {
                            "x": 1769,
                            "y": 524
                        },
                        {
                            "x": 1769,
                            "y": 558
                        },
                        {
                            "x": 1646,
                            "y": 558
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1768,
                            "y": 524
                        },
                        {
                            "x": 1777,
                            "y": 524
                        },
                        {
                            "x": 1777,
                            "y": 558
                        },
                        {
                            "x": 1768,
                            "y": 558
                        }
                    ]
                }
            },
            {
                "description": "COG",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1868,
                            "y": 522
                        },
                        {
                            "x": 1920,
                            "y": 523
                        },
                        {
                            "x": 1919,
                            "y": 564
                        },
                        {
                            "x": 1867,
                            "y": 563
                        }
                    ]
                }
            },
            {
                "description": "Operating",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1942,
                            "y": 523
                        },
                        {
                            "x": 2064,
                            "y": 525
                        },
                        {
                            "x": 2063,
                            "y": 566
                        },
                        {
                            "x": 1941,
                            "y": 564
                        }
                    ]
                }
            },
            {
                "description": "LLC",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2075,
                            "y": 526
                        },
                        {
                            "x": 2121,
                            "y": 527
                        },
                        {
                            "x": 2120,
                            "y": 568
                        },
                        {
                            "x": 2074,
                            "y": 567
                        }
                    ]
                }
            },
            {
                "description": "Field",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1645,
                            "y": 571
                        },
                        {
                            "x": 1707,
                            "y": 571
                        },
                        {
                            "x": 1707,
                            "y": 600
                        },
                        {
                            "x": 1645,
                            "y": 600
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1714,
                            "y": 571
                        },
                        {
                            "x": 1722,
                            "y": 571
                        },
                        {
                            "x": 1722,
                            "y": 600
                        },
                        {
                            "x": 1714,
                            "y": 600
                        }
                    ]
                }
            },
            {
                "description": "Lusk",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1869,
                            "y": 572
                        },
                        {
                            "x": 1921,
                            "y": 573
                        },
                        {
                            "x": 1920,
                            "y": 608
                        },
                        {
                            "x": 1868,
                            "y": 607
                        }
                    ]
                }
            },
            {
                "description": ";",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1926,
                            "y": 573
                        },
                        {
                            "x": 1935,
                            "y": 573
                        },
                        {
                            "x": 1934,
                            "y": 607
                        },
                        {
                            "x": 1925,
                            "y": 607
                        }
                    ]
                }
            },
            {
                "description": "Bone",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1945,
                            "y": 573
                        },
                        {
                            "x": 2012,
                            "y": 574
                        },
                        {
                            "x": 2011,
                            "y": 609
                        },
                        {
                            "x": 1944,
                            "y": 608
                        }
                    ]
                }
            },
            {
                "description": "Spring",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2023,
                            "y": 574
                        },
                        {
                            "x": 2103,
                            "y": 575
                        },
                        {
                            "x": 2102,
                            "y": 610
                        },
                        {
                            "x": 2022,
                            "y": 609
                        }
                    ]
                }
            },
            {
                "description": "Base",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 83,
                            "y": 591
                        },
                        {
                            "x": 159,
                            "y": 591
                        },
                        {
                            "x": 159,
                            "y": 636
                        },
                        {
                            "x": 83,
                            "y": 636
                        }
                    ]
                }
            },
            {
                "description": "System",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 176,
                            "y": 591
                        },
                        {
                            "x": 272,
                            "y": 591
                        },
                        {
                            "x": 272,
                            "y": 636
                        },
                        {
                            "x": 176,
                            "y": 636
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 288,
                            "y": 591
                        },
                        {
                            "x": 300,
                            "y": 591
                        },
                        {
                            "x": 300,
                            "y": 636
                        },
                        {
                            "x": 288,
                            "y": 636
                        }
                    ]
                }
            },
            {
                "description": "Alpha",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 345,
                            "y": 591
                        },
                        {
                            "x": 443,
                            "y": 591
                        },
                        {
                            "x": 443,
                            "y": 636
                        },
                        {
                            "x": 345,
                            "y": 636
                        }
                    ]
                }
            },
            {
                "description": "Crude",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 458,
                            "y": 591
                        },
                        {
                            "x": 552,
                            "y": 591
                        },
                        {
                            "x": 552,
                            "y": 636
                        },
                        {
                            "x": 458,
                            "y": 636
                        }
                    ]
                }
            },
            {
                "description": "Connector",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 566,
                            "y": 591
                        },
                        {
                            "x": 738,
                            "y": 591
                        },
                        {
                            "x": 738,
                            "y": 636
                        },
                        {
                            "x": 566,
                            "y": 636
                        }
                    ]
                }
            },
            {
                "description": "Vessel",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 898,
                            "y": 596
                        },
                        {
                            "x": 1000,
                            "y": 596
                        },
                        {
                            "x": 1000,
                            "y": 628
                        },
                        {
                            "x": 898,
                            "y": 628
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1001,
                            "y": 596
                        },
                        {
                            "x": 1009,
                            "y": 596
                        },
                        {
                            "x": 1009,
                            "y": 628
                        },
                        {
                            "x": 1001,
                            "y": 628
                        }
                    ]
                }
            },
            {
                "description": "Lease",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1647,
                            "y": 615
                        },
                        {
                            "x": 1726,
                            "y": 615
                        },
                        {
                            "x": 1726,
                            "y": 647
                        },
                        {
                            "x": 1647,
                            "y": 647
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1729,
                            "y": 615
                        },
                        {
                            "x": 1737,
                            "y": 615
                        },
                        {
                            "x": 1737,
                            "y": 647
                        },
                        {
                            "x": 1729,
                            "y": 647
                        }
                    ]
                }
            },
            {
                "description": "Crazy",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1864,
                            "y": 618
                        },
                        {
                            "x": 1935,
                            "y": 618
                        },
                        {
                            "x": 1935,
                            "y": 649
                        },
                        {
                            "x": 1864,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "Hosre",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1947,
                            "y": 618
                        },
                        {
                            "x": 2020,
                            "y": 618
                        },
                        {
                            "x": 2020,
                            "y": 649
                        },
                        {
                            "x": 1947,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "Federal",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2031,
                            "y": 618
                        },
                        {
                            "x": 2130,
                            "y": 618
                        },
                        {
                            "x": 2130,
                            "y": 649
                        },
                        {
                            "x": 2031,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "Com",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2136,
                            "y": 618
                        },
                        {
                            "x": 2186,
                            "y": 618
                        },
                        {
                            "x": 2186,
                            "y": 649
                        },
                        {
                            "x": 2136,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "#",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2207,
                            "y": 618
                        },
                        {
                            "x": 2215,
                            "y": 618
                        },
                        {
                            "x": 2215,
                            "y": 649
                        },
                        {
                            "x": 2207,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "002H",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2221,
                            "y": 618
                        },
                        {
                            "x": 2282,
                            "y": 618
                        },
                        {
                            "x": 2282,
                            "y": 649
                        },
                        {
                            "x": 2221,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "RT",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2295,
                            "y": 618
                        },
                        {
                            "x": 2336,
                            "y": 618
                        },
                        {
                            "x": 2336,
                            "y": 649
                        },
                        {
                            "x": 2295,
                            "y": 649
                        }
                    ]
                }
            },
            {
                "description": "Location",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 80,
                            "y": 655
                        },
                        {
                            "x": 216,
                            "y": 655
                        },
                        {
                            "x": 216,
                            "y": 697
                        },
                        {
                            "x": 80,
                            "y": 697
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 225,
                            "y": 655
                        },
                        {
                            "x": 236,
                            "y": 655
                        },
                        {
                            "x": 236,
                            "y": 697
                        },
                        {
                            "x": 225,
                            "y": 697
                        }
                    ]
                }
            },
            {
                "description": "ACC",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 348,
                            "y": 648
                        },
                        {
                            "x": 413,
                            "y": 648
                        },
                        {
                            "x": 413,
                            "y": 699
                        },
                        {
                            "x": 348,
                            "y": 699
                        }
                    ]
                }
            },
            {
                "description": "HWY",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 429,
                            "y": 648
                        },
                        {
                            "x": 523,
                            "y": 648
                        },
                        {
                            "x": 523,
                            "y": 699
                        },
                        {
                            "x": 429,
                            "y": 699
                        }
                    ]
                }
            },
            {
                "description": "126",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 538,
                            "y": 648
                        },
                        {
                            "x": 588,
                            "y": 648
                        },
                        {
                            "x": 588,
                            "y": 699
                        },
                        {
                            "x": 538,
                            "y": 699
                        }
                    ]
                }
            },
            {
                "description": "Jct",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 612,
                            "y": 648
                        },
                        {
                            "x": 656,
                            "y": 648
                        },
                        {
                            "x": 656,
                            "y": 699
                        },
                        {
                            "x": 612,
                            "y": 699
                        }
                    ]
                }
            },
            {
                "description": "Remarks",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 896,
                            "y": 658
                        },
                        {
                            "x": 1037,
                            "y": 658
                        },
                        {
                            "x": 1037,
                            "y": 692
                        },
                        {
                            "x": 896,
                            "y": 692
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1038,
                            "y": 658
                        },
                        {
                            "x": 1047,
                            "y": 658
                        },
                        {
                            "x": 1047,
                            "y": 692
                        },
                        {
                            "x": 1038,
                            "y": 692
                        }
                    ]
                }
            },
            {
                "description": "FMP",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1645,
                            "y": 653
                        },
                        {
                            "x": 1705,
                            "y": 654
                        },
                        {
                            "x": 1704,
                            "y": 693
                        },
                        {
                            "x": 1644,
                            "y": 692
                        }
                    ]
                }
            },
            {
                "description": "Number",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1716,
                            "y": 654
                        },
                        {
                            "x": 1821,
                            "y": 656
                        },
                        {
                            "x": 1820,
                            "y": 695
                        },
                        {
                            "x": 1715,
                            "y": 693
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1824,
                            "y": 657
                        },
                        {
                            "x": 1834,
                            "y": 657
                        },
                        {
                            "x": 1833,
                            "y": 695
                        },
                        {
                            "x": 1823,
                            "y": 695
                        }
                    ]
                }
            },
            {
                "description": "NMNM132970",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1868,
                            "y": 657
                        },
                        {
                            "x": 2045,
                            "y": 660
                        },
                        {
                            "x": 2044,
                            "y": 699
                        },
                        {
                            "x": 1867,
                            "y": 696
                        }
                    ]
                }
            },
            {
                "description": "Code",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1648,
                            "y": 700
                        },
                        {
                            "x": 1718,
                            "y": 700
                        },
                        {
                            "x": 1718,
                            "y": 736
                        },
                        {
                            "x": 1648,
                            "y": 736
                        }
                    ]
                }
            },
            {
                "description": "Ref",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1724,
                            "y": 700
                        },
                        {
                            "x": 1770,
                            "y": 700
                        },
                        {
                            "x": 1770,
                            "y": 736
                        },
                        {
                            "x": 1724,
                            "y": 736
                        }
                    ]
                }
            },
            {
                "description": "No",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1781,
                            "y": 700
                        },
                        {
                            "x": 1814,
                            "y": 700
                        },
                        {
                            "x": 1814,
                            "y": 736
                        },
                        {
                            "x": 1781,
                            "y": 736
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1816,
                            "y": 700
                        },
                        {
                            "x": 1826,
                            "y": 700
                        },
                        {
                            "x": 1826,
                            "y": 736
                        },
                        {
                            "x": 1816,
                            "y": 736
                        }
                    ]
                }
            },
            {
                "description": "193477",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1873,
                            "y": 700
                        },
                        {
                            "x": 1957,
                            "y": 700
                        },
                        {
                            "x": 1957,
                            "y": 736
                        },
                        {
                            "x": 1873,
                            "y": 736
                        }
                    ]
                }
            },
            {
                "description": "Conn",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 81,
                            "y": 712
                        },
                        {
                            "x": 162,
                            "y": 712
                        },
                        {
                            "x": 162,
                            "y": 763
                        },
                        {
                            "x": 81,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 168,
                            "y": 712
                        },
                        {
                            "x": 182,
                            "y": 712
                        },
                        {
                            "x": 182,
                            "y": 763
                        },
                        {
                            "x": 168,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "Point",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 192,
                            "y": 712
                        },
                        {
                            "x": 277,
                            "y": 712
                        },
                        {
                            "x": 277,
                            "y": 763
                        },
                        {
                            "x": 192,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 272,
                            "y": 712
                        },
                        {
                            "x": 286,
                            "y": 712
                        },
                        {
                            "x": 286,
                            "y": 763
                        },
                        {
                            "x": 272,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "HWY",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 346,
                            "y": 712
                        },
                        {
                            "x": 433,
                            "y": 712
                        },
                        {
                            "x": 433,
                            "y": 763
                        },
                        {
                            "x": 346,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "126",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 448,
                            "y": 712
                        },
                        {
                            "x": 498,
                            "y": 712
                        },
                        {
                            "x": 498,
                            "y": 763
                        },
                        {
                            "x": 448,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 506,
                            "y": 712
                        },
                        {
                            "x": 520,
                            "y": 712
                        },
                        {
                            "x": 520,
                            "y": 763
                        },
                        {
                            "x": 506,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "C",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 521,
                            "y": 712
                        },
                        {
                            "x": 535,
                            "y": 712
                        },
                        {
                            "x": 535,
                            "y": 763
                        },
                        {
                            "x": 521,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "Gath",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 552,
                            "y": 712
                        },
                        {
                            "x": 633,
                            "y": 712
                        },
                        {
                            "x": 633,
                            "y": 763
                        },
                        {
                            "x": 552,
                            "y": 763
                        }
                    ]
                }
            },
            {
                "description": "API",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1645,
                            "y": 746
                        },
                        {
                            "x": 1694,
                            "y": 747
                        },
                        {
                            "x": 1693,
                            "y": 779
                        },
                        {
                            "x": 1644,
                            "y": 778
                        }
                    ]
                }
            },
            {
                "description": "Lease",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1700,
                            "y": 747
                        },
                        {
                            "x": 1780,
                            "y": 749
                        },
                        {
                            "x": 1779,
                            "y": 781
                        },
                        {
                            "x": 1699,
                            "y": 779
                        }
                    ]
                }
            },
            {
                "description": "No",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1787,
                            "y": 749
                        },
                        {
                            "x": 1828,
                            "y": 750
                        },
                        {
                            "x": 1827,
                            "y": 782
                        },
                        {
                            "x": 1786,
                            "y": 781
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1831,
                            "y": 750
                        },
                        {
                            "x": 1839,
                            "y": 750
                        },
                        {
                            "x": 1838,
                            "y": 781
                        },
                        {
                            "x": 1830,
                            "y": 781
                        }
                    ]
                }
            },
            {
                "description": "Flow",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 85,
                            "y": 782
                        },
                        {
                            "x": 147,
                            "y": 785
                        },
                        {
                            "x": 145,
                            "y": 821
                        },
                        {
                            "x": 83,
                            "y": 818
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 161,
                            "y": 785
                        },
                        {
                            "x": 171,
                            "y": 785
                        },
                        {
                            "x": 169,
                            "y": 821
                        },
                        {
                            "x": 159,
                            "y": 821
                        }
                    ]
                }
            },
            {
                "description": "O",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 354,
                            "y": 777
                        },
                        {
                            "x": 367,
                            "y": 777
                        },
                        {
                            "x": 367,
                            "y": 825
                        },
                        {
                            "x": 354,
                            "y": 825
                        }
                    ]
                }
            },
            {
                "description": "Delivery",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 410,
                            "y": 777
                        },
                        {
                            "x": 539,
                            "y": 777
                        },
                        {
                            "x": 539,
                            "y": 825
                        },
                        {
                            "x": 410,
                            "y": 825
                        }
                    ]
                }
            },
            {
                "description": "Receipt",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 616,
                            "y": 777
                        },
                        {
                            "x": 747,
                            "y": 777
                        },
                        {
                            "x": 747,
                            "y": 825
                        },
                        {
                            "x": 616,
                            "y": 825
                        }
                    ]
                }
            },
            {
                "description": "Fed",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1644,
                            "y": 790
                        },
                        {
                            "x": 1690,
                            "y": 790
                        },
                        {
                            "x": 1690,
                            "y": 826
                        },
                        {
                            "x": 1644,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "Lease",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1703,
                            "y": 790
                        },
                        {
                            "x": 1784,
                            "y": 790
                        },
                        {
                            "x": 1784,
                            "y": 826
                        },
                        {
                            "x": 1703,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "No",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1791,
                            "y": 790
                        },
                        {
                            "x": 1830,
                            "y": 790
                        },
                        {
                            "x": 1830,
                            "y": 826
                        },
                        {
                            "x": 1791,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1831,
                            "y": 790
                        },
                        {
                            "x": 1841,
                            "y": 790
                        },
                        {
                            "x": 1841,
                            "y": 826
                        },
                        {
                            "x": 1831,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "ACC",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1866,
                            "y": 790
                        },
                        {
                            "x": 1922,
                            "y": 790
                        },
                        {
                            "x": 1922,
                            "y": 826
                        },
                        {
                            "x": 1866,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1923,
                            "y": 790
                        },
                        {
                            "x": 1933,
                            "y": 790
                        },
                        {
                            "x": 1933,
                            "y": 826
                        },
                        {
                            "x": 1923,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "T",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1938,
                            "y": 790
                        },
                        {
                            "x": 1948,
                            "y": 790
                        },
                        {
                            "x": 1948,
                            "y": 826
                        },
                        {
                            "x": 1938,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1949,
                            "y": 790
                        },
                        {
                            "x": 1959,
                            "y": 790
                        },
                        {
                            "x": 1959,
                            "y": 826
                        },
                        {
                            "x": 1949,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "10661",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1963,
                            "y": 790
                        },
                        {
                            "x": 2040,
                            "y": 790
                        },
                        {
                            "x": 2040,
                            "y": 826
                        },
                        {
                            "x": 1963,
                            "y": 826
                        }
                    ]
                }
            },
            {
                "description": "Unit",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 82,
                            "y": 846
                        },
                        {
                            "x": 149,
                            "y": 846
                        },
                        {
                            "x": 149,
                            "y": 881
                        },
                        {
                            "x": 82,
                            "y": 881
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 150,
                            "y": 846
                        },
                        {
                            "x": 159,
                            "y": 846
                        },
                        {
                            "x": 159,
                            "y": 881
                        },
                        {
                            "x": 150,
                            "y": 881
                        }
                    ]
                }
            },
            {
                "description": "Barrels",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 411,
                            "y": 841
                        },
                        {
                            "x": 524,
                            "y": 841
                        },
                        {
                            "x": 524,
                            "y": 887
                        },
                        {
                            "x": 411,
                            "y": 887
                        }
                    ]
                }
            },
            {
                "description": "O",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 559,
                            "y": 841
                        },
                        {
                            "x": 572,
                            "y": 841
                        },
                        {
                            "x": 572,
                            "y": 887
                        },
                        {
                            "x": 559,
                            "y": 887
                        }
                    ]
                }
            },
            {
                "description": "Gallons",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 611,
                            "y": 841
                        },
                        {
                            "x": 739,
                            "y": 841
                        },
                        {
                            "x": 739,
                            "y": 887
                        },
                        {
                            "x": 611,
                            "y": 887
                        }
                    ]
                }
            },
            {
                "description": "Land",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1645,
                            "y": 836
                        },
                        {
                            "x": 1707,
                            "y": 836
                        },
                        {
                            "x": 1707,
                            "y": 870
                        },
                        {
                            "x": 1645,
                            "y": 870
                        }
                    ]
                }
            },
            {
                "description": "Desc",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1721,
                            "y": 836
                        },
                        {
                            "x": 1788,
                            "y": 836
                        },
                        {
                            "x": 1788,
                            "y": 870
                        },
                        {
                            "x": 1721,
                            "y": 870
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1791,
                            "y": 836
                        },
                        {
                            "x": 1800,
                            "y": 836
                        },
                        {
                            "x": 1800,
                            "y": 870
                        },
                        {
                            "x": 1791,
                            "y": 870
                        }
                    ]
                }
            },
            {
                "description": "18",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1867,
                            "y": 836
                        },
                        {
                            "x": 1892,
                            "y": 836
                        },
                        {
                            "x": 1892,
                            "y": 870
                        },
                        {
                            "x": 1867,
                            "y": 870
                        }
                    ]
                }
            },
            {
                "description": "19S",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1909,
                            "y": 836
                        },
                        {
                            "x": 1952,
                            "y": 836
                        },
                        {
                            "x": 1952,
                            "y": 870
                        },
                        {
                            "x": 1909,
                            "y": 870
                        }
                    ]
                }
            },
            {
                "description": "32E",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1963,
                            "y": 836
                        },
                        {
                            "x": 2007,
                            "y": 836
                        },
                        {
                            "x": 2007,
                            "y": 870
                        },
                        {
                            "x": 1963,
                            "y": 870
                        }
                    ]
                }
            },
            {
                "description": "Tank",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 538,
                            "y": 898
                        },
                        {
                            "x": 605,
                            "y": 899
                        },
                        {
                            "x": 604,
                            "y": 932
                        },
                        {
                            "x": 537,
                            "y": 931
                        }
                    ]
                }
            },
            {
                "description": "Amb",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 684,
                            "y": 901
                        },
                        {
                            "x": 754,
                            "y": 902
                        },
                        {
                            "x": 753,
                            "y": 934
                        },
                        {
                            "x": 683,
                            "y": 933
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 758,
                            "y": 902
                        },
                        {
                            "x": 766,
                            "y": 902
                        },
                        {
                            "x": 765,
                            "y": 934
                        },
                        {
                            "x": 757,
                            "y": 934
                        }
                    ]
                }
            },
            {
                "description": "Date",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 224,
                            "y": 948
                        },
                        {
                            "x": 291,
                            "y": 948
                        },
                        {
                            "x": 291,
                            "y": 985
                        },
                        {
                            "x": 224,
                            "y": 985
                        }
                    ]
                }
            },
            {
                "description": "Temp",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 537,
                            "y": 937
                        },
                        {
                            "x": 616,
                            "y": 938
                        },
                        {
                            "x": 615,
                            "y": 979
                        },
                        {
                            "x": 536,
                            "y": 978
                        }
                    ]
                }
            },
            {
                "description": "Temp",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 686,
                            "y": 940
                        },
                        {
                            "x": 766,
                            "y": 941
                        },
                        {
                            "x": 765,
                            "y": 981
                        },
                        {
                            "x": 685,
                            "y": 980
                        }
                    ]
                }
            },
            {
                "description": "Ft",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 842,
                            "y": 942
                        },
                        {
                            "x": 872,
                            "y": 942
                        },
                        {
                            "x": 871,
                            "y": 982
                        },
                        {
                            "x": 841,
                            "y": 982
                        }
                    ]
                }
            },
            {
                "description": "In",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 928,
                            "y": 943
                        },
                        {
                            "x": 942,
                            "y": 943
                        },
                        {
                            "x": 941,
                            "y": 983
                        },
                        {
                            "x": 927,
                            "y": 983
                        }
                    ]
                }
            },
            {
                "description": "Fraction",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 981,
                            "y": 944
                        },
                        {
                            "x": 1101,
                            "y": 946
                        },
                        {
                            "x": 1100,
                            "y": 987
                        },
                        {
                            "x": 980,
                            "y": 985
                        }
                    ]
                }
            },
            {
                "description": "Seal",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1205,
                            "y": 941
                        },
                        {
                            "x": 1272,
                            "y": 940
                        },
                        {
                            "x": 1273,
                            "y": 981
                        },
                        {
                            "x": 1206,
                            "y": 982
                        }
                    ]
                }
            },
            {
                "description": "No",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1276,
                            "y": 940
                        },
                        {
                            "x": 1321,
                            "y": 939
                        },
                        {
                            "x": 1322,
                            "y": 980
                        },
                        {
                            "x": 1277,
                            "y": 981
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1321,
                            "y": 940
                        },
                        {
                            "x": 1332,
                            "y": 940
                        },
                        {
                            "x": 1333,
                            "y": 980
                        },
                        {
                            "x": 1322,
                            "y": 980
                        }
                    ]
                }
            },
            {
                "description": "CPL",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1381,
                            "y": 939
                        },
                        {
                            "x": 1438,
                            "y": 938
                        },
                        {
                            "x": 1439,
                            "y": 978
                        },
                        {
                            "x": 1382,
                            "y": 979
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1444,
                            "y": 938
                        },
                        {
                            "x": 1455,
                            "y": 938
                        },
                        {
                            "x": 1456,
                            "y": 978
                        },
                        {
                            "x": 1445,
                            "y": 978
                        }
                    ]
                }
            },
            {
                "description": "Luis",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1568,
                            "y": 943
                        },
                        {
                            "x": 1632,
                            "y": 943
                        },
                        {
                            "x": 1632,
                            "y": 984
                        },
                        {
                            "x": 1568,
                            "y": 984
                        }
                    ]
                }
            },
            {
                "description": "Navarrete",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1645,
                            "y": 943
                        },
                        {
                            "x": 1810,
                            "y": 943
                        },
                        {
                            "x": 1810,
                            "y": 984
                        },
                        {
                            "x": 1645,
                            "y": 984
                        }
                    ]
                }
            },
            {
                "description": "Transportation",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2069,
                            "y": 940
                        },
                        {
                            "x": 2293,
                            "y": 940
                        },
                        {
                            "x": 2293,
                            "y": 976
                        },
                        {
                            "x": 2069,
                            "y": 976
                        }
                    ]
                }
            },
            {
                "description": "Cycle",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2147,
                            "y": 981
                        },
                        {
                            "x": 2229,
                            "y": 977
                        },
                        {
                            "x": 2230,
                            "y": 1012
                        },
                        {
                            "x": 2149,
                            "y": 1016
                        }
                    ]
                }
            },
            {
                "description": "OPEN",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 82,
                            "y": 1000
                        },
                        {
                            "x": 173,
                            "y": 1000
                        },
                        {
                            "x": 173,
                            "y": 1047
                        },
                        {
                            "x": 82,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "03",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 226,
                            "y": 1000
                        },
                        {
                            "x": 269,
                            "y": 1000
                        },
                        {
                            "x": 269,
                            "y": 1047
                        },
                        {
                            "x": 226,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 267,
                            "y": 1000
                        },
                        {
                            "x": 280,
                            "y": 1000
                        },
                        {
                            "x": 280,
                            "y": 1047
                        },
                        {
                            "x": 267,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "05",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 274,
                            "y": 1000
                        },
                        {
                            "x": 317,
                            "y": 1000
                        },
                        {
                            "x": 317,
                            "y": 1047
                        },
                        {
                            "x": 274,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 320,
                            "y": 1000
                        },
                        {
                            "x": 333,
                            "y": 1000
                        },
                        {
                            "x": 333,
                            "y": 1047
                        },
                        {
                            "x": 320,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "18",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 334,
                            "y": 1000
                        },
                        {
                            "x": 369,
                            "y": 1000
                        },
                        {
                            "x": 369,
                            "y": 1047
                        },
                        {
                            "x": 334,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "01",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 380,
                            "y": 1000
                        },
                        {
                            "x": 423,
                            "y": 1000
                        },
                        {
                            "x": 423,
                            "y": 1047
                        },
                        {
                            "x": 380,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 421,
                            "y": 1000
                        },
                        {
                            "x": 434,
                            "y": 1000
                        },
                        {
                            "x": 434,
                            "y": 1047
                        },
                        {
                            "x": 421,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "42",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 432,
                            "y": 1000
                        },
                        {
                            "x": 475,
                            "y": 1000
                        },
                        {
                            "x": 475,
                            "y": 1047
                        },
                        {
                            "x": 432,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "64",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 533,
                            "y": 1000
                        },
                        {
                            "x": 576,
                            "y": 1000
                        },
                        {
                            "x": 576,
                            "y": 1047
                        },
                        {
                            "x": 533,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 575,
                            "y": 1000
                        },
                        {
                            "x": 588,
                            "y": 1000
                        },
                        {
                            "x": 588,
                            "y": 1047
                        },
                        {
                            "x": 575,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 589,
                            "y": 1000
                        },
                        {
                            "x": 602,
                            "y": 1000
                        },
                        {
                            "x": 602,
                            "y": 1047
                        },
                        {
                            "x": 589,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "69",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 687,
                            "y": 1000
                        },
                        {
                            "x": 730,
                            "y": 1000
                        },
                        {
                            "x": 730,
                            "y": 1047
                        },
                        {
                            "x": 687,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 728,
                            "y": 1000
                        },
                        {
                            "x": 741,
                            "y": 1000
                        },
                        {
                            "x": 741,
                            "y": 1047
                        },
                        {
                            "x": 728,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 743,
                            "y": 1000
                        },
                        {
                            "x": 756,
                            "y": 1000
                        },
                        {
                            "x": 756,
                            "y": 1047
                        },
                        {
                            "x": 743,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "14",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 823,
                            "y": 1000
                        },
                        {
                            "x": 857,
                            "y": 1000
                        },
                        {
                            "x": 857,
                            "y": 1047
                        },
                        {
                            "x": 823,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "2",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 911,
                            "y": 1000
                        },
                        {
                            "x": 924,
                            "y": 1000
                        },
                        {
                            "x": 924,
                            "y": 1047
                        },
                        {
                            "x": 911,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 997,
                            "y": 1000
                        },
                        {
                            "x": 1010,
                            "y": 1000
                        },
                        {
                            "x": 1010,
                            "y": 1047
                        },
                        {
                            "x": 997,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1088,
                            "y": 1000
                        },
                        {
                            "x": 1101,
                            "y": 1000
                        },
                        {
                            "x": 1101,
                            "y": 1047
                        },
                        {
                            "x": 1088,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1103,
                            "y": 1000
                        },
                        {
                            "x": 1116,
                            "y": 1000
                        },
                        {
                            "x": 1116,
                            "y": 1047
                        },
                        {
                            "x": 1103,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1117,
                            "y": 1000
                        },
                        {
                            "x": 1130,
                            "y": 1000
                        },
                        {
                            "x": 1130,
                            "y": 1047
                        },
                        {
                            "x": 1117,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "782281",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1202,
                            "y": 1000
                        },
                        {
                            "x": 1325,
                            "y": 1000
                        },
                        {
                            "x": 1325,
                            "y": 1047
                        },
                        {
                            "x": 1202,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "Witness",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1376,
                            "y": 1000
                        },
                        {
                            "x": 1501,
                            "y": 1000
                        },
                        {
                            "x": 1501,
                            "y": 1047
                        },
                        {
                            "x": 1376,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1506,
                            "y": 1000
                        },
                        {
                            "x": 1519,
                            "y": 1000
                        },
                        {
                            "x": 1519,
                            "y": 1047
                        },
                        {
                            "x": 1506,
                            "y": 1047
                        }
                    ]
                }
            },
            {
                "description": "03",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2085,
                            "y": 1032
                        },
                        {
                            "x": 2124,
                            "y": 1032
                        },
                        {
                            "x": 2124,
                            "y": 1075
                        },
                        {
                            "x": 2085,
                            "y": 1075
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2127,
                            "y": 1032
                        },
                        {
                            "x": 2139,
                            "y": 1032
                        },
                        {
                            "x": 2139,
                            "y": 1075
                        },
                        {
                            "x": 2127,
                            "y": 1075
                        }
                    ]
                }
            },
            {
                "description": "18",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2144,
                            "y": 1032
                        },
                        {
                            "x": 2175,
                            "y": 1032
                        },
                        {
                            "x": 2175,
                            "y": 1075
                        },
                        {
                            "x": 2144,
                            "y": 1075
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2180,
                            "y": 1032
                        },
                        {
                            "x": 2192,
                            "y": 1032
                        },
                        {
                            "x": 2192,
                            "y": 1075
                        },
                        {
                            "x": 2180,
                            "y": 1075
                        }
                    ]
                }
            },
            {
                "description": "01",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2189,
                            "y": 1032
                        },
                        {
                            "x": 2236,
                            "y": 1032
                        },
                        {
                            "x": 2236,
                            "y": 1075
                        },
                        {
                            "x": 2189,
                            "y": 1075
                        }
                    ]
                }
            },
            {
                "description": "CLOSE",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 87,
                            "y": 1070
                        },
                        {
                            "x": 192,
                            "y": 1070
                        },
                        {
                            "x": 192,
                            "y": 1128
                        },
                        {
                            "x": 87,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "03",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 230,
                            "y": 1070
                        },
                        {
                            "x": 263,
                            "y": 1070
                        },
                        {
                            "x": 263,
                            "y": 1128
                        },
                        {
                            "x": 230,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 264,
                            "y": 1070
                        },
                        {
                            "x": 280,
                            "y": 1070
                        },
                        {
                            "x": 280,
                            "y": 1128
                        },
                        {
                            "x": 264,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "06",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 283,
                            "y": 1070
                        },
                        {
                            "x": 316,
                            "y": 1070
                        },
                        {
                            "x": 316,
                            "y": 1128
                        },
                        {
                            "x": 283,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 318,
                            "y": 1070
                        },
                        {
                            "x": 334,
                            "y": 1070
                        },
                        {
                            "x": 334,
                            "y": 1128
                        },
                        {
                            "x": 318,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "18",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 336,
                            "y": 1070
                        },
                        {
                            "x": 369,
                            "y": 1070
                        },
                        {
                            "x": 369,
                            "y": 1128
                        },
                        {
                            "x": 336,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "12",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 389,
                            "y": 1070
                        },
                        {
                            "x": 422,
                            "y": 1070
                        },
                        {
                            "x": 422,
                            "y": 1128
                        },
                        {
                            "x": 389,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 424,
                            "y": 1070
                        },
                        {
                            "x": 440,
                            "y": 1070
                        },
                        {
                            "x": 440,
                            "y": 1128
                        },
                        {
                            "x": 424,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "56",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 437,
                            "y": 1070
                        },
                        {
                            "x": 468,
                            "y": 1070
                        },
                        {
                            "x": 468,
                            "y": 1128
                        },
                        {
                            "x": 437,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "55",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 535,
                            "y": 1070
                        },
                        {
                            "x": 577,
                            "y": 1070
                        },
                        {
                            "x": 577,
                            "y": 1128
                        },
                        {
                            "x": 535,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 577,
                            "y": 1070
                        },
                        {
                            "x": 593,
                            "y": 1070
                        },
                        {
                            "x": 593,
                            "y": 1128
                        },
                        {
                            "x": 577,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 589,
                            "y": 1070
                        },
                        {
                            "x": 605,
                            "y": 1070
                        },
                        {
                            "x": 605,
                            "y": 1128
                        },
                        {
                            "x": 589,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "61",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 688,
                            "y": 1070
                        },
                        {
                            "x": 731,
                            "y": 1070
                        },
                        {
                            "x": 731,
                            "y": 1128
                        },
                        {
                            "x": 688,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 731,
                            "y": 1070
                        },
                        {
                            "x": 747,
                            "y": 1070
                        },
                        {
                            "x": 747,
                            "y": 1128
                        },
                        {
                            "x": 731,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 742,
                            "y": 1070
                        },
                        {
                            "x": 758,
                            "y": 1070
                        },
                        {
                            "x": 758,
                            "y": 1128
                        },
                        {
                            "x": 742,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 825,
                            "y": 1070
                        },
                        {
                            "x": 841,
                            "y": 1070
                        },
                        {
                            "x": 841,
                            "y": 1128
                        },
                        {
                            "x": 825,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 908,
                            "y": 1070
                        },
                        {
                            "x": 924,
                            "y": 1070
                        },
                        {
                            "x": 924,
                            "y": 1128
                        },
                        {
                            "x": 908,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "2",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 996,
                            "y": 1070
                        },
                        {
                            "x": 1012,
                            "y": 1070
                        },
                        {
                            "x": 1012,
                            "y": 1128
                        },
                        {
                            "x": 996,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1090,
                            "y": 1070
                        },
                        {
                            "x": 1106,
                            "y": 1070
                        },
                        {
                            "x": 1106,
                            "y": 1128
                        },
                        {
                            "x": 1090,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1102,
                            "y": 1070
                        },
                        {
                            "x": 1118,
                            "y": 1070
                        },
                        {
                            "x": 1118,
                            "y": 1128
                        },
                        {
                            "x": 1102,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1114,
                            "y": 1070
                        },
                        {
                            "x": 1130,
                            "y": 1070
                        },
                        {
                            "x": 1130,
                            "y": 1128
                        },
                        {
                            "x": 1114,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "754370",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1209,
                            "y": 1070
                        },
                        {
                            "x": 1327,
                            "y": 1070
                        },
                        {
                            "x": 1327,
                            "y": 1128
                        },
                        {
                            "x": 1209,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "Witness",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1376,
                            "y": 1070
                        },
                        {
                            "x": 1502,
                            "y": 1070
                        },
                        {
                            "x": 1502,
                            "y": 1128
                        },
                        {
                            "x": 1376,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1503,
                            "y": 1070
                        },
                        {
                            "x": 1519,
                            "y": 1070
                        },
                        {
                            "x": 1519,
                            "y": 1128
                        },
                        {
                            "x": 1503,
                            "y": 1128
                        }
                    ]
                }
            },
            {
                "description": "OBSERVABLES",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 78,
                            "y": 1162
                        },
                        {
                            "x": 328,
                            "y": 1162
                        },
                        {
                            "x": 328,
                            "y": 1200
                        },
                        {
                            "x": 78,
                            "y": 1200
                        }
                    ]
                }
            },
            {
                "description": "Open",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 498,
                            "y": 1170
                        },
                        {
                            "x": 575,
                            "y": 1170
                        },
                        {
                            "x": 575,
                            "y": 1207
                        },
                        {
                            "x": 498,
                            "y": 1207
                        }
                    ]
                }
            },
            {
                "description": "Close",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 681,
                            "y": 1168
                        },
                        {
                            "x": 767,
                            "y": 1168
                        },
                        {
                            "x": 767,
                            "y": 1206
                        },
                        {
                            "x": 681,
                            "y": 1206
                        }
                    ]
                }
            },
            {
                "description": "VOLUME",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 907,
                            "y": 1159
                        },
                        {
                            "x": 1045,
                            "y": 1157
                        },
                        {
                            "x": 1046,
                            "y": 1198
                        },
                        {
                            "x": 908,
                            "y": 1200
                        }
                    ]
                }
            },
            {
                "description": "CALCULATIONS",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1056,
                            "y": 1157
                        },
                        {
                            "x": 1306,
                            "y": 1153
                        },
                        {
                            "x": 1307,
                            "y": 1194
                        },
                        {
                            "x": 1057,
                            "y": 1198
                        }
                    ]
                }
            },
            {
                "description": "Floating",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1741,
                            "y": 1192
                        },
                        {
                            "x": 1869,
                            "y": 1196
                        },
                        {
                            "x": 1868,
                            "y": 1231
                        },
                        {
                            "x": 1740,
                            "y": 1227
                        }
                    ]
                }
            },
            {
                "description": "Sample",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 84,
                            "y": 1218
                        },
                        {
                            "x": 196,
                            "y": 1218
                        },
                        {
                            "x": 196,
                            "y": 1258
                        },
                        {
                            "x": 84,
                            "y": 1258
                        }
                    ]
                }
            },
            {
                "description": "Gravity",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 211,
                            "y": 1218
                        },
                        {
                            "x": 319,
                            "y": 1218
                        },
                        {
                            "x": 319,
                            "y": 1258
                        },
                        {
                            "x": 211,
                            "y": 1258
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 325,
                            "y": 1218
                        },
                        {
                            "x": 336,
                            "y": 1218
                        },
                        {
                            "x": 336,
                            "y": 1258
                        },
                        {
                            "x": 325,
                            "y": 1258
                        }
                    ]
                }
            },
            {
                "description": "Gross",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2076,
                            "y": 1194
                        },
                        {
                            "x": 2175,
                            "y": 1194
                        },
                        {
                            "x": 2175,
                            "y": 1228
                        },
                        {
                            "x": 2076,
                            "y": 1228
                        }
                    ]
                }
            },
            {
                "description": "Total",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1113,
                            "y": 1208
                        },
                        {
                            "x": 1187,
                            "y": 1208
                        },
                        {
                            "x": 1187,
                            "y": 1245
                        },
                        {
                            "x": 1113,
                            "y": 1245
                        }
                    ]
                }
            },
            {
                "description": "40",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 486,
                            "y": 1218
                        },
                        {
                            "x": 521,
                            "y": 1218
                        },
                        {
                            "x": 521,
                            "y": 1256
                        },
                        {
                            "x": 486,
                            "y": 1256
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 528,
                            "y": 1218
                        },
                        {
                            "x": 538,
                            "y": 1218
                        },
                        {
                            "x": 538,
                            "y": 1256
                        },
                        {
                            "x": 528,
                            "y": 1256
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 539,
                            "y": 1218
                        },
                        {
                            "x": 549,
                            "y": 1218
                        },
                        {
                            "x": 549,
                            "y": 1256
                        },
                        {
                            "x": 539,
                            "y": 1256
                        }
                    ]
                }
            },
            {
                "description": "40",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 671,
                            "y": 1217
                        },
                        {
                            "x": 701,
                            "y": 1217
                        },
                        {
                            "x": 701,
                            "y": 1259
                        },
                        {
                            "x": 671,
                            "y": 1259
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 711,
                            "y": 1217
                        },
                        {
                            "x": 722,
                            "y": 1217
                        },
                        {
                            "x": 722,
                            "y": 1259
                        },
                        {
                            "x": 711,
                            "y": 1259
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 719,
                            "y": 1217
                        },
                        {
                            "x": 730,
                            "y": 1217
                        },
                        {
                            "x": 730,
                            "y": 1259
                        },
                        {
                            "x": 719,
                            "y": 1259
                        }
                    ]
                }
            },
            {
                "description": "Free",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1280,
                            "y": 1218
                        },
                        {
                            "x": 1350,
                            "y": 1220
                        },
                        {
                            "x": 1349,
                            "y": 1261
                        },
                        {
                            "x": 1279,
                            "y": 1259
                        }
                    ]
                }
            },
            {
                "description": "Water",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1353,
                            "y": 1220
                        },
                        {
                            "x": 1450,
                            "y": 1223
                        },
                        {
                            "x": 1449,
                            "y": 1264
                        },
                        {
                            "x": 1352,
                            "y": 1261
                        }
                    ]
                }
            },
            {
                "description": "Observed",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1073,
                            "y": 1248
                        },
                        {
                            "x": 1218,
                            "y": 1245
                        },
                        {
                            "x": 1219,
                            "y": 1280
                        },
                        {
                            "x": 1074,
                            "y": 1283
                        }
                    ]
                }
            },
            {
                "description": "CTS",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1567,
                            "y": 1238
                        },
                        {
                            "x": 1625,
                            "y": 1238
                        },
                        {
                            "x": 1625,
                            "y": 1272
                        },
                        {
                            "x": 1567,
                            "y": 1272
                        }
                    ]
                }
            },
            {
                "description": "Roof",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1764,
                            "y": 1234
                        },
                        {
                            "x": 1845,
                            "y": 1234
                        },
                        {
                            "x": 1845,
                            "y": 1268
                        },
                        {
                            "x": 1764,
                            "y": 1268
                        }
                    ]
                }
            },
            {
                "description": "CTL",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1936,
                            "y": 1237
                        },
                        {
                            "x": 1994,
                            "y": 1237
                        },
                        {
                            "x": 1994,
                            "y": 1268
                        },
                        {
                            "x": 1936,
                            "y": 1268
                        }
                    ]
                }
            },
            {
                "description": "Standard",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2080,
                            "y": 1232
                        },
                        {
                            "x": 2218,
                            "y": 1232
                        },
                        {
                            "x": 2218,
                            "y": 1270
                        },
                        {
                            "x": 2080,
                            "y": 1270
                        }
                    ]
                }
            },
            {
                "description": "Sample",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 82,
                            "y": 1286
                        },
                        {
                            "x": 194,
                            "y": 1286
                        },
                        {
                            "x": 194,
                            "y": 1326
                        },
                        {
                            "x": 82,
                            "y": 1326
                        }
                    ]
                }
            },
            {
                "description": "Temperature",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 203,
                            "y": 1286
                        },
                        {
                            "x": 397,
                            "y": 1286
                        },
                        {
                            "x": 397,
                            "y": 1326
                        },
                        {
                            "x": 203,
                            "y": 1326
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 401,
                            "y": 1286
                        },
                        {
                            "x": 412,
                            "y": 1286
                        },
                        {
                            "x": 412,
                            "y": 1326
                        },
                        {
                            "x": 401,
                            "y": 1326
                        }
                    ]
                }
            },
            {
                "description": "55",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 482,
                            "y": 1280
                        },
                        {
                            "x": 525,
                            "y": 1280
                        },
                        {
                            "x": 525,
                            "y": 1327
                        },
                        {
                            "x": 482,
                            "y": 1327
                        }
                    ]
                }
            },
            {
                "description": "55",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 662,
                            "y": 1286
                        },
                        {
                            "x": 703,
                            "y": 1286
                        },
                        {
                            "x": 703,
                            "y": 1323
                        },
                        {
                            "x": 662,
                            "y": 1323
                        }
                    ]
                }
            },
            {
                "description": "OPEN",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 903,
                            "y": 1286
                        },
                        {
                            "x": 992,
                            "y": 1286
                        },
                        {
                            "x": 992,
                            "y": 1322
                        },
                        {
                            "x": 903,
                            "y": 1322
                        }
                    ]
                }
            },
            {
                "description": "Volume",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1089,
                            "y": 1282
                        },
                        {
                            "x": 1208,
                            "y": 1282
                        },
                        {
                            "x": 1208,
                            "y": 1324
                        },
                        {
                            "x": 1089,
                            "y": 1324
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1264,
                            "y": 1282
                        },
                        {
                            "x": 1275,
                            "y": 1282
                        },
                        {
                            "x": 1275,
                            "y": 1324
                        },
                        {
                            "x": 1264,
                            "y": 1324
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1358,
                            "y": 1282
                        },
                        {
                            "x": 1369,
                            "y": 1282
                        },
                        {
                            "x": 1369,
                            "y": 1324
                        },
                        {
                            "x": 1358,
                            "y": 1324
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1453,
                            "y": 1282
                        },
                        {
                            "x": 1464,
                            "y": 1282
                        },
                        {
                            "x": 1464,
                            "y": 1324
                        },
                        {
                            "x": 1453,
                            "y": 1324
                        }
                    ]
                }
            },
            {
                "description": "Adjustment",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1711,
                            "y": 1274
                        },
                        {
                            "x": 1895,
                            "y": 1274
                        },
                        {
                            "x": 1895,
                            "y": 1312
                        },
                        {
                            "x": 1711,
                            "y": 1312
                        }
                    ]
                }
            },
            {
                "description": "Volume",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2083,
                            "y": 1270
                        },
                        {
                            "x": 2200,
                            "y": 1270
                        },
                        {
                            "x": 2200,
                            "y": 1310
                        },
                        {
                            "x": 2083,
                            "y": 1310
                        }
                    ]
                }
            },
            {
                "description": "@",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2215,
                            "y": 1270
                        },
                        {
                            "x": 2226,
                            "y": 1270
                        },
                        {
                            "x": 2226,
                            "y": 1310
                        },
                        {
                            "x": 2215,
                            "y": 1310
                        }
                    ]
                }
            },
            {
                "description": "60",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2251,
                            "y": 1270
                        },
                        {
                            "x": 2280,
                            "y": 1270
                        },
                        {
                            "x": 2280,
                            "y": 1310
                        },
                        {
                            "x": 2251,
                            "y": 1310
                        }
                    ]
                }
            },
            {
                "description": "API",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 81,
                            "y": 1345
                        },
                        {
                            "x": 138,
                            "y": 1345
                        },
                        {
                            "x": 138,
                            "y": 1385
                        },
                        {
                            "x": 81,
                            "y": 1385
                        }
                    ]
                }
            },
            {
                "description": "Gravity",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 140,
                            "y": 1345
                        },
                        {
                            "x": 254,
                            "y": 1345
                        },
                        {
                            "x": 254,
                            "y": 1385
                        },
                        {
                            "x": 140,
                            "y": 1385
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 257,
                            "y": 1345
                        },
                        {
                            "x": 268,
                            "y": 1345
                        },
                        {
                            "x": 268,
                            "y": 1385
                        },
                        {
                            "x": 257,
                            "y": 1385
                        }
                    ]
                }
            },
            {
                "description": "40",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 486,
                            "y": 1344
                        },
                        {
                            "x": 523,
                            "y": 1344
                        },
                        {
                            "x": 523,
                            "y": 1384
                        },
                        {
                            "x": 486,
                            "y": 1384
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 526,
                            "y": 1344
                        },
                        {
                            "x": 537,
                            "y": 1344
                        },
                        {
                            "x": 537,
                            "y": 1384
                        },
                        {
                            "x": 526,
                            "y": 1384
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 543,
                            "y": 1344
                        },
                        {
                            "x": 554,
                            "y": 1344
                        },
                        {
                            "x": 554,
                            "y": 1384
                        },
                        {
                            "x": 543,
                            "y": 1384
                        }
                    ]
                }
            },
            {
                "description": "40",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 669,
                            "y": 1346
                        },
                        {
                            "x": 703,
                            "y": 1346
                        },
                        {
                            "x": 703,
                            "y": 1383
                        },
                        {
                            "x": 669,
                            "y": 1383
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 706,
                            "y": 1346
                        },
                        {
                            "x": 716,
                            "y": 1346
                        },
                        {
                            "x": 716,
                            "y": 1383
                        },
                        {
                            "x": 706,
                            "y": 1383
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 721,
                            "y": 1346
                        },
                        {
                            "x": 731,
                            "y": 1346
                        },
                        {
                            "x": 731,
                            "y": 1383
                        },
                        {
                            "x": 721,
                            "y": 1383
                        }
                    ]
                }
            },
            {
                "description": "474",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1118,
                            "y": 1340
                        },
                        {
                            "x": 1177,
                            "y": 1340
                        },
                        {
                            "x": 1177,
                            "y": 1391
                        },
                        {
                            "x": 1118,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1180,
                            "y": 1340
                        },
                        {
                            "x": 1194,
                            "y": 1340
                        },
                        {
                            "x": 1194,
                            "y": 1391
                        },
                        {
                            "x": 1180,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "27",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1191,
                            "y": 1340
                        },
                        {
                            "x": 1229,
                            "y": 1340
                        },
                        {
                            "x": 1229,
                            "y": 1391
                        },
                        {
                            "x": 1191,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1250,
                            "y": 1340
                        },
                        {
                            "x": 1264,
                            "y": 1340
                        },
                        {
                            "x": 1264,
                            "y": 1391
                        },
                        {
                            "x": 1250,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "11",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1394,
                            "y": 1340
                        },
                        {
                            "x": 1432,
                            "y": 1340
                        },
                        {
                            "x": 1432,
                            "y": 1391
                        },
                        {
                            "x": 1394,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1427,
                            "y": 1340
                        },
                        {
                            "x": 1441,
                            "y": 1340
                        },
                        {
                            "x": 1441,
                            "y": 1391
                        },
                        {
                            "x": 1427,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "17",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1449,
                            "y": 1340
                        },
                        {
                            "x": 1477,
                            "y": 1340
                        },
                        {
                            "x": 1477,
                            "y": 1391
                        },
                        {
                            "x": 1449,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "x",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1500,
                            "y": 1340
                        },
                        {
                            "x": 1514,
                            "y": 1340
                        },
                        {
                            "x": 1514,
                            "y": 1391
                        },
                        {
                            "x": 1500,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1536,
                            "y": 1340
                        },
                        {
                            "x": 1550,
                            "y": 1340
                        },
                        {
                            "x": 1550,
                            "y": 1391
                        },
                        {
                            "x": 1536,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1547,
                            "y": 1340
                        },
                        {
                            "x": 1561,
                            "y": 1340
                        },
                        {
                            "x": 1561,
                            "y": 1391
                        },
                        {
                            "x": 1547,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "00006",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1560,
                            "y": 1340
                        },
                        {
                            "x": 1653,
                            "y": 1340
                        },
                        {
                            "x": 1653,
                            "y": 1391
                        },
                        {
                            "x": 1560,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "+",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1697,
                            "y": 1340
                        },
                        {
                            "x": 1711,
                            "y": 1340
                        },
                        {
                            "x": 1711,
                            "y": 1391
                        },
                        {
                            "x": 1697,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1713,
                            "y": 1340
                        },
                        {
                            "x": 1727,
                            "y": 1340
                        },
                        {
                            "x": 1727,
                            "y": 1391
                        },
                        {
                            "x": 1713,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1723,
                            "y": 1340
                        },
                        {
                            "x": 1737,
                            "y": 1340
                        },
                        {
                            "x": 1737,
                            "y": 1391
                        },
                        {
                            "x": 1723,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1760,
                            "y": 1340
                        },
                        {
                            "x": 1774,
                            "y": 1340
                        },
                        {
                            "x": 1774,
                            "y": 1391
                        },
                        {
                            "x": 1760,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1775,
                            "y": 1340
                        },
                        {
                            "x": 1789,
                            "y": 1340
                        },
                        {
                            "x": 1789,
                            "y": 1391
                        },
                        {
                            "x": 1775,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "00",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1791,
                            "y": 1340
                        },
                        {
                            "x": 1820,
                            "y": 1340
                        },
                        {
                            "x": 1820,
                            "y": 1391
                        },
                        {
                            "x": 1791,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "x0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1876,
                            "y": 1340
                        },
                        {
                            "x": 1923,
                            "y": 1340
                        },
                        {
                            "x": 1923,
                            "y": 1391
                        },
                        {
                            "x": 1876,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1926,
                            "y": 1340
                        },
                        {
                            "x": 1940,
                            "y": 1340
                        },
                        {
                            "x": 1940,
                            "y": 1391
                        },
                        {
                            "x": 1926,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "998",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1940,
                            "y": 1340
                        },
                        {
                            "x": 1999,
                            "y": 1340
                        },
                        {
                            "x": 1999,
                            "y": 1391
                        },
                        {
                            "x": 1940,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "=",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2061,
                            "y": 1340
                        },
                        {
                            "x": 2075,
                            "y": 1340
                        },
                        {
                            "x": 2075,
                            "y": 1391
                        },
                        {
                            "x": 2061,
                            "y": 1391
                        }
                    ]
                }
            },
            {
                "description": "462",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2246,
                            "y": 1344
                        },
                        {
                            "x": 2303,
                            "y": 1344
                        },
                        {
                            "x": 2303,
                            "y": 1384
                        },
                        {
                            "x": 2246,
                            "y": 1384
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2309,
                            "y": 1344
                        },
                        {
                            "x": 2320,
                            "y": 1344
                        },
                        {
                            "x": 2320,
                            "y": 1384
                        },
                        {
                            "x": 2309,
                            "y": 1384
                        }
                    ]
                }
            },
            {
                "description": "20",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2318,
                            "y": 1344
                        },
                        {
                            "x": 2356,
                            "y": 1344
                        },
                        {
                            "x": 2356,
                            "y": 1384
                        },
                        {
                            "x": 2318,
                            "y": 1384
                        }
                    ]
                }
            },
            {
                "description": "CTL",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 78,
                            "y": 1396
                        },
                        {
                            "x": 139,
                            "y": 1396
                        },
                        {
                            "x": 139,
                            "y": 1431
                        },
                        {
                            "x": 78,
                            "y": 1431
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 145,
                            "y": 1396
                        },
                        {
                            "x": 154,
                            "y": 1396
                        },
                        {
                            "x": 154,
                            "y": 1431
                        },
                        {
                            "x": 145,
                            "y": 1431
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 486,
                            "y": 1392
                        },
                        {
                            "x": 499,
                            "y": 1392
                        },
                        {
                            "x": 498,
                            "y": 1439
                        },
                        {
                            "x": 485,
                            "y": 1439
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 505,
                            "y": 1393
                        },
                        {
                            "x": 518,
                            "y": 1393
                        },
                        {
                            "x": 517,
                            "y": 1440
                        },
                        {
                            "x": 504,
                            "y": 1440
                        }
                    ]
                }
            },
            {
                "description": "998",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 523,
                            "y": 1393
                        },
                        {
                            "x": 577,
                            "y": 1394
                        },
                        {
                            "x": 576,
                            "y": 1442
                        },
                        {
                            "x": 522,
                            "y": 1441
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 673,
                            "y": 1397
                        },
                        {
                            "x": 686,
                            "y": 1397
                        },
                        {
                            "x": 685,
                            "y": 1444
                        },
                        {
                            "x": 672,
                            "y": 1444
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 688,
                            "y": 1398
                        },
                        {
                            "x": 701,
                            "y": 1398
                        },
                        {
                            "x": 700,
                            "y": 1445
                        },
                        {
                            "x": 687,
                            "y": 1445
                        }
                    ]
                }
            },
            {
                "description": "0025",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 701,
                            "y": 1398
                        },
                        {
                            "x": 778,
                            "y": 1400
                        },
                        {
                            "x": 777,
                            "y": 1448
                        },
                        {
                            "x": 700,
                            "y": 1446
                        }
                    ]
                }
            },
            {
                "description": "CLOSE",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 904,
                            "y": 1410
                        },
                        {
                            "x": 1013,
                            "y": 1410
                        },
                        {
                            "x": 1013,
                            "y": 1446
                        },
                        {
                            "x": 904,
                            "y": 1446
                        }
                    ]
                }
            },
            {
                "description": "en",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1148,
                            "y": 1404
                        },
                        {
                            "x": 1179,
                            "y": 1404
                        },
                        {
                            "x": 1179,
                            "y": 1447
                        },
                        {
                            "x": 1148,
                            "y": 1447
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1263,
                            "y": 1404
                        },
                        {
                            "x": 1275,
                            "y": 1404
                        },
                        {
                            "x": 1275,
                            "y": 1447
                        },
                        {
                            "x": 1263,
                            "y": 1447
                        }
                    ]
                }
            },
            {
                "description": "4",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1360,
                            "y": 1404
                        },
                        {
                            "x": 1372,
                            "y": 1404
                        },
                        {
                            "x": 1372,
                            "y": 1447
                        },
                        {
                            "x": 1360,
                            "y": 1447
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1452,
                            "y": 1404
                        },
                        {
                            "x": 1464,
                            "y": 1404
                        },
                        {
                            "x": 1464,
                            "y": 1447
                        },
                        {
                            "x": 1452,
                            "y": 1447
                        }
                    ]
                }
            },
            {
                "description": "SW",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 82,
                            "y": 1452
                        },
                        {
                            "x": 119,
                            "y": 1452
                        },
                        {
                            "x": 119,
                            "y": 1486
                        },
                        {
                            "x": 82,
                            "y": 1486
                        }
                    ]
                }
            },
            {
                "description": "Pct",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 145,
                            "y": 1452
                        },
                        {
                            "x": 198,
                            "y": 1452
                        },
                        {
                            "x": 198,
                            "y": 1486
                        },
                        {
                            "x": 145,
                            "y": 1486
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 197,
                            "y": 1452
                        },
                        {
                            "x": 206,
                            "y": 1452
                        },
                        {
                            "x": 206,
                            "y": 1486
                        },
                        {
                            "x": 197,
                            "y": 1486
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 488,
                            "y": 1452
                        },
                        {
                            "x": 500,
                            "y": 1452
                        },
                        {
                            "x": 500,
                            "y": 1495
                        },
                        {
                            "x": 488,
                            "y": 1495
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 505,
                            "y": 1452
                        },
                        {
                            "x": 517,
                            "y": 1452
                        },
                        {
                            "x": 517,
                            "y": 1495
                        },
                        {
                            "x": 505,
                            "y": 1495
                        }
                    ]
                }
            },
            {
                "description": "25000",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 523,
                            "y": 1452
                        },
                        {
                            "x": 617,
                            "y": 1452
                        },
                        {
                            "x": 617,
                            "y": 1495
                        },
                        {
                            "x": 523,
                            "y": 1495
                        }
                    ]
                }
            },
            {
                "description": "46",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1145,
                            "y": 1464
                        },
                        {
                            "x": 1171,
                            "y": 1464
                        },
                        {
                            "x": 1171,
                            "y": 1512
                        },
                        {
                            "x": 1145,
                            "y": 1512
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1179,
                            "y": 1465
                        },
                        {
                            "x": 1192,
                            "y": 1465
                        },
                        {
                            "x": 1192,
                            "y": 1512
                        },
                        {
                            "x": 1179,
                            "y": 1512
                        }
                    ]
                }
            },
            {
                "description": "08",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1192,
                            "y": 1465
                        },
                        {
                            "x": 1226,
                            "y": 1465
                        },
                        {
                            "x": 1226,
                            "y": 1512
                        },
                        {
                            "x": 1192,
                            "y": 1512
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1251,
                            "y": 1465
                        },
                        {
                            "x": 1264,
                            "y": 1465
                        },
                        {
                            "x": 1264,
                            "y": 1512
                        },
                        {
                            "x": 1251,
                            "y": 1512
                        }
                    ]
                }
            },
            {
                "description": "11",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1400,
                            "y": 1467
                        },
                        {
                            "x": 1426,
                            "y": 1467
                        },
                        {
                            "x": 1426,
                            "y": 1514
                        },
                        {
                            "x": 1400,
                            "y": 1514
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1428,
                            "y": 1467
                        },
                        {
                            "x": 1441,
                            "y": 1467
                        },
                        {
                            "x": 1441,
                            "y": 1514
                        },
                        {
                            "x": 1428,
                            "y": 1514
                        }
                    ]
                }
            },
            {
                "description": "17",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1448,
                            "y": 1467
                        },
                        {
                            "x": 1474,
                            "y": 1467
                        },
                        {
                            "x": 1474,
                            "y": 1514
                        },
                        {
                            "x": 1448,
                            "y": 1514
                        }
                    ]
                }
            },
            {
                "description": "x",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1505,
                            "y": 1468
                        },
                        {
                            "x": 1518,
                            "y": 1468
                        },
                        {
                            "x": 1518,
                            "y": 1515
                        },
                        {
                            "x": 1505,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1529,
                            "y": 1468
                        },
                        {
                            "x": 1542,
                            "y": 1468
                        },
                        {
                            "x": 1542,
                            "y": 1515
                        },
                        {
                            "x": 1529,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1548,
                            "y": 1468
                        },
                        {
                            "x": 1561,
                            "y": 1468
                        },
                        {
                            "x": 1561,
                            "y": 1515
                        },
                        {
                            "x": 1548,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": "99995",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1566,
                            "y": 1468
                        },
                        {
                            "x": 1658,
                            "y": 1469
                        },
                        {
                            "x": 1658,
                            "y": 1516
                        },
                        {
                            "x": 1566,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": "+",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1697,
                            "y": 1469
                        },
                        {
                            "x": 1710,
                            "y": 1469
                        },
                        {
                            "x": 1710,
                            "y": 1516
                        },
                        {
                            "x": 1697,
                            "y": 1516
                        }
                    ]
                }
            },
            {
                "description": "/",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1711,
                            "y": 1469
                        },
                        {
                            "x": 1724,
                            "y": 1469
                        },
                        {
                            "x": 1724,
                            "y": 1516
                        },
                        {
                            "x": 1711,
                            "y": 1516
                        }
                    ]
                }
            },
            {
                "description": "-",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1726,
                            "y": 1469
                        },
                        {
                            "x": 1739,
                            "y": 1469
                        },
                        {
                            "x": 1739,
                            "y": 1516
                        },
                        {
                            "x": 1726,
                            "y": 1516
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1755,
                            "y": 1470
                        },
                        {
                            "x": 1768,
                            "y": 1470
                        },
                        {
                            "x": 1768,
                            "y": 1517
                        },
                        {
                            "x": 1755,
                            "y": 1517
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1769,
                            "y": 1470
                        },
                        {
                            "x": 1782,
                            "y": 1470
                        },
                        {
                            "x": 1782,
                            "y": 1517
                        },
                        {
                            "x": 1769,
                            "y": 1517
                        }
                    ]
                }
            },
            {
                "description": "00",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1786,
                            "y": 1470
                        },
                        {
                            "x": 1821,
                            "y": 1470
                        },
                        {
                            "x": 1821,
                            "y": 1517
                        },
                        {
                            "x": 1786,
                            "y": 1517
                        }
                    ]
                }
            },
            {
                "description": "x",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1879,
                            "y": 1471
                        },
                        {
                            "x": 1892,
                            "y": 1471
                        },
                        {
                            "x": 1892,
                            "y": 1518
                        },
                        {
                            "x": 1879,
                            "y": 1518
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1908,
                            "y": 1471
                        },
                        {
                            "x": 1921,
                            "y": 1471
                        },
                        {
                            "x": 1921,
                            "y": 1518
                        },
                        {
                            "x": 1908,
                            "y": 1518
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1923,
                            "y": 1471
                        },
                        {
                            "x": 1936,
                            "y": 1471
                        },
                        {
                            "x": 1936,
                            "y": 1518
                        },
                        {
                            "x": 1923,
                            "y": 1518
                        }
                    ]
                }
            },
            {
                "description": "0025",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1936,
                            "y": 1471
                        },
                        {
                            "x": 2013,
                            "y": 1472
                        },
                        {
                            "x": 2013,
                            "y": 1520
                        },
                        {
                            "x": 1936,
                            "y": 1519
                        }
                    ]
                }
            },
            {
                "description": "35",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2271,
                            "y": 1464
                        },
                        {
                            "x": 2300,
                            "y": 1464
                        },
                        {
                            "x": 2300,
                            "y": 1515
                        },
                        {
                            "x": 2271,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2308,
                            "y": 1464
                        },
                        {
                            "x": 2322,
                            "y": 1464
                        },
                        {
                            "x": 2322,
                            "y": 1515
                        },
                        {
                            "x": 2308,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": "00",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2323,
                            "y": 1464
                        },
                        {
                            "x": 2352,
                            "y": 1464
                        },
                        {
                            "x": 2352,
                            "y": 1515
                        },
                        {
                            "x": 2323,
                            "y": 1515
                        }
                    ]
                }
            },
            {
                "description": "Sulfur",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 80,
                            "y": 1520
                        },
                        {
                            "x": 175,
                            "y": 1520
                        },
                        {
                            "x": 175,
                            "y": 1554
                        },
                        {
                            "x": 80,
                            "y": 1554
                        }
                    ]
                }
            },
            {
                "description": "Pct",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 183,
                            "y": 1520
                        },
                        {
                            "x": 241,
                            "y": 1520
                        },
                        {
                            "x": 241,
                            "y": 1554
                        },
                        {
                            "x": 183,
                            "y": 1554
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 241,
                            "y": 1520
                        },
                        {
                            "x": 250,
                            "y": 1520
                        },
                        {
                            "x": 250,
                            "y": 1554
                        },
                        {
                            "x": 241,
                            "y": 1554
                        }
                    ]
                }
            },
            {
                "description": "API",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 966,
                            "y": 1546
                        },
                        {
                            "x": 1026,
                            "y": 1546
                        },
                        {
                            "x": 1026,
                            "y": 1578
                        },
                        {
                            "x": 966,
                            "y": 1578
                        }
                    ]
                }
            },
            {
                "description": "Volume",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1034,
                            "y": 1546
                        },
                        {
                            "x": 1141,
                            "y": 1546
                        },
                        {
                            "x": 1141,
                            "y": 1578
                        },
                        {
                            "x": 1034,
                            "y": 1578
                        }
                    ]
                }
            },
            {
                "description": "Total",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1454,
                            "y": 1546
                        },
                        {
                            "x": 1529,
                            "y": 1546
                        },
                        {
                            "x": 1529,
                            "y": 1586
                        },
                        {
                            "x": 1454,
                            "y": 1586
                        }
                    ]
                }
            },
            {
                "description": "Gross",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1532,
                            "y": 1546
                        },
                        {
                            "x": 1627,
                            "y": 1546
                        },
                        {
                            "x": 1627,
                            "y": 1586
                        },
                        {
                            "x": 1532,
                            "y": 1586
                        }
                    ]
                }
            },
            {
                "description": "Standard",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1641,
                            "y": 1546
                        },
                        {
                            "x": 1779,
                            "y": 1546
                        },
                        {
                            "x": 1779,
                            "y": 1586
                        },
                        {
                            "x": 1641,
                            "y": 1586
                        }
                    ]
                }
            },
            {
                "description": "Volume",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1799,
                            "y": 1546
                        },
                        {
                            "x": 1916,
                            "y": 1546
                        },
                        {
                            "x": 1916,
                            "y": 1586
                        },
                        {
                            "x": 1799,
                            "y": 1586
                        }
                    ]
                }
            },
            {
                "description": "427",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2241,
                            "y": 1540
                        },
                        {
                            "x": 2300,
                            "y": 1540
                        },
                        {
                            "x": 2300,
                            "y": 1591
                        },
                        {
                            "x": 2241,
                            "y": 1591
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2307,
                            "y": 1540
                        },
                        {
                            "x": 2321,
                            "y": 1540
                        },
                        {
                            "x": 2321,
                            "y": 1591
                        },
                        {
                            "x": 2307,
                            "y": 1591
                        }
                    ]
                }
            },
            {
                "description": "20",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2324,
                            "y": 1540
                        },
                        {
                            "x": 2352,
                            "y": 1540
                        },
                        {
                            "x": 2352,
                            "y": 1591
                        },
                        {
                            "x": 2324,
                            "y": 1591
                        }
                    ]
                }
            },
            {
                "description": "SW",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 76,
                            "y": 1578
                        },
                        {
                            "x": 132,
                            "y": 1578
                        },
                        {
                            "x": 132,
                            "y": 1612
                        },
                        {
                            "x": 76,
                            "y": 1612
                        }
                    ]
                }
            },
            {
                "description": "Factor",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 153,
                            "y": 1578
                        },
                        {
                            "x": 255,
                            "y": 1578
                        },
                        {
                            "x": 255,
                            "y": 1612
                        },
                        {
                            "x": 153,
                            "y": 1612
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 258,
                            "y": 1578
                        },
                        {
                            "x": 267,
                            "y": 1578
                        },
                        {
                            "x": 267,
                            "y": 1612
                        },
                        {
                            "x": 258,
                            "y": 1612
                        }
                    ]
                }
            },
            {
                "description": "0",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 481,
                            "y": 1578
                        },
                        {
                            "x": 491,
                            "y": 1578
                        },
                        {
                            "x": 491,
                            "y": 1616
                        },
                        {
                            "x": 481,
                            "y": 1616
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 500,
                            "y": 1578
                        },
                        {
                            "x": 510,
                            "y": 1578
                        },
                        {
                            "x": 510,
                            "y": 1616
                        },
                        {
                            "x": 500,
                            "y": 1616
                        }
                    ]
                }
            },
            {
                "description": "9975",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 514,
                            "y": 1578
                        },
                        {
                            "x": 587,
                            "y": 1578
                        },
                        {
                            "x": 587,
                            "y": 1616
                        },
                        {
                            "x": 514,
                            "y": 1616
                        }
                    ]
                }
            },
            {
                "description": "Calculation",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 967,
                            "y": 1578
                        },
                        {
                            "x": 1121,
                            "y": 1583
                        },
                        {
                            "x": 1120,
                            "y": 1619
                        },
                        {
                            "x": 966,
                            "y": 1614
                        }
                    ]
                }
            },
            {
                "description": "SW",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1450,
                            "y": 1601
                        },
                        {
                            "x": 1489,
                            "y": 1601
                        },
                        {
                            "x": 1489,
                            "y": 1643
                        },
                        {
                            "x": 1450,
                            "y": 1643
                        }
                    ]
                }
            },
            {
                "description": "Barrels",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1515,
                            "y": 1601
                        },
                        {
                            "x": 1623,
                            "y": 1601
                        },
                        {
                            "x": 1623,
                            "y": 1643
                        },
                        {
                            "x": 1515,
                            "y": 1643
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1630,
                            "y": 1601
                        },
                        {
                            "x": 1641,
                            "y": 1601
                        },
                        {
                            "x": 1641,
                            "y": 1643
                        },
                        {
                            "x": 1630,
                            "y": 1643
                        }
                    ]
                }
            },
            {
                "description": "1",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2292,
                            "y": 1604
                        },
                        {
                            "x": 2301,
                            "y": 1604
                        },
                        {
                            "x": 2301,
                            "y": 1638
                        },
                        {
                            "x": 2292,
                            "y": 1638
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2306,
                            "y": 1604
                        },
                        {
                            "x": 2315,
                            "y": 1604
                        },
                        {
                            "x": 2315,
                            "y": 1638
                        },
                        {
                            "x": 2306,
                            "y": 1638
                        }
                    ]
                }
            },
            {
                "description": "07",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2316,
                            "y": 1604
                        },
                        {
                            "x": 2354,
                            "y": 1604
                        },
                        {
                            "x": 2354,
                            "y": 1638
                        },
                        {
                            "x": 2316,
                            "y": 1638
                        }
                    ]
                }
            },
            {
                "description": "Sulfur",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 78,
                            "y": 1628
                        },
                        {
                            "x": 176,
                            "y": 1628
                        },
                        {
                            "x": 176,
                            "y": 1664
                        },
                        {
                            "x": 78,
                            "y": 1664
                        }
                    ]
                }
            },
            {
                "description": "Factor",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 187,
                            "y": 1628
                        },
                        {
                            "x": 287,
                            "y": 1628
                        },
                        {
                            "x": 287,
                            "y": 1664
                        },
                        {
                            "x": 187,
                            "y": 1664
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 289,
                            "y": 1628
                        },
                        {
                            "x": 299,
                            "y": 1628
                        },
                        {
                            "x": 299,
                            "y": 1664
                        },
                        {
                            "x": 289,
                            "y": 1664
                        }
                    ]
                }
            },
            {
                "description": "Override",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 967,
                            "y": 1622
                        },
                        {
                            "x": 1089,
                            "y": 1622
                        },
                        {
                            "x": 1089,
                            "y": 1653
                        },
                        {
                            "x": 967,
                            "y": 1653
                        }
                    ]
                }
            },
            {
                "description": "Total",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1456,
                            "y": 1664
                        },
                        {
                            "x": 1530,
                            "y": 1664
                        },
                        {
                            "x": 1530,
                            "y": 1707
                        },
                        {
                            "x": 1456,
                            "y": 1707
                        }
                    ]
                }
            },
            {
                "description": "Net",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1537,
                            "y": 1664
                        },
                        {
                            "x": 1592,
                            "y": 1664
                        },
                        {
                            "x": 1592,
                            "y": 1707
                        },
                        {
                            "x": 1537,
                            "y": 1707
                        }
                    ]
                }
            },
            {
                "description": "Standard",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1601,
                            "y": 1664
                        },
                        {
                            "x": 1735,
                            "y": 1664
                        },
                        {
                            "x": 1735,
                            "y": 1707
                        },
                        {
                            "x": 1601,
                            "y": 1707
                        }
                    ]
                }
            },
            {
                "description": "Volume",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1755,
                            "y": 1664
                        },
                        {
                            "x": 1875,
                            "y": 1664
                        },
                        {
                            "x": 1875,
                            "y": 1707
                        },
                        {
                            "x": 1755,
                            "y": 1707
                        }
                    ]
                }
            },
            {
                "description": ":",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 1874,
                            "y": 1664
                        },
                        {
                            "x": 1886,
                            "y": 1664
                        },
                        {
                            "x": 1886,
                            "y": 1707
                        },
                        {
                            "x": 1874,
                            "y": 1707
                        }
                    ]
                }
            },
            {
                "description": "426",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2241,
                            "y": 1666
                        },
                        {
                            "x": 2295,
                            "y": 1666
                        },
                        {
                            "x": 2295,
                            "y": 1704
                        },
                        {
                            "x": 2241,
                            "y": 1704
                        }
                    ]
                }
            },
            {
                "description": ".",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2307,
                            "y": 1666
                        },
                        {
                            "x": 2317,
                            "y": 1666
                        },
                        {
                            "x": 2317,
                            "y": 1704
                        },
                        {
                            "x": 2307,
                            "y": 1704
                        }
                    ]
                }
            },
            {
                "description": "13",
                "boundingPoly": {
                    "vertices": [
                        {
                            "x": 2319,
                            "y": 1666
                        },
                        {
                            "x": 2355,
                            "y": 1666
                        },
                        {
                            "x": 2355,
                            "y": 1704
                        },
                        {
                            "x": 2319,
                            "y": 1704
                        }
                    ]
                }
            }
        ]

        $scope.scale = findScale($scope.templateDimensions, $scope.uploadedDimensions);
        $scope.center = computeCenterForPolygon([
            {
                "x": 1994,
                "y": 339
            },
            {
                "x": 2196,
                "y": 343
            },
            {
                "x": 2195,
                "y": 384
            },
            {
                "x": 1993,
                "y": 380
            }
        ]);
        $scope.isInside = inPolygon({ "x": 630, "y": 102, "w": 70, "h": 18 }, $scope.center, $scope.scale);
        $scope.outTxt = mainMapper($scope.TemplateTxt, $scope.ocrResult, $scope.scale);
    }

    //initializing
    $scope.init();

    //download(jsonData, 'json.txt', 'text/plain');
    //internal functions
    function findScale(templateDimensions, uploadedDimensions) {
        return { 'x': uploadedDimensions.w / templateDimensions.w, 'y': uploadedDimensions.h / templateDimensions.h };
    }
    function computeCenterForPolygon(vertices) {
        return { "x": (vertices[0].x + vertices[1].x) / 2, "y": (vertices[0].y + vertices[3].y) / 2 }
    }
    function inPolygon(rect, center, scale) {
        return rect.x < center.x / scale.x && center.x / scale.x < (rect.x + rect.w) && rect.y < center.y / scale.y && center.y / scale.y < (rect.y + rect.h);
    }
    function mainMapper(TemplateTxt, ocrResult, scale) {
        var outTxt = TemplateTxt;
        TemplateTxt.attrGroups.forEach(attrGroup => {
            attrGroup.value.description = "";
            //scope of indexing - don't compute center again and again
            ocrResult.forEach(textPoly =>{
                if(inPolygon(attrGroup.value.rect, computeCenterForPolygon(textPoly.boundingPoly.vertices), scale)){
                    attrGroup.value.description = concat(attrGroup.value.description, textPoly.description);
                }
            })
        });
        return outTxt;
    }

    function concat(description, result) {
        if(description == "" || !isNaN(result) || result == '.'){
            description += result;
        }
        else {
            description += " " + result;
        }
        return description;
    }

    function loadJSON(path, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function reset() {

    }

});