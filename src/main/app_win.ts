import {shell, BrowserWindow} from 'electron'
import * as path from 'path'

export class AppWin extends BrowserWindow {

    public constructor() {
        super({
            width: 600,
            height: 500,
            // titleBarStyle: 'hidden-inset',
            resizable: true,
            frame: process.platform == 'darwin',
            // transparent: true,
        })

        // Open links external
        this.webContents.on('new-window', (e, url) => {
            e.preventDefault()
            shell.openExternal(url)
        })
    }

    public load() {
        this.loadURL(`file://${__dirname}/../pages/index.html`)
    }

    public onClosed(fn: () => void) {
        this.on("closed", fn)
    }

    public destroy() {
        this.destroy()
    }
}