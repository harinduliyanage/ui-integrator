import * as React from "react";
import { hot } from "react-hot-loader";


import { Button } from "ui-library";

class AppComponent extends React.Component<Record<string, unknown>, undefined> {
    private div: JSX.Element;

    public render() {
        this.div = (
            <div>
                <p>Hi integrator</p>
                <Button
                    backgroundColor={"yellow"}
                    size={"large"}
                    label={"Hello From Button"}
                />
            </div>
        );
        return this.div;
    }
}

declare let module: Record<string, unknown>;

export default hot(module)(AppComponent);
