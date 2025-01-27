import { createServer } from 'miragejs'
import appConfig from '@/configs/app.config'

import { signInUserData } from './data/authData'

import { authFakeApi, salesFakeApi } from './fakeApi'
import { tasksData, salesDashboardData, tasksTreeData } from './data/salesData'

const { apiPrefix } = appConfig

export function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                signInUserData,
                salesDashboardData,
                tasksData,
                tasksTreeData
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough((request) => {
                const isExternal = request.url.startsWith('http')
                const isResource = request.url.startsWith('data:text')
                return isExternal || isResource
            })
            this.passthrough()

            authFakeApi(this, apiPrefix)
            salesFakeApi(this, apiPrefix)
        },
    })
}
