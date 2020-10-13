import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Homeview } from '..view/Homeview'
import { Recipeview } from '../view/Recipeview'

export default function Routing(props: any) {


        return (
            <Router>
                <Suspense fallback={<h1>LOADING!!!</h1>}
                {props.children}
                <Switch>
                    <Route exact path="/home" component={Homeview} />
                    <Route exact path="/recipe" component={Recipeview} />
                    <Route component={Homeview} />
                </Switch>
            </Router>

        )
}