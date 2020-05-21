import axios from 'axios'
import * as qs from 'qs'
export const runLineNotify = async messageData => {
    try {
        const token = '0z030UoZiBz8barDQjhcTcEzwZZ7S8fr9ICrS29s8iW'
        const { data } = await axios({
            method: 'POST',
            url: 'https://notify-api.line.me/api/notify',
            data: qs.stringify({
                message: messageData
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err)
    }
}
