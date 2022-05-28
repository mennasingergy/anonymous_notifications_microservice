import notifications from "../model/notifications.js"
//import notifications from "../backend/model/notifications.js";


export const createNotification = async (req, res) => {
    try {
        console.log('[createNotification body]', req.body)
        const { Type,EmailTo } = req.body;
        
        if (!Type) return res.status(403).send('Type is required');
        //const notification = await notifications.findOne({ Type: Type });
        //if (notification) return res.status(403).send('Document already exists, cannot create');
        //const NotificationStatus = 'SENT';
        const notificationDocument = await notifications.create({ Type: Type,EmailTo:EmailTo});
        return res.status(200).send({ body: notificationDocument, message: 'Notification is sent!' });
    }
    catch (e) {
        console.log('[createNotification] e', e)
    }
}
