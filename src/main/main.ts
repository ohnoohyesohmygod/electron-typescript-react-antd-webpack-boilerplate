import {app, BrowserWindow } from 'electron'
// import * as path from 'path'
// import * as url from 'url'
// import * as http from 'http'

let win: IndexWindow

app.on("ready", () => {
    win = new IndexWindow()
    win.webContents.openDevTools()
})

class IndexWindow extends BrowserWindow {
    public constructor() {
        super({
            width: 800,
            height: 600
        })

        this.loadURL(`file://${__dirname}/../pages/index.html`)
    }
}