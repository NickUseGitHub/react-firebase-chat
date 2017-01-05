import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppLayout from './components/AppLayout'

//components
import ChatRoom from './components/ChatRoom'
import IndexPage from './components/IndexPage'

export default (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={IndexPage} />
        <Route path="/" component={IndexPage}>
            <Route path="/:chatRoomName" component={ChatRoom} />
        </Route>
    </Route>
)