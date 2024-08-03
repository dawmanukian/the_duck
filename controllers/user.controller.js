const { User } = require("../models/models");

class UserController {
    async create(req, res, next) {
        try {
            const { telegramId } = req.body;
            const user = await User.create({ telegramId })
            if (user){
                return res.status(201).send({success: true, ...user.toJSON()});
            }
        }
        catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const { telegramId } = req.body;
            const user = await User.findOne({where: {telegramId}});
            if (!user) {
                return res.json({ success: false });
            }
            return res.json({success: true, ...user.toJSON()});
        } catch (error) {
            next(error);
        }
    }

    async addBalance(req, res, next) {
        try {
            const {telegramId, newBalance} = req.body;
            const user = await User.update({balance: newBalance}, {where: {telegramId}});
            if (!user) {
                return res.status(404).send({success: false});
            }
            return res.json({success: true});
        }
        catch (error) {
            next(error)
        }
    }

    async addLevel(req, res, next) {
        const { telegramId, newLevel } = req.body;
        try {
            const [updated] = await User.update({ level: newLevel }, { where: { telegramId } });
            if (updated) {
                res.status(200).json({success: true});
            } else {
                res.status(404).json({success: false, error: 'User not found' });
            }
        } catch (error) {
            next(error);
        }
    }

    async completeTask(req,res,next) {
        const {telegramId, task} = req.body;
        try {
            const user = await User.findOne({where: {telegramId}})
            const balance = user.balance + 500

            const updated = await User.update({balance: balance}, {where: {telegramId}});

            if (task === 'telegram') {
                await User.update({followedTg: true}, {where: {telegramId}});
            }else {
                await User.update({followedX: true}, {where: {telegramId}});
            }

            if (updated) {
                res.status(200).json({success: true});
            }
        }
        catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();

