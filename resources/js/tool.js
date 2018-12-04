Nova.booting((Vue, router) => {
    Vue.component('detail-conversationlog', require('./components/DetailField'));

    router.addRoutes([
        {
            name: 'nova-conversation-log',
            path: '/conversation-log/:user',
            component: require('./components/Tool'),
        },
    ])
})
