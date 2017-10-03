import {shell, BrowserWindow } from 'electron'
import * as path from 'path'

export class LoginWin extends BrowserWindow {

    public constructor() {
        super({
            width: 288,
            height: 400,
            titleBarStyle: 'hidden-inset',
            resizable: false,
            frame: process.platform == 'darwin', // Specify false to create a Frameless Window. Default is true.
            transparent: true,
        })

        this.webContents.on('dom-ready', () => {
            // page.executeJavaScript(`document.body.className="platform_${process.platform}"`, false)
            // page.insertCSS(injectStyle)
        })
        
        // Open links external
        this.webContents.on('new-window', (e, url) => {
            e.preventDefault()
            shell.openExternal(url)
        })
    }

    public load() {
        this.loadURL(`file://${__dirname}/../pages/login.html`)
    }

    public onClosed(fn: () => void) {
        this.on("closed", fn)
    }

    public destroy() {
        this.destroy()
    }
}