import {app} from 'electron'
import {LoginWin} from './login_win'
import {AppWin} from './app_win'

let loginWin: LoginWin | null
let appWin: AppWin | null

app.on("ready", () => {
    loginWin = new LoginWin()
    // loginWin.onClosed(() => {
    //     loginWin = null
    // })
    // loginWin.load()


    appWin = new AppWin()
    appWin.onClosed(() => {
        appWin = null
    })
    appWin.load()
    // appWin.webContents.openDevTools()
})
