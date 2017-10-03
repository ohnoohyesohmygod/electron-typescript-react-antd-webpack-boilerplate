import * as React from "react"
import { DatePicker, message } from 'antd'
import * as moment from "moment"

interface IAppState {
    readonly date: string
}

export class App extends React.Component<{}, IAppState> {
    public constructor() {
        super()

        this.state = {
            date: ''
        }
    }

    private handleChange = (date: moment.Moment, dateString: string) => {
      message.info('您选择的日期是: ' + date.toString())
      this.setState({ date: date.toString() })
    }

    public render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={this.handleChange} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        )
    }
}