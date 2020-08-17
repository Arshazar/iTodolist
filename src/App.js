import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Navigator, Toolbar } from './components/index'
import { themeColour } from './styles/themeColour'
import VisibleTodoList from './containers/VisibleTodoList'
import { GlobalStyles } from './styles/global'

const App = () => (
    <ThemeProvider theme={themeColour}>
        <>
            <GlobalStyles />
            <h1
                style={{
                    margin: '20px auto',
                    textAlign: 'center',
                    fontWeight: '200',
                }}
            >
                iTodolist
            </h1>
            <Navigator />
            <VisibleTodoList />
            <Toolbar />
        </>
    </ThemeProvider>
)

export default App
