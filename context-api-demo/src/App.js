import React from 'react'
import Context from "./context"
import Provider from './provider'

const AgentOne = () => <><AgentTwo /></>
const AgentTwo = () => <><AgentThree /></>

const AgentThree = () => <>
    <Context.Consumer>
        {(context) => <h1>Current Theme : {context.data.theme}
            <br/>
            <button onClick={context.switchThemeToDark} >Switch Theme</button>
        </h1>}
    </Context.Consumer>
</>

export default function App() {
    return (
        <Provider>
            <h1>Context Api</h1>
            <AgentOne/>
        </Provider>
    )
};
