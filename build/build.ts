import * as builder from "electron-builder";
const argv = require('optimist').argv;


function getPlatfrom(): builder.Platform {
    switch(argv.platfrom) {
        case 'mac':
            return builder.Platform.MAC;
        case 'win':
            return builder.Platform.WINDOWS;
        case 'linux':
            return builder.Platform.LINUX;
        default:
            return builder.Platform.MAC;
    }
}

builder.build({
    targets: getPlatfrom().createTarget(),

    config: {
        appId: "com.ohnoohyesohmygod.etest",
        copyright: "ohnoohyesohmygod all right receiver",
        productName: "ETest",
        dmg:{
            icon: "build/icon.icns",
            // background: "",
            window: {
                x: 100,
                y: 100,
                width: 500,
                height: 300
            }
        },

        mac: {
            category: "public.app-category.developer-tools"
        },

        win: {
            icon: "build/icon.ico"
        }
        
        // "build options, see https://goo.gl/ZhRfla"
    }
}).then(() => {
    // handle result
}).catch((err) => {
    // handle error
});


/*
script:
   "pack": "electron-builder --dir",
    "dist": "electron-builder",


  "build": {
    "appId": "com.ohnoohyesohmygod.etest",
    "copyright":"ohnoohyesohmygod all right reserved",
    "productName":"ETest",
    "dmg":{
      "icon":"build/icon.icns",
      "window":{
        "x":100,	
        "y":100,
        "width":500,
        "height":300
      }
    },
    "mac": {
      "category": "public.app-category.developer-tools"
    },
    "win": {
        "icon": "build/icon.ico"
    }
  },
*/