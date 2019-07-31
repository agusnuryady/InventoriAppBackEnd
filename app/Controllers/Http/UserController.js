'use strict'

const User = use('App/Models/User')

class UserController {

    async apply({request, response}) {
        const {userId, password, type} = request.all()

        await User.create({
            userId,
            password,
            type
        })

        return response.send({message: 'User hase been created'})
    }

    async login({request, auth, response}) {
        const {userId, password} = request.all()

        const token = await auth.attempt(userId, password)

        return response.json(token)
    }

    async shows({response}) {

        const user = await User.query().select('id','userId','type').fetch()

        return response.json(user)
    }

    async show({auth, response}) {
        const id = auth.user.id

        const user = await User.query().select('id','userId','type').where('id',id).fetch()

        return response.json(user)
    }
}

module.exports = UserController
